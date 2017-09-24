//Copyright (c) 2011, David J. Pearce (djp@ecs.vuw.ac.nz)
//All rights reserved.
//
//This software may be modified and distributed under the terms
//of the BSD license.  See the LICENSE file for details.

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
	private boolean commentTypes = false;
	private boolean commentSpecifications = false;

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
		out.print("function ");
		out.print(td.getName());
		out.print("$type(");
		out.print(vardecl.getName());
		out.println(") {");
		Tuple<Expr> invariant = td.getInvariant();
		if(invariant.size() == 0) {
			tabIndent(1);
			out.println("return true;");
		} else if(invariant.size() == 1) {
			tabIndent(1);
			out.print("return ");
			visitExpression(invariant.get(0), context);
			out.println(";");
		} else {
			for(int i=0;i!=invariant.size();++i) {
				tabIndent(1);
				if(i == 0) {
					out.print("var result = (");
				} else {
					out.print("result = result && (");
				}
				visitExpression(invariant.get(i), context);
				out.println(");");
			}
			tabIndent(1);
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
			writeExportTrampoline(method);
		}
		//
		out.print("function ");
		out.print(method.getName());
		writeTypeMangle(method.getType());
		visitVariables(method.getParameters(), context);
		if(commentTypes) {
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
		if(commentSpecifications) {
			//
			for (Expr precondition : method.getRequires()) {
				out.print("// requires ");
				visitExpression(precondition, context);
			}
			for (Expr postcondition : method.getEnsures()) {
				out.print("// ensures ");
				visitExpression(postcondition, context);
				out.println();
			}
		}
		out.println("{");
		writeInvariantCheck(method.getRequires(), context.indent());
		if (method.getBody() != null) {
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
		if(commentTypes) {
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
		writeInvariantCheck(method.getInvariant(), context.indent());
		tabIndent(1);
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
		out.print("var ");
		writeType(decl.getType());
		out.print(decl.getName());
		if (decl.hasInitialiser()) {
			out.print(" = ");
			visitExpression(decl.getInitialiser(), context);
		}
		out.println(";");
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
	private void writeExportTrampoline(Decl.FunctionOrMethod method) {
		Type.Callable ft = method.getType();
		Tuple<Decl.Variable> params = method.getParameters();
		Tuple<Decl.Variable> returns = method.getReturns();
		if (params.size() > 0) {
			out.print("function ");
			out.print(method.getName());
			visitVariables(params, null);
			out.println(" {");
			tabIndent(1);
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

	@Override public void visitStatement(Stmt stmt, Context context) {
		tabIndent(context.indent+1);
		super.visitStatement(stmt, context);
		//
		switch(stmt.getOpcode()) {
		case EXPR_invoke:
		case EXPR_indirectinvoke:
			// Need as an invocation expression won't terminate itself.
			out.println(";");
		}
	}

	@Override public void visitAssert(Stmt.Assert c, Context context) {
		out.print("Wy.assert(");
		visitExpression(c.getCondition(), context);
		out.println(");");
	}

	@Override public void visitAssume(Stmt.Assume c, Context context) {
		out.print("Wy.assert(");
		visitExpression(c.getCondition(), context);
		out.println(");");
	}

	@Override
	public void visitAssign(Stmt.Assign stmt, Context context) {
		Tuple<LVal> lhs = stmt.getLeftHandSide();
		Tuple<Expr> rhs = stmt.getRightHandSide();
		if (lhs.size() == 1) {
			// easy case
			writeLVal(lhs.get(0), context);
			out.print(" = ");
			visitExpression(rhs.get(0), context);
			out.println(";");
		} else if (lhs.size() > 1) {
			// FIXME: this is broken when multiple rhs expressions
			out.print("var $ = ");
			// Translate right-hand sides
			visitExpression(rhs.get(0), context);
			out.println(";");
			// Translate left-hand sides
			for (int i = 0; i != lhs.size(); ++i) {
				tabIndent(context.indent + 1);
				writeLVal(lhs.get(i), context);
				out.println(" = $[" + i + "];");
			}
		}
	}

	@Override
	public void visitBreak(Stmt.Break b, Context context) {
		out.println("break;");
	}

	@Override
	public void visitContinue(Stmt.Continue b, Context context) {
		out.println("continue;");
	}

	@Override
	public void visitDebug(Stmt.Debug b, Context context) {

	}

	@Override
	public void visitDoWhile(Stmt.DoWhile b, Context context) {
		out.println("do {");
		//
		visitBlock(b.getBody(), context.indent());
		tabIndent(context.indent + 1);
		// FIXME: write loop invariant if DEBUG mode
		out.print("} while(");
		visitExpression(b.getCondition(), context);
		out.println(");");
	}

	@Override public void visitFail(Stmt.Fail c, Context context) {
		out.println("fail");
	}

	@Override
	public void visitIfElse(Stmt.IfElse b, Context context) {
		out.print("if(");
		visitExpression(b.getCondition(), context);
		context = context.indent();
		//
		out.println(") {");
		visitBlock(b.getTrueBranch(), context);
		if (b.hasFalseBranch()) {
			tabIndent(context.indent);
			out.println("} else {");
			visitBlock(b.getFalseBranch(), context);
		}
		tabIndent(context.indent);
		out.println("}");
	}

	@Override
	public void visitNamedBlock(Stmt.NamedBlock b, Context context) {
		out.print(b.getName());
		out.println(":");
		visitBlock(b.getBlock(), context.indent());
	}

	@Override
	public void visitWhile(Stmt.While b, Context context) {
		out.print("while(");
		visitExpression(b.getCondition(), context);
		out.println(") {");
		visitBlock(b.getBody(), context.indent());
		tabIndent(context.indent + 1);
		out.println("}");
	}

	@Override
	public void visitReturn(Stmt.Return b, Context context) {
		Tuple<Expr> operands = b.getReturns();
		out.print("return");
		if (operands.size() == 1) {
			// easy case
			out.print(" ");
			visitExpression(operands.get(0), context);
		} else if (operands.size() > 0) {
			// harder case
			out.print(" [");
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
				tabIndent(context.indent + 1);
				out.println("default:");
			} else {
				for (int j = 0; j != values.size(); ++j) {
					tabIndent(context.indent + 1);
					out.print("case ");
					// FIXME: this needs to be fixed
					out.print(values.get(j));
					out.println(":");
				}
			}
			visitBlock(cAse.getBlock(), context.indent());
			tabIndent(context.indent + 2);
			out.println("break;");
		}
		tabIndent(context.indent + 1);
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
		if (isCopyable(vd.getType(), expr)) {
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
		out.print(name);
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
			if(i > 0) {
				throw new RuntimeException("Need to support multiple operand groups");
			}
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
		out.print("Wy.deref(");
		visitExpression(expr.getOperand(), context);
		out.print(")");
	}

	// ================================================================================
	// Records
	// ================================================================================

	@Override
	public void visitRecordAccess(Expr.RecordAccess expr, Context context) {
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

	private void writeInvariantCheck(Tuple<Expr> invariant, Context context) {
		for(int i=0;i!=invariant.size();++i) {
			tabIndent(context.indent);
			out.print("Wy.assert(");
			visitExpression(invariant.get(i), context);
			out.println(");");
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
			writeArrayIndexLVal((Expr.ArrayAccess) lval, context);
			break;
		case EXPR_dereference:
			writeDereferenceLVal((Expr.Dereference) lval, context);
			break;
		case EXPR_recordaccess:
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
		if (t instanceof Type.Any) {
			out.print("T");
		} else if (t instanceof Type.Null) {
			out.print("N");
		} else if (t instanceof Type.Bool) {
			out.print("B");
		} else if (t instanceof Type.Byte) {
			out.print("U");
		} else if (t instanceof Type.Int) {
			out.print("I");
		} else if (t instanceof Type.Array) {
			writeTypeMangleArray((Type.Array) t);
		} else if (t instanceof Type.Reference) {
			writeTypeMangleReference((Type.Reference) t);
		} else if (t instanceof Type.Record) {
			writeTypeMangleRecord((Type.Record) t);
		} else if (t instanceof Type.Nominal) {
			writeTypeMangleNominal((Type.Nominal) t);
		} else if (t instanceof Type.Callable) {
			writeTypeMangleFunctionOrMethod((Type.Callable) t);
		} else if (t instanceof Type.Negation) {
			writeTypeMangleNegation((Type.Negation) t);
		} else if (t instanceof Type.Union) {
			writeTypeMangleUnion((Type.Union) t);
		} else if (t instanceof Type.Intersection) {
			writeTypeMangleIntersection((Type.Intersection) t);
		} else {
			throw new IllegalArgumentException("unknown type encountered: " + t);
		}
	}

	private void writeTypeMangleArray(Type.Array t) {
		out.print("a");
		writeTypeMangle(t.getElement());
	}
	private void writeTypeMangleReference(Type.Reference t) {
		out.print("p");
		if (t.hasLifetime()) {
			String lifetime = t.getLifetime().get();
			if(lifetime.equals("*")) {
				out.print("_");
			} else {
				out.print(lifetime.length());
				out.print(lifetime);
			}
		} else {
			out.print("0");
		}
		writeTypeMangle(t.getElement());
	}

	private void writeTypeMangleRecord(Type.Record rt) {
		out.print("r");
		Tuple<Decl.Variable> fields = rt.getFields();
		out.print(fields.size());
		for (int i = 0; i != fields.size(); ++i) {
			Decl.Variable field = fields.get(i);
			writeTypeMangle(field.getType());
			String fieldName = field.getName().get();
			out.print(fieldName.length());
			out.print(fieldName);
		}
	}
	private void writeTypeMangleNominal(Type.Nominal t) {
		out.print("n");
		// FIXME: need to figure out package
		String name = t.getName().getLast().get();
		out.print(name.length());
		out.print(name);
	}

	private void writeTypeMangleFunctionOrMethod(Type.Callable t) {
		if (t instanceof Type.Function) {
			out.print("f");
		} else {
			out.print("m");
		}
		Tuple<Type> params = t.getParameters();
		out.print(params.size());
		for (int i = 0; i != params.size(); ++i) {
			writeTypeMangle(params.get(i));
		}
		Tuple<Type> returns = t.getReturns();
		out.print(returns.size());
		for (int i = 0; i != returns.size(); ++i) {
			writeTypeMangle(returns.get(i));
		}
		out.print("e");
	}

	private void writeTypeMangleNegation(Type.Negation t) {
		out.print("n");
		writeTypeMangle(t.getElement());
	}

	private void writeTypeMangleUnion(Type.Union t) {
		out.print("u");
		out.print(t.size());
		for(int i=0;i!=t.size();++i) {
			writeTypeMangle(t.get(i));
		}
	}

	private void writeTypeMangleIntersection(Type.Intersection t) {
		out.print("c");
		out.print(t.size());
		for(int i=0;i!=t.size();++i) {
			writeTypeMangle(t.get(i));
		}
	}

	private void writeType(Type t) {
		if(commentTypes) {
			out.print("/*");
			out.print(t);
			out.print("*/");
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

	private void tabIndent(int indent) {
		indent = indent * 4;
		for(int i=0;i<indent;++i) {
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