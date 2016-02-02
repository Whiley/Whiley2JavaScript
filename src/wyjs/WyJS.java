// Copyright (c) 2015, David J. Pearce and Cody Slater (djp@ecs.vuw.ac.nz)
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//    * Redistributions of source code must retain the above copyright
//      notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above copyright
//      notice, this list of conditions and the following disclaimer in the
//      documentation and/or other materials provided with the distribution.
//    * Neither the name of the <organization> nor the
//      names of its contributors may be used to endorse or promote products
//      derived from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL DAVID J. PEARCE BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

package wyjs;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import wyc.util.WycBuildTask.Registry;
import wycc.util.Pair;
import wyfs.io.BinaryOutputStream;
import wyfs.lang.Path.Root;
import wyfs.util.DirectoryRoot;
import wyil.io.WyilFileReader;
import wyil.lang.Code;
import wyil.lang.CodeBlock.Index;
import wyil.lang.CodeUtils;
import wyil.lang.Codes;
import wyil.lang.Codes.Debug;
import wyil.lang.Codes.If;
import wyil.lang.Codes.LVal;
import wyil.lang.Constant;
import wyil.lang.Type;
import wyil.lang.WyilFile;
import wyil.lang.WyilFile.FunctionOrMethod;
import wyil.util.AttributedCodeBlock;
import wyil.util.TypeExpander;
import wyrl.io.JavaIdentifierOutputStream;

public class WyJS {

	private WyilFile file;
	private int indent = 0;
	// Sorted list of strings that make up the javascript file
	private ArrayList<String> js;
	private static ArrayList<String> exports = new ArrayList<String>();

	/**
	 * Creates the contents of a JavaScript file from a specified Whiley wyil
	 * file. The JavaScript is equal to the wyil file
	 *
	 * @param file
	 *            the wyil file that is being converted
	 * @return WyJS The JavaScript converter object
	 * @throws Exception
	 */
	public WyJS(WyilFile file) throws Exception {
		this.file = file;

		ArrayList<FunctionOrMethod> fom = new ArrayList<FunctionOrMethod>(file.functionOrMethods());
		js = new ArrayList<String>();

		for (FunctionOrMethod f : fom) {
			if (f.hasModifier(wyil.lang.Modifier.EXPORT)) {
				exports.add(f.name());
			}
		}
		// for each function of method, write it to an array in JavaScript form
		for (FunctionOrMethod f : fom) {
			write(f);
		}

		// print it out once we're done
		// for (String s : js) { System.out.print(s); }
	}

	/**
	 * Creates a JavaScript file from the JavaScript array Used for the test
	 * cases
	 *
	 * @param filename
	 *            the name of the file being converted
	 * @param srcDir
	 *            the source directory of where the file will be stored
	 * @return WyJS The JavaScript converter object
	 */
	public String makeFile(String filename, String srcDir) {
		try {
			PrintStream out = new PrintStream(new FileOutputStream(srcDir + "/" + filename + ".js"));
			for (String s : js) {
				out.print(s);
			}
			out.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		List<FunctionOrMethod> start = file.functionOrMethod("test");
		return nameMangle(start.get(0).name(), start.get(0).type());
	}

	/**
	 * Identifies the instance of Codes given and writes a JavaScript version of
	 * it to the JavaScript array.
	 *
	 * @param o
	 *            Object which is an instance of Codes.
	 * @throws Exception
	 *             if instance of Codes still not supported or unexpected type
	 *             as parameter (not and instance of Codes).
	 */
	private void write(Object o) throws Exception {

		if (o instanceof Codes.AssertOrAssume) {
			write((Codes.AssertOrAssume) o);
		} else if (o instanceof Codes.Assign) {
			write((Codes.Assign) o);
		} else if (o instanceof Codes.Assume) {
			throw new RuntimeException("Codes.Assume not supported.");
		} else if (o instanceof Codes.BinaryOperator) {
			write((Codes.BinaryOperator) o);
		} else if (o instanceof Codes.BinaryOperatorKind) {
			throw new RuntimeException("Codes.BinaryOperatorKind not supported.");
		} else if (o instanceof Codes.Comparator) {
			throw new RuntimeException("Codes.Comparator not supported.");
		} else if (o instanceof Codes.Const) {
			write((Codes.Const) o);
		} else if (o instanceof Codes.Convert) {
			write((Codes.Convert) o);
		} else if (o instanceof Codes.Debug) {
			write((Codes.Debug) o);
		} else if (o instanceof Codes.Dereference) {
			throw new RuntimeException("Codes.Dereference not supported.");
		} else if (o instanceof Codes.Fail) {
			write((Codes.Fail) o);
		} else if (o instanceof Codes.FieldLoad) {
			write((Codes.FieldLoad) o);
		} else if (o instanceof Codes.Goto) {
			write((Codes.Goto) o);
		} else if (o instanceof Codes.If) {
			write((Codes.If) o);
		} else if (o instanceof Codes.IfIs) {
			write((Codes.IfIs) o);
		} else if (o instanceof Codes.IndexOf) {
			write((Codes.IndexOf) o);
		} else if (o instanceof Codes.IndirectInvoke) {
			throw new RuntimeException("Codes.IndirectInvoke not supported.");
		} else if (o instanceof Codes.Invert) {
			write((Codes.Invert) o);
		} else if (o instanceof Codes.Invoke) {
			write((Codes.Invoke) o);
		} else if (o instanceof Codes.Label) {
			write((Codes.Label) o);
		} else if (o instanceof Codes.Lambda) {
			throw new RuntimeException("Codes.Lambda not supported.");
		} else if (o instanceof Codes.LengthOf) {
			write((Codes.LengthOf) o);
		} else if (o instanceof Codes.ListGenerator) {
			write((Codes.ListGenerator) o);
		} else if (o instanceof Codes.ListLVal) {
			throw new RuntimeException("Codes.ListLVal not supported.");
		} else if (o instanceof Codes.Loop) {
			Codes.Loop loop = (Codes.Loop) o;
			AttributedCodeBlock attributedCodeBlock = new AttributedCodeBlock(loop.bytecodes());
			Map<String, Index> labelMap = CodeUtils.buildLabelMap(attributedCodeBlock);
			write(loop, labelMap);
		} else if (o instanceof Codes.Move) {
			throw new RuntimeException("Codes.Move not supported.");
		} else if (o instanceof Codes.NewList) {
			write((Codes.NewList) o);
		} else if (o instanceof Codes.NewObject) {
			throw new RuntimeException("Codes.NewObject not supported.");
		} else if (o instanceof Codes.NewRecord) {
			write((Codes.NewRecord) o);
		} else if (o instanceof Codes.NewTuple) {
			write((Codes.NewTuple) o);
		} else if (o instanceof Codes.Nop) {
			write((Codes.Nop) o);
		} else if (o instanceof Codes.Not) {
			throw new RuntimeException("Codes.Not not supported.");
		} else if (o instanceof Codes.Quantify) {
			throw new RuntimeException("Codes.Quantify not supported.");
		} else if (o instanceof Codes.RecordLVal) {
			throw new RuntimeException("Codes.RecordLVal not supported.");
		} else if (o instanceof Codes.ReferenceLVal) {
			throw new RuntimeException("Codes.ReferenceLVal not supported.");
		} else if (o instanceof Codes.Return) {
			write((Codes.Return) o);
		} else if (o instanceof Codes.Switch) {
			write((Codes.Switch) o);
		} else if (o instanceof Codes.TupleLoad) {
			write((Codes.TupleLoad) o);
		} else if (o instanceof Codes.UnaryOperator) {
			write((Codes.UnaryOperator) o);
		} else if (o instanceof Codes.UnaryOperatorKind) {
			throw new RuntimeException("Codes.UnaryOperatorKind not supported.");
		} else if (o instanceof Codes.Update) {
			write((Codes.Update) o);
		} else if (o instanceof Codes.Void) {
			throw new RuntimeException("Codes.Void not supported.");
		} else {
			throw new RuntimeException("Object not an instance of Codes.");
		}
	}

	private void write(Debug function) throws Exception {
		String functionText = "";

		functionText = getIndentBlock() + "WyJS.debug(r" + function.operand + ");\n";

		js.add(functionText);
	}

	private void write(Codes.Nop function) throws Exception {
	}

	private void write(Codes.Invert o) throws Exception {
		js.add(getIndentBlock() + "var r" + o.target() + " = " + "WyJS.invert(r" + o.operand(0) + ");//" + o.toString()
				+ "\n");
	}

	private void write(FunctionOrMethod function) throws Exception {
		String functionText = "";
		functionText += getIndentBlock() + "function " + nameMangle(function.name(), function.type()) + "(";
		int i = 1;
		for (Type t : function.type().params()) {
			if (t instanceof Type.Nominal) {
				// Type.Nominal nominal = (Type.Nominal) t;
				// System.out.println(nominal.name().name().equals("Console"));
			}
			if (i == 1) {
				functionText += "r" + (i - 1);
			} else {
				functionText += ", r" + (i - 1);
			}
			i++;
		}
		functionText += "){//" + function.type().toString() + "\n";
		js.add(functionText);
		indent++;
		// make initial Switch
		js.add(getIndentBlock() + "var control_flow_repeat = true;\n" + getIndentBlock() + "var control_flow_pc = -1;\n"
				+ getIndentBlock() + "outer:\n" + getIndentBlock() + "while(control_flow_repeat){\n");
		indent++;
		js.add(getIndentBlock() + "control_flow_repeat = false\n" + getIndentBlock() + "switch(control_flow_pc){\n");
		indent++;
		js.add(getIndentBlock() + "case -1 :\n");
		indent++;

		// for each bytecode in the method, convert it to JavaScript
		Iterator<?> iter = function.body().iterator();
		while (iter.hasNext()) {
			Object tmp = iter.next();
			write(tmp);
		}
		// close the file
		indent--;
		indent--;
		js.add(getIndentBlock() + "}\n");
		indent--;
		js.add(getIndentBlock() + "}\n");
		indent--;
		js.add("}\n\n");
	}

	private void write(Codes.Const o) throws Exception {
		// TODO: Use Runtime file
		// Find type of constant, make the appropriate type
		js.add(getIndentBlock() + "var r" + o.target() + " = " + getConst(o.constant) + ";\n");
	}

	private void write(Codes.BinaryOperator o) throws Exception {
		// TODO: Use Runtime file
		// Should be able to do it how we do here
		switch (o.kind) {
		case ADD:
			js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) + ".add(" + "r" + o.operand(1)
					+ ");//" + o.toString() + "\n");
			return;
		case SUB:
			js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) + ".sub(" + "r" + o.operand(1)
					+ ");//" + o.toString() + "\n");
			return;
		case DIV:
			js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) + ".div(" + "r" + o.operand(1)
					+ ");//" + o.toString() + "\n");
			return;
		case MUL:
			js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) + ".mul(" + "r" + o.operand(1)
					+ ");//" + o.toString() + "\n");
			return;
		case REM:
			js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) + ".rem(" + "r" + o.operand(1)
					+ ");//" + o.toString() + "\n");
			return;
		case BITWISEAND:
			js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) + ".and(" + "r" + o.operand(1)
					+ ");//" + o.toString() + "\n");
			break;
		case BITWISEOR:
			js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) + ".or(" + "r" + o.operand(1)
					+ ");//" + o.toString() + "\n");
			break;
		case BITWISEXOR:
			js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) + ".xor(" + "r" + o.operand(1)
					+ ");//" + o.toString() + "\n");
			break;
		case LEFTSHIFT:
			js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) + ".shl(" + "r" + o.operand(1)
					+ ");//" + o.toString() + "\n");
			break;
		case RIGHTSHIFT:
			js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) + ".srl(" + "r" + o.operand(1)
					+ ");//" + o.toString() + "\n");
			break;
		default:
			throw new Exception("Unknown kind of binary operator " + o.toString());
		}
	}

	private void write(Codes.Assign o) throws Exception {
		// TODO: Use Runtime file
		// ANY TYPE?
		// find type of rhs, make appropriate type
		if (o.type() instanceof Type.Array) {
			Type.Array list = (Type.Array) o.type();
			js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) + ".clone(" + getType(list.element())
					+ ");//" + o.toString() + "\n");
		} else if (o.type() instanceof Type.Record) {
			js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) + ".clone();//" + o.toString()
					+ "\n");
		} else {
			js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) + ";//" + o.toString() + "\n");
		}
	}

	private void write(Codes.Convert o) throws Exception {
		String type = getType(o.result);
		js.add(getIndentBlock() + "var r" + o.target() + " = WyJS.cast(" + type + ", r" + o.operand(0) + ");\n");
	}

	private void write(Codes.Return o) {
		if (o.operand != -1) {
			js.add(getIndentBlock() + "return r" + o.operand + ";//" + o.toString() + "\n");
		} else {
			js.add(getIndentBlock() + "return;\n");
		}
	}

	private void write(Codes.If o) throws Exception {
		js.add(writeIfTop(o));
		indent++;
		js.add(getIndentBlock() + "control_flow_pc = " + parseLabel(o.target) + ";\n");
		js.add(getIndentBlock() + "control_flow_repeat = true;\n");
		js.add(getIndentBlock() + "continue outer;\n");
		indent--;
		js.add(getIndentBlock() + "}\n");
	}

	/**
	 * Writes the top of the if statement according to the type of comparison of
	 * the input.
	 *
	 * @param o
	 *            bytecode containing if statement.
	 * @return text of a string statement.
	 */
	private String writeIfTop(Codes.If o) throws Exception {
		// TODO: Use Runtime file
		// can use the appropriate .equals method depending on type of if
		if (o.type instanceof Type.Bool) {
			// Can only be EQ or NEQ
			switch (o.op) {
			// WHAT IF THE RIGHT HAND SIDE IS NOT A BOOL??????
			// TODO:
			case EQ:
				return getIndentBlock() + "if(r" + o.leftOperand + " === r" + o.rightOperand + "){\n";
			case NEQ:
				return getIndentBlock() + "if(r" + o.leftOperand + " !== r" + o.rightOperand + "){\n";
			default:
				throw new Exception(o.op + " shouldnt be used with Bools?");
			}
		} else {
			switch (o.op) {

			case EQ:
				return getIndentBlock() + "if(WyJS.equals(r" + o.leftOperand + ", r" + o.rightOperand + ", true)){\n";
			case GT:
				return getIndentBlock() + "if(WyJS.gt(r" + o.leftOperand + ", r" + o.rightOperand + ", false)){\n";
			case GTEQ:
				return getIndentBlock() + "if(WyJS.gt(r" + o.leftOperand + ", r" + o.rightOperand + ", true)){\n";
			case LT:
				return getIndentBlock() + "if(WyJS.lt(r" + o.leftOperand + ", r" + o.rightOperand + ", false)){\n";
			case LTEQ:
				return getIndentBlock() + "if(WyJS.lt(r" + o.leftOperand + ", r" + o.rightOperand + ", true)){\n";
			case NEQ:
				return getIndentBlock() + "if(WyJS.equals(r" + o.leftOperand + ", r" + o.rightOperand + ", false)){\n";
//			case IN:
//			 return getIndentBlock() + "if(WyJS.inList(r" + o.leftOperand
//			 + ", r" + o.rightOperand + ")){\n";
			default:
				throw new Exception(o.op + "not supported?");
			}
		}
	}

	private void write(Codes.IfIs o) throws Exception {
		js.add(getIndentBlock() + writeIfIsTop(o));
		indent++;
		js.add(getIndentBlock() + "control_flow_pc = " + parseLabel(o.target) + ";\n");
		js.add(getIndentBlock() + "control_flow_repeat = true;\n");
		js.add(getIndentBlock() + "continue outer;\n");
		indent--;
		js.add(getIndentBlock() + "}\n");
	}

	private String writeIfIsTop(Codes.IfIs c) throws Exception {
		return "if(WyJS.is(r" + c.operand + ", " + getType(c.rightOperand) + ")){\n";
	}

	private void write(Codes.Goto o) {
		js.add(getIndentBlock() + "control_flow_pc = " + parseLabel(o.target) + ";\n");
		js.add(getIndentBlock() + "control_flow_repeat = true;\n");
		js.add(getIndentBlock() + "continue outer;//" + o.toString() + "\n");
	}

	private void write(Codes.AssertOrAssume o) throws Exception {
		for (Code c : o.bytecodes()) {
			write(c);
		}
	}

	private void write(Codes.Invoke o) {
		String str = "";
		if (o.target() != -1) {
			str = getIndentBlock() + "var r" + o.target() + " = ";
			str += nameMangle(o.name.name(), o.type()) + "(";
		} else {
			str += getIndentBlock() + nameMangle(o.name.name(), o.type()) + "(";
		}
		int x = 1;
		for (Integer i : o.operands()) {
			if (x == 1) {
				str += "r" + i;
			} else {
				str += ", r" + i;
			}
			x++;
		}
		str += ");//" + o.toString() + "\n";
		js.add(str);
	}

	private void write(Codes.Label o) {
		indent--;
		js.add(getIndentBlock() + "case " + parseLabel(o.label) + ":\n");
		indent++;
	}

	private void write(Codes.Fail o) {
		js.add(getIndentBlock() + "throw {name: 'Assert Failed', message: '" + o.toString() + "'}\n");
	}

	private void write(Codes.UnaryOperator o) throws Exception {
		// TODO: Use Runtime file
		// make a unary function in runtime, use that here
		// TODO: other types of unary.
		switch (o.kind) {
		case NEG:
			js.add(getIndentBlock() + "var r" + o.target() + " = " + "r" + o.operand(0) + ".neg();//" + o.toString()
					+ "\n");
			return;
		case DENOMINATOR:
		case NUMERATOR:
			throw new Exception("Unary not supported.. Yet");
		}
	}

	private void write(Codes.Loop o, Map<String, Index> labelMap) throws Exception {
		// TODO: Could maybe use the runtime file?

		int loopLabel = getFreshLabel();
		js.add(getIndentBlock() + "control_flow_pc = " + loopLabel + ";\n");
		js.add(getIndentBlock() + "control_flow_repeat = true;\n");
		js.add(getIndentBlock() + "break;\n");
		indent--;
		js.add(getIndentBlock() + "case " + loopLabel + ":\n");
		indent++;
		ArrayList<Integer> labels = new ArrayList<Integer>();
		int currentIndex = -1;
		Iterator<Code> iter = o.iterator();

		while (iter.hasNext()) {
			Code c = iter.next();
			if (c instanceof Codes.If) {
				if ((labelMap.get((((Codes.If) c).target)) != null)) {
					// jumping in the loop
					js.add(writeIfTop((If) c));
					indent++;
					js.add(getIndentBlock() + "control_flow_pc = " + parseLabel(((Codes.If) c).target) + ";\n");
					js.add(getIndentBlock() + "control_flow_repeat = true;\n");
					js.add(getIndentBlock() + "break;\n");
					indent--;
					js.add(getIndentBlock() + "}\n");
					// write else
					currentIndex++;
					labels.add(getFreshLabel());
					js.add(getIndentBlock() + "else{\n");
					indent++;
					js.add(getIndentBlock() + "control_flow_pc = " + labels.get(currentIndex) + ";\n");
					js.add(getIndentBlock() + "control_flow_repeat = true;\n");
					js.add(getIndentBlock() + "break;\n");
					indent--;
					js.add(getIndentBlock() + "}\n");
					indent--;
					js.add(getIndentBlock() + "case " + labels.get(currentIndex) + ":\n");
					indent++;
				} else {
					// terminating statement
					write(c);
				}
			} else if (c instanceof Codes.IfIs) {
				if ((labelMap.get((((Codes.IfIs) c).target)) != null)) {
					// jumping in the loop
					js.add(getIndentBlock() + writeIfIsTop((Codes.IfIs) c));
					indent++;

					js.add(getIndentBlock() + "control_flow_pc = " + parseLabel(((Codes.IfIs) c).target) + ";\n");
					js.add(getIndentBlock() + "control_flow_repeat = true;\n");
					js.add(getIndentBlock() + "break;\n");
					indent--;
					js.add(getIndentBlock() + "}\n");
					// write else
					currentIndex++;
					labels.add(getFreshLabel());
					js.add(getIndentBlock() + "else{\n");
					indent++;
					js.add(getIndentBlock() + "control_flow_pc = " + labels.get(currentIndex) + ";\n");
					js.add(getIndentBlock() + "control_flow_repeat = true;\n");
					js.add(getIndentBlock() + "break;\n");
					indent--;
					js.add(getIndentBlock() + "}\n");
					indent--;
					js.add(getIndentBlock() + "case " + labels.get(currentIndex) + ":\n");
					indent++;
				} else {
					// terminating statement
					write(c);
				}
			} else if (c instanceof Codes.Label) {
				js.add(getIndentBlock() + "control_flow_pc = " + loopLabel// parseLabel(lastLabel)
						+ ";\n");
				js.add(getIndentBlock() + "control_flow_repeat = true;\n");
				// js.add(getIndentBlock() + "break;\n");
				indent--;
				js.add(getIndentBlock() + "case " + parseLabel(((Codes.Label) c).label) + ":\n");
				indent++;
			} else if (c instanceof Codes.Invariant) {
				// Ignore it i think..

			} else {
				// here's where it creates the other statements that aren't
				// conditionals
				write(c);
			}
		}
		js.add(getIndentBlock() + "control_flow_pc = " + loopLabel + ";\n");
		js.add(getIndentBlock() + "control_flow_repeat = true;\n");
		js.add(getIndentBlock() + "break;\n");
	}

	private void write(Codes.NewRecord o) throws Exception {
		// TODO: Use Runtime file
		// Create a record object
		String names = "[";
		String values = "[";
		String types = "[";
		int i = 0;
		// System.out.println();
		// System.out.println(o.assignedType());
		ArrayList<String> temp = new ArrayList<String>(o.type().keys());
		Collections.sort(temp);
		for (String s : temp) {
			i++;
			if (i == temp.size()) {
				names = names + '"' + s + '"' + "]";
				values += "r" + o.operand(i - 1) + "]";
				types += getType(o.type().field(s)) + "]";
			} else {
				names = names + '"' + s + '"' + ", ";
				values += "r" + o.operand(i - 1) + ", ";
				types += getType(o.type().field(s)) + ", ";
			}
		}

		String type = "new WyJS.Type.Record(" + names + ", " + types + ")";

		js.add(getIndentBlock() + "var r" + o.target() + " = new WyJS.Record(" + names + ", " + values + ", " + type
				+ ");\n");
	}

	private void write(Codes.FieldLoad o) {
		// TODO: Use Runtime file
		// use appropriate runtime method
		js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) + ".fieldLoad(" + '"' + o.field + '"'
				+ ");//" + o.toString() + "\n");
	}

	private void write(Codes.Update o) throws Exception {
		// TODO: Use Runtime file
		// Use appropriate runtime method
		Iterator<LVal> vals = o.iterator();
		int i = 0;
		boolean first = true;
		String str = "";
		while (vals.hasNext()) {
			LVal l = vals.next();
			if (l instanceof Codes.RecordLVal) {
				Codes.RecordLVal rec = (Codes.RecordLVal) l;
				if (vals.hasNext()) {
					if (first) {
						str = "r" + o.target() + ".fieldLoad(" + '"' + rec.field + '"' + ")";
					} else {
						str += ".fieldLoad(" + '"' + rec.field + '"' + ")";
					}
				} else {
					if (first) {
						str = "r" + o.target() + ".setValue(" + '"' + rec.field + '"' + ", r" + o.operand(i) + ");\n";
					} else {
						str += ".setValue(" + '"' + rec.field + '"' + ", r" + o.operand(i) + ");\n";
					}
				}
			} else if (l instanceof Codes.ListLVal) {
				Codes.ListLVal lis = (Codes.ListLVal) l;
				if (vals.hasNext()) {
					if (first) {
						str = "r" + o.target() + ".getValue(r" + lis.indexOperand + ")";
					} else {
						str += ".getValue(r" + lis.indexOperand + ")";
					}
				} else {
					if (first) {
						str = "r" + o.target() + ".setValue(r" + o.operand(0) + ", r" + o.operand(1) + ");\n";
					} else {
						str += ".setValue(r" + o.operand(i) + ", r" + o.operand(i + 1) + ");\n";
					}
				}
				i++;
			} else if (l instanceof Codes.ReferenceLVal) {
				throw new Exception("How to do Reference LVAL?");
			} else {
				throw new Exception("Unknown LVal type" + o);
			}
			first = false;
		}
		js.add(getIndentBlock() + str);

	}

	private void write(Codes.NewList o) throws Exception {
		String values = "[";
		if (o.operands().length == 0) {
			values += "]";
		} else {
			int i = 0;
			for (Integer x : o.operands()) {
				i++;
				if (i == o.operands().length) {
					values += "r" + x + "]";
				} else {
					values += "r" + x + ", ";
				}
			}
		}

		String type = getType(o.type());

		js.add(getIndentBlock() + "var r" + o.target() + " = new WyJS.Array(" + values + ", " + type + ");\n");
	}

	private void write(Codes.LengthOf o) {
		js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) + ".length();//" + o.toString() + "\n");
	}

	private void write(Codes.IndexOf o) {
		js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) + ".getValue(r" + o.operand(1) + ");\n");
	}

	private void write(Codes.ListGenerator o) throws Exception {
		js.add(getIndentBlock() + "var r" + o.target() + " = WyJS.ArrayGen(r" + o.operand(0) + ", r" + o.operand(1)
				+ ", " + getType(o.type()) + ");\n");
	}

	// private void write(Codes.ListOperator o) throws Exception{
	// switch(o.kind){
	// case APPEND:
	// js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) +
	// ".append(r" + o.operand(1) + ");\n");
	// break;
	// default:
	// throw new Exception("Unknown List Operator Kind " + o.kind);
	// }
	// }

	// private void write(Codes.SubList o){
	// js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) +
	// ".sublist(r" + o.operand(1) + ", r" + o.operand(2) + ");\n");
	// o.operand(0);//array
	// o.operand(1);//from
	// o.operand(2);//to
	// }

	private void write(Codes.NewTuple o) throws Exception {
		String values = "[";
		int i = 0;
		for (Integer x : o.operands()) {
			i++;
			if (i == o.operands().length) {
				values += "r" + x + "]";
			} else {
				values += "r" + x + ", ";
			}
		}
		String type = getType(o.assignedType());
		js.add(getIndentBlock() + "var r" + o.target() + " = new WyJS.Tuple(" + values + ", " + type + ");\n");
	}

	private void write(Codes.TupleLoad o) {
		js.add(getIndentBlock() + "var r" + o.target() + " = " + "r" + o.operand(0) + ".tupleLoad(" + o.index + ");\n");
	}

	private void write(Codes.Switch o) throws Exception {
		Iterator<Pair<Constant, String>> i = o.branches.iterator();
		boolean first = true;
		while (i.hasNext()) {
			Pair<Constant, String> pair = i.next();
			if (first) {
				first = false;
				js.add(getIndentBlock() + "if(WyJS.equals(r" + o.operand + ", " + getConst(pair.first())
						+ ", true)){\n");
				indent++;
				js.add(getIndentBlock() + "control_flow_pc = " + parseLabel(pair.second()) + ";\n");
				js.add(getIndentBlock() + "control_flow_repeat = true;\n");
				js.add(getIndentBlock() + "continue outer;\n");
				indent--;
				js.add(getIndentBlock() + "}\n");
			} else {
				js.add(getIndentBlock() + " else if(WyJS.equals(r" + o.operand + ", " + getConst(pair.first())
						+ ", true)){\n");
				indent++;
				js.add(getIndentBlock() + "control_flow_pc = " + parseLabel(pair.second()) + ";\n");
				js.add(getIndentBlock() + "control_flow_repeat = true;\n");
				js.add(getIndentBlock() + "continue outer;\n");
				indent--;
				js.add(getIndentBlock() + "}\n");
			}
		}
		js.add(getIndentBlock() + "else{\n");
		indent++;
		js.add(getIndentBlock() + "control_flow_pc = " + parseLabel(o.defaultTarget) + ";\n");
		js.add(getIndentBlock() + "control_flow_repeat = true;\n");
		js.add(getIndentBlock() + "continue outer;\n");
		indent--;
		js.add(getIndentBlock() + "}\n");

	}

	/**
	 * Returns a String with its label parsed, removed.
	 *
	 * @param label
	 *            a String containing a label.
	 * @return a String without it's label, parsed.
	 */
	private String parseLabel(String label) {
		return label.substring(5);
	}

	/**
	 * Identifies which instance of Type is given and returns a String with its
	 * instance in JavaScript.
	 *
	 * @param type
	 *            Type to be defined.
	 * @return a String with its instance in JavaScript.
	 * @throws Exception
	 *             in case the Type is not supported.
	 */
	private String getType(Type type) throws Exception {
		if (type instanceof Type.Any) {
			return "new WyJS.Type.Any();";
		} else if (type instanceof Type.Bool) {
			return "new WyJS.Type.Bool()";
		} else if (type instanceof Type.Byte) {
			return "new WyJS.Type.Byte()";
		} else if (type instanceof Type.Array) {
			return "new WyJS.Type.Array(" + getType(((Type.Array) type).element()) + ")";
		} else if (type instanceof Type.Int) {
			return "new WyJS.Type.Int()";
		} else if (type instanceof Type.Real) {
			return "new WyJS.Type.Real()";
		} else if (type instanceof Type.Record) {
			Type.Record rec = (Type.Record) type;
			String names = "[";
			String types = "[";
			int i = 0;
			ArrayList<String> temp = new ArrayList<String>(rec.keys());
			Collections.sort(temp);
			for (String s : temp) {
				i++;
				if (i == temp.size()) {
					names = names + '"' + s + '"' + "]";
					types += getType(rec.field(s)) + "]";
				} else {
					names = names + '"' + s + '"' + ", ";
					types += getType(rec.field(s)) + ", ";
				}
			}
			return "new WyJS.Type.Record(" + names + ", " + types + ")";
		} else if (type instanceof Type.Null) {
			return "new WyJS.Type.Null()";
		} else if (type instanceof Type.Void) {
			return "new WyJS.Type.Void()";
		} else if (type instanceof Type.Tuple) {
			Type.Tuple tup = (Type.Tuple) type;
			String types = "[";
			int i = 0;
			for (Type ty : tup.elements()) {
				i++;
				if (i == tup.elements().size()) {
					types += getType(ty) + "]";
				} else {
					types += getType(ty) + ", ";
				}
			}
			return "new WyJS.Type.Tuple(" + types + ")";
		} else if (type instanceof Type.Union) {
			Type.Union union = (Type.Union) type;
			String types = "[";
			int i = 0;
			for (Type ty : union.bounds()) {
				i++;
				if (i == union.bounds().size()) {
					types += getType(ty) + "]";
				} else {
					types += getType(ty) + ", ";
				}
			}
			return "new WyJS.Type.Union(" + types + ")";
		} else if (type instanceof Type.Nominal) {
			Registry reg = new Registry();
			DirectoryRoot root = new DirectoryRoot("minesweeper", reg);
			ArrayList<Root> roots = new ArrayList<Root>();
			roots.add(root);
			wybs.util.StdProject proj = new wybs.util.StdProject(roots);
			TypeExpander ty = new TypeExpander(proj);
			Type newTy = ty.getUnderlyingType(type);
			return getType(newTy);
		} else {
			throw new Exception("Unknown Type in getType " + type);
		}
	}

	/**
	 * Identifies which instance of Constant is given and returns a String with
	 * its instance in JavaScript.
	 *
	 * @param type
	 *            Constant to be defined.
	 * @return a String with its instance in JavaScript.
	 * @throws Exception
	 *             in case the Constant is not supported.
	 */
	private String getConst(Constant constant) throws Exception {
		if (constant instanceof Constant.Integer) {
			Constant.Integer inte = (Constant.Integer) constant;
			return "new WyJS.Integer(" + inte.value + ")";
		} else if (constant instanceof Constant.Bool) {
			Constant.Bool bol = (Constant.Bool) constant;
			return bol.value + "";
		} else if (constant instanceof Constant.Byte) {
			// get signed byte as integer
			Constant.Byte b = (Constant.Byte) constant;
			byte signedByte = b.value;

			// uses operation below
			int varByte = signedByte & (0xff);
			return "new WyJS.Byte(" + varByte + ")";
		} else if (constant instanceof Constant.Decimal) {
			Constant.Decimal deci = (Constant.Decimal) constant;
			return "new WyJS.Real(" + deci.value + ")";
		} else if (constant instanceof Constant.Lambda) {

		} else if (constant instanceof Constant.List) {
			Constant.List tmp = (Constant.List) constant;
			String values = "[";
			int i = 0;
			if (tmp.values.size() == 0) {
				values += "]";
			}
			for (Constant c : tmp.values) {
				i++;
				if (i == tmp.values.size()) {
					values += getConst(c) + "]";
				} else {
					values += getConst(c) + ", ";
				}
			}
			String type = getType(tmp.type());
			return "new WyJS.Array(" + values + ", " + type + ")";
		} else if (constant instanceof Constant.Null) {
			return "null";
		} else if (constant instanceof Constant.Rational) {

		} else if (constant instanceof Constant.Record) {
			Constant.Record rec = (Constant.Record) constant;
			int i = 0;
			String names = "[";
			String values = "[";
			for (String s : rec.values.keySet()) {
				i++;
				if (i == rec.values.keySet().size()) {
					names += s + "]";
					values += getConst(rec.values.get(s)) + "]";
				} else {
					names += s + ", ";
					values += getConst(rec.values.get(s)) + ", ";
				}
			}
			String type = getType(rec.type());
			return "new WyJS.Record(" + names + " ," + values + " ," + type + ")";
		} else if (constant instanceof Constant.Tuple) {
			Constant.Tuple tup = (Constant.Tuple) constant;
			String values = "[";
			int i = 0;
			for (Constant c : tup.values) {
				i++;
				if (i == tup.values.size()) {
					values += getConst(c) + "]";
				}
			}
			String type = getType(tup.type());
			return "new WyJS.Tuple(" + values + ", " + type + ")";
		} else if (constant instanceof Constant.Type) {
			Constant.Type ty = (Constant.Type) constant;
			return getType(ty.type);
		} else {

		}

		return "";
	}

	public static String nameMangle(String name, Type.FunctionOrMethod ft) {
		try {
			if (!exports.contains(name)) {
				return name + "$" + typeMangle(ft);
			}
			return name;
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}

	public static String typeMangle(Type.FunctionOrMethod ft) throws IOException {
		JavaIdentifierOutputStream jout = new JavaIdentifierOutputStream();
		BinaryOutputStream binout = new BinaryOutputStream(jout);
		Type.BinaryWriter tm = new Type.BinaryWriter(binout);
		tm.write(ft);
		binout.close(); // force flush
		return jout.toString();
	}

	int labelCount = -2;

	private int getFreshLabel() {
		return --labelCount;
	}

	/**
	 * Returns a String containing white space for proper indentation.
	 *
	 * @return a String containing white space for proper indentation.
	 */
	private String getIndentBlock() {
		String str = "";
		for (int i = 0; i < indent; i++) {
			str += "   ";
		}
		return str;
	}

	public static void main(String[] args) {
		try {
			// First, read the WyIL file specified on the command-line.
			WyilFileReader r = new WyilFileReader(args[0]);
			WyilFile wyilFile = r.read();
			// Second, print out its contents (for now, though this should be
			// changed)
			// WyilFilePrinter printer = new WyilFilePrinter(System.out);
			// printer.apply(wyilFile);
			// Make the javascript file

			new WyJS(wyilFile);
		} catch (IOException e) {
			System.out.println(e.getMessage());
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
}
