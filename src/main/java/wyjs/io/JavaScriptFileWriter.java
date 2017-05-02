//Copyright (c) 2011, David J. Pearce (djp@ecs.vuw.ac.nz)
//All rights reserved.
//
//This software may be modified and distributed under the terms
//of the BSD license.  See the LICENSE file for details.

package wyjs.io;

import java.io.*;
import java.util.*;

import wyal.lang.WyalFile.Opcode;
import wybs.lang.Build;
import wybs.lang.NameID;
import wybs.lang.SyntacticElement;
import wybs.util.ResolveError;

import static wybs.lang.SyntaxError.*;
import wyfs.lang.Path;
import wyil.lang.*;
import wyil.lang.Constant;
import wyil.lang.Bytecode.AliasDeclaration;
import wyil.lang.Bytecode.Expr;
import wyil.lang.Bytecode.VariableAccess;
import wyil.lang.Bytecode.VariableDeclaration;
import wyil.lang.SyntaxTree.Location;
import wyil.lang.Type;
import wyil.lang.WyilFile.*;
import wyil.util.TypeSystem;

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

	private WyilFile wyilfile;

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

	public void apply(WyilFile module) throws IOException {
		// FIXME: this is a hack
		this.wyilfile = module;

		out.println();
		for(WyilFile.Constant cd : module.constants()) {
			write(cd);
		}
		if(!module.constants().isEmpty()) {
			out.println();
		}
		for (WyilFile.Type td : module.types()) {
			write(td);
		}

		for(FunctionOrMethod md : module.functionOrMethods()) {
			write(md);
			out.println();
		}
		out.flush();
	}

	private void write(WyilFile.Type td) {
		SyntaxTree tree = td.getTree();
		Location<Bytecode.VariableDeclaration> vardecl = (Location<Bytecode.VariableDeclaration>) tree.getLocation(0);
		out.print("function ");
		out.print(td.name());
		out.print("(");
		out.print(vardecl.getBytecode().getName());
		out.println(") {");
		List<Location<Expr>> invariant = td.getInvariant();
		if(invariant.isEmpty()) {
			tabIndent(1,out);
			out.println("return true;");
		} else {
			for(int i=0;i!=invariant.size();++i) {
				tabIndent(1,out);
				if(i == 0) {
					out.print("var result = (");
				} else {
					out.print("result = (");
				}
				writeExpression(invariant.get(i),out);
				out.println(");");
			}
			tabIndent(1,out);
			out.println("return result;");
		}
		out.println("}");
		out.println();
	}

	private void write(WyilFile.Constant cd) {
		out.print("var " + cd.name() + " = ");
		writeConstant(cd.constant());
		out.println(";");
	}

	private void write(FunctionOrMethod method) {
		// FIXME: what to do with private methods?
		if(method.hasModifier(Modifier.EXPORT)) {
			writeExportTrampoline(method);
		}
		//
		if(verbose) {
			writeLocationsAsComments(method.getTree());
		}
		//
		Type.FunctionOrMethod ft = method.type();
		SyntaxTree tree = method.getTree();
		out.print("function ");
		out.print(method.name());
		writeTypeMangle(method.type());
		writeParameters(tree,0,ft.params());
		if(commentTypes) {
			if (ft.returns().length != 0) {
				out.print("// -> ");
				writeParameters(tree,ft.params().length,ft.returns());
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

	private void writeLocationsAsComments(SyntaxTree tree) {
		List<Location<?>> locations = tree.getLocations();
		for(int i=0;i!=locations.size();++i) {
			Location<?> loc = locations.get(i);
			String id = String.format("%1$" + 3 + "s", "#" + i);
			String type = String.format("%1$-" + 8 + "s", Arrays.toString(loc.getTypes()));
			out.println("// " + id + " " + type + " " + loc.getBytecode());
		}
	}

	private void writeParameters(SyntaxTree tree, int n, Type[] parameters) {
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

	/**
	 * Create a trampoline for an exported function. This is simply a function
	 * without a name mangle which redirects to the same function with the name
	 * mangle.
	 *
	 * @param method
	 */
	private void writeExportTrampoline(FunctionOrMethod method) {
		out.print("function ");
		out.print(method.name());
		Type.FunctionOrMethod ft = method.type();
		SyntaxTree tree = method.getTree();
		writeParameters(tree,0,ft.params());
		out.println(" {");
		tabIndent(1,out);
		if(ft.returns().length > 0) {
			out.print("return ");
		}
		out.print(method.name());
		writeTypeMangle(ft);
		writeTrampolineArguments(tree,ft.params());
		out.println("}");
		out.println();
	}

	private void writeTrampolineArguments(SyntaxTree tree, Type[] parameters) {
		out.print("(");
		for (int i = 0; i != parameters.length; ++i) {
			if (i != 0) {
				out.print(", ");
			}
			Location<Bytecode.VariableDeclaration> decl = (Location<Bytecode.VariableDeclaration>) tree.getLocation(i);
			out.print(decl.getBytecode().getName());
		}
		out.println(");");
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
		out.print("wyjs.assert(");
		writeExpression(c.getOperand(0),out);
		out.println(");");
	}

	private void writeAssume(int indent, Location<Bytecode.Assume> c, PrintWriter out) {
		out.print("wyjs.assert(");
		writeExpression(c.getOperand(0),out);
		out.println(");");
	}

	private void writeAssign(int indent, Location<Bytecode.Assign> stmt, PrintWriter out) {
		Location<?>[] lhs = stmt.getOperandGroup(SyntaxTree.LEFTHANDSIDE);
		Location<?>[] rhs = stmt.getOperandGroup(SyntaxTree.RIGHTHANDSIDE);
		if(lhs.length > 0) {
			for(int i=0;i!=lhs.length;++i) {
				if(i!=0) { out.print(", "); }
				writeLVal(lhs[i],out);
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
		NameID name = stmt.getBytecode().name();
		// FIXME: this doesn't work for imported function symbols!
		out.print(name.name());
		writeTypeMangle(stmt.getBytecode().type());
		out.print("(");
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
		out.print("switch(");
		writeExpression(b.getOperand(0), out);
		out.println(") {");
		for (int i = 0; i != b.numberOfBlocks(); ++i) {
			// FIXME: ugly
			Bytecode.Case cAse = b.getBytecode().cases()[i];
			Constant[] values = cAse.values();
			if (values.length == 0) {
				tabIndent(indent + 1, out);
				out.println("default:");
			} else {
				for (int j = 0; j != values.length; ++j) {
					tabIndent(indent + 1, out);
					out.print("case ");
					out.print(values[j]);
					out.println(":");
				}
			}
			writeBlock(indent + 1, b.getBlock(i), out);
			tabIndent(indent + 2, out);
			out.println("break;");
		}
		tabIndent(indent + 1, out);
		out.println("}");
	}

	private void writeVariableMove(Location<VariableAccess> loc, PrintWriter out) {
		Location<VariableDeclaration> vd = getVariableDeclaration(loc.getOperand(0));
		out.print(vd.getBytecode().getName());
	}

	private void writeVariableCopy(Location<VariableAccess> loc, PrintWriter out) {
		Location<VariableDeclaration> vd = getVariableDeclaration(loc.getOperand(0));
		if(isCopyable(vd.getType(),loc)) {
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

	private void writeExpressions(Location<?>[] exprs, PrintWriter out)  {
		for (int i = 0; i != exprs.length; ++i) {
			if (i != 0) {
				out.print(", ");
			}
			writeExpression(exprs[i], out);
		}
	}

	@SuppressWarnings("unchecked")
	private void writeExpression(Location<?> expr, PrintWriter out)  {
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
			writeDereference((Location<Bytecode.Operator>) expr,out);
			break;
		case Bytecode.OPCODE_logicalnot:
		case Bytecode.OPCODE_neg:
		case Bytecode.OPCODE_bitwiseinvert:
			writePrefixLocations((Location<Bytecode.Operator>) expr,out);
			break;
		case Bytecode.OPCODE_all:
		case Bytecode.OPCODE_some:
			writeQuantifier((Location<Bytecode.Quantifier>) expr, out);
			break;
		case Bytecode.OPCODE_eq:
		case Bytecode.OPCODE_ne:
			writeEqualityOperator((Location<Bytecode.Operator>) expr, out);
			break;
		case Bytecode.OPCODE_add:
		case Bytecode.OPCODE_sub:
		case Bytecode.OPCODE_mul:
		case Bytecode.OPCODE_div:
		case Bytecode.OPCODE_rem:
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
			// FIXME: this needs to be fixed!
			writeVariableCopy((Location<VariableAccess>) expr, out);
			//writeVariableMove((Location<VariableAccess>) expr, out);
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
		out.print("wyjs.array(");
		writeExpression(expr.getOperand(0), out);
		out.print(", ");
		writeExpression(expr.getOperand(1), out);
		out.print(")");
	}
	private void writeConvert(Location<Bytecode.Convert> expr, PrintWriter out) {
		writeExpression(expr.getOperand(0),out);
	}
	private void writeConst(Location<Bytecode.Const> expr, PrintWriter out) {
		Constant c = expr.getBytecode().constant();
		writeConstant(c);
	}

	private void writeFieldLoad(Location<Bytecode.FieldLoad> expr, PrintWriter out) {
		writeBracketedExpression(expr.getOperand(0),out);
		out.print("." + expr.getBytecode().fieldName());
	}
	private void writeIndirectInvoke(Location<Bytecode.IndirectInvoke> expr, PrintWriter out) {
		Location<?>[] operands = expr.getOperands();
		writeExpression(operands[0],out);
		Location<?>[] arguments = expr.getOperandGroup(0);
		out.print("(");
		for(int i=0;i!=arguments.length;++i) {
			if(i!=0) {
				out.print(", ");
			}
			writeExpression(arguments[i],out);
		}
		out.print(")");
	}
	private void writeInvoke(Location<Bytecode.Invoke> expr, PrintWriter out) {
		NameID name = expr.getBytecode().name();
		// FIXME: this doesn't work for imported function symbols!
		out.print(name.name());
		writeTypeMangle(expr.getBytecode().type());
		out.print("(");
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
		try {
			Type.EffectiveRecord t = typeSystem.expandAsEffectiveRecord(expr.getType());
			String[] fields = t.getFieldNames();
			Location<?>[] operands = expr.getOperands();
			out.print("{");
			for (int i = 0; i != operands.length; ++i) {
				if (i != 0) {
					out.print(", ");
				}
				out.print(fields[i]);
				out.print(": ");
				writeExpression(operands[i], out);
			}
			out.print("}");
		} catch(ResolveError e) {
			throw new RuntimeException(e);
		}
	}

	private void writeNewObject(Location<Bytecode.Operator> expr, PrintWriter out) {
		out.print("{box: ");
		writeExpression(expr.getOperand(0), out);
		out.print("}");
	}

	private void writeDereference(Location<Bytecode.Operator> expr, PrintWriter out) {
		writeExpression(expr.getOperand(0), out);
		out.print(".box");
	}

	private void writePrefixLocations(Location<Bytecode.Operator> expr, PrintWriter out) {
		// Prefix operators
		out.print(opcode(expr.getBytecode().kind()));
		writeBracketedExpression(expr.getOperand(0),out);
	}

	private void writeEqualityOperator(Location<Bytecode.Operator> c, PrintWriter out) {
		Location<?> lhs = c.getOperand(0);
		Location<?> rhs = c.getOperand(1);
		Type lhsT = lhs.getType();
		Type rhsT = rhs.getType();
		//
		if(isCopyable(lhsT,lhs) && isCopyable(rhsT,rhs)) {
			writeInfixLocations(c,out);
		} else {
			if (c.getOpcode() == Bytecode.OPCODE_ne) {
				out.print("!");
			}
			out.print("wyjs.equals(");
			writeExpression(lhs,out);
			out.print(", ");
			writeExpression(rhs,out);
			out.print(")");
		}
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

	private void writeLVal(Location<?> lval, PrintWriter out) {
		switch (lval.getOpcode()) {
		case Bytecode.OPCODE_arrayindex:
			writeArrayIndexLVal((Location<Bytecode.Operator>) lval,out);
			break;
		case Bytecode.OPCODE_dereference:
			writeDereferenceLVal((Location<Bytecode.Operator>) lval,out);
			break;
		case Bytecode.OPCODE_fieldload:
			writeFieldLoadLVal((Location<Bytecode.FieldLoad>) lval,out);
			break;
		case Bytecode.OPCODE_varcopy:
		case Bytecode.OPCODE_varmove:
			writeVariableAccessLVal((Location<Bytecode.VariableAccess>) lval,out);
			break;
		default:
			throw new IllegalArgumentException("invalid lval: " + lval);
		}
	}

	private void writeDereferenceLVal(Location<Bytecode.Operator> expr, PrintWriter out) {
		writeLVal(expr.getOperand(0), out);
		out.print(".box");
	}

	private void writeArrayIndexLVal(Location<Bytecode.Operator> expr, PrintWriter out) {
		writeLVal(expr.getOperand(0), out);
		out.print("[");
		writeExpression(expr.getOperand(1), out);
		out.print("]");
	}

	private void writeFieldLoadLVal(Location<Bytecode.FieldLoad> expr, PrintWriter out) {
		writeLVal(expr.getOperand(0),out);
		out.print("." + expr.getBytecode().fieldName());
	}

	private void writeVariableAccessLVal(Location<VariableAccess> loc, PrintWriter out) {
		Location<VariableDeclaration> vd = getVariableDeclaration(loc.getOperand(0));
		out.print(vd.getBytecode().getName());
	}

	private void writeConstant(Constant c) {
		if(c instanceof Constant.Byte) {
			writeByteConstant((Constant.Byte) c);
		} else if(c instanceof Constant.Array) {
			writeArrayConstant((Constant.Array) c);
		} else if(c instanceof Constant.FunctionOrMethod) {
			writeFunctionOrMethodConstant((Constant.FunctionOrMethod) c);
		} else if(c instanceof Constant.Record) {
			writeRecordConstant((Constant.Record) c);
		} else {
			out.print(c);
		}
	}

	private void writeArrayConstant(Constant.Array c) {
		out.print("[");
		List<Constant> values = c.values();
		for(int i=0;i!=values.size();++i) {
			if(i != 0) {
				out.print(", ");
			}
			writeConstant(values.get(i));
		}
		out.print("]");
	}

	private void writeByteConstant(Constant.Byte c) {
		// FIXME: support es6 binary literals
		// out.print("0b");
		out.print("parseInt('");
		out.print(Integer.toBinaryString(c.value()));
		out.print("',2)");
	}

	private void writeFunctionOrMethodConstant(Constant.FunctionOrMethod c) {
		Type.FunctionOrMethod fmt = c.type();
		NameID name = c.name();
		List<Constant> args = c.arguments();
		out.print("function(");
		Type[] params = fmt.params();
		for(int i=0;i!=params.length;++i) {
			if(i != 0) {
				out.print(", ");
			}
			out.print("p" + i);
		}
		out.print(") {");
		if(c.type().returns().length > 0) {
			out.print("return ");
		}
		// FIXME: need to handle package
		out.print(name.name());
		writeTypeMangle(fmt);
		out.print("(");
		for(int i=0;i!=params.length;++i) {
			if(i != 0) {
				out.print(", ");
			}
			out.print("p" + i);
		}
//		for(int i=0;i!=args.size();++i) {
//			writeConstant(args.get(i));
//		}
		out.print(");}");
	}

	private void writeRecordConstant(Constant.Record c) {
		out.print("{");
		boolean firstTime = true;
		for(Map.Entry<String,Constant> e : c.values().entrySet()) {
			if(!firstTime) {
				out.print(", ");
			}
			firstTime = false;
			out.print(e.getKey());
			out.print(": ");
			writeConstant(e.getValue());
		}
		out.print("}");
	}

	private void writeTypeMangle(Type.FunctionOrMethod  fmt) {
		Type[] params = fmt.params();
		for(int i=0;i!=params.length;++i) {
			if(i == 0) {
				out.print("_");
			}
			writeTypeMangle(params[i]);
		}
	}

	private void writeTypeMangle(Type t) {
		if(t == Type.T_ANY) {
			out.print("T");
		} else if(t == Type.T_NULL) {
			out.print("N");
		} else if(t == Type.T_BOOL) {
			out.print("B");
		} else if(t == Type.T_BYTE) {
			out.print("U");
		} else if(t == Type.T_INT) {
			out.print("I");
		} else if(t instanceof Type.Array) {
			Type.Array at = (Type.Array) t;
			out.print("a");
			writeTypeMangle(at.element());
		} else if(t instanceof Type.Reference) {
			Type.Reference rt = (Type.Reference) t;
			out.print("p");
			writeTypeMangle(rt.element());
		} else if(t instanceof Type.Record) {
			Type.Record rt = (Type.Record) t;
			out.print("r");
			String[] fields = rt.getFieldNames();
			out.print(fields.length);
			for(int i=0;i!=fields.length;++i) {
				String field = fields[i];
				writeTypeMangle(rt.getField(field));
				out.print(field.length());
				out.print(field);
			}
		} else if(t instanceof Type.Nominal) {
			Type.Nominal nt = (Type.Nominal) t;
			out.print("n");
			// FIXME: need to figure out package
			String name = nt.name().name().toString();
			out.print(name.length());
			out.print(name);
		} else if(t instanceof Type.FunctionOrMethod) {
			Type.FunctionOrMethod fmt = (Type.FunctionOrMethod) t;
			if(fmt instanceof Type.Function) {
				out.print("f");
			} else {
				out.print("m");
			}
			Type[] params = fmt.params();
			out.print(params.length);
			for(int i=0;i!=params.length;++i) {
				writeTypeMangle(params[i]);
			}
			Type[] returns = fmt.returns();
			out.print(returns.length);
			for(int i=0;i!=returns.length;++i) {
				writeTypeMangle(returns[i]);
			}
			out.print("e");
		} else if(t instanceof Type.Negation) {
			Type.Negation nt = (Type.Negation) t;
			out.print("n");
			writeTypeMangle(nt.element());
		} else if(t instanceof Type.Union) {
			Type.Union ut = (Type.Union) t;
			out.print("u");
			Type[] bounds = ut.bounds();
			out.print(bounds.length);
			for(int i=0;i!=bounds.length;++i) {
				writeTypeMangle(bounds[i]);
			}
		} else if(t instanceof Type.Intersection) {
			Type.Intersection ut = (Type.Intersection) t;
			out.print("c");
			Type[] bounds = ut.bounds();
			out.print(bounds.length);
			for(int i=0;i!=bounds.length;++i) {
				writeTypeMangle(bounds[i]);
			}
		} else {
			throw new IllegalArgumentException("unknown type encountered: " + t);
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
		} else if(type instanceof Type.FunctionOrMethod) {
			return true;
		} else if(type instanceof Type.Nominal) {
			Type.Nominal tn = (Type.Nominal) type;
			NameID nid = tn.name();
			// First, attempt to locate the enclosing module for this
			// nominal type.
//			Path.Entry<WyilFile> entry = project.get(nid.module(), WyilFile.ContentType);
//			if (entry == null) {
//				throw new IllegalArgumentException("no WyIL file found: " + nid.module());
//			}
			// Read in the module. This may result in it being read from
			// disk, or from a cache in memory, or even from somewhere else.
			//WyilFile wyilFile = entry.read();
			// FIXME: following line is a temporary hack
			WyilFile wyilFile = this.wyilfile;
			WyilFile.Type td = wyilFile.type(nid.name());
			if (td == null) {
				throw new RuntimeException("undefined nominal type encountered: " + nid);
			}
			//
			return isCopyable(td.type(),context);
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