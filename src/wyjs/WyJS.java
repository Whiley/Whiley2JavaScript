package wyjs;

import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.io.PrintWriter;
import java.io.Writer;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import wyil.io.WyilFilePrinter;
import wyil.io.WyilFileReader;
import wyil.lang.Code;
import wyil.lang.Codes;
import wyil.lang.Codes.Label;
import wyil.lang.Type;
import wyil.lang.WyilFile;
import wyil.lang.WyilFile.FunctionOrMethod;

public class WyJS {

	private WyilFile file;
	private int indent = 0;
	//Sorted list of strings that make up the javascript file
	private ArrayList<String> js;
	private ArrayList<Label> ignoreLabels;
	
	private boolean inSwitch = false;
	private boolean inIf = false;
	private boolean inIfDif = false;
	private boolean isBreak = false;
	
	public WyJS(WyilFile file) {
		this.file = file;
		ArrayList<FunctionOrMethod> fom = new ArrayList<FunctionOrMethod>(file.functionOrMethods());
		js = new ArrayList<String>();
		ignoreLabels = new ArrayList<Label>();
		for (FunctionOrMethod f : fom) {
			write(f);
		}
		for(String s: js){
			System.out.print(s);
		}
	}
	
	public void makeFile(String filename, String srcDir){
		
		try {
			PrintStream out = new PrintStream(new FileOutputStream(srcDir + "/" + filename + ".js"));
			for(String s: js){
				out.print(s);
			}
			out.println("test();");
			out.close();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	private void write(FunctionOrMethod e){
		StringBuilder str = new StringBuilder();
		str.append(getIndentBlock() + "function " + e.name() + "(");
		int i = 1;
		for(Type t : e.type().params()){
			if(i==1){
				str.append("r" + (i-1));
			}else{
				str.append(", r" + (i-1));
			}
			i++;
		}
		str.append("){//" + e.type().toString() +"\n");
		js.add(str.toString());
		indent++;
		Iterator iter = e.body().iterator();
		while(iter.hasNext()){
			Object tmp = iter.next();
			//System.out.println(tmp);
			write(tmp);
		}
		if(inSwitch){
			inSwitch = false;
			indent--;
			indent--;
			js.add(getIndentBlock() + "}\n");
			indent--;
			js.add(getIndentBlock() + "}\n");
		}
		indent--;
		js.add("}\n\n");
	}
	
	private void write(Object o){
		if(o instanceof Codes.Const){
			write((Codes.Const) o);
		}else if(o instanceof Codes.BinaryOperator){
			write((Codes.BinaryOperator) o);
		}else if(o instanceof Codes.Assign){
			write((Codes.Assign) o);
		}else if(o instanceof Codes.Return){
			write((Codes.Return) o);
		}else if(o instanceof Codes.If){
			try {
				write((Codes.If) o);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}else if(o instanceof Codes.Goto){
			write((Codes.Goto) o);
		}else if(o instanceof Codes.Assume){
			try {
				write((Codes.Assume) o);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}else if(o instanceof Codes.Assert){
			try {
				write((Codes.Assert)o);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}else if(o instanceof Codes.Label){
			write((Codes.Label) o);
		}else if(o instanceof Codes.Invoke){
			write((Codes.Invoke) o);
		}else if(o instanceof Codes.Fail){
			write((Codes.Fail) o);
		}
		else{
			System.out.println("Unknown object " + o.getClass());
		}
	}
	
	private void write(Codes.Const o){
		js.add(getIndentBlock() + "var r" + o.target() + " = " + o.constant + ";//" + o.toString() +"\n");
	}
	
	private void write(Codes.BinaryOperator o){
		String str = "";
		str += getIndentBlock() + "var r" + o.target() + " = ";
		if(o.kind == Codes.BinaryOperatorKind.ADD){
			str += "r" + o.operand(0) + " + " + "r" + o.operand(1) + ";//" + o.toString() +"\n";
		}else if(o.kind == Codes.BinaryOperatorKind.BITWISEAND){
			System.out.println("Cant do BitWiseAnd");
		}else if(o.kind == Codes.BinaryOperatorKind.BITWISEOR){
			System.out.println("Cant do BitWiseOr");
		}else if(o.kind == Codes.BinaryOperatorKind.BITWISEXOR){
			System.out.println("Cant do BitWiseXOR");
		}else if(o.kind == Codes.BinaryOperatorKind.DIV){
			str += "r" + o.operand(0) + " / " + "r" + o.operand(1) + ";//" + o.toString() +"\n";
		}else if(o.kind == Codes.BinaryOperatorKind.LEFTSHIFT){
			System.out.println("Cant do LeftShift");
		}else if(o.kind == Codes.BinaryOperatorKind.MUL){
			str += "r" + o.operand(0) + " * " + "r" + o.operand(1) + ";//" + o.toString() +"\n";
		}else if(o.kind == Codes.BinaryOperatorKind.RANGE){
			System.out.println("Cant do Range");
		}else if(o.kind == Codes.BinaryOperatorKind.REM){
			System.out.println("Cant do REM");
		}else if(o.kind == Codes.BinaryOperatorKind.RIGHTSHIFT){
			System.out.println("Cant do RightShift");
		}else if(o.kind == Codes.BinaryOperatorKind.SUB){
			str += "r" + o.operand(0) + " - " + "r" + o.operand(1) + ";//" + o.toString() +"\n";
		}else {
			System.out.println("Unknown kind");
		}
		js.add(str);
	}
	
	private void write(Codes.Assert o) throws Exception{
		String str = (getIndentBlock() + "if(");
		ArrayList<Code> code = new ArrayList<Code>();
		for(Code c: o.bytecodes()){
			write(c);
//			if(c instanceof Codes.If){
//				Codes.If opers = (Codes.If) c;
//				str += "r" + opers.leftOperand + getIfop(opers, true) + "r" + opers.rightOperand + "){//" + o.toString() + "\n";
//				indent++;
//				str+= getIndentBlock() + "throw {name: 'Assert Failed', message: 'r" + opers.leftOperand + " !" + opers.op + " r" + opers.rightOperand + "'}\n";
//				indent--;
//				str+= getIndentBlock() + "}\n";
//			}else if(c instanceof Codes.Label){
//				
//				ignoreLabels.add((Codes.Label) c);
//			}else if(c instanceof Codes.Fail){
//				
//			}else{
//				code.add(c);
//			}
		}
		
//		for(Code c: code){
//			write(c);
//		}
//		code.clear();
//		js.add(str);
	}
	
	private void write(Codes.Assume o) throws Exception{
		String str = (getIndentBlock() + "if(");
		ArrayList<Code> code = new ArrayList<Code>();
		for(Code c: o.bytecodes()){
			if(c instanceof Codes.If){
				Codes.If opers = (Codes.If) c;
				str += "r" + opers.leftOperand + getIfop(opers, true) + "r" + opers.rightOperand + "){//" + o.toString() + "\n";
				indent++;
				str+= getIndentBlock() + "throw {name: 'Assert Failed', message: 'r" + opers.leftOperand + " !" + opers.op + " r" + opers.rightOperand + "'}\n";
				indent--;
				str+= getIndentBlock() + "}\n";
			}else if(c instanceof Codes.Label){
				
				this.ignoreLabels.add((Codes.Label) c);
			}else if(c instanceof Codes.Fail){
				
			}else{
				code.add(c);
			}
		}
		
		for(Code c: code){
			write(c);
		}
		js.add(str);
	}
	
	private void write(Codes.Return o){
		if(o.operand!=-1){
			js.add(getIndentBlock() + "return r" + o.operand + ";//" + o.toString() +"\n");
		}
	}
	
	private void write(Codes.Assign o){
		js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) + ";//" + o.toString() +"\n");
	}
	
	private void write(Codes.Fail o){
		js.add(getIndentBlock() + "throw {name: 'Assert Failed', message: '" +o.toString() + "'}\n");
	}

	private int defaultCount = -1;
	
	private void write(Codes.If o) throws Exception{
		String str = "";
		if(inSwitch){
			//indent--;
			//str += getIndentBlock() + "case "+ defaultCount-- +" :\n";
			//indent++;
			str += getIndentBlock() + "if(r" + o.leftOperand + " " + getIfop(o, true) + " r" + o.rightOperand + "){\n";
			indent++;
			inIfDif = true;
		}else{
			str += getIndentBlock() + "var control_flow_repeat = true;\n";
			str += getIndentBlock() + "var control_flow_pc = -1;\n";
			str += getIndentBlock() + "outer:\n";
			str += getIndentBlock() + "while(control_flow_repeat){\n";
			//str += getIndentBlock() + "console.log('um');\n";
			indent++;
			str += getIndentBlock() + "control_flow_repeat = false\n";
			str += getIndentBlock() + "switch(control_flow_pc){\n";
			indent++;
			str += getIndentBlock() + "case "+ defaultCount-- +" :\n";
			indent++;
			str += getIndentBlock() + "if(r" + o.leftOperand + " " + getIfop(o, true) + " r" + o.rightOperand + "){\n";
			indent++;
			inSwitch = true;
			inIf = true;
		}

		//need 4 indents inwards
		js.add(str);
	}
	
	private void write(Codes.Goto o){
		js.add(getIndentBlock() + "control_flow_pc = " + parseLabel(o.target) + ";\n");
		js.add(getIndentBlock() + "control_flow_repeat = true;\n");
		js.add(getIndentBlock() + "continue outer;\n");
		if(inIf){
			inIf = false;
			indent--;
			js.add(getIndentBlock() + "}\n");
		}
	}
	
	private void write(Codes.Label o){
		if(this.ignoreLabels.contains(o)){
			System.out.println(o.label);
			//IGNORE
		}else{
			System.out.println(inSwitch);
			if(inSwitch){
				if(inIf){
					System.out.println("I dont know" + o.label);
					indent--;
					js.add(getIndentBlock() + "}\n");
					inIf = false;
				}
				if(isBreak){
					js.add("break;");
					isBreak = false;
				}
				if(inIfDif){
					indent--;
					js.add(getIndentBlock() + "}\n");
					inIfDif = false;
					inIf = true;
				}else{
					indent--;
					js.add(getIndentBlock() + "case " + parseLabel(o.label) + ":\n");
					indent++;
				}
			}
		}
	}
	
	private void write(Codes.Invoke o){
		String str = getIndentBlock() + "var r" + o.target() + " = ";
		str+= o.name.name() + "(";
		int x = 1;
		for(Integer i: o.operands()){
			if(x == 1){
				str+= "r" + i;
			}else{
				str+= ", r" + i;
			}
			str += ");\n";
		}
		
		js.add(str);
	}
	
	private String getIfop(Codes.If opers, boolean invert) throws Exception{
		if(opers.op == Codes.Comparator.EQ){//==
			if(invert) return " != ";
			return " == ";
		}else if(opers.op == Codes.Comparator.GT){//>
			System.out.println(invert);
			if(invert) return " <= ";
			return " > ";
		}else if(opers.op == Codes.Comparator.GTEQ){//>=
			if(invert) return " < ";
			return " >= "; 
		}else if(opers.op == Codes.Comparator.LT){//<
			if(invert) return " >= ";
			return " < "; 
		}else if(opers.op == Codes.Comparator.LTEQ){//<=
			System.out.println(invert);
			if(invert) return " > ";
			return " <= ";
		}else if(opers.op == Codes.Comparator.NEQ){//!=
			if(invert) return " == ";
			return " != ";
		}else{
			throw new Exception(opers.op + "not supported?");
		}
	}
	
	private String parseLabel(String label){
		return label.substring(5);
	}
	
	
	private String getIndentBlock(){
		String str = "";
		for(int i = 0; i < indent; i++){
			str+="   ";
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
			WyilFilePrinter printer = new WyilFilePrinter(System.out);
			printer.apply(wyilFile);
			
			//Make the javascript file
			
			WyJS wy = new WyJS(wyilFile);
		} catch (IOException e) {
			System.out.println(e.getMessage());
		}
	}
}
