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
import static wyc.lang.WhileyFile.*;

import wyc.lang.WhileyFile;
import wyc.type.TypeSystem;
import wyc.util.ErrorMessages;


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
public final class JavaScriptFileWriter {
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

	public void apply(WhileyFile module) throws IOException {
		// FIXME: this is a hack
		this.wyilfile = module;

		out.println();
		HashSet<Type> typeTests = new HashSet<>();
		for(Declaration d : module.getDeclarations()) {
			if(d instanceof Declaration.StaticVariable) {
				write((Declaration.StaticVariable) d, typeTests);
			} else if(d instanceof Declaration.FunctionOrMethod) {
				write((Declaration.FunctionOrMethod) d, typeTests);
			} else if(d instanceof Declaration.Type) {
				write((Declaration.Type) d, typeTests);
			}
		}
		writeTypeTests(typeTests, new HashSet<>());
		out.flush();
	}

	private void write(Declaration.Type td, Set<Type> typeTests) {
		Declaration.Variable vardecl = td.getVariableDeclaration();
		out.print("function ");
		out.print(td.getName());
		out.print("$(");
		out.print(vardecl.getName());
		out.println(") {");
		Tuple<Expr> invariant = td.getInvariant();
		if(invariant.size() == 0) {
			tabIndent(1);
			out.println("return true;");
		} else if(invariant.size() == 1) {
			tabIndent(1);
			out.print("return ");
			writeExpression(invariant.getOperand(0), typeTests);
			out.println(";");
		} else {
			for(int i=0;i!=invariant.size();++i) {
				tabIndent(1);
				if(i == 0) {
					out.print("var result = (");
				} else {
					out.print("result = result && (");
				}
				writeExpression(invariant.getOperand(i), typeTests);
				out.println(");");
			}
			tabIndent(1);
			out.println("return result;");
		}
		out.println("}");
		out.println();
	}

	private void write(Declaration.StaticVariable cd, Set<Type> typeTests) {
		out.print("var " + cd.getName());
		if (cd.hasInitialiser()) {
			out.print(" = ");
			writeExpression(cd.getInitialiser(), typeTests);
		}
		out.println(";");
	}

	private void write(Declaration.FunctionOrMethod method, Set<Type> typeTests) {
		// FIXME: what to do with private methods?
		if (method.getModifiers().match(Modifier.Export.class) != null) {
			writeExportTrampoline(method);
		}
		//
		out.print("function ");
		out.print(method.getName());
		writeTypeMangle(method.getType());
		writeParameters(method.getParameters());
		if(commentTypes) {
			if (method.getReturns().size() > 0) {
				out.print("// -> ");
				writeParameters(method.getReturns());
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
				writeExpression(precondition,new HashSet<>());
			}
			for (Expr postcondition : method.getEnsures()) {
				out.print("// ensures ");
				writeExpression(postcondition, new HashSet<>());
				out.println();
			}
		}
		if (method.getBody() != null) {
			out.println("{");
			writeBlock(0, method.getBody(), typeTests);
			out.println("}");
		}
	}

	private void writeParameters(Tuple<Declaration.Variable> parameters) {
		out.print("(");
		for (int i = 0; i != parameters.size(); ++i) {
			if (i != 0) {
				out.print(", ");
			}
			Declaration.Variable decl = parameters.getOperand(i);
			writeType(decl.getType());
			out.print(decl.getName());
		}
		out.print(")");
	}

	/**
	 * Create a trampoline for an exported function. This is simply a function
	 * without a name mangle which redirects to the same function with the name
	 * mangle.
	 *
	 * @param method
	 */
	private void writeExportTrampoline(Declaration.FunctionOrMethod method) {
		Type.Callable ft = method.getType();
		Tuple<Declaration.Variable> params = method.getParameters();
		Tuple<Declaration.Variable> returns = method.getReturns();
		if (params.size() > 0) {
			out.print("function ");
			out.print(method.getName());
			writeParameters(params);
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

	private void writeTrampolineArguments(Tuple<Declaration.Variable> parameters) {
		out.print("(");
		for (int i = 0; i != parameters.size(); ++i) {
			if (i != 0) {
				out.print(", ");
			}
			Declaration.Variable decl = parameters.getOperand(i);
			out.print(decl.getName());
		}
		out.println(");");
	}

	private void writeBlock(int indent, Stmt.Block block, Set<Type> typeTests) {
		for (int i = 0; i != block.size(); ++i) {
			writeStatement(indent, block.getOperand(i), typeTests);
		}
	}

	@SuppressWarnings("unchecked")
	private void writeStatement(int indent, Stmt stmt, Set<Type> typeTests) {
		tabIndent(indent+1);
		switch(stmt.getOpcode()) {
		case STMT_assert:
			writeAssert(indent, (Stmt.Assert) stmt, typeTests);
			break;
		case STMT_assume:
			writeAssume(indent, (Stmt.Assume) stmt, typeTests);
			break;
		case STMT_assign:
			writeAssign(indent, (Stmt.Assign) stmt, typeTests);
			break;
		case STMT_break:
			writeBreak(indent, (Stmt.Break) stmt, typeTests);
			break;
		case STMT_continue:
			writeContinue(indent, (Stmt.Continue) stmt, typeTests);
			break;
		case STMT_debug:
			writeDebug(indent, (Stmt.Debug) stmt, typeTests);
			break;
		case STMT_dowhile:
			writeDoWhile(indent, (Stmt.DoWhile) stmt, typeTests);
			break;
		case STMT_fail:
			writeFail(indent, (Stmt.Fail) stmt, typeTests);
			break;
		case STMT_if:
		case STMT_ifelse:
			writeIf(indent, (Stmt.IfElse) stmt, typeTests);
			break;
		case EXPR_indirectinvoke:
			writeIndirectInvoke((Expr.IndirectInvoke) stmt, typeTests);
			out.println(";");
			break;
		case EXPR_invoke:
			writeInvoke((Expr.Invoke) stmt, typeTests);
			out.println(";");
			break;
		case STMT_namedblock:
			writeNamedBlock(indent, (Stmt.NamedBlock) stmt, typeTests);
			break;
		case STMT_while:
			writeWhile(indent, (Stmt.While) stmt, typeTests);
			break;
		case STMT_return:
			writeReturn(indent, (Stmt.Return) stmt, typeTests);
			break;
		case STMT_skip:
			writeSkip(indent, (Stmt.Skip) stmt, typeTests);
			break;
		case STMT_switch:
			writeSwitch(indent, (Stmt.Switch) stmt, typeTests);
			break;
		case DECL_variable:
		case DECL_variableinitialiser:
			writeVariableDeclaration(indent, (Declaration.Variable) stmt, typeTests);
			break;
		default:
			throw new IllegalArgumentException("unknown statement encountered (" + stmt.getClass().getName() + ")");
		}
	}

	private void writeAssert(int indent, Stmt.Assert c, Set<Type> typeTests) {
		out.print("Wy.assert(");
		writeExpression(c.getCondition(), typeTests);
		out.println(");");
	}

	private void writeAssume(int indent, Stmt.Assume c, Set<Type> typeTests) {
		out.print("Wy.assert(");
		writeExpression(c.getCondition(), typeTests);
		out.println(");");
	}

	private void writeAssign(int indent, Stmt.Assign stmt, Set<Type> typeTests) {
		Tuple<LVal> lhs = stmt.getLeftHandSide();
		Tuple<Expr> rhs = stmt.getRightHandSide();
		if (lhs.size() == 1) {
			// easy case
			writeLVal(lhs.getOperand(0), typeTests);
			out.print(" = ");
			writeExpression(rhs.getOperand(0), typeTests);
			out.println(";");
		} else if (lhs.size() > 1) {
			// FIXME: this is broken when multiple rhs expressions
			out.print("var $ = ");
			// Translate right-hand sides
			writeExpression(rhs.getOperand(0), typeTests);
			out.println(";");
			// Translate left-hand sides
			for (int i = 0; i != lhs.size(); ++i) {
				tabIndent(indent + 1);
				writeLVal(lhs.getOperand(i), typeTests);
				out.println(" = $[" + i + "];");
			}
		}
	}

	private void writeBreak(int indent, Stmt.Break b, Set<Type> typeTests) {
		out.println("break;");
	}

	private void writeContinue(int indent, Stmt.Continue b, Set<Type> typeTests) {
		out.println("continue;");
	}

	private void writeDebug(int indent, Stmt.Debug b, Set<Type> typeTests) {

	}

	private void writeDoWhile(int indent, Stmt.DoWhile b, Set<Type> typeTests) {
		out.println("do {");
		//
		writeBlock(indent+1,b.getBody(), typeTests);
		tabIndent(indent+1);
		// FIXME: write loop invariant if DEBUG mode
		out.print("} while(");
		writeExpression(b.getCondition(), typeTests);
		out.println(");");
	}

	private void writeFail(int indent, Stmt.Fail c, Set<Type> typeTests) {
		out.println("fail");
	}

	private void writeIf(int indent, Stmt.IfElse b, Set<Type> typeTests) {
		out.print("if(");
		writeExpression(b.getCondition(), typeTests);
		out.println(") {");
		writeBlock(indent+1,b.getTrueBranch(), typeTests);
		if(b.hasFalseBranch()) {
			tabIndent(indent+1);
			out.println("} else {");
			writeBlock(indent+1,b.getFalseBranch(), typeTests);
		}
		tabIndent(indent+1);
		out.println("}");
	}

	private void writeNamedBlock(int indent, Stmt.NamedBlock b, Set<Type> typeTests) {
		out.print(b.getName());
		out.println(":");
		writeBlock(indent + 1, b.getBlock(), typeTests);
	}

	private void writeWhile(int indent, Stmt.While b, Set<Type> typeTests) {
		out.print("while(");
		writeExpression(b.getCondition(), typeTests);
		out.println(") {");
		writeBlock(indent+1,b.getBody(), typeTests);
		tabIndent(indent+1);
		out.println("}");
	}

	private void writeReturn(int indent, Stmt.Return b, Set<Type> typeTests) {
		Tuple<Expr> operands = b.getOperand();
		out.print("return");
		if (operands.size() == 1) {
			// easy case
			out.print(" ");
			writeExpression(operands.getOperand(0), typeTests);
		} else if (operands.size() > 0) {
			// harder case
			out.print(" [");
			for (int i = 0; i != operands.size(); ++i) {
				if (i != 0) {
					out.print(", ");
				}
				writeExpression(operands.getOperand(i), typeTests);
			}
			out.print("]");
		}
		out.println(";");
	}

	private void writeSkip(int indent, Stmt.Skip b, Set<Type> typeTests) {
		out.println("// skip");
	}

	private void writeSwitch(int indent, Stmt.Switch b, Set<Type> typeTests) {
		out.print("switch(");
		writeExpression(b.getCondition(), typeTests);
		out.println(") {");
		Tuple<Stmt.Case> cases = b.getCases();
		for (int i = 0; i != cases.size(); ++i) {
			// FIXME: ugly
			Stmt.Case cAse = cases.getOperand(i);
			Tuple<Expr> values = cAse.getConditions();
			if (values.size() == 0) {
				tabIndent(indent + 1);
				out.println("default:");
			} else {
				for (int j = 0; j != values.size(); ++j) {
					tabIndent(indent + 1);
					out.print("case ");
					// FIXME: this needs to be fixed
					out.print(values.getOperand(j));
					out.println(":");
				}
			}
			writeBlock(indent + 1, cAse.getBlock(), typeTests);
			tabIndent(indent + 2);
			out.println("break;");
		}
		tabIndent(indent + 1);
		out.println("}");
	}

	private void writeVariableDeclaration(int indent, Declaration.Variable decl, Set<Type> typeTests) {
		out.print("var ");
		writeType(decl.getType());
		out.print(decl.getName());
		if (decl.hasInitialiser()) {
			out.print(" = ");
			writeExpression(decl.getInitialiser(), typeTests);
		}
		out.println(";");
	}

	/**
	 * Write a bracketed operand if necessary. Any operand whose human-readable
	 * representation can contain whitespace must have brackets around it.
	 *
	 * @param operand
	 * @param enclosing
	 * @param out
	 */
	private void writeBracketedExpression(Expr expr, Set<Type> typeTests) {
		boolean needsBrackets = needsBrackets(expr);
		if (needsBrackets) {
			out.print("(");
		}
		writeExpression(expr, typeTests);
		if (needsBrackets) {
			out.print(")");
		}
	}

	@SuppressWarnings("unchecked")
	private void writeExpression(Expr expr, Set<Type> typeTests)  {
		try {
			switch (expr.getOpcode()) {
			case EXPR_arrlen:
				writeArrayLength((Expr.ArrayLength) expr, typeTests);
				break;
			case EXPR_arridx:
				writeArrayIndex((Expr.ArrayAccess) expr, typeTests);
				break;
			case EXPR_arrinit:
				writeArrayInitialiser((Expr.ArrayInitialiser) expr, typeTests);
				break;
			case EXPR_arrgen:
				writeArrayGenerator((Expr.ArrayGenerator) expr, typeTests);
				break;
			case EXPR_bitwisenot:
				writeInvertOperator((Expr.BitwiseComplement) expr, typeTests);
				break;
			case EXPR_cast:
				writeConvert((Expr.Cast) expr, typeTests);
				break;
			case EXPR_const:
				writeConst((Expr.Constant) expr, typeTests);
				break;
			case EXPR_deref:
				writeDereference((Expr.Dereference) expr, typeTests);
				break;
			case EXPR_recfield:
				writeFieldLoad((Expr.RecordAccess) expr, typeTests);
				break;
			case EXPR_indirectinvoke:
				writeIndirectInvoke((Expr.IndirectInvoke) expr, typeTests);
				break;
			case EXPR_invoke:
				writeInvoke((Expr.Invoke) expr, typeTests);
				break;
			case DECL_lambda:
				writeLambdaDeclaration((Declaration.Lambda) expr, typeTests);
				break;
			case EXPR_lambda:
				writeLambdaAccess((Expr.LambdaAccess) expr, typeTests);
				break;
			case EXPR_recinit:
				writeRecordConstructor((Expr.RecordInitialiser) expr, typeTests);
				break;
			case EXPR_new:
				writeNewObject((Expr.New) expr, typeTests);
				break;
			case EXPR_not:
			case EXPR_neg:
				writePrefixLocations((Expr.Operator) expr, typeTests);
				break;
			case EXPR_forall:
			case EXPR_exists:
				writeQuantifier((Expr.Quantifier) expr, typeTests);
				break;
			case EXPR_eq:
			case EXPR_neq:
				writeEqualityOperator((Expr.Operator) expr, typeTests);
				break;
			case EXPR_div:
				writeDivideOperator((Expr.Division) expr, typeTests);
				break;
			case EXPR_add:
			case EXPR_sub:
			case EXPR_mul:
			case EXPR_rem:
			case EXPR_lt:
			case EXPR_lteq:
			case EXPR_gt:
			case EXPR_gteq:
			case EXPR_and:
			case EXPR_or:
			case EXPR_bitwiseor:
			case EXPR_bitwisexor:
			case EXPR_bitwiseand:
				writeInfixOperator((Expr.Operator) expr, typeTests);
				break;
			case EXPR_implies:
				writeLogicalImplication((Expr.LogicalImplication) expr, typeTests);
				break;
			case EXPR_iff:
				writeLogicalIff((Expr.LogicalIff) expr, typeTests);
				break;
			case EXPR_bitwiseshl:
			case EXPR_bitwiseshr:
				writeShiftOperator((Expr.Operator) expr, typeTests);
				break;
			case EXPR_is:
				writeIsOperator((Expr.Is) expr, typeTests);
				break;
			case EXPR_staticvar:
				writeStaticVariableAccess((Expr.StaticVariableAccess) expr, typeTests);
				break;
			case EXPR_varmove:
				writeVariableMove((Expr.VariableAccess) expr, typeTests);
				break;
			case EXPR_varcopy:
				writeVariableCopy((Expr.VariableAccess) expr, typeTests);
				break;
			default:
				throw new IllegalArgumentException("unknown expresion encountered: " + expr.getClass().getName());
			}
		} catch (ResolutionError e) {
			// FIXME: the latter is rather ugly
			throw new InternalFailure("resolution failure", ((WhileyFile) expr.getHeap()).getEntry(), expr, e);
		}
	}


	private void writeArrayLength(Expr.ArrayLength expr, Set<Type> typeTests) {
		writeExpression(expr.getSource(), typeTests);
		out.print(".length");
	}

	private void writeArrayIndex(Expr.ArrayAccess expr, Set<Type> typeTests) {
		writeExpression(expr.getSource(), typeTests);
		out.print("[");
		writeExpression(expr.getSubscript(), typeTests);
		out.print("]");
	}

	private void writeArrayInitialiser(Expr.ArrayInitialiser expr, Set<Type> typeTests) {
		out.print("[");
		for (int i = 0; i != expr.size(); ++i) {
			if (i != 0) {
				out.print(", ");
			}
			writeExpression(expr.getOperand(i), typeTests);
		}
		out.print("]");
	}

	private void writeArrayGenerator(Expr.ArrayGenerator expr, Set<Type> typeTests) {
		out.print("Wy.array(");
		writeExpression(expr.getValue(), typeTests);
		out.print(", ");
		writeExpression(expr.getLength(), typeTests);
		out.print(")");
	}
	private void writeConvert(Expr.Cast expr, Set<Type> typeTests) {
		writeExpression(expr.getCastedExpr(), typeTests);
	}
	private void writeConst(Expr.Constant expr, Set<Type> typeTests) {
		writeConstant(expr.getValue());
	}

	private void writeFieldLoad(Expr.RecordAccess expr, Set<Type> typeTests) {
		writeBracketedExpression(expr.getSource(), typeTests);
		out.print("." + expr.getField());
	}
	private void writeIndirectInvoke(Expr.IndirectInvoke expr, Set<Type> typeTests) {
		writeExpression(expr.getSource(), typeTests);
		Tuple<Expr> arguments = expr.getArguments();
		out.print("(");
		for(int i=0;i!=arguments.size();++i) {
			if(i!=0) {
				out.print(", ");
			}
			writeExpression(arguments.getOperand(i), typeTests);
		}
		out.print(")");
	}

	private void writeInvoke(Expr.Invoke expr, Set<Type> typeTests) {
		Name name = expr.getName();
		// FIXME: this doesn't work for imported function symbols!
		out.print(name);
		writeTypeMangle(expr.getSignature());
		out.print("(");
		Tuple<Expr> args = expr.getArguments();
		for (int i = 0; i != args.size(); ++i) {
			if (i != 0) {
				out.print(", ");
			}
			writeExpression(args.getOperand(i), typeTests);
		}
		out.print(")");
	}

	private void writeLambdaDeclaration(Declaration.Lambda expr, Set<Type> typeTests) {
		out.print("function(");
		Tuple<Declaration.Variable> parameters = expr.getParameters();
		for (int i = 0; i != parameters.size(); ++i) {
			Declaration.Variable var = parameters.getOperand(i);
			if (i != 0) {
				out.print(", ");
			}
			writeType(var.getType());
			out.print(var.getName());
		}
		out.print(") { ");
		out.print("return ");
		writeExpression(expr.getBody(), typeTests);
		out.print("; }");
	}

	private void writeLambdaAccess(Expr.LambdaAccess expr, Set<Type> typeTests) {
		// NOTE: the reason we use a function declaration here (i.e. instead of
		// just assigning the name) is that it protects against potential name
		// clashes with local variables.
		Type.Callable ft = expr.getSignature();
		Tuple<Type> params = ft.getParameters();
		out.print("function(");
		for(int i=0;i!=params.size();++i) {
			if(i!=0) {
				out.print(",");
			}
			out.print("p" + i);
		}
		out.print(") { return ");
		out.print(expr.getName());
		writeTypeMangle(ft);
		out.print("(");
		for(int i=0;i!=params.size();++i) {
			if(i!=0) {
				out.print(",");
			}
			out.print("p" + i);
		}
		out.print("); }");
	}

	private void writeRecordConstructor(Expr.RecordInitialiser expr, Set<Type> typeTests) {
		out.print("Wy.record({");
		for (int i = 0; i != expr.size(); ++i) {
			Pair<Identifier,Expr> field = expr.getOperand(i);
			if (i != 0) {
				out.print(", ");
			}
			out.print(field.getFirst());
			out.print(": ");
			writeExpression(field.getSecond(), typeTests);
		}
		out.print("})");
	}

	private void writeNewObject(Expr.New expr, Set<Type> typeTests) {
		out.print("new Wy.Ref(");
		writeExpression(expr.getOperand(), typeTests);
		out.print(")");
	}

	private void writeDereference(Expr.Dereference expr, Set<Type> typeTests) {
		out.print("Wy.deref(");
		writeExpression(expr.getOperand(), typeTests);
		out.print(")");
	}

	private void writePrefixLocations(Expr.Operator expr, Set<Type> typeTests) {
		// Prefix operators
		out.print(opcode(expr.getOpcode()));
		writeBracketedExpression(expr.getOperand(0), typeTests);
	}

	private void writeInvertOperator(Expr.BitwiseComplement expr, Set<Type> typeTests) {
		// Prefix operators
		out.print("((~");
		writeBracketedExpression(expr.getOperand(0), typeTests);
		out.print(") & 0xFF)");
	}


	private void writeEqualityOperator(Expr.Operator expr, Set<Type> typeTests) throws ResolutionError {
		Expr lhs = expr.getOperand(0);
		Expr rhs = expr.getOperand(1);
		// FIXME: put this back
		Type lhsT = typeSystem.inferType(lhs);
		Type rhsT = typeSystem.inferType(rhs);
		//
		if(isCopyable(lhsT,lhs) && isCopyable(rhsT,rhs)) {
			writeInfixOperator(expr, typeTests);
		} else {
			if (expr instanceof Expr.NotEqual) {
				out.print("!");
			}
			out.print("Wy.equals(");
			writeExpression(lhs, typeTests);
			out.print(", ");
			writeExpression(rhs, typeTests);
			out.print(")");
		}
	}

	private void writeDivideOperator(Expr.Division expr, Set<Type> typeTests) {
		out.print("Math.floor(");
		writeBracketedExpression(expr.getOperand(0), typeTests);
		out.print(" / ");
		writeBracketedExpression(expr.getOperand(1), typeTests);
		out.print(")");
	}

	private void writeInfixOperator(Expr.Operator expr, Set<Type> typeTests) {
		writeBracketedExpression(expr.getOperand(0), typeTests);
		out.print(" ");
		out.print(opcode(expr.getOpcode()));
		out.print(" ");
		writeBracketedExpression(expr.getOperand(1), typeTests);
	}

	private void writeLogicalImplication(Expr.LogicalImplication expr, Set<Type> typeTests) {
		out.print("!");
		writeBracketedExpression(expr.getOperand(0), typeTests);
		out.print("||");
		writeBracketedExpression(expr.getOperand(1), typeTests);
	}

	private void writeLogicalIff(Expr.LogicalIff expr, Set<Type> typeTests) {
		writeBracketedExpression(expr.getOperand(0), typeTests);
		out.print("==");
		writeBracketedExpression(expr.getOperand(1), typeTests);
	}

	private void writeShiftOperator(Expr.Operator expr, Set<Type> typeTests) {
		out.print("((");
		writeBracketedExpression(expr.getOperand(0), typeTests);
		out.print(" ");
		out.print(opcode(expr.getOpcode()));
		out.print(" ");
		writeBracketedExpression(expr.getOperand(1), typeTests);
		out.print(") & 0xFF)");
	}

	private void writeIsOperator(Expr.Is expr, Set<Type> typeTests) {
		Type t = expr.getTestType();
		// Handle all non-trivial cases directly
		if(t instanceof Type.Null) {
			writeExpression(expr.getTestExpr(), typeTests);
			out.print(" === null");
		} else if(t instanceof Type.Int) {
			// FIXME: this will need to be updated when unbounded arithmetic is
			// supported
			out.print("typeof ");
			writeExpression(expr.getTestExpr(), typeTests);
			out.print(" === \"number\"");
		} else if(t instanceof Type.Bool) {
			out.print("typeof ");
			writeExpression(expr.getTestExpr(), typeTests);
			out.print(" === \"boolean\"");
		} else {
			// Fall back case
			out.print("is$");
			writeTypeMangle(t);
			out.print("(");
			writeExpression(expr.getTestExpr(), typeTests);
			out.print(")");
			// Register this type test to be written out as an appropriately
			// named function.
			typeTests.add(t);
		}
	}

	@SuppressWarnings("unchecked")
	private void writeQuantifier(Expr.Quantifier expr, Set<Type> typeTests) {
		out.print("Wy.");
		out.print((expr instanceof Expr.UniversalQuantifier) ? "all" : "some");
		out.print("(");
		Tuple<Declaration.Variable> params = expr.getParameters();
		for (int i = 0; i != params.size(); ++i) {
			Declaration.Variable param = params.getOperand(i);
			if(i > 0) {
				throw new RuntimeException("Need to support multiple operand groups");
			}
			// FIXME: for now assume initialiser must be an array range.
			Expr.ArrayRange range = (Expr.ArrayRange) param.getInitialiser();
			writeExpression(range.getStart(), typeTests);
			out.print(",");
			writeExpression(range.getEnd(), typeTests);
		}
		out.print(",function(");
		for (int i = 0; i != params.size(); ++i) {
			Declaration.Variable param = params.getOperand(i);
			out.print(param.getName());
		}
		out.print("){return ");
		writeExpression(expr.getBody(), typeTests);
		out.print(";})");
	}

	private void writeStaticVariableAccess(Expr.StaticVariableAccess  expr, Set<Type> typeTests) {
		// FIXME: this is horrendously broken
		out.print("Wy.copy(" + expr.getName() + ")");
	}

	private void writeVariableMove(Expr.VariableAccess expr, Set<Type> typeTests) {
		Declaration.Variable vd = expr.getVariableDeclaration();
		out.print(vd.getName());
	}

	private void writeVariableCopy(Expr.VariableAccess  expr, Set<Type> typeTests) {
		Declaration.Variable vd = expr.getVariableDeclaration();
		if (isCopyable(vd.getType(), expr)) {
			out.print(vd.getName());
		} else {
			out.print("Wy.copy(" + vd.getName() + ")");
		}
	}

	private void writeLVal(LVal lval, Set<Type> typeTests) {
		switch (lval.getOpcode()) {
		case EXPR_arridx:
			writeArrayIndexLVal((Expr.ArrayAccess) lval, typeTests);
			break;
		case EXPR_deref:
			writeDereferenceLVal((Expr.Dereference) lval, typeTests);
			break;
		case EXPR_recfield:
			writeFieldLoadLVal((Expr.RecordAccess) lval, typeTests);
			break;
		case EXPR_varcopy:
		case EXPR_varmove:
			writeVariableAccessLVal((Expr.VariableAccess) lval, typeTests);
			break;
		default:
			throw new IllegalArgumentException("invalid lval: " + lval);
		}
	}

	private void writeDereferenceLVal(Expr.Dereference expr, Set<Type> typeTests) {
		writeLVal((LVal) expr.getOperand(), typeTests);
		out.print(".$ref");
	}

	private void writeArrayIndexLVal(Expr.ArrayAccess expr, Set<Type> typeTests) {
		writeLVal((LVal) expr.getSource(), typeTests);
		out.print("[");
		writeExpression(expr.getSubscript(), typeTests);
		out.print("]");
	}

	private void writeFieldLoadLVal(Expr.RecordAccess expr, Set<Type> typeTests) {
		writeLVal((LVal) expr.getSource(), typeTests);
		out.print("." + expr.getField());
	}

	private void writeVariableAccessLVal(Expr.VariableAccess expr, Set<Type> typeTests) {
		Declaration.Variable vd = expr.getVariableDeclaration();
		out.print(vd.getName());
	}

	private void writeConstant(Value c) {
		if(c instanceof Value.Byte) {
			Value.Byte b = (Value.Byte) c;
			// FIXME: support es6 binary literals
			// out.print("0b");
			out.print("parseInt('");
			out.print(Integer.toBinaryString(b.get() & 0xFF));
			out.print("',2)");
		} else if(c instanceof Value.UTF8) {
			Value.UTF8 s = (Value.UTF8) c;
			byte[] bytes = s.get();
			out.print("[");
			for(int i=0;i!=bytes.length;++i) {
				if(i != 0) {
					out.print(", ");
				}
				out.print(bytes[i]);
			}
			out.print("]");
		} else {
			out.print(c);
		}
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
		WhileyFile wyilFile = this.wyilfile;
		Declaration.Type td = wyilFile.getDeclaration(name.getLast(), null, Declaration.Type.class);
		if (td == null) {
			throw new RuntimeException("undefined nominal type encountered: " + name);
		}
		out.print(" return is$");
		writeTypeMangle(td.getVariableDeclaration().getType());
		out.print("(val) && " + name.getLast() + "$(val); ");
		//
		deps.add(td.getVariableDeclaration().getType());
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
		Tuple<Declaration.Variable> fields = test.getFields();
		if (!test.isOpen()) {
			out.print(" && Object.keys(val).length === " + fields.size());
		}
		out.println(") {");
		for (int i = 0; i != fields.size(); ++i) {
			Declaration.Variable field = fields.getOperand(i);
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
			Type bound = test.getOperand(i);
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
			Type bound = test.getOperand(i);
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
			writeTypeMangle(params.getOperand(i));
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
		Tuple<Declaration.Variable> fields = rt.getFields();
		out.print(fields.size());
		for (int i = 0; i != fields.size(); ++i) {
			Declaration.Variable field = fields.getOperand(i);
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
			writeTypeMangle(params.getOperand(i));
		}
		Tuple<Type> returns = t.getReturns();
		out.print(returns.size());
		for (int i = 0; i != returns.size(); ++i) {
			writeTypeMangle(returns.getOperand(i));
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
			writeTypeMangle(t.getOperand(i));
		}
	}

	private void writeTypeMangleIntersection(Type.Intersection t) {
		out.print("c");
		out.print(t.size());
		for(int i=0;i!=t.size();++i) {
			writeTypeMangle(t.getOperand(i));
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
		if (type instanceof Type.Primitive) {
			return true;
		} else if (type instanceof Type.Callable) {
			return true;
		} else if (type instanceof Type.Reference) {
			return true;
		} else if (type instanceof Type.Nominal) {
			Type.Nominal tn = (Type.Nominal) type;
			Name nid = tn.getName();
			// FIXME: following line is a temporary hack
			WhileyFile wyilFile = this.wyilfile;
			Declaration.Type td = wyilFile.getDeclaration(nid.getLast(), null, Declaration.Type.class);
			if (td == null) {
				throw new RuntimeException("undefined nominal type encountered: " + nid);
			}
			//
			return isCopyable(td.getType(), context);
		} else {
			return false;
		}
	}

	private boolean needsBrackets(Expr e) {
		switch(e.getOpcode()) {
		case EXPR_cast:
		case EXPR_add:
		case EXPR_sub:
		case EXPR_mul:
		case EXPR_div:
		case EXPR_rem:
		case EXPR_eq:
		case EXPR_neq:
		case EXPR_lt:
		case EXPR_lteq:
		case EXPR_gt:
		case EXPR_gteq:
		case EXPR_and:
		case EXPR_or:
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
		case EXPR_neg:
			return "-";
		case EXPR_not:
			return "!";
		case EXPR_bitwisenot:
			return "~";
		case EXPR_deref:
			return "*";
		// Binary
		case EXPR_add:
			return "+";
		case EXPR_sub:
			return "-";
		case EXPR_mul:
			return "*";
		case EXPR_div:
			return "/";
		case EXPR_rem:
			return "%";
		case EXPR_eq:
			return "==";
		case EXPR_neq:
			return "!=";
		case EXPR_lt:
			return "<";
		case EXPR_lteq:
			return "<=";
		case EXPR_gt:
			return ">";
		case EXPR_gteq:
			return ">=";
		case EXPR_and:
			return "&&";
		case EXPR_or:
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
}