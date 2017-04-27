//Copyright (c) 2011, David J. Pearce (djp@ecs.vuw.ac.nz)
//All rights reserved.
//
//This software may be modified and distributed under the terms
//of the BSD license.  See the LICENSE file for details.

package wyjs.io;

import java.io.*;
import java.util.*;

import wybs.lang.Build;
import wyil.lang.*;
import wyil.lang.Constant;
import wyil.lang.Bytecode.AliasDeclaration;
import wyil.lang.Bytecode.Expr;
import wyil.lang.Bytecode.VariableAccess;
import wyil.lang.Bytecode.VariableDeclaration;
import wyil.lang.SyntaxTree.Location;
import wyil.lang.Type;
import wyil.lang.WyilFile.*;

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
	private PrintWriter out;
	private boolean verbose = false;
	private boolean commentTypes = false;
	private boolean commentSpecifications = false;

	public JavaScriptFileWriter(PrintWriter writer) {
		this.out = writer;
	}

	public JavaScriptFileWriter(OutputStream stream) {
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

	public void apply(WyilFile module) throws IOException {
		out.println();
		for(WyilFile.Constant cd : module.constants()) {
			out.println("constant " + cd.name() + " = " + cd.constant());
		}
		if(!module.constants().isEmpty()) {
			out.println();
		}
		for (WyilFile.Type td : module.types()) {
			Type t = td.type();
			String t_str;
			t_str = t.toString();
			out.println("type " + td.name() + " : " + t_str);
			for (Location<?> invariant : td.getInvariant()) {
				out.print("where ");
				writeExpression(invariant, out);
				out.println();
			}
			out.println();
		}

		for(FunctionOrMethod md : module.functionOrMethods()) {
			write(md,out);
			out.println();
		}
		out.flush();
	}

	private void write(FunctionOrMethod method, PrintWriter out) {
		//
		if(verbose) {
			writeLocationsAsComments(method.getTree(),out);
		}
		//
		Type.FunctionOrMethod ft = method.type();
		SyntaxTree tree = method.getTree();
		out.print("function ");
		out.print(method.name());
		writeParameters(tree,0,ft.params(),out);
		if(commentTypes) {
			if (ft.returns().length != 0) {
				out.print("// -> ");
				writeParameters(tree,ft.params().length,ft.returns(),out);
				out.println();
			} else {
				out.println();
			}
		} else {
			out.print(" ");
		}
		if(commentSpecifications) {
			//
			for (Location<Expr> precondition : method.getPrecondition()) {
				out.print("// requires ");
				writeExpression(precondition, out);
			}
			for (Location<Expr> postcondition : method.getPostcondition()) {
				out.print("// ensures ");
				writeExpression(postcondition, out);
				out.println();
			}
		}
		if (method.getBody() != null) {
			out.println("{");
			writeBlock(0, method.getBody(), out);
			out.println("}");
		}
	}

	private void writeLocationsAsComments(SyntaxTree tree, PrintWriter out) {
		List<Location<?>> locations = tree.getLocations();
		for(int i=0;i!=locations.size();++i) {
			Location<?> loc = locations.get(i);
			String id = String.format("%1$" + 3 + "s", "#" + i);
			String type = String.format("%1$-" + 8 + "s", Arrays.toString(loc.getTypes()));
			out.println("// " + id + " " + type + " " + loc.getBytecode());
		}
	}

	private void writeParameters(SyntaxTree tree, int n, Type[] parameters, PrintWriter out) {
		out.print("(");
		for (int i = 0; i != parameters.length; ++i) {
			if (i != 0) {
				out.print(", ");
			}
			writeType(parameters[i]);
			Location<Bytecode.VariableDeclaration> decl = (Location<Bytecode.VariableDeclaration>) tree.getLocation(n+i);
			out.print(decl.getBytecode().getName());
		}
		out.print(")");
	}

	private void writeBlock(int indent, Location<Bytecode.Block> block, PrintWriter out) {
		for (int i = 0; i != block.numberOfOperands(); ++i) {
			writeStatement(indent, block.getOperand(i), out);
		}
	}

	@SuppressWarnings("unchecked")
	private void writeStatement(int indent, Location<?> c, PrintWriter out) {
		tabIndent(indent+1,out);
		switch(c.getOpcode()) {
		case Bytecode.OPCODE_aliasdecl:
			writeAliasDeclaration(indent, (Location<Bytecode.AliasDeclaration>) c, out);
			break;
		case Bytecode.OPCODE_assert:
			writeAssert(indent, (Location<Bytecode.Assert>) c, out);
			break;
		case Bytecode.OPCODE_assume:
			writeAssume(indent, (Location<Bytecode.Assume>) c, out);
			break;
		case Bytecode.OPCODE_assign:
			writeAssign(indent, (Location<Bytecode.Assign>) c, out);
			break;
		case Bytecode.OPCODE_break:
			writeBreak(indent, (Location<Bytecode.Break>) c, out);
			break;
		case Bytecode.OPCODE_continue:
			writeContinue(indent, (Location<Bytecode.Continue>) c, out);
			break;
		case Bytecode.OPCODE_debug:
			writeDebug(indent, (Location<Bytecode.Debug>) c, out);
			break;
		case Bytecode.OPCODE_dowhile:
			writeDoWhile(indent, (Location<Bytecode.DoWhile>) c, out);
			break;
		case Bytecode.OPCODE_fail:
			writeFail(indent, (Location<Bytecode.Fail>) c, out);
			break;
		case Bytecode.OPCODE_if:
		case Bytecode.OPCODE_ifelse:
			writeIf(indent, (Location<Bytecode.If>) c, out);
			break;
		case Bytecode.OPCODE_indirectinvoke:
			writeIndirectInvoke(indent, (Location<Bytecode.IndirectInvoke>) c, out);
			break;
		case Bytecode.OPCODE_invoke:
			writeInvoke(indent, (Location<Bytecode.Invoke>) c, out);
			break;
		case Bytecode.OPCODE_namedblock:
			writeNamedBlock(indent, (Location<Bytecode.NamedBlock>) c, out);
			break;
		case Bytecode.OPCODE_while:
			writeWhile(indent, (Location<Bytecode.While>) c, out);
			break;
		case Bytecode.OPCODE_return:
			writeReturn(indent, (Location<Bytecode.Return>) c, out);
			break;
		case Bytecode.OPCODE_skip:
			writeSkip(indent, (Location<Bytecode.Skip>) c, out);
			break;
		case Bytecode.OPCODE_switch:
			writeSwitch(indent, (Location<Bytecode.Switch>) c, out);
			break;
		case Bytecode.OPCODE_vardecl:
		case Bytecode.OPCODE_vardeclinit:
			writeVariableDeclaration(indent, (Location<Bytecode.VariableDeclaration>) c, out);
			break;
		default:
			throw new IllegalArgumentException("unknown bytecode encountered");
		}
	}

	private void writeAliasDeclaration(int indent, Location<AliasDeclaration> loc, PrintWriter out) {
		out.print("alias ");
		out.print(loc.getType());
		out.print(" ");
		Location<VariableDeclaration> aliased = getVariableDeclaration(loc);
		out.print(aliased.getBytecode().getName());
		out.println();
	}
	private void writeAssert(int indent, Location<Bytecode.Assert> c, PrintWriter out) {
		out.print("assert ");
		writeExpression(c.getOperand(0),out);
		out.println(";");
	}

	private void writeAssume(int indent, Location<Bytecode.Assume> c, PrintWriter out) {
		out.print("assume ");
		writeExpression(c.getOperand(0),out);
		out.println(";");
	}

	private void writeAssign(int indent, Location<Bytecode.Assign> stmt, PrintWriter out) {
		Location<?>[] lhs = stmt.getOperandGroup(SyntaxTree.LEFTHANDSIDE);
		Location<?>[] rhs = stmt.getOperandGroup(SyntaxTree.RIGHTHANDSIDE);
		if(lhs.length > 0) {
			for(int i=0;i!=lhs.length;++i) {
				if(i!=0) { out.print(", "); }
				writeExpression(lhs[i],out);
			}
			out.print(" = ");
		}
		writeExpressions(rhs,out);
		out.println(";");
	}

	private void writeBreak(int indent, Location<Bytecode.Break> b, PrintWriter out) {
		out.println("break;");
	}

	private void writeContinue(int indent, Location<Bytecode.Continue> b, PrintWriter out) {
		out.println("continue;");
	}

	private void writeDebug(int indent, Location<Bytecode.Debug> b, PrintWriter out) {

	}

	private void writeDoWhile(int indent, Location<Bytecode.DoWhile> b, PrintWriter out) {
		out.println("do {");
		//
		writeBlock(indent+1,b.getBlock(0),out);
		tabIndent(indent+1,out);
		out.print("} while(");
		writeExpression(b.getOperand(0),out);
		out.println(");");
	}

	private void writeFail(int indent, Location<Bytecode.Fail> c, PrintWriter out) {
		out.println("fail");
	}

	private void writeIf(int indent, Location<Bytecode.If> b, PrintWriter out) {
		out.print("if(");
		writeExpression(b.getOperand(0),out);
		out.println(") {");
		writeBlock(indent+1,b.getBlock(0),out);
		if(b.numberOfBlocks() > 1) {
			tabIndent(indent+1,out);
			out.println("} else {");
			writeBlock(indent+1,b.getBlock(1),out);
		}
		tabIndent(indent+1,out);
		out.println("}");
	}

	private void writeIndirectInvoke(int indent, Location<Bytecode.IndirectInvoke> stmt, PrintWriter out) {
		Location<?>[] operands = stmt.getOperands();
		writeExpression(operands[0],out);
		out.print("(");
		for(int i=1;i!=operands.length;++i) {
			if(i!=1) {
				out.print(", ");
			}
			writeExpression(operands[i],out);
		}
		out.println(");");
	}
	private void writeInvoke(int indent, Location<Bytecode.Invoke> stmt, PrintWriter out) {
		out.print(stmt.getBytecode().name() + "(");
		Location<?>[] operands = stmt.getOperands();
		for(int i=0;i!=operands.length;++i) {
			if(i!=0) {
				out.print(", ");
			}
			writeExpression(operands[i],out);
		}
		out.println(");");
	}

	private void writeNamedBlock(int indent, Location<Bytecode.NamedBlock> b, PrintWriter out) {
		out.print(b.getBytecode().getName());
		out.println(":");
		writeBlock(indent+1,b.getBlock(0),out);
	}

	private void writeWhile(int indent, Location<Bytecode.While> b, PrintWriter out) {
		out.print("while(");
		writeExpression(b.getOperand(0),out);
		out.println(") {");
		writeBlock(indent+1,b.getBlock(0),out);
		tabIndent(indent+1,out);
		out.println("}");
	}

	private void writeReturn(int indent, Location<Bytecode.Return> b, PrintWriter out) {
		Location<?>[] operands = b.getOperands();
		out.print("return");
		if(operands.length > 0) {
			out.print(" ");
			writeExpressions(operands,out);
		}
		out.println(";");
	}

	private void writeSkip(int indent, Location<Bytecode.Skip> b, PrintWriter out) {
		out.println("// skip");
	}

	private void writeSwitch(int indent, Location<Bytecode.Switch> b, PrintWriter out) {
		out.print("switch ");
		writeExpression(b.getOperand(0), out);
		out.println(":");
		for (int i = 0; i != b.numberOfBlocks(); ++i) {
			// FIXME: ugly
			Bytecode.Case cAse = b.getBytecode().cases()[i];
			Constant[] values = cAse.values();
			tabIndent(indent + 2, out);
			if (values.length == 0) {
				out.println("default:");
			} else {
				out.print("case ");
				for (int j = 0; j != values.length; ++j) {
					if (j != 0) {
						out.print(", ");
					}
					out.print(values[j]);
				}
				out.println(":");
			}
			writeBlock(indent + 2, b.getBlock(i), out);
		}
	}

	private void writeVariableMove(Location<VariableAccess> loc, PrintWriter out) {
		Location<VariableDeclaration> vd = getVariableDeclaration(loc.getOperand(0));
		out.print(vd.getBytecode().getName());
	}

	private void writeVariableCopy(Location<VariableAccess> loc, PrintWriter out) {
		Location<VariableDeclaration> vd = getVariableDeclaration(loc.getOperand(0));
		if(isCopyable(vd.getType())) {
			out.print(vd.getBytecode().getName());
		} else {
			out.print("wyjs.copy(" + vd.getBytecode().getName() + ")");
		}
	}

	private void writeVariableDeclaration(int indent, Location<VariableDeclaration> loc, PrintWriter out) {
		Location<?>[] operands = loc.getOperands();
		out.print("var ");
		writeType(loc.getType());
		out.print(loc.getBytecode().getName());
		if (operands.length > 0) {
			out.print(" = ");
			writeExpression(operands[0], out);
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
	private void writeBracketedExpression(Location<?> expr, PrintWriter out) {
		boolean needsBrackets = needsBrackets(expr.getBytecode());
		if (needsBrackets) {
			out.print("(");
		}
		writeExpression(expr, out);
		if (needsBrackets) {
			out.print(")");
		}
	}

	private void writeExpressions(Location<?>[] exprs, PrintWriter out) {
		for (int i = 0; i != exprs.length; ++i) {
			if (i != 0) {
				out.print(", ");
			}
			writeExpression(exprs[i], out);
		}
	}

	@SuppressWarnings("unchecked")
	private void writeExpression(Location<?> expr, PrintWriter out) {
		switch (expr.getOpcode()) {
		case Bytecode.OPCODE_arraylength:
			writeArrayLength((Location<Bytecode.Operator>) expr,out);
			break;
		case Bytecode.OPCODE_arrayindex:
			writeArrayIndex((Location<Bytecode.Operator>) expr,out);
			break;
		case Bytecode.OPCODE_array:
			writeArrayInitialiser((Location<Bytecode.Operator>) expr,out);
			break;
		case Bytecode.OPCODE_arraygen:
			writeArrayGenerator((Location<Bytecode.Operator>) expr,out);
			break;
		case Bytecode.OPCODE_convert:
			writeConvert((Location<Bytecode.Convert>) expr, out);
			break;
		case Bytecode.OPCODE_const:
			writeConst((Location<Bytecode.Const>) expr, out);
			break;
		case Bytecode.OPCODE_fieldload:
			writeFieldLoad((Location<Bytecode.FieldLoad>) expr, out);
			break;
		case Bytecode.OPCODE_indirectinvoke:
			writeIndirectInvoke((Location<Bytecode.IndirectInvoke>) expr, out);
			break;
		case Bytecode.OPCODE_invoke:
			writeInvoke((Location<Bytecode.Invoke>) expr, out);
			break;
		case Bytecode.OPCODE_lambda:
			writeLambda((Location<Bytecode.Lambda>) expr, out);
			break;
		case Bytecode.OPCODE_record:
			writeRecordConstructor((Location<Bytecode.Operator>) expr, out);
			break;
		case Bytecode.OPCODE_newobject:
			writeNewObject((Location<Bytecode.Operator>) expr,out);
			break;
		case Bytecode.OPCODE_dereference:
		case Bytecode.OPCODE_logicalnot:
		case Bytecode.OPCODE_neg:
		case Bytecode.OPCODE_bitwiseinvert:
			writePrefixLocations((Location<Bytecode.Operator>) expr,out);
			break;
		case Bytecode.OPCODE_all:
		case Bytecode.OPCODE_some:
			writeQuantifier((Location<Bytecode.Quantifier>) expr, out);
			break;
		case Bytecode.OPCODE_add:
		case Bytecode.OPCODE_sub:
		case Bytecode.OPCODE_mul:
		case Bytecode.OPCODE_div:
		case Bytecode.OPCODE_rem:
		case Bytecode.OPCODE_eq:
		case Bytecode.OPCODE_ne:
		case Bytecode.OPCODE_lt:
		case Bytecode.OPCODE_le:
		case Bytecode.OPCODE_gt:
		case Bytecode.OPCODE_ge:
		case Bytecode.OPCODE_logicaland:
		case Bytecode.OPCODE_logicalor:
		case Bytecode.OPCODE_bitwiseor:
		case Bytecode.OPCODE_bitwisexor:
		case Bytecode.OPCODE_bitwiseand:
		case Bytecode.OPCODE_shl:
		case Bytecode.OPCODE_shr:
		case Bytecode.OPCODE_is:
			writeInfixLocations((Location<Bytecode.Operator>) expr, out);
			break;
		case Bytecode.OPCODE_varmove:
			writeVariableMove((Location<VariableAccess>) expr, out);
			break;
		case Bytecode.OPCODE_varcopy:
			writeVariableCopy((Location<VariableAccess>) expr, out);
			break;
		default:
			throw new IllegalArgumentException("unknown bytecode encountered: " + expr.getBytecode());
		}
	}


	private void writeArrayLength(Location<Bytecode.Operator> expr, PrintWriter out) {
		writeExpression(expr.getOperand(0), out);
		out.print(".length");
	}

	private void writeArrayIndex(Location<Bytecode.Operator> expr, PrintWriter out) {
		writeExpression(expr.getOperand(0), out);
		out.print("[");
		writeExpression(expr.getOperand(1), out);
		out.print("]");
	}

	private void writeArrayInitialiser(Location<Bytecode.Operator> expr, PrintWriter out) {
		Location<?>[] operands = expr.getOperands();
		out.print("[");
		for(int i=0;i!=operands.length;++i) {
			if(i != 0) {
				out.print(", ");
			}
			writeExpression(operands[i],out);
		}
		out.print("]");
	}

	private void writeArrayGenerator(Location<Bytecode.Operator> expr, PrintWriter out) {
		out.print("[");
		writeExpression(expr.getOperand(0), out);
		out.print(" ; ");
		writeExpression(expr.getOperand(1), out);
		out.print("]");
	}
	private void writeConvert(Location<Bytecode.Convert> expr, PrintWriter out) {
		out.print("(" + expr.getType() + ") ");
		writeExpression(expr.getOperand(0),out);
	}
	private void writeConst(Location<Bytecode.Const> expr, PrintWriter out) {
		out.print(expr.getBytecode().constant());
	}
	private void writeFieldLoad(Location<Bytecode.FieldLoad> expr, PrintWriter out) {
		writeBracketedExpression(expr.getOperand(0),out);
		out.print("." + expr.getBytecode().fieldName());
	}
	private void writeIndirectInvoke(Location<Bytecode.IndirectInvoke> expr, PrintWriter out) {
		Location<?>[] operands = expr.getOperands();
		writeExpression(operands[0],out);
		out.print("(");
		for(int i=1;i!=operands.length;++i) {
			if(i!=1) {
				out.print(", ");
			}
			writeExpression(operands[i],out);
		}
		out.print(")");
	}
	private void writeInvoke(Location<Bytecode.Invoke> expr, PrintWriter out) {
		out.print(expr.getBytecode().name() + "(");
		Location<?>[] operands = expr.getOperands();
		for(int i=0;i!=operands.length;++i) {
			if(i!=0) {
				out.print(", ");
			}
			writeExpression(operands[i],out);
		}
		out.print(")");
	}

	@SuppressWarnings("unchecked")
	private void writeLambda(Location<Bytecode.Lambda> expr, PrintWriter out) {
		out.print("function(");
		Location<?>[] parameters = expr.getOperandGroup(SyntaxTree.PARAMETERS);
		for (int i = 0; i != parameters.length; ++i) {
			Location<VariableDeclaration> var = (Location<VariableDeclaration>) parameters[i];
			if (i != 0) {
				out.print(", ");
			}
			writeType(var.getType());
			out.print(var.getBytecode().getName());
		}
		out.print(") { ");
		out.print("return ");
		writeExpression(expr.getOperand(0), out);
		out.print("; }");
	}

	private void writeRecordConstructor(Location<Bytecode.Operator> expr, PrintWriter out) {
		Type.EffectiveRecord t = (Type.EffectiveRecord) expr.getType();
		String[] fields = t.getFieldNames();
		Location<?>[] operands = expr.getOperands();
		out.print("{");
		for (int i = 0; i != operands.length; ++i) {
			if (i != 0) {
				out.print(", ");
			}
			out.print(fields[i]);
			out.print(" ");
			writeExpression(operands[i], out);
		}
		out.print("}");
	}

	private void writeNewObject(Location<Bytecode.Operator> expr, PrintWriter out) {
		out.print("new ");
		writeExpression(expr.getOperand(0), out);
	}

	private void writePrefixLocations(Location<Bytecode.Operator> expr, PrintWriter out) {
		// Prefix operators
		out.print(opcode(expr.getBytecode().kind()));
		writeBracketedExpression(expr.getOperand(0),out);
	}

	private void writeInfixLocations(Location<Bytecode.Operator> c, PrintWriter out) {
		writeBracketedExpression(c.getOperand(0),out);
		out.print(" ");
		out.print(opcode(c.getBytecode().kind()));
		out.print(" ");
		writeBracketedExpression(c.getOperand(1),out);

	}

	@SuppressWarnings("unchecked")
	private void writeQuantifier(Location<Bytecode.Quantifier> c, PrintWriter out) {
		out.print(quantifierKind(c));
		out.print(" { ");
		for (int i = 0; i != c.numberOfOperandGroups(); ++i) {
			Location<?>[] range = c.getOperandGroup(i);
			if (i != 0) {
				out.print(", ");
			}
			Location<VariableDeclaration>  v = (Location<VariableDeclaration>) range[SyntaxTree.VARIABLE];
			out.print(v.getBytecode().getName());
			out.print(" in ");
			writeExpression(range[SyntaxTree.START], out);
			out.print("..");
			writeExpression(range[SyntaxTree.END], out);
		}
		out.print(" | ");
		writeExpression(c.getOperand(SyntaxTree.CONDITION), out);
		out.print(" } ");
	}

	private String quantifierKind(Location<Bytecode.Quantifier> c) {
		switch(c.getOpcode()) {
		case Bytecode.OPCODE_some:
			return "some";
		case Bytecode.OPCODE_all:
			return "all";
		}
		throw new IllegalArgumentException();
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
	private static boolean isCopyable(Type type) {
		if (type instanceof Type.Primitive) {
			return true;
		} else {
			return false;
		}
	}

	private boolean needsBrackets(Bytecode e) {
		switch(e.getOpcode()) {
		case Bytecode.OPCODE_convert:
		case Bytecode.OPCODE_add:
		case Bytecode.OPCODE_sub:
		case Bytecode.OPCODE_mul:
		case Bytecode.OPCODE_div:
		case Bytecode.OPCODE_rem:
		case Bytecode.OPCODE_eq:
		case Bytecode.OPCODE_ne:
		case Bytecode.OPCODE_lt:
		case Bytecode.OPCODE_le:
		case Bytecode.OPCODE_gt:
		case Bytecode.OPCODE_ge:
		case Bytecode.OPCODE_logicaland:
		case Bytecode.OPCODE_logicalor:
		case Bytecode.OPCODE_bitwiseor:
		case Bytecode.OPCODE_bitwisexor:
		case Bytecode.OPCODE_bitwiseand:
		case Bytecode.OPCODE_shl:
		case Bytecode.OPCODE_shr:
		case Bytecode.OPCODE_is:
		case Bytecode.OPCODE_newobject:
		case Bytecode.OPCODE_dereference:
			return true;
		}
		return false;
	}

	private static String opcode(Bytecode.OperatorKind k) {
		switch(k) {
		case NEG:
			return "-";
		case NOT:
			return "!";
		case BITWISEINVERT:
			return "~";
		case DEREFERENCE:
			return "*";
		// Binary
		case ADD:
			return "+";
		case SUB:
			return "-";
		case MUL:
			return "*";
		case DIV:
			return "/";
		case REM:
			return "%";
		case EQ:
			return "==";
		case NEQ:
			return "!=";
		case LT:
			return "<";
		case LTEQ:
			return "<=";
		case GT:
			return ">";
		case GTEQ:
			return ">=";
		case AND:
			return "&&";
		case OR:
			return "||";
		case BITWISEOR:
			return "|";
		case BITWISEXOR:
			return "^";
		case BITWISEAND:
			return "&";
		case LEFTSHIFT:
			return "<<";
		case RIGHTSHIFT:
			return ">>";
		case IS:
			return "is";
		case NEW:
			return "new";
		default:
			throw new IllegalArgumentException("unknown operator kind : " + k);
		}
	}

	private static void tabIndent(int indent, PrintWriter out) {
		indent = indent * 4;
		for(int i=0;i<indent;++i) {
			out.print(" ");
		}
	}

	@SuppressWarnings("unchecked")
	private Location<VariableDeclaration> getVariableDeclaration(Location<?> loc) {
		switch (loc.getOpcode()) {
		case Bytecode.OPCODE_vardecl:
		case Bytecode.OPCODE_vardeclinit:
			return (Location<VariableDeclaration>) loc;
		case Bytecode.OPCODE_aliasdecl:
			return getVariableDeclaration(loc.getOperand(0));
		}
		throw new IllegalArgumentException("invalid location provided: " + loc);
	}
}