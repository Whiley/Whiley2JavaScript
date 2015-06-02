package wyjs;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
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
import wyil.lang.WyilFile;
import wyil.lang.WyilFile.Constant;
import wyil.lang.WyilFile.FunctionOrMethod;
import wyil.util.AttributedCodeBlock;

public class WyJS {

	private WyilFile file;
	private int indent = 0;
	private int currentLabel;
	//Sorted list of strings that make up the javascript file
	private ArrayList<String> js;
	private ArrayList<Label> ignoreLabels;
	
	public WyJS(WyilFile file) {
		this.file = file;
		ArrayList<FunctionOrMethod> fom = new ArrayList<FunctionOrMethod>(file.functionOrMethods());
		js = new ArrayList<String>();
		ignoreLabels = new ArrayList<Label>();
		for(Constant c: file.constants()){
			write(c);
		}
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
			e.printStackTrace();
		}
	}
	
	private void write(Constant c){
		js.add(getIndentBlock() + "var " + c.name() + " = " + c.constant().toString() + ";\n");
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
		currentLabel = -1;
		indent++;
		
		
		Iterator iter = e.body().iterator();
		while(iter.hasNext()){
			Object tmp = iter.next();
			write(tmp);
		}
		
		indent--;
		indent--;
		js.add(getIndentBlock() + "}\n");
		indent--;
		js.add(getIndentBlock() + "}\n");
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
		}else if(o instanceof Codes.UnaryOperator){
			write((Codes.UnaryOperator) o);
		}else if(o instanceof Codes.Loop){
			try {
				write((Codes.Loop) o);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		else if(o instanceof Codes.NewRecord){
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
			System.out.println("Unknown object " + o.getClass());
		}
	}
	
	private void write(Codes.Const o){
		js.add(getIndentBlock() + "var r" + o.target() + " = " + o.constant + ";//" + o.toString() +"\n");
	}
	
	private void write(Codes.UnaryOperator o){
		
		js.add(getIndentBlock() + "var r" + o.target() + " = -" + "r" + o.operand(0) + ";\n");
	}
	
	private int loopCounter = 0;
	private boolean inLoop = false;
	private void write(Codes.Loop o) throws Exception{
		Map<String, Index> labelMap = CodeUtils.buildLabelMap(new AttributedCodeBlock(o.bytecodes()));
		Iterator iter;
		boolean inelse = false;
		Index i;
		js.add(getIndentBlock() + "while(true){\n");
		indent++;
		if((iter = labelMap.values().iterator()).hasNext()){
			i = (Index) iter.next();
		}else{
			i = null;
		}
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
//				js.add(getIndentBlock() + "else{\n");
//				inelse = true;
			}else if(c instanceof Codes.Goto){
				Index x;
				boolean write = false;
				if((x = labelMap.get(((Codes.Goto) c).target)) != null){
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
					write(c);
				}
			}else if(c instanceof Codes.Assert){
				//TODO:
//				Codes.Assert ass = (Codes.Assert) c;
//				
//				boolean write = false;
//				for(Code c1 : ass.bytecodes()){
//					if(c1 instanceof Codes.If){
//						String label = ((Codes.If) c1).target;
//						writeIf((If) c1);
//						for(Code c2: ass.bytecodes()){
//							if(c2 instanceof Codes.Label){
//								if(((Codes.Label) c2).label == label){
//									write = true;
//								}else{
//									write = false;
//								}
//							} else if(write){
//								write(c2);
//							}
//						}
//						indent--;
//						js.add(getIndentBlock() + "}\n");
//					}else if(c1 instanceof Codes.Label){
//						break;
//					}else{
//						write(c1);	
//					}
//				}
				
			}else if(c instanceof Codes.Assume){
				//TODO:
//				Codes.Assume ass = (Codes.Assume)
//				boolean write = false;
//				for(Code c1 : ass.bytecodes()){
//					if(c1 instanceof Codes.If){
//						String label = ((Codes.If) c1).target;
//						writeIf((If) c1);
//						for(Code c2: ass.bytecodes()){
//							if(write){
//								write(c2);
//							}else if(c2 instanceof Codes.Label){
//								if(((Codes.Label) c2).label == label){
//									write = true;
//								}else{
//									write = false;
//								}
//							}
//						}
//					}else if(c1 instanceof Codes.Label){
//						if(write){
//							write = false;
//						}
//					}else{
//						if(write){
//							write(c);	
//						}
//					}
//				}
				
			}else if(c instanceof Codes.Label){
//				 should have already been written
			}else{
				write(c);
			}
		}
//		if(needContinue){
//			js.add(getIndentBlock() + "continue loopBegin" + currentCounter + ";\n");
//		}
//		if(!finished){
//			indent--;
//			js.add(getIndentBlock() + "}\n");
//		}
		//if(inelse)
		indent--;
		js.add(getIndentBlock() + "}\n");
		
	}
	
	private void writeIf(Codes.If o) throws Exception{
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
			Type.List list = (Type.List) o.type;
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
		}else{
			js.add(getIndentBlock() + "if(r" + o.leftOperand + " " + getIfop(o, false) + " r" + o.rightOperand + "){\n");
		}
		indent++;
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
			Type.List list = (Type.List) o.type;
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
		for(Code c : o.bytecodes()){
			write(c);
		}
	}
	
	private void write(Codes.Assume o) throws Exception{
		for(Code c : o.bytecodes()){
			write(c);
		}
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
	
	private void write(Codes.If o) throws Exception{
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
			Type.List list = (Type.List) o.type;
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
		js.add(getIndentBlock() + "control_flow_pc = " + parseLabel(o.target) + ";\n");
		js.add(getIndentBlock() + "control_flow_repeat = true;\n");
		js.add(getIndentBlock() + "continue outer;\n");
		if(inDeep){
			indent--;
			js.add(getIndentBlock() + "}\n");
		}
		indent--;
		js.add(getIndentBlock() + "}\n");
	}
	
	private void write(Codes.Goto o){
		js.add(getIndentBlock() + "control_flow_pc = " + parseLabel(o.target) + ";\n");
		js.add(getIndentBlock() + "control_flow_repeat = true;\n");
		js.add(getIndentBlock() + "continue outer;\n");
	}
	
	private void write(Codes.Label o){
		indent--;
		js.add(getIndentBlock() + "case " + parseLabel(o.label) + ":\n");
		currentLabel = Integer.parseInt(o.label.substring(o.label.length()-1));
		indent++;
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
		str += "};\n";
		js.add(str);
	}
	
	private void write(Codes.FieldLoad o){
		js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) + "." + o.field + ";\n");
	}
	
	private void write(Codes.Update o){
		if(o.afterType instanceof Type.List){
			js.add(getIndentBlock() + "r" + o.target() + "[r" + o.operand(0) + "] = r" + o.operand(1) + ";\n");
		}else if(o.afterType instanceof Type.Record){
			js.add(getIndentBlock() + "r" + o.target() + "." + o.fields.get(0) + " = r" + o.operand(0) + ";\n");
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
		str += ");\n";
		
		js.add(str);
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
		js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) + ".length;\n");
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
		}
	}
}
