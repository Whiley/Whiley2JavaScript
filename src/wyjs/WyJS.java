package wyjs;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import wyil.io.WyilFilePrinter;
import wyil.io.WyilFileReader;
import wyil.lang.Code;
import wyil.lang.CodeBlock;
import wyil.lang.CodeBlock.Index;
import wyil.lang.CodeUtils;
import wyil.lang.Codes;
import wyil.lang.Codes.If;
import wyil.lang.Codes.Label;
import wyil.lang.Type;
import wyil.lang.Type.Any;
import wyil.lang.WyilFile;
import wyil.lang.WyilFile.Constant;
import wyil.lang.WyilFile.FunctionOrMethod;
import wyil.util.AttributedCodeBlock;

public class WyJS {

	private WyilFile file;
	private int indent = 0;
	//Sorted list of strings that make up the javascript file
	private ArrayList<String> js;
	
	/**
	 * Creates the contents of a JavaScript file from 
	 * a specified Whiley wyil file.
	 * The JavaScript is equal to the wyil file
	 * @param  file the wyil file that is being converted
	 * @return WyJS The JavaScript converter object
	 * @throws Exception 
	 */
	public WyJS (WyilFile file) throws Exception {
		this.file = file;
		ArrayList<FunctionOrMethod> fom = new ArrayList<FunctionOrMethod>(file.functionOrMethods());
		js = new ArrayList<String>();
		//for each function of method, write it to an array in JavaScript form
		for (FunctionOrMethod f : fom) {
			write(f);
		}
		//print it out once we're done
		for(String s: js){
			System.out.print(s);
		}
	}
	
	/**
	 * Creates a JavaScript file from the JavaScript array
	 * Used for the test cases
	 * @param  filename the name of the file being converted
	 * @param srcDir the source directory of where the file 
	 * 		  will be stored 
	 * @return WyJS The JavaScript converter object
	 */
	public void makeFile(String filename, String srcDir){
		try {
			PrintStream out = new PrintStream(new FileOutputStream(srcDir + "/" + filename + ".js"));
			for(String s: js){
				out.print(s);
			}
			out.println("test();");
			out.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
	}
	
	private void write(FunctionOrMethod func) throws Exception{
		String str = "";
		str += getIndentBlock() + "function " + func.name() + "(";
		int i = 1;
		for(Type t : func.type().params()){
			if(i==1){
				str += "r" + (i-1);
			}else{
				str += ", r" + (i-1);
			}
			i++;
		}
		str += "){//" + func.type().toString() +"\n";
		js.add(str);
		indent++;
		// make initial Switch
		js.add(getIndentBlock() + "var control_flow_repeat = true;\n"
				+ getIndentBlock() + "var control_flow_pc = -1;\n"
				+ getIndentBlock() + "outer:\n"
				+ getIndentBlock() + "while(control_flow_repeat){\n");
		indent++;
		js.add(getIndentBlock() + "control_flow_repeat = false\n"
				+ getIndentBlock() + "switch(control_flow_pc){\n");
		indent++;
		js.add(getIndentBlock() + "case -1 :\n");
		indent++;
		
		//for each bytecode in the method, convert it to JavaScript
		Iterator iter = func.body().iterator();
		while(iter.hasNext()){
			Object tmp = iter.next();
			write(tmp);
		}
		//close the file
		indent--;
		indent--;
		js.add(getIndentBlock() + "}\n");
		indent--;
		js.add(getIndentBlock() + "}\n");
		indent--;
		js.add("}\n\n");
	}
	
	private void write(Object o) throws Exception{
		if(o instanceof Codes.Const){
			write((Codes.Const) o);
		}else if(o instanceof Codes.BinaryOperator){
			write((Codes.BinaryOperator) o);
		}else if(o instanceof Codes.Assign){
			write((Codes.Assign) o);
		}else if(o instanceof Codes.Return){
			write((Codes.Return) o);
		}else if(o instanceof Codes.If){
			write((Codes.If) o);
		}else if(o instanceof Codes.Goto){
			write((Codes.Goto) o);
		}else if(o instanceof Codes.Assume){
			write((Codes.Assume) o);
		}else if(o instanceof Codes.Assert){
			write((Codes.Assert)o);
		}else if(o instanceof Codes.Label){
			write((Codes.Label) o);
		}else if(o instanceof Codes.Invoke){
			write((Codes.Invoke) o);
		}else if(o instanceof Codes.Fail){
			write((Codes.Fail) o);
		}else if(o instanceof Codes.UnaryOperator){
			write((Codes.UnaryOperator) o);
		}else if(o instanceof Codes.Loop){
			write((Codes.Loop) o);
		}else if(o instanceof Codes.NewRecord){
			write((Codes.NewRecord) o);
		}else if(o instanceof Codes.FieldLoad){
			write((Codes.FieldLoad) o);
		}else if(o instanceof Codes.Update){
			write((Codes.Update) o);
		}else if(o instanceof Codes.NewList){
			write((Codes.NewList) o);
		}else if(o instanceof Codes.LengthOf){
			write((Codes.LengthOf) o);
		}else if(o instanceof Codes.IndexOf){
			write((Codes.IndexOf) o);
		}
		else{
			throw new Exception("Unknown object " + o.getClass());
		}
	}
	
	private void write(Codes.Const o){
		System.out.println(o.constant.type());
		js.add(getIndentBlock() + "var r" + o.target() + " = " + o.constant + ";//" + o.toString() +"\n");
	}
	
	private void write(Codes.BinaryOperator o) throws Exception{
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
			throw new Exception("Unknown kind" + o.toString());
		}
		js.add(str);
	}
	
	private void write(Codes.Assign o){
		js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) + ";//" + o.toString() +"\n");
	}
	
	private void write(Codes.Return o){
		if(o.operand!=-1){
			js.add(getIndentBlock() + "return r" + o.operand + ";//" + o.toString() +"\n");
		}
	}
	
	private void write(Codes.If o) throws Exception{
		//if we need to close more than one curly brace
		boolean closeCurly = false;
		if(o.type instanceof Type.Record){
			//TODO: deal with recursive records
			String ifop = getIfop(o, false);
			Type.Record rec = (Type.Record)o.type;
			//List<String> ends = getExtensions(rec);
			js.add(getIndentBlock() + "if(");
			int x = 0;
//			for(String s: rec.keys()){
//				x++;
//				if(x == rec.keys().size()){
//					js.add("r" + o.leftOperand + "." + s + ifop + " r" + o.rightOperand + "." + s + "){//" + o.toString() +"\n");
//				}else{
//					js.add("r" + o.leftOperand + "." + s + ifop + " r" + o.rightOperand + "." + s + " && ");
//				}
//			}
			for(String s: rec.keys()){
				x++;
				if(x == rec.keys().size()){
					js.add("JSON.stringify(r" + o.leftOperand + ")" + ifop + " JSON.stringify(r" + o.rightOperand + ")" + "){//" + o.toString() +"\n");
				}else{
					js.add("r" + o.leftOperand + "." + s + ifop + " r" + o.rightOperand + "." + s + " && ");
				}
			}
		}else if(o.type instanceof Type.List){
			String ifop = getIfop(o, false);
			Type.List list = (Type.List) o.type;
			//first compare the lengths of the arrays.
			js.add(getIndentBlock() + "if(r" + o.leftOperand + ".length" + ifop + " r" + o.rightOperand + ".length){\n");
			indent++;
			//if they are equal, compare each element of the list
			js.add(getIndentBlock() + "var listComp = true;\n");
			js.add(getIndentBlock() + "for(var i = 0; i<r" + o.leftOperand + ".length;i++){\n");
			indent++;
			js.add(getIndentBlock() + "if(r"+ o.leftOperand + "[i] "+ getIfop(o,true) +" r" + o.rightOperand + "[i]){\n");
			indent++;
			js.add(getIndentBlock() + "listCompFail = false;\n");
			indent--;
			js.add(getIndentBlock() + "}\n");
			indent--;
			js.add(getIndentBlock() + "}\n");
			//if all elements are equal, execute the code
			js.add(getIndentBlock() + "if(listComp){//" + o.toString() +"\n");
			closeCurly = true;
		}else{
			//otherwise we can just add it normally
			js.add(getIndentBlock() + "if(r" + o.leftOperand + " " + getIfop(o, false) + " r" + o.rightOperand + "){//" + o.toString() +"\n");
		}

		indent++;
		js.add(getIndentBlock() + "control_flow_pc = " + parseLabel(o.target) + ";\n");
		js.add(getIndentBlock() + "control_flow_repeat = true;\n");
		js.add(getIndentBlock() + "continue outer;\n");
		if(closeCurly){
			indent--;
			js.add(getIndentBlock() + "}\n");
		}
		indent--;
		js.add(getIndentBlock() + "}\n");
	}
	
	private List<String> getExtensions(Type.Record rec){
		List<String> extensions = new ArrayList<String>();
		int index = 0;
		String current = "";
		for(String key: rec.keys()){
			Type t = rec.field(key);
			while(t instanceof Type.Record){
				current += "." + key;
				
			}
			
			current += "." + key;
			index++;
		}
		return null;
	}
	
	private void write(Codes.Goto o){
		js.add(getIndentBlock() + "control_flow_pc = " + parseLabel(o.target) + ";\n");
		js.add(getIndentBlock() + "control_flow_repeat = true;\n");
		js.add(getIndentBlock() + "continue outer;//" + o.toString() +"\n");
	}
	
	private void write(Codes.Assume o) throws Exception{
		for(Code c : o.bytecodes()){
			write(c);
		}
	}
	
	private void write(Codes.Assert o) throws Exception{
		for(Code c : o.bytecodes()){
			write(c);
		}
	}
	
	private void write(Codes.Invoke o){
		String str = "";
		if(o.target() != -1){
			str = getIndentBlock() + "var r" + o.target() + " = ";
			str+= o.name.name() + "(";
		}else {
			str+= getIndentBlock() + o.name.name() + "(";
		}
		int x = 1;
		for(Integer i: o.operands()){
			if(x == 1){
				str+= "r" + i;
			}else{
				str+= ", r" + i;
			}
			x++;
		}
		str += ");//" + o.toString() +"\n";
		js.add(str);
	}
	
	private void write(Codes.Label o){
		indent--;
		js.add(getIndentBlock() + "case " + parseLabel(o.label) + ":\n");
		indent++;
	}
	
	private void write(Codes.Fail o){
		js.add(getIndentBlock() + "throw {name: 'Assert Failed', message: '" +o.toString() + "'}\n");
	}
	
	private void write(Codes.UnaryOperator o){
		js.add(getIndentBlock() + "var r" + o.target() + " = -" + "r" + o.operand(0) + ";//" + o.toString() +"\n");
	}
	
	private void write(Codes.Loop o) throws Exception{
		Map<String, Index> labelMap = CodeUtils.buildLabelMap(new AttributedCodeBlock(o.bytecodes()));
		Iterator iter;
		js.add(getIndentBlock() + "while(true){//" + o.toString() +"\n");
		indent++;
		for(Code c: o.bytecodes()){
			if(c instanceof Codes.If){
				Index x;
				if((x = labelMap.get(((Codes.If) c).target)) != null){
					//within the loop
					writeLoopIf(o, (Codes.If) c, labelMap);
				}else{
					//jumping out, parse normally
					write(c);
				}
			}else if(c instanceof Codes.Goto){
				Index x;
				boolean write = false;
				if((x = labelMap.get(((Codes.Goto) c).target)) != null){
					//jumping within loop, have to write the contents of the label we want to jump to
					for(Code code: o.bytecodes()){
						if(write){
							write(code);
						}
						if(c instanceof Label){
							if(((Label) code).label == ((Codes.If) c).target){
								write = true;
							}else{
								write = false;
							}
						}
					}
				}else{
					//jumping out the loop, parse normally
					write(c);
				}
			}else if(c instanceof Codes.Assert){
				//TODO:
			}else if(c instanceof Codes.Assume){
				//TODO:
			}else if(c instanceof Codes.Label){
				 //should have already been written
			}else{
				write(c);
			}
		}
		indent--;
		js.add(getIndentBlock() + "}\n");
		
	}
	
	private void writeLoopIf(Codes.Loop l, Codes.If o, Map<String, Index> map) throws Exception{
		String tar = o.target;//the name of the label we need
		boolean write = false;
		
		boolean inDeep = false;
		if(o.type instanceof Type.Record){
			String ifop = getIfop(o, false);
			Type.Record rec = (Type.Record)o.type;
			js.add(getIndentBlock() + "if(");
			int x = 0;
			for(String s: rec.keys()){
				x++;
				if(x == rec.keys().size()){
					js.add("r" + o.leftOperand + "." + s + ifop + " r" + o.rightOperand + "." + s + "){\n");
				}else{
					js.add("r" + o.leftOperand + "." + s + ifop + " r" + o.rightOperand + "." + s + " && ");
				}
			}
		}else if(o.type instanceof Type.List){
			String ifop = getIfop(o, false);
			js.add(getIndentBlock() + "if(r" + o.leftOperand + ".length" + ifop + " r" + o.rightOperand + ".length){\n");
			indent++;
			js.add(getIndentBlock() + "var listComp = true;\n");
			js.add(getIndentBlock() + "for(var i = 0; i<r" + o.leftOperand + ".length;i++){\n");
			indent++;
			js.add(getIndentBlock() + "if(r"+ o.leftOperand + "[i] "+ getIfop(o,true) +" r" + o.rightOperand + "[i]){\n");
			indent++;
			js.add(getIndentBlock() + "listCompFail = false;\n");
			indent--;
			js.add(getIndentBlock() + "}\n");
			indent--;
			js.add(getIndentBlock() + "}\n");
			js.add(getIndentBlock() + "if(listComp){\n");
			inDeep = true;
		}else{
			js.add(getIndentBlock() + "if(r" + o.leftOperand + " " + getIfop(o, false) + " r" + o.rightOperand + "){\n");
		}
		indent++;
		for(Code c: l.bytecodes()){
			if(write){
				write(c);
			}
			if(c instanceof Label){
				if(((Label) c).label == tar){
					write = true;
				}else{
					write = false;
				}
			}
		}
		if(inDeep){
			indent--;
			js.add(getIndentBlock() + "}\n");
		}
		js.add(getIndentBlock() + "continue;\n");
		indent--;
		js.add(getIndentBlock() + "}\n");
	}
	
	private void write(Codes.NewRecord o){
		String str = getIndentBlock() + "var r" + o.target() + " = {";
		int i = 0;
		for(String s: o.type().keys()){
			str += s + ": r" + o.operand(i);
			i++;
			if(i != o.type().keys().size()){
				str+=", ";
			}
		}
		str += "};//" + o.toString() + "\n";
		js.add(str);
	}
	
	private void write(Codes.FieldLoad o){
		js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) + "." + o.field + ";//" + o.toString() + "\n");
	}
	
	private void write(Codes.Update o) throws Exception{
		if(o.afterType instanceof Type.List){
			js.add(getIndentBlock() + "r" + o.target() + "[r" + o.operand(0) + "] = r" + o.operand(1) + ";//" + o.toString() + "\n");
		}else if(o.afterType instanceof Type.Record){
			String extension = "";
			for(String s: o.fields){
				extension += "." + s;
			}
			js.add(getIndentBlock() + "r" + o.target() + extension + " = r" + o.operand(0) + ";//" + o.toString() + "\n");
		}else{
			throw new Exception("Unknown Update Type" + o.toString());
		}
		
	}
	
	public void write(Codes.NewList o){
		String str = getIndentBlock() + "var r" + o.target() + " = [";
		int x = 0;
		if(o.operands().length==0){
			str += "];\n";
		}else{
			for(Integer i: o.operands()){
				x++;
				if(x==o.operands().length){
					str += "r" + i + "];\n";
				}else{
					str += "r" + i + ", ";
				}
			}
		}
		js.add(str);
	}
	
	public void write(Codes.LengthOf o){
		js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) + ".length;//" + o.toString() + "\n");
	}
	
	public void write(Codes.IndexOf o){
		js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) + "[r" + o.operand(1) + "];\n");
	}
	
	private String getIfop(Codes.If opers, boolean invert) throws Exception{
		if(opers.op == Codes.Comparator.EQ){//==
			if(invert) return " != ";
			return " == ";
		}else if(opers.op == Codes.Comparator.GT){//>
			if(invert) return " <= ";
			return " > ";
		}else if(opers.op == Codes.Comparator.GTEQ){//>=
			if(invert) return " < ";
			return " >= "; 
		}else if(opers.op == Codes.Comparator.LT){//<
			if(invert) return " >= ";
			return " < "; 
		}else if(opers.op == Codes.Comparator.LTEQ){//<=
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
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
}
