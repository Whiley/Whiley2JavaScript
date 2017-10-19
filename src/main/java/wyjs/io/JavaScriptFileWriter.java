// Copyright 2011 The Whiley Project Developers
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
package wyjs.io;

import java.io.*;
import java.util.*;

import wybs.lang.Build;
import wybs.lang.NameID;
import wybs.lang.NameResolver.ResolutionError;
import wybs.lang.SyntacticElement;
import static wybs.lang.SyntaxError.*;

import wyfs.lang.Path;
import wyil.type.TypeSystem;

import static wyc.lang.WhileyFile.*;

import wyc.lang.WhileyFile;
import wyc.util.ErrorMessages;
import wyc.util.AbstractConsumer;


/**
* Writes WYIL bytecodes in a textual from to a given file.
*
* <b>NOTE:</b> currently, this class is somewhat broken since it does not
* provide any way to specify the output directory. Rather, it simply puts the
* WYIL file in the same place as the Whiley file.
*
* @author David J. Pearce
*
*/
public final class JavaScriptFileWriter extends AbstractConsumer<JavaScriptFileWriter.Context> {
	private final PrintWriter out;

	/**
	 * The master project for identifying all resources available to the
	 * builder. This includes all modules declared in the project being verified
	 * and/or defined in external resources (e.g. jar files).
	 */
	private final Build.Project project;
	/**
	 * The type system is useful for managing nominal types and converting them
	 * into their underlying types.
	 */
	protected final TypeSystem typeSystem;
	private boolean verbose = false;
	// Debug options
	private boolean debug = true;

	private WhileyFile wyilfile;

	public JavaScriptFileWriter(Build.Project project, TypeSystem typeSystem, PrintWriter writer) {
		this.project = project;
		this.typeSystem = typeSystem;
		this.out = writer;
	}

	public JavaScriptFileWriter(Build.Project project, TypeSystem typeSystem, OutputStream stream) {
		this.project = project;
		this.typeSystem = typeSystem;
		this.out = new PrintWriter(new OutputStreamWriter(stream));
	}

	// ======================================================================
	// Configuration Methods
	// ======================================================================

	public void setVerbose(boolean flag) {
		this.verbose = flag;
	}

	public void setDebug(boolean flag) {
		this.debug = flag;
	}

	// ======================================================================
	// Apply Method
	// ======================================================================

	public void apply(WhileyFile module) {
		Context context = new Context(0,new HashSet<>());
		this.visitWhileyFile(module, context);
		writeTypeTests(context.typeTests, new HashSet<>());
		out.flush();
	}

	@Override
	public void visitType(Decl.Type td, Context context) {
		Decl.Variable vardecl = td.getVariableDeclaration();
		String name = vardecl.getName().get();
		out.print("function ");
		out.print(td.getName());
		out.println("$type(" + name + ") {");
		// Check type invariant
		writeInvariantTest(vardecl,context.indent());
		// Check local invariant
		Tuple<Expr> invariant = td.getInvariant();
		if(invariant.size() == 0) {
			tabIndent(context.indent());
			out.println("return true;");
		} else if(invariant.size() == 1) {
			tabIndent(context.indent());
			out.print("return ");
			visitExpression(invariant.get(0), context);
			out.println(";");
		} else {
			for(int i=0;i!=invariant.size();++i) {
				tabIndent(context.indent());
				if(i == 0) {
					out.print("var result = (");
				} else {
					out.print("result = result && (");
				}
				visitExpression(invariant.get(i), context);
				out.println(");");
			}
			tabIndent(context.indent());
			out.println("return result;");
		}
		out.println("}");
		out.println();
	}

	@Override
	public void visitStaticVariable(Decl.StaticVariable cd, Context context) {
		out.print("var " + cd.getName());
		if (cd.hasInitialiser()) {
			out.print(" = ");
			visitExpression(cd.getInitialiser(), context);
		}
		out.println(";");
	}

	@Override
	public void visitFunctionOrMethod(Decl.FunctionOrMethod method, Context context) {
		// FIXME: what to do with private methods?
		if (method.getModifiers().match(Modifier.Export.class) != null) {
			writeExportTrampoline(method,context);
		}
		//
		out.print("function ");
		out.print(method.getName());
		writeTypeMangle(method.getType());
		visitVariables(method.getParameters(), context);
		if(debug) {
			if (method.getReturns().size() > 0) {
				out.print("// -> ");
				visitVariables(method.getReturns(), context);
			}
		} else {
			out.print(" ");
		}
		if(debug) {
			//
			out.println();
			for (Expr precondition : method.getRequires()) {
				out.print("// requires ");
				visitExpression(precondition, context);
				out.println();
			}
			for (Expr postcondition : method.getEnsures()) {
				out.print("// ensures ");
				visitExpression(postcondition, context);
				out.println();
			}
		}
		out.println("{");
		writeInvariantCheck(method.getRequires(), "precondition", context.indent());
		writeShadowVariables(method.getParameters(), false, context.indent());
		if (method.getBody() != null) {
			if(debug) {
				tabIndent(context.indent());
				out.println("// function or method body");
			}
			visitBlock(method.getBody(), context);
		}
		out.println("}");
	}

	@Override
	public void visitProperty(Decl.Property method, Context context) {
		out.print("function ");
		out.print(method.getName());
		writeTypeMangle(method.getType());
		out.print("$property");
		visitVariables(method.getParameters(), context);
		if(debug) {
			if (method.getReturns().size() > 0) {
				out.print("// -> ");
				visitVariables(method.getReturns(), context);
				out.println();
			} else {
				out.println();
			}
		} else {
			out.print(" ");
		}
		out.println("{");
		writeInvariantCheck(method.getInvariant(), "invariant", context.indent());
		tabIndent(context.indent());
		out.println("return true;");
		out.println("}");
	}

	@Override
	public void visitVariables(Tuple<Decl.Variable> parameters, Context context) {
		out.print("(");
		for (int i = 0; i != parameters.size(); ++i) {
			if (i != 0) {
				out.print(", ");
			}
			Decl.Variable decl = parameters.get(i);
			writeType(decl.getType());
			out.print(decl.getName());
		}
		out.print(")");
	}

	@Override
	public void visitVariable(Decl.Variable decl, Context context) {
		tabIndent(context);
		out.print("var ");
		writeType(decl.getType());
		out.print(decl.getName());
		if (decl.hasInitialiser()) {
			out.print(" = ");
			visitExpression(decl.getInitialiser(), context);
			out.println(";");
			writeInvariantCheck(decl,context);
		} else {
			out.println(";");
		}
	}

	@Override
	public void visitLambda(Decl.Lambda expr, Context context) {
		out.print("function(");
		Tuple<Decl.Variable> parameters = expr.getParameters();
		for (int i = 0; i != parameters.size(); ++i) {
			Decl.Variable var = parameters.get(i);
			if (i != 0) {
				out.print(", ");
			}
			writeType(var.getType());
			out.print(var.getName());
		}
		out.print(") { ");
		out.print("return ");
		visitExpression(expr.getBody(), context);
		out.print("; }");
	}

	/**
	 * Create a trampoline for an exported function. This is simply a function
	 * without a name mangle which redirects to the same function with the name
	 * mangle.
	 *
	 * @param method
	 */
	private void writeExportTrampoline(Decl.FunctionOrMethod method, Context context) {
		Type.Callable ft = method.getType();
		Tuple<Decl.Variable> params = method.getParameters();
		Tuple<Decl.Variable> returns = method.getReturns();
		if (params.size() > 0) {
			out.print("function ");
			out.print(method.getName());
			visitVariables(params, null);
			out.println(" {");
			tabIndent(context.indent());
			if (returns.size() > 0) {
				out.print("return ");
			}
			out.print(method.getName());
			writeTypeMangle(ft);
			writeTrampolineArguments(params);
			out.println("}");
			out.println();
		}
	}

	private void writeTrampolineArguments(Tuple<Decl.Variable> parameters) {
		out.print("(");
		for (int i = 0; i != parameters.size(); ++i) {
			if (i != 0) {
				out.print(", ");
			}
			Decl.Variable decl = parameters.get(i);
			out.print(decl.getName());
		}
		out.println(");");
	}

	@Override
	public void visitBlock(Stmt.Block stmt, Context context) {
		super.visitBlock(stmt, context.indent());
	}

	@Override
	public void visitStatement(Stmt stmt, Context context) {
		//
		switch(stmt.getOpcode()) {
		case EXPR_invoke:
		case EXPR_indirectinvoke:
			tabIndent(context);
			super.visitStatement(stmt, context);
			// Need as an invocation expression won't terminate itself.
			out.println(";");
			break;
		default:
			super.visitStatement(stmt, context);
		}
	}

	@Override
	public void visitAssert(Stmt.Assert c, Context context) {
		tabIndent(context);
		out.print("Wy.assert(");
		visitExpression(c.getCondition(), context);
		out.println(");");
	}

	@Override public void visitAssume(Stmt.Assume c, Context context) {
		tabIndent(context);
		out.print("Wy.assert(");
		visitExpression(c.getCondition(), context);
		out.println(");");
	}

	@Override
	public void visitAssign(Stmt.Assign stmt, Context context) {
		tabIndent(context);
		Tuple<LVal> lhs = stmt.getLeftHandSide();
		Tuple<Expr> rhs = stmt.getRightHandSide();
		if (lhs.size() == 1) {
			// easy case
			writeLVal(lhs.get(0), context);
			out.print(" = ");
			visitExpression(rhs.get(0), context);
			out.println(";");
			writeInvariantCheck(lhs.get(0),context);
		} else if (lhs.size() > 1) {
			// FIXME: this is broken when multiple rhs expressions
			out.print("var $ = ");
			// Translate right-hand sides
			visitExpression(rhs.get(0), context);
			out.println(";");
			// Translate left-hand sides
			for (int i = 0; i != lhs.size(); ++i) {
				tabIndent(context.indent());
				writeLVal(lhs.get(i), context);
				out.println(" = $[" + i + "];");
				writeInvariantCheck(lhs.get(i),context);
			}
		}
	}

	@Override
	public void visitBreak(Stmt.Break b, Context context) {
		tabIndent(context);
		out.println("break;");
	}

	@Override
	public void visitContinue(Stmt.Continue b, Context context) {
		tabIndent(context);
		out.println("continue;");
	}

	@Override
	public void visitDebug(Stmt.Debug b, Context context) {

	}

	@Override
	public void visitDoWhile(Stmt.DoWhile b, Context context) {
		tabIndent(context);
		out.println("do {");
		//
		visitBlock(b.getBody(), context);
		writeInvariantCheck(b.getInvariant(), "loop invariant", context.indent());
		tabIndent(context.indent());
		// FIXME: write loop invariant if DEBUG mode
		out.print("} while(");
		visitExpression(b.getCondition(), context);
		out.println(");");
	}

	@Override public void visitFail(Stmt.Fail c, Context context) {
		if(debug) {
			tabIndent(context);
			out.println("Wy.assert(false);");
		}
	}

	@Override
	public void visitIfElse(Stmt.IfElse b, Context context) {
		tabIndent(context);
		out.print("if(");
		visitExpression(b.getCondition(), context);
		context = context.indent();
		//
		out.println(") {");
		visitBlock(b.getTrueBranch(), context);
		if (b.hasFalseBranch()) {
			tabIndent(context);
			out.println("} else {");
			visitBlock(b.getFalseBranch(), context);
		}
		tabIndent(context);
		out.println("}");
	}

	@Override
	public void visitNamedBlock(Stmt.NamedBlock b, Context context) {
		tabIndent(context.indent());
		out.print(b.getName());
		out.println(":");
		visitBlock(b.getBlock(), context);
	}

	@Override
	public void visitWhile(Stmt.While b, Context context) {
		writeInvariantCheck(b.getInvariant(),"loop invariant on entry",context);
		tabIndent(context);
		out.print("while(");
		visitExpression(b.getCondition(), context);
		out.println(") {");
		visitBlock(b.getBody(), context);
		writeInvariantCheck(b.getInvariant(),"loop invariant restored",context.indent());
		tabIndent(context);
		out.println("}");
	}

	@Override
	public void visitReturn(Stmt.Return stmt, Context context) {
		if(debug) {
			// Write return values
			writeReturnsWithChecks(stmt, context);
		} else {
			writeReturnsWithoutChecks(stmt, context);
		}
	}

	private void writeReturnsWithChecks(Stmt.Return stmt, Context context) {
		Decl.FunctionOrMethod decl = stmt.getAncestor(Decl.FunctionOrMethod.class);
		Tuple<Decl.Variable> returns = decl.getReturns();
		Tuple<Expr> operands = stmt.getReturns();
		tabIndent(context);
		for (int i = 0; i != returns.size(); ++i) {
			if (i != 0) {
				out.print(" ");
			}
			out.print("var ");
			out.print(returns.get(i).getName().get() + " = ");
			visitExpression(operands.get(i), context);
			out.print(";");
		}
		out.println();
		writeShadowVariables(decl.getParameters(),true,context);
		writeInvariantCheck(decl.getEnsures(), "postcondition", context);
		tabIndent(context);
		//
		out.print("return ");
		if (returns.size() == 1) {
			// easy case
			out.print(returns.get(0).getName().get());
		} else if (returns.size() > 0) {
			// harder case
			out.print("[");
			for (int i = 0; i != returns.size(); ++i) {
				if (i != 0) {
					out.print(", ");
				}
				out.print(returns.get(i).getName().get());
			}
			out.print("]");
		}
		out.println(";");
	}

	private void writeReturnsWithoutChecks(Stmt.Return stmt, Context context) {
		Tuple<Expr> operands = stmt.getReturns();
		//
		tabIndent(context);
		out.print("return ");
		if (operands.size() == 1) {
			// easy case
			visitExpression(operands.get(0), context);
		} else if (operands.size() > 0) {
			// harder case
			out.print("[");
			for (int i = 0; i != operands.size(); ++i) {
				if (i != 0) {
					out.print(", ");
				}
				visitExpression(operands.get(i), context);
			}
			out.print("]");
		}
		out.println(";");
	}

	@Override
	public void visitSkip(Stmt.Skip b, Context context) {
		out.println("// skip");
	}

	@Override
	public void visitSwitch(Stmt.Switch b, Context context) {
		out.print("switch(");
		visitExpression(b.getCondition(), context);
		out.println(") {");
		Tuple<Stmt.Case> cases = b.getCases();
		for (int i = 0; i != cases.size(); ++i) {
			// FIXME: ugly
			Stmt.Case cAse = cases.get(i);
			Tuple<Expr> values = cAse.getConditions();
			if (values.size() == 0) {
				tabIndent(context);
				out.println("default:");
			} else {
				for (int j = 0; j != values.size(); ++j) {
					tabIndent(context);
					out.print("case ");
					// FIXME: this needs to be fixed
					out.print(values.get(j));
					out.println(":");
				}
			}
			visitBlock(cAse.getBlock(), context);
			tabIndent(context);
			out.println("break;");
		}
		tabIndent(context);
		out.println("}");
	}

	/**
	 * Write a bracketed operand if necessary. Any operand whose human-readable
	 * representation can contain whitespace must have brackets around it.
	 *
	 * @param operand
	 * @param enclosing
	 * @param out
	 */
	private void writeBracketedExpression(Expr expr, Context context) {
		boolean needsBrackets = needsBrackets(expr);
		if (needsBrackets) {
			out.print("(");
		}
		visitExpression(expr, context);
		if (needsBrackets) {
			out.print(")");
		}
	}

	@Override
	public void visitCast(Expr.Cast expr, Context context) {
		visitExpression(expr.getOperand(), context);
	}

	@Override
	public void visitConstant(Expr.Constant expr, Context context) {
		Value val = expr.getValue();
		if (val instanceof Value.Byte) {
			Value.Byte b = (Value.Byte) val;
			// FIXME: support es6 binary literals
			// out.print("0b");
			out.print("parseInt('");
			out.print(Integer.toBinaryString(b.get() & 0xFF));
			out.print("',2)");
		} else if (val instanceof Value.UTF8) {
			Value.UTF8 s = (Value.UTF8) val;
			byte[] bytes = s.get();
			out.print("[");
			for (int i = 0; i != bytes.length; ++i) {
				if (i != 0) {
					out.print(", ");
				}
				out.print(bytes[i]);
			}
			out.print("]");
		} else {
			out.print(val);
		}
	}

	@Override
	public void visitEqual(Expr.Equal expr, Context context) {
		visitEqualityOperator(expr, context);
	}

	@Override
	public void visitNotEqual(Expr.NotEqual expr, Context context) {
		visitEqualityOperator(expr, context);
	}

	private void visitEqualityOperator(Expr.BinaryOperator expr, Context context) {
		// Extract the type information
		Expr lhs = expr.getFirstOperand();
		Expr rhs = expr.getSecondOperand();
		// FIXME: put this back
		Type lhsT = lhs.getType();
		Type rhsT = rhs.getType();
		//
		if (isCopyable(lhsT, lhs) && isCopyable(rhsT, rhs)) {
			writeInfixOperator(expr, context);
		} else {
			if (expr instanceof Expr.NotEqual) {
				out.print("!");
			}
			out.print("Wy.equals(");
			visitExpression(lhs, context);
			out.print(", ");
			visitExpression(rhs, context);
			out.print(")");
		}
	}

	@Override
	public void visitIs(Expr.Is expr, Context context) {
		Type t = expr.getTestType();
		// Handle all non-trivial cases directly
		if (t instanceof Type.Null) {
			visitExpression(expr.getOperand(), context);
			out.print(" === null");
		} else if (t instanceof Type.Int) {
			// FIXME: this will need to be updated when unbounded arithmetic is
			// supported
			out.print("typeof ");
			visitExpression(expr.getOperand(), context);
			out.print(" === \"number\"");
		} else if (t instanceof Type.Bool) {
			out.print("typeof ");
			visitExpression(expr.getOperand(), context);
			out.print(" === \"boolean\"");
		} else {
			// Fall back case
			out.print("is$");
			writeTypeMangle(t);
			out.print("(");
			visitExpression(expr.getOperand(), context);
			out.print(")");
			// Register this type test to be written out as an appropriately
			// named function.
			context.typeTests.add(t);
		}
	}

	@Override
	public void visitStaticVariableAccess(Expr.StaticVariableAccess expr, Context context) {
		// FIXME: this is horrendously broken
		out.print("Wy.copy(" + expr.getName() + ")");
	}

	@Override
	public void visitVariableAccess(Expr.VariableAccess expr, Context context) {
		Decl.Variable vd = expr.getVariableDeclaration();
		// Variable move needs to be supported here
		if (isCopyable(vd.getType(), expr) || expr.isMove()) {
			out.print(vd.getName());
		} else {
			out.print("Wy.copy(" + vd.getName() + ")");
		}
	}

	// ================================================================================
	// Arrays
	// ================================================================================

	@Override
	public void visitArrayLength(Expr.ArrayLength expr, Context context) {
		visitExpression(expr.getOperand(), context);
		out.print(".length");
	}

	@Override
	public void visitArrayAccess(Expr.ArrayAccess expr, Context context) {
		// FIXME: need to clone here
		visitExpression(expr.getFirstOperand(), context);
		out.print("[");
		visitExpression(expr.getSecondOperand(), context);
		out.print("]");
	}

	@Override
	public void visitArrayInitialiser(Expr.ArrayInitialiser expr, Context context) {
		Tuple<Expr> operands = expr.getOperands();
		out.print("[");
		for (int i = 0; i != operands.size(); ++i) {
			if (i != 0) {
				out.print(", ");
			}
			visitExpression(operands.get(i), context);
		}
		out.print("]");
	}

	@Override
	public void visitArrayGenerator(Expr.ArrayGenerator expr, Context context) {
		out.print("Wy.array(");
		visitExpression(expr.getFirstOperand(), context);
		out.print(", ");
		visitExpression(expr.getSecondOperand(), context);
		out.print(")");
	}

	// ================================================================================
	// Bitwise
	// ================================================================================

	@Override
	public void visitBitwiseAnd(Expr.BitwiseAnd expr, Context context) {
		writeInfixOperator(expr,context);
	}

	@Override
	public void visitBitwiseComplement(Expr.BitwiseComplement expr, Context context) {
		// Prefix operators
		out.print("((~");
		writeBracketedExpression(expr.getOperand(), context);
		out.print(") & 0xFF)");
	}

	@Override
	public void visitBitwiseOr(Expr.BitwiseOr expr, Context context) {
		writeInfixOperator(expr,context);
	}

	@Override
	public void visitBitwiseShiftLeft(Expr.BitwiseShiftLeft expr, Context context) {
		out.print("((");
		writeBracketedExpression(expr.getFirstOperand(), context);
		out.print(" << ");
		writeBracketedExpression(expr.getSecondOperand(), context);
		out.print(") & 0xFF)");
	}

	@Override
	public void visitBitwiseShiftRight(Expr.BitwiseShiftRight expr, Context context) {
		out.print("((");
		writeBracketedExpression(expr.getFirstOperand(), context);
		out.print(" >> ");
		writeBracketedExpression(expr.getSecondOperand(), context);
		out.print(") & 0xFF)");
	}

	@Override
	public void visitBitwiseXor(Expr.BitwiseXor expr, Context context) {
		writeInfixOperator(expr,context);
	}

	// ================================================================================
	// Callables
	// ================================================================================

	@Override
	public void visitIndirectInvoke(Expr.IndirectInvoke expr, Context context) {
		visitExpression(expr.getSource(), context);
		Tuple<Expr> arguments = expr.getArguments();
		out.print("(");
		for (int i = 0; i != arguments.size(); ++i) {
			if (i != 0) {
				out.print(", ");
			}
			visitExpression(arguments.get(i), context);
		}
		out.print(")");
	}

	@Override
	public void visitInvoke(Expr.Invoke expr, Context context) {
		Name name = expr.getName();
		// FIXME: this doesn't work for imported function symbols!
		out.print(name.getLast());
		writeTypeMangle(expr.getSignature());
		if(expr.getSignature() instanceof Type.Property) {
			out.print("$property");
		}
		out.print("(");
		Tuple<Expr> args = expr.getOperands();
		for (int i = 0; i != args.size(); ++i) {
			if (i != 0) {
				out.print(", ");
			}
			visitExpression(args.get(i), context);
		}
		out.print(")");
	}


	@Override
	public void visitLambdaAccess(Expr.LambdaAccess expr, Context context) {
		// NOTE: the reason we use a function declaration here (i.e. instead of
		// just assigning the name) is that it protects against potential name
		// clashes with local variables.
		Type.Callable ft = expr.getSignature();
		Tuple<Type> params = ft.getParameters();
		out.print("function(");
		for (int i = 0; i != params.size(); ++i) {
			if (i != 0) {
				out.print(",");
			}
			out.print("p" + i);
		}
		out.print(") { return ");
		out.print(expr.getName());
		writeTypeMangle(ft);
		out.print("(");
		for (int i = 0; i != params.size(); ++i) {
			if (i != 0) {
				out.print(",");
			}
			out.print("p" + i);
		}
		out.print("); }");
	}

	// ================================================================================
	// Integers
	// ================================================================================

	@Override
	public void visitIntegerAddition(Expr.IntegerAddition expr, Context context) {
		writeInfixOperator(expr,context);
	}

	@Override
	public void visitIntegerDivision(Expr.IntegerDivision expr, Context context) {
		out.print("Math.floor(");
		writeInfixOperator(expr, context);
		out.print(")");
	}

	@Override
	public void visitIntegerRemainder(Expr.IntegerRemainder expr, Context context) {
		writeInfixOperator(expr, context);
	}

	@Override
	public void visitIntegerGreaterThan(Expr.IntegerGreaterThan expr, Context context) {
		writeInfixOperator(expr,context);
	}

	@Override
	public void visitIntegerGreaterThanOrEqual(Expr.IntegerGreaterThanOrEqual expr, Context context) {
		writeInfixOperator(expr,context);
	}

	@Override
	public void visitIntegerLessThan(Expr.IntegerLessThan expr, Context context) {
		writeInfixOperator(expr,context);
	}

	@Override
	public void visitIntegerLessThanOrEqual(Expr.IntegerLessThanOrEqual expr, Context context) {
		writeInfixOperator(expr,context);
	}

	@Override
	public void visitIntegerMultiplication(Expr.IntegerMultiplication expr, Context context) {
		writeInfixOperator(expr,context);
	}

	@Override
	public void visitIntegerNegation(Expr.IntegerNegation expr, Context context) {
		// Prefix operators
		out.print("-");
		writeBracketedExpression(expr.getOperand(), context);
	}

	@Override
	public void visitIntegerSubtraction(Expr.IntegerSubtraction expr, Context context) {
		writeInfixOperator(expr,context);
	}

	// ================================================================================
	// Logical
	// ================================================================================

	@Override
	public void visitLogicalAnd(Expr.LogicalAnd expr, Context context) {
		writeInfixOperator(expr,context);
	}

	@Override public void visitLogicalImplication(Expr.LogicalImplication expr, Context context) {
		out.print("!");
		writeBracketedExpression(expr.getFirstOperand(), context);
		out.print("||");
		writeBracketedExpression(expr.getSecondOperand(), context);
	}

	@Override public void visitLogicalIff(Expr.LogicalIff expr, Context context) {
		writeInfixOperator(expr,context);
	}

	@Override
	public void visitLogicalNot(Expr.LogicalNot expr, Context context) {
		// Prefix operators
		out.print("!");
		writeBracketedExpression(expr.getOperand(), context);
	}

	@Override
	public void visitLogicalOr(Expr.LogicalOr expr, Context context) {
		writeInfixOperator(expr,context);
	}

	@Override
	public void visitUniversalQuantifier(Expr.UniversalQuantifier expr, Context context) {
		writeQuantifier(expr,context);
	}

	@Override
	public void visitExistentialQuantifier(Expr.ExistentialQuantifier expr, Context context) {
		writeQuantifier(expr,context);
	}

	public void writeQuantifier(Expr.Quantifier expr, Context context) {
		out.print("Wy.");
		out.print((expr instanceof Expr.UniversalQuantifier) ? "all" : "some");
		out.print("(");
		Tuple<Decl.Variable> params = expr.getParameters();
		for (int i = 0; i != params.size(); ++i) {
			Decl.Variable param = params.get(i);
			// FIXME: for now assume initialiser must be an array range.
			Expr.ArrayRange range = (Expr.ArrayRange) param.getInitialiser();
			visitExpression(range.getFirstOperand(), context);
			out.print(",");
			visitExpression(range.getSecondOperand(), context);
		}
		out.print(",function(");
		for (int i = 0; i != params.size(); ++i) {
			Decl.Variable param = params.get(i);
			out.print(param.getName());
		}
		out.print("){return ");
		visitExpression(expr.getOperand(), context);
		out.print(";})");
	}

	// ================================================================================
	// Objects
	// ================================================================================

	@Override
	public void visitNew(Expr.New expr, Context context) {
		out.print("new Wy.Ref(");
		visitExpression(expr.getOperand(), context);
		out.print(")");
	}

	@Override
	public void visitDereference(Expr.Dereference expr, Context context) {
		// FIXME: need to clone here
		out.print("Wy.deref(");
		visitExpression(expr.getOperand(), context);
		out.print(")");
	}

	// ================================================================================
	// Records
	// ================================================================================

	@Override
	public void visitRecordAccess(Expr.RecordAccess expr, Context context) {
		// FIXME: need to clone here
		writeBracketedExpression(expr.getOperand(), context);
		out.print("." + expr.getField());
	}

	@Override
	public void visitRecordInitialiser(Expr.RecordInitialiser expr, Context context) {
		out.print("Wy.record({");
		Tuple<Expr> operands = expr.getOperands();
		Tuple<Identifier> fields = expr.getFields();
		for (int i = 0; i != operands.size(); ++i) {
			if (i != 0) {
				out.print(", ");
			}
			out.print(fields.get(i));
			out.print(": ");
			visitExpression(operands.get(i), context);
		}
		out.print("})");
	}

	// ================================================================================
	// Helpers
	// ================================================================================

	private void writeName(Name name) {
		for(int i=0;i!=name.size();++i) {
			if (i != 0) {
				// FIXME: this is a temporary hack for now.
				out.print("$");
			}
			out.print(name.get(i).get());
		}
	}

	private void writeShadowVariables(Tuple<Decl.Variable> parameters, boolean restore, Context context) {
		if (debug) {
			tabIndent(context);
			if(restore) {
				out.println("// restore shadow variables");
			} else {
				out.println("// create shadow variables");
			}
			tabIndent(context);
			for (int i = 0; i != parameters.size(); ++i) {
				if (i != 0) {
					out.print(" ");
				}
				String var = parameters.get(i).getName().get();
				if (restore) {
					out.print(var + " = $" + var);
				} else {
					out.print("var $" + var + " = " + var);
				}
				out.print(";");
			}
			out.println();
		}
	}

	private void writeInvariantTest(Decl.Variable var, Context context) {
		String name = var.getName().get();
		writeInvariantTest(name, 0, var.getType(), context);
	}

	private void writeInvariantTest(String access, int depth, Type type, Context context) {
		switch(type.getOpcode()) {
		case TYPE_record:
			writeInvariantTest(access, depth, (Type.Record) type, context);
			break;
		case TYPE_array:
			writeInvariantTest(access, depth, (Type.Array) type, context);
			 break;
		case TYPE_reference:
			writeInvariantTest(access, depth, (Type.Reference) type, context);
			break;
		case TYPE_negation:
			writeInvariantTest(access, depth, (Type.Negation) type, context);
			break;
		case TYPE_union:
			writeInvariantTest(access, depth, (Type.Union) type, context);
			break;
		case TYPE_intersection:
			writeInvariantTest(access, depth, (Type.Intersection) type, context);
			break;
		case TYPE_nominal:
			writeInvariantTest(access, depth, (Type.Nominal) type, context);
			break;
		default:
			// Do nothing
		}
	}

	private void writeInvariantTest(String access, int depth, Type.Record type, Context context) {
		Tuple<Decl.Variable> fields = type.getFields();
		for (int i = 0; i != fields.size(); ++i) {
			Decl.Variable field = fields.get(i);
			writeInvariantTest(access + "." + field.getName().get(), depth, field.getType(), context);
		}
	}

	private static String[] indexVariableNames = { "i", "j", "k", "l", "m" };

	private void writeInvariantTest(String access, int depth, Type.Array type, Context context) {
		int variableNameIndex = depth % indexVariableNames.length;
		int variableNameGroup = depth / indexVariableNames.length;
		String var = indexVariableNames[variableNameIndex];
		if(variableNameGroup > 0) {
			// In case we wrap around the selection of variable names.
			var = var + variableNameGroup;
		}
		tabIndent(context);
		out.println("for(var " + var + "=0; " + var + "<" + access + ".length; " + var + "++) {");
		writeInvariantTest(access + "[" + var + "]", depth + 1, type.getElement(), context.indent());
		tabIndent(context);
		out.println("}");
	}

	private void writeInvariantTest(String access, int depth, Type.Reference type, Context context) {
		// FIXME: to do.
	}

	private void writeInvariantTest(String access, int depth, Type.Negation type, Context context) {
		out.println("if(" + getTypeTest(type.getElement(),access,context) + ") { return false; }");
	}

	private void writeInvariantTest(String access, int depth, Type.Union type, Context context) {
		for (int i = 0; i != type.size(); ++i) {
			Type bound = type.get(i);
			tabIndent(context);
			if(i != 0) {
				out.print("else ");
			}
			// FIXME: this could be made more efficient
			out.println("if(" + getTypeTest(bound,access,context) + ") {}");
		}
		tabIndent(context);
		out.println("else { return false; }");
	}

	private void writeInvariantTest(String access, int depth, Type.Intersection type, Context context) {
		for (int i = 0; i != type.size(); ++i) {
			Type bound = type.get(i);
			writeInvariantTest(access, depth, bound, context);
		}
	}

	private void writeInvariantTest(String access, int depth, Type.Nominal type, Context context) {
		tabIndent(context);
		out.print("if(!");
		writeName(type.getName());
		out.println("$type(" + access + ")) { return false; }");
	}

	private String getTypeTest(Type t, String access, Context context) {
		// Handle all non-trivial cases directly
		if (t instanceof Type.Null) {
			return access + " === null";
		} else if (t instanceof Type.Int) {
			return "typeof " + access + " === \"number\"";
		} else if (t instanceof Type.Bool) {
			return "typeof " + access + " === \"boolean\"";
		} else {
			// Fall back case
			String r = "is$" + getTypeMangle(t) + "(" + access + ")";
			// Register this type test to be written out as an appropriately
			// named function.
			context.typeTests.add(t);
			return r;
		}
	}


	private void writeInvariantCheck(LVal lval, Context context) {
		switch (lval.getOpcode()) {
		case EXPR_arrayaccess:
		case EXPR_arrayborrow: {
			Expr.ArrayAccess e = (Expr.ArrayAccess) lval;
			writeInvariantCheck((LVal) e.getFirstOperand(), context);
			break;
		}
		case EXPR_dereference: {
			Expr.Dereference e = (Expr.Dereference) lval;
			writeInvariantCheck((LVal) e.getOperand(), context);
			break;
		}
		case EXPR_recordaccess:
		case EXPR_recordborrow: {
			Expr.RecordAccess e = (Expr.RecordAccess) lval;
			writeInvariantCheck((LVal) e.getOperand(), context);
			break;
		}
		case EXPR_variablecopy:
		case EXPR_variablemove: {
			Expr.VariableAccess e = (Expr.VariableAccess) lval;
			writeInvariantCheck(e.getVariableDeclaration(), context);
			break;
		}
		default:
			throw new IllegalArgumentException("invalid lval: " + lval);
		}
	}

	private void writeInvariantCheck(Decl.Variable var, Context context) {
		if (debug) {
			// FIXME: This is completely broken. For example, consider the type "nat[]" ...
			// it gets completely ignored here.
			Type type = var.getType();
			if (type instanceof Type.Nominal) {
				Type.Nominal nom = (Type.Nominal) type;
				tabIndent(context);
				out.println("// check type invariant");
				tabIndent(context);
				out.print("Wy.assert(");
				writeName(nom.getName());
				out.println("$type(" + var.getName().get() + "));");
			}
		}
	}

	private void writeInvariantCheck(Tuple<Expr> invariant, String comment, Context context) {
		if(debug && invariant.size() > 0) {
			tabIndent(context);
			out.println("// check " + comment);
			for(int i=0;i!=invariant.size();++i) {
				tabIndent(context);
				out.print("Wy.assert(");
				visitExpression(invariant.get(i), context);
				out.println(");");
			}
		}
	}

	private void writeInfixOperator(Expr.BinaryOperator expr, Context context) {
		writeBracketedExpression(expr.getFirstOperand(), context);
		out.print(" ");
		out.print(opcode(expr.getOpcode()));
		out.print(" ");
		writeBracketedExpression(expr.getSecondOperand(), context);
	}

	private void writeInfixOperator(Expr.NaryOperator expr, Context context) {
		Tuple<Expr> operands = expr.getOperands();
		for (int i = 0; i != operands.size(); ++i) {
			if (i != 0) {
				out.print(" ");
				out.print(opcode(expr.getOpcode()));
				out.print(" ");
			}
			writeBracketedExpression(operands.get(i), context);
		}
	}

	private void writeLVal(LVal lval, Context context) {
		switch (lval.getOpcode()) {
		case EXPR_arrayaccess:
		case EXPR_arrayborrow:
			writeArrayIndexLVal((Expr.ArrayAccess) lval, context);
			break;
		case EXPR_dereference:
			writeDereferenceLVal((Expr.Dereference) lval, context);
			break;
		case EXPR_recordaccess:
		case EXPR_recordborrow:
			writeFieldLoadLVal((Expr.RecordAccess) lval, context);
			break;
		case EXPR_variablecopy:
		case EXPR_variablemove:
			writeVariableAccessLVal((Expr.VariableAccess) lval, context);
			break;
		default:
			throw new IllegalArgumentException("invalid lval: " + lval);
		}
	}

	private void writeDereferenceLVal(Expr.Dereference expr, Context context) {
		writeLVal((LVal) expr.getOperand(), context);
		out.print(".$ref");
	}

	private void writeArrayIndexLVal(Expr.ArrayAccess expr, Context context) {
		writeLVal((LVal) expr.getFirstOperand(), context);
		out.print("[");
		visitExpression(expr.getSecondOperand(), context);
		out.print("]");
	}

	private void writeFieldLoadLVal(Expr.RecordAccess expr, Context context) {
		writeLVal((LVal) expr.getOperand(), context);
		out.print("." + expr.getField());
	}

	private void writeVariableAccessLVal(Expr.VariableAccess expr, Context context) {
		Decl.Variable vd = expr.getVariableDeclaration();
		out.print(vd.getName());
	}

	private void writeTypeTests(Set<Type> typeTests, Set<Type> allTests) {
		HashSet<Type> deps = new HashSet<>();
		for(Type type : typeTests) {
			out.print("function is$");
			writeTypeMangle(type);
			out.print("(val) {");
			writeTypeTest(type, deps);
			out.println("}");
			out.println();
		}
		deps.removeAll(allTests);
		allTests.addAll(deps);
		if(deps.size() > 0) {
			writeTypeTests(deps,allTests);
		}
	}

	private void writeTypeTest(Type test, Set<Type> deps) {
		if(test instanceof Type.Any) {
			writeTypeTestAny((Type.Primitive) test,deps);
		} else if(test instanceof Type.Null) {
			writeTypeTestNull((Type.Primitive) test,deps);
		} else if(test instanceof Type.Bool) {
			writeTypeTestBool((Type.Primitive) test,deps);
		} else if(test instanceof Type.Byte) {
			// FIXME: This is clear incorrect. However, there is no better
			// alternative. The good news is that the byte type is slated to be
			// removed in future versions of Whiley and, hence, this problem
			// will go away.
			writeTypeTestInt((Type.Primitive) test,deps);
		} else if(test instanceof Type.Int) {
			writeTypeTestInt((Type.Primitive) test,deps);
		} else if(test instanceof Type.Nominal) {
			writeTypeTestNominal((Type.Nominal) test,deps);
		} else if(test instanceof Type.Array) {
			writeTypeTestArray((Type.Array) test,deps);
		} else if(test instanceof Type.Reference) {
			writeTypeTestReference((Type.Reference) test,deps);
		} else if(test instanceof Type.Record) {
			writeTypeTestRecord((Type.Record) test,deps);
		} else if(test instanceof Type.Callable) {
			writeTypeTestFunctionOrMethod((Type.Callable) test,deps);
		} else if(test instanceof Type.Negation) {
			writeTypeTestNegation((Type.Negation) test,deps);
		} else if(test instanceof Type.Union) {
			writeTypeTestUnion((Type.Union) test,deps);
		} else if(test instanceof Type.Intersection) {
			writeTypeTestIntersection((Type.Intersection) test,deps);
		} else {
			throw new RuntimeException("unknown type encountered: " + test);
		}
	}

	private void writeTypeTestAny(Type.Primitive test, Set<Type> deps) {
		out.print(" return true; ");
	}

	private void writeTypeTestNull(Type.Primitive test, Set<Type> deps) {
		out.print(" return val === null; ");
	}

	private void writeTypeTestBool(Type.Primitive test, Set<Type> deps) {
		out.print(" return typeof val === \"boolean\"; ");
	}

	private void writeTypeTestInt(Type.Primitive test, Set<Type> deps) {
		out.print(" return typeof val === \"number\"; ");
	}

	private void writeTypeTestNominal(Type.Nominal test, Set<Type> deps) {
		// FIXME: this is so horrendously broken
		Name name = test.getName();
		try {
			Decl.Type td = typeSystem.resolveExactly(name, Decl.Type.class);
			out.print(" return is$");
			writeTypeMangle(td.getVariableDeclaration().getType());
			out.print("(val) && " + name.getLast() + "$type(val); ");
			//
		deps.add(td.getVariableDeclaration().getType());
		} catch (ResolutionError e) {
			throw new RuntimeException(e);
		}
	}

	private static int variableIndex = 0;

	private void writeTypeTestArray(Type.Array test, Set<Type> deps) {
		out.println();
		tabIndent(1);
		out.println("if(val != null && val.constructor === Array) {");
		tabIndent(2);
		// FIXME: could optimise this in the case of element "any"
		String var = "i" + (variableIndex++);
		out.println("for(var x=0;x!=val.length;++x) {".replaceAll("x", var));
		tabIndent(3);
		out.print("if(!is$");
		writeTypeMangle(test.getElement());
		out.println("(val[" + var +"])) {");
		tabIndent(4);
		out.println("return false;");
		tabIndent(3);
		out.println("}");
		tabIndent(2);
		out.println("}");
		tabIndent(2);
		out.println("return true;");
		tabIndent(1);
		out.println("}");
		tabIndent(1);
		out.println("return false;");
		// Add a follow-on dependency
		deps.add(test.getElement());
	}

	private void writeTypeTestReference(Type.Reference test, Set<Type> deps) {
		out.println();
		tabIndent(1);
		out.println("if(val != null && val.constructor === Wy.Ref) {");
		tabIndent(2);
		out.print(" return is$");
		writeTypeMangle(test.getElement());
		out.println("(Wy.deref(val));");
		tabIndent(1);
		out.println("}");
		tabIndent(1);
		out.println("return false;");
		//
		deps.add(test.getElement());
	}

	private void writeTypeTestRecord(Type.Record test, Set<Type> deps) {
		out.println();
		tabIndent(1);
		out.print("if(val != null && typeof val === \"object\"");
		Tuple<Decl.Variable> fields = test.getFields();
		if (!test.isOpen()) {
			out.print(" && Object.keys(val).length === " + fields.size());
		}
		out.println(") {");
		for (int i = 0; i != fields.size(); ++i) {
			Decl.Variable field = fields.get(i);
			tabIndent(2);
			out.print("if(val." + field.getName() + " === \"undefined\" || !is$");
			writeTypeMangle(field.getType());
			out.println("(val." + field.getName() + ")) { return false; }");
			deps.add(field.getType());
		}
		tabIndent(2);
		out.println("return true;");
		tabIndent(1);
		out.println("}");
		tabIndent(1);
		out.println("return false;");
	}

	/**
	 * Perform a runtime type test looking for a function or method of a given
	 * type. This is tricky in JavaScript since there is insufficient type
	 * information available. Specifically, <code>typeof f</code> (for some
	 * function f) returns only <code>"function"</code>.
	 *
	 * @param test
	 * @param deps
	 */
	private void writeTypeTestFunctionOrMethod(Type.Callable test, Set<Type> deps) {
		out.println();
		tabIndent(1);
		out.println("if(val != null && typeof val === \"function\") {");
		// FIXME: we need to do more here to distinguish functions. We could,
		// for example, try to embed their signature string.
		tabIndent(2);
		out.println("return true;");
		tabIndent(1);
		out.println("}");
		tabIndent(1);
		out.println("return false;");
	}

	private void writeTypeTestNegation(Type.Negation test, Set<Type> deps) {
		out.print(" return !(is$");
		writeTypeMangle(test.getElement());
		out.print("(val)); ");
		//
		deps.add(test.getElement());
	}

	private void writeTypeTestUnion(Type.Union test, Set<Type> deps) {
		out.println();
		for(int i=0;i!=test.size();++i) {
			Type bound = test.get(i);
			tabIndent(1);
			out.print("if(is$");
			writeTypeMangle(bound);
			out.println("(val)) { return true; }");
			//
			deps.add(bound);
		}
		tabIndent(1);
		out.print("return false;");
	}

	private void writeTypeTestIntersection(Type.Intersection test, Set<Type> deps) {
		out.println();
		for(int i=0;i!=test.size();++i) {
			Type bound = test.get(i);
			tabIndent(1);
			out.print("if(!is$");
			writeTypeMangle(bound);
			out.println("(val)) { return false; }");
			//
			deps.add(bound);
		}
		tabIndent(1);
		out.print("return true;");
	}

	private void writeTypeMangle(Type.Callable fmt) {
		Tuple<Type> params = fmt.getParameters();
		for (int i = 0; i != params.size(); ++i) {
			if (i == 0) {
				out.print("_");
			}
			writeTypeMangle(params.get(i));
		}
	}

	private void writeTypeMangle(Type t) {
		out.print(getTypeMangle(t));
	}

	private String getTypeMangle(Type t) {
		if (t instanceof Type.Any) {
			return "T";
		} else if (t instanceof Type.Null) {
			return "N";
		} else if (t instanceof Type.Bool) {
			return "B";
		} else if (t instanceof Type.Byte) {
			return "U";
		} else if (t instanceof Type.Int) {
			return "I";
		} else if (t instanceof Type.Array) {
			return getTypeMangleArray((Type.Array) t);
		} else if (t instanceof Type.Reference) {
			return getTypeMangleReference((Type.Reference) t);
		} else if (t instanceof Type.Record) {
			return getTypeMangleRecord((Type.Record) t);
		} else if (t instanceof Type.Nominal) {
			return getTypeMangleNominal((Type.Nominal) t);
		} else if (t instanceof Type.Callable) {
			return getTypeMangleFunctionOrMethod((Type.Callable) t);
		} else if (t instanceof Type.Negation) {
			return getTypeMangleNegation((Type.Negation) t);
		} else if (t instanceof Type.Union) {
			return getTypeMangleUnion((Type.Union) t);
		} else if (t instanceof Type.Intersection) {
			return getTypeMangleIntersection((Type.Intersection) t);
		} else {
			throw new IllegalArgumentException("unknown type encountered: " + t);
		}
	}

	private String getTypeMangleArray(Type.Array t) {
		return "a" + getTypeMangle(t.getElement());
	}
	private String getTypeMangleReference(Type.Reference t) {
		String r = "p";
		if (t.hasLifetime()) {
			String lifetime = t.getLifetime().get();
			if(lifetime.equals("*")) {
				r += "_";
			} else {
				r += lifetime.length();
				r += lifetime;
			}
		} else {
			r += "0";
		}
		return r + getTypeMangle(t.getElement());
	}

	private String getTypeMangleRecord(Type.Record rt) {
		String r = "r";
		Tuple<Decl.Variable> fields = rt.getFields();
		r += fields.size();
		for (int i = 0; i != fields.size(); ++i) {
			Decl.Variable field = fields.get(i);
			r += getTypeMangle(field.getType());
			String fieldName = field.getName().get();
			r += fieldName.length();
			r += fieldName;
		}
		return r;
	}
	private String getTypeMangleNominal(Type.Nominal t) {
		// FIXME: need to figure out package
		String name = t.getName().getLast().get();
		return "n" + name.length() + name;
	}

	private String getTypeMangleFunctionOrMethod(Type.Callable t) {
		String r = (t instanceof Type.Function) ? "f" : "m";
		Tuple<Type> params = t.getParameters();
		r += params.size();
		for (int i = 0; i != params.size(); ++i) {
			r += getTypeMangle(params.get(i));
		}
		Tuple<Type> returns = t.getReturns();
		r += returns.size();
		for (int i = 0; i != returns.size(); ++i) {
			r += getTypeMangle(returns.get(i));
		}
		return r + "e";
	}

	private String getTypeMangleNegation(Type.Negation t) {
		return "n" + getTypeMangle(t.getElement());
	}

	private String getTypeMangleUnion(Type.Union t) {
		String r = "u";
		r += t.size();
		for(int i=0;i!=t.size();++i) {
			r += getTypeMangle(t.get(i));
		}
		return r;
	}

	private String getTypeMangleIntersection(Type.Intersection t) {
		String r = "c";
		r += t.size();
		for(int i=0;i!=t.size();++i) {
			r += getTypeMangle(t.get(i));
		}
		return r;
	}

	private void writeType(Type t) {
		if(debug) {
			out.print("/*");
			out.print(t);
			out.print("*/ ");
		}
	}

	/**
	 * Return true if the type in question can be copied directly. More
	 * specifically, if a bitwise copy of the value is sufficient to fully copy
	 * it. In general, this is true for primitive data types in JavaScript. But,
	 * for array types or general class types, it is not true (since these are
	 * references into the heap). As an exception, class types which are known
	 * to be immutable can be safely considered as copyable.
	 *
	 * @param type
	 * @return
	 */
	private boolean isCopyable(Type type, SyntacticElement context) {
		if(type instanceof Type.Any) {
			return false;
		} else if (type instanceof Type.Primitive) {
			return true;
		} else if (type instanceof Type.Callable) {
			return true;
		} else if (type instanceof Type.Reference) {
			return true;
		} else if (type instanceof Type.Nominal) {
			Type.Nominal tn = (Type.Nominal) type;
			//
			try {
				Decl.Type td = typeSystem.resolveExactly(tn.getName(), Decl.Type.class);
				return isCopyable(td.getType(), context);
			} catch (ResolutionError e) {
				throw new RuntimeException(e);
			}
		} else {
			return false;
		}
	}

	private boolean needsBrackets(Expr e) {
		switch(e.getOpcode()) {
		case EXPR_cast:
		case EXPR_integeraddition:
		case EXPR_integersubtraction:
		case EXPR_integermultiplication:
		case EXPR_integerdivision:
		case EXPR_integerremainder:
		case EXPR_equal:
		case EXPR_notequal:
		case EXPR_integerlessthan:
		case EXPR_integerlessequal:
		case EXPR_integergreaterthan:
		case EXPR_integergreaterequal:
		case EXPR_logicaland:
		case EXPR_logicalor:
		case EXPR_bitwiseor:
		case EXPR_bitwisexor:
		case EXPR_bitwiseand:
		case EXPR_bitwiseshl:
		case EXPR_bitwiseshr:
		case EXPR_is:
		case EXPR_new:
			return true;
		}
		return false;
	}

	private static String opcode(int k) {
		switch(k) {
		case EXPR_integernegation:
			return "-";
		case EXPR_logicalnot:
			return "!";
		case EXPR_bitwisenot:
			return "~";
		case EXPR_dereference:
			return "*";
		// Binary
		case EXPR_integeraddition:
			return "+";
		case EXPR_integersubtraction:
			return "-";
		case EXPR_integermultiplication:
			return "*";
		case EXPR_integerdivision:
			return "/";
		case EXPR_integerremainder:
			return "%";
		case EXPR_equal:
			return "==";
		case EXPR_notequal:
			return "!=";
		case EXPR_integerlessthan:
			return "<";
		case EXPR_integerlessequal:
			return "<=";
		case EXPR_integergreaterthan:
			return ">";
		case EXPR_integergreaterequal:
			return ">=";
		case EXPR_logicaland:
			return "&&";
		case EXPR_logicalor:
			return "||";
		case EXPR_logicaliff:
			return "==";
		case EXPR_bitwiseor:
			return "|";
		case EXPR_bitwisexor:
			return "^";
		case EXPR_bitwiseand:
			return "&";
		case EXPR_bitwiseshl:
			return "<<";
		case EXPR_bitwiseshr:
			return ">>";
		case EXPR_is:
			return "is";
		case EXPR_new:
			return "new";
		default:
			throw new IllegalArgumentException("unknown operator kind : " + k);
		}
	}

	private void tabIndent(Context context) {
		tabIndent(context.indent);
	}

	private void tabIndent(int indent) {
		indent = indent * 4;
		for (int i = 0; i < indent; ++i) {
			out.print(" ");
		}
	}

	public static class Context {
		public final int indent;
		public final HashSet<Type> typeTests;

		public Context(int indent, HashSet<Type> typeTests) {
			this.indent = indent;
			this.typeTests = typeTests;
		}

		public Context indent() {
			return new Context(indent+1,typeTests);
		}
	}
}