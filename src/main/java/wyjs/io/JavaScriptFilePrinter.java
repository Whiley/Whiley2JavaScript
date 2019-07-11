// Copyright (c) 2011, David J. Pearce (djp@ecs.vuw.ac.nz)
// All rights reserved.
//
// This software may be modified and distributed under the terms
// of the BSD license.  See the LICENSE file for details.

package wyjs.io;

import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.List;

import wycc.util.Pair;
import wyjs.core.JavaScriptFile;

public class JavaScriptFilePrinter {
	/**
	 * Enable support for ES6 which introduced several syntactic improvements, such
	 * as <code>let</code> and <code>const</code>, simplified object literal and
	 * destructuring syntax and modules.
	 */
	private final boolean es6 = false;
	private final PrintWriter out;

	public JavaScriptFilePrinter(OutputStream output) {
		this.out = new PrintWriter(output);
	}

	public void write(JavaScriptFile file) {
		for(JavaScriptFile.Declaration d : file.getDeclarations()) {
			write(0,d);
		}
		out.flush();
		out.close();
	}

	private void write(int indent, JavaScriptFile.Declaration d) {
		if (d instanceof JavaScriptFile.VariableDeclaration) {
			writeVariableDeclaration(indent, (JavaScriptFile.VariableDeclaration) d);
		} else if (d instanceof JavaScriptFile.Method) {
			write(indent, (JavaScriptFile.Method) d);
		} else {
			throw new RuntimeException("Unknown declaration encountered (" + d.getClass().getName() + ")");
		}
	}

	private void write(int indent, JavaScriptFile.Method method) {
		tab(indent);
		out.print("function ");
		out.print(method.getName());
		out.print("(");
		writeParameters(method.getParameters());
		out.print(")");
		if (method.getBody() != null) {
			writeBlock(indent, method.getBody());
			out.println();
		} else {
			out.println(";");
		}
	}

	private void writeParameters(List<String> params) {
		for (int i = 0; i != params.size(); ++i) {
			if (i != 0) {
				out.print(", ");
			}
			out.print(params.get(i));
		}
	}

	private void writeBlock(int indent, JavaScriptFile.Block block) {
		out.println(" {");
		for(JavaScriptFile.Term term : block.getTerms()) {
			writeStatement(indent+1,term);
		}
		tab(indent);out.print("}");
	}

	private void writeStatement(int indent, JavaScriptFile.Term term) {
		tab(indent);
		if(term instanceof JavaScriptFile.Assignment) {
			writeAssignment(indent,(JavaScriptFile.Assignment) term);
		} else if(term instanceof JavaScriptFile.Block) {
			writeBlock(indent, (JavaScriptFile.Block) term);
			out.println();
		} else if(term instanceof JavaScriptFile.Break) {
			writeBreak(indent,(JavaScriptFile.Break) term);
		} else if(term instanceof JavaScriptFile.Continue) {
			writeContinue(indent,(JavaScriptFile.Continue) term);
		} else if(term instanceof JavaScriptFile.DoWhile) {
			writeDoWhile(indent,(JavaScriptFile.DoWhile) term);
		} else if(term instanceof JavaScriptFile.For) {
			writeFor(indent,(JavaScriptFile.For) term);
		} else if(term instanceof JavaScriptFile.IfElse) {
			writeIfElse(indent,(JavaScriptFile.IfElse) term);
		} else if(term instanceof JavaScriptFile.Invoke) {
			writeInvoke((JavaScriptFile.Invoke) term);
			out.println(";");
		} else if(term instanceof JavaScriptFile.IndirectInvoke) {
			writeIndirectInvoke((JavaScriptFile.IndirectInvoke) term);
			out.println(";");
		} else if(term instanceof JavaScriptFile.Switch) {
			writeSwitch(indent,(JavaScriptFile.Switch) term);
		} else if(term instanceof JavaScriptFile.Return) {
			writeReturn(indent,(JavaScriptFile.Return) term);
		} else if(term instanceof JavaScriptFile.VariableDeclaration) {
			writeVariableDeclaration(indent,(JavaScriptFile.VariableDeclaration) term);
		} else if(term instanceof JavaScriptFile.While) {
			writeWhile(indent,(JavaScriptFile.While) term);
		} else {
			throw new IllegalArgumentException("unknown statement: " + term);
		}
	}

	private void writeAssignment(int indent, JavaScriptFile.Assignment term) {
		writeAssignment(term);
		out.println(";");
	}

	private void writeBreak(int indent, JavaScriptFile.Break term) {
		out.print("break");
		out.println(";");
	}

	private void writeContinue(int indent, JavaScriptFile.Continue term) {
		out.print("continue");
		out.println(";");
	}

	private void writeDoWhile(int indent, JavaScriptFile.DoWhile term) {
		out.print("do");
		writeBlock(indent, term.getBody());
		out.print(" while(");
		writeExpression(term.getCondition());
		out.println(");");
	}

	private void writeFor(int indent, JavaScriptFile.For term) {
		out.print("for(");
		writeForVariableDeclaration(term.getInitialiser());
		writeExpression(term.getCondition());
		out.print(";");
		writeExpression(term.getIncrement());
		out.print(")");
		writeBlock(indent, term.getBody());
		out.println();
	}

	private void writeForVariableDeclaration(JavaScriptFile.VariableDeclaration term) {
		out.print("var ");
		out.print(term.getName());
		if (term.getInitialiser() != null) {
			out.print(" = ");
			writeExpression(term.getInitialiser());
		}
		out.print(";");
	}

	private void writeIfElse(int indent, JavaScriptFile.IfElse term) {
		List<JavaScriptFile.IfElse.Case> cases = term.getCases();
		for(int i=0;i!=cases.size();++i) {
			JavaScriptFile.IfElse.Case cAse = cases.get(i);
			if(i != 0) {
				out.print(" else ");
			}
			if(cAse.getLabel() != null) {
				out.print("if(");
				writeExpression(cAse.getLabel());
				out.print(") ");
			}
			writeBlock(indent, cAse.getBlock());
		}
		out.println();
	}

	private void writeSwitch(int indent, JavaScriptFile.Switch term) {
		out.print("switch(");
		writeExpression(term.getCondition());
		out.println(") {");
		List<JavaScriptFile.Switch.Case> cases = term.getCases();
		for (int i = 0; i != cases.size(); ++i) {
			JavaScriptFile.Switch.Case cAse = cases.get(i);
			JavaScriptFile.Term value = cAse.getLabel();
			tab(indent+1);
			if (value == null) {
				out.print("default:");
			} else {
				out.print("case ");
				writeExpression(value);
				out.print(":");
			}
			// Check for fall-thru case.
			if(cAse.getBody() != null) {
				writeBlock(indent+1,cAse.getBody());
			}
			out.println();
		}
		tab(indent);
		out.println("}");
	}

	private void writeReturn(int indent, JavaScriptFile.Return term) {
		out.print("return");
		if(term.getInitialiser() != null) {
			out.print(" ");
			writeExpression(term.getInitialiser());
		}
		out.println(";");
	}

	private void writeVariableDeclaration(int indent, JavaScriptFile.VariableDeclaration term) {
		out.print("var ");
		out.print(term.getName());
		if(term.getInitialiser() != null) {
			out.print(" = ");
			writeExpression(term.getInitialiser());
		}
		out.println(";");
	}

	private void writeWhile(int indent, JavaScriptFile.While term) {
		out.print("while(");
		writeExpression(term.getCondition());
		out.print(") ");
		writeBlock(indent, term.getBody());
		out.println();
	}

	private void writeExpressionWithBraces(JavaScriptFile.Term term) {
		if(term instanceof JavaScriptFile.Operator) {
			out.print("(");
			writeExpression(term);
			out.print(")");
			return;
		}
		writeExpression(term);
	}

	private void writeExpression(JavaScriptFile.Term term) {
		if(term instanceof JavaScriptFile.ArrayAccess) {
			writeArrayAccess((JavaScriptFile.ArrayAccess) term);
		} else if(term instanceof JavaScriptFile.ArrayInitialiser) {
			writeArrayInitialiser((JavaScriptFile.ArrayInitialiser) term);
		} else if(term instanceof JavaScriptFile.ArrayLength) {
			writeArrayLength((JavaScriptFile.ArrayLength) term);
		} else if(term instanceof JavaScriptFile.Assignment) {
			writeAssignment((JavaScriptFile.Assignment) term);
		} else if(term instanceof JavaScriptFile.Constant) {
			writeConstant((JavaScriptFile.Constant) term);
		} else if(term instanceof JavaScriptFile.Invoke) {
			writeInvoke((JavaScriptFile.Invoke) term);
		} else if(term instanceof JavaScriptFile.IndirectInvoke) {
			writeIndirectInvoke((JavaScriptFile.IndirectInvoke) term);
		} else if(term instanceof JavaScriptFile.Lambda) {
			writeLambda((JavaScriptFile.Lambda) term);
		} else if(term instanceof JavaScriptFile.ObjectLiteral) {
			writeObjectLiteral((JavaScriptFile.ObjectLiteral) term);
		} else if(term instanceof JavaScriptFile.Operator) {
			writeOperator((JavaScriptFile.Operator) term);
		} else if(term instanceof JavaScriptFile.PropertyAccess) {
			writePropertyAccess((JavaScriptFile.PropertyAccess) term);
		} else if(term instanceof JavaScriptFile.VariableAccess) {
			writeVariableAccess((JavaScriptFile.VariableAccess) term);
		} else {
			throw new IllegalArgumentException("unknown term encountered: " + term);
		}
	}

	private void writeAssignment(JavaScriptFile.Assignment term) {
		writeExpression(term.getLefthandSide());
		out.print(" = ");
		writeExpression(term.getRighthandSide());
	}

	private void writeArrayAccess(JavaScriptFile.ArrayAccess term) {
		writeExpressionWithBraces(term.getSource());
		out.print("[");
		writeExpression(term.getIndex());
		out.print("]");
	}

	private void writeArrayInitialiser(JavaScriptFile.ArrayInitialiser term) {
		out.print("[");
		for(int i=0;i!=term.size();++i) {
			if(i != 0) {
				out.print(", ");
			}
			writeExpression(term.getElement(i));
		}
		out.print("]");
	}

	private void writeArrayLength(JavaScriptFile.ArrayLength term) {
		writeExpressionWithBraces(term.getSource());
		out.print(".length");
	}

	private void writeConstant(JavaScriptFile.Constant term) {
		Object value = term.getValue();
		if(value instanceof String) {
			out.print("\"");
			out.print(term.getValue());
			out.print("\"");
		} else if(value instanceof Long) {
			out.print(term.getValue());
			out.print("L");
		} else if(value instanceof Byte){
			byte b = (Byte) value;
			if(es6) {
				// NOTE: ES6 supports binary literals
				out.print("0b");
				out.print(Integer.toBinaryString(b & 0xFF));
			} else {
				// NOTE: this is the old way
				out.print("parseInt('");
				out.print(Integer.toBinaryString(b & 0xFF));
				out.print("',2)");
			}
		} else {
			out.print(term.getValue());
		}
	}

	private void writeInvoke(JavaScriptFile.Invoke term) {
		JavaScriptFile.Term receiver = term.getReceiver();
		if(receiver != null) {
			writeExpressionWithBraces(receiver);
			out.print(".");
		}
		out.print(term.getName());
		out.print("(");
		writeArguments(term.getArguments());
		out.print(")");
	}

	private void writeIndirectInvoke(JavaScriptFile.IndirectInvoke term) {
		writeExpressionWithBraces(term.getReceiver());
		out.print("(");
		writeArguments(term.getArguments());
		out.print(")");
	}

	private void writeObjectLiteral(JavaScriptFile.ObjectLiteral term) {
		out.print("{");
		for(int i=0;i!=term.size();++i) {
			Pair<String,JavaScriptFile.Term> property = term.getProperty(i);
			if(i != 0) {
				out.print(", ");
			}
			out.print(property.first());
			out.print(": ");
			writeExpression(property.second());
		}
		out.print("}");
	}

	private void writeOperator(JavaScriptFile.Operator term) {
		JavaScriptFile.Operator.Kind kind = term.getKind();
		String operator = getOperatorString(kind);
		List<JavaScriptFile.Term> operands = term.getOperands();
		if(isPrefix(kind)) {
			out.print(operator);
			writeExpressionWithBraces(operands.get(0));
		} else {
			writeExpressionWithBraces(operands.get(0));
			for (int i = 1; i < operands.size(); ++i) {
				out.print(" ");
				out.print(operator);
				out.print(" ");
				writeExpressionWithBraces(operands.get(i));
			}
		}
	}

	private boolean isPrefix(JavaScriptFile.Operator.Kind kind) {
		switch(kind) {
		case NOT:
		case NEG:
		case BITWISEINVERT:
		case NEW:
			return true;
		default:
			return false;
		}
	}

	private String getOperatorString(JavaScriptFile.Operator.Kind kind) {
		switch(kind) {
		case NOT:
			return "!";
		case NEG:
			return "-";
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
		case BITWISEINVERT:
			return "~";
		case LEFTSHIFT:
			return "<<";
		case RIGHTSHIFT:
			return ">>";
		case NEW:
			return "new ";
		default:
			throw new IllegalArgumentException("unknown operator kind: " + kind);
		}
	}

	private void writePropertyAccess(JavaScriptFile.PropertyAccess term) {
		writeExpressionWithBraces(term.getSource());
		out.print(".");
		out.print(term.getProperty());
	}

	private void writeVariableAccess(JavaScriptFile.VariableAccess term) {
		out.print(term.getName());
	}

	private void writeLambda(JavaScriptFile.Lambda term) {
		out.print("function(");
		writeParameters(term.getParameters());
		out.print(")");
		// FIXME: the indentation should be passed through.
		writeBlock(1,term.getBody());
	}

	/**
	 * Print out a comma-separated list of argument expressions.
	 *
	 * @param arguments
	 */
	private void writeArguments(List<JavaScriptFile.Term> arguments) {
		for(int i=0;i!=arguments.size();++i) {
			if(i != 0) {
				out.print(", ");
			}
			writeExpression(arguments.get(i));
		}
	}

	private void tab(int indent) {
		for (int i = 0; i != indent; ++i) {
			out.print("   ");
		}
	}
}
