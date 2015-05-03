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
	
	public WyJS(WyilFile file) {
		this.file = file;
		ArrayList<FunctionOrMethod> fom = new ArrayList<FunctionOrMethod>(file.functionOrMethods());
		js = new ArrayList<String>();
		ignoreLabels = new ArrayList<Label>();
		for (FunctionOrMethod f : fom) {
			write(f);
		}
	}
	
	public void makeFile(String filename, String srcDir){
		
		try {
			PrintStream out = new PrintStream(new FileOutputStream(srcDir + "/" + filename + ".js"));
			for(String s: js){
				out.print(s);
			}
			out.println("main();");
			out.close();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	private void write(FunctionOrMethod e){
		if(e instanceof FunctionOrMethod){
			FunctionOrMethod func = (FunctionOrMethod) e;
			StringBuilder str = new StringBuilder();
			str.append(getIndentBlock() + "function " + func.name() + "(");
			int i = 1;
			for(Type t : func.type().params()){
				if(i==1){
					str.append("r" + (i-1));
				}else{
					str.append(", r" + (i-1));
				}
				i++;
			}
			str.append("){//" + func.type().toString() +"\n");
			js.add(str.toString());
			indent++;
			Iterator iter = func.body().iterator();
			while(iter.hasNext()){
				Object tmp = iter.next();
				write(tmp);
			}
			indent--;
			js.add("}\n\n");
		}
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
		}else{
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
	
	private void write(Codes.Assert o){
		String str = (getIndentBlock() + "if(");
		ArrayList<Code> code = new ArrayList<Code>();
		for(Code c: o.bytecodes()){
			if(c instanceof Codes.If){
				Codes.If opers = (Codes.If) c;
				str += "r" + opers.leftOperand;
				if(opers.op == Codes.Comparator.EQ){//==
					str += " != r" + opers.rightOperand + "){//" + o.toString() + "\n";
				}else if(opers.op == Codes.Comparator.GT){//>
					str += " <= r" + opers.rightOperand + "){//" + o.toString() + "\n";
				}else if(opers.op == Codes.Comparator.GTEQ){//>=
					str += " < r" + opers.rightOperand + "){//" + o.toString() + "\n";
				}else if(opers.op == Codes.Comparator.LT){//<
					str += " >= r" + opers.rightOperand + "){//" + o.toString() + "\n";
				}else if(opers.op == Codes.Comparator.LTEQ){//<=
					str += " > r" + opers.rightOperand + "){//" + o.toString() + "\n";
				}else if(opers.op == Codes.Comparator.NEQ){//!=
					str += " == r" + opers.rightOperand + "){//" + o.toString() + "\n";
				}
				indent++;
				str+= getIndentBlock() + "throw {name: 'Assert Failed', message: 'r" + opers.leftOperand + " !" + opers.op + " r" + opers.rightOperand + "'}\n";
				indent--;
				str+= getIndentBlock() + "}\n";
			}else if(c instanceof Codes.Label){
				ignoreLabels.add((Codes.Label) c);
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
	
	private void write(Codes.Assume o){
		String str = (getIndentBlock() + "if(");
		ArrayList<Code> code = new ArrayList<Code>();
		for(Code c: o.bytecodes()){
			if(c instanceof Codes.If){
				Codes.If opers = (Codes.If) c;
				str += "r" + opers.leftOperand;
				if(opers.op == Codes.Comparator.EQ){//==
					str += " != r" + opers.rightOperand + "){//" + o.toString() + "\n";
				}else if(opers.op == Codes.Comparator.GT){//>
					str += " <= r" + opers.rightOperand + "){//" + o.toString() + "\n";
				}else if(opers.op == Codes.Comparator.GTEQ){//>=
					str += " < r" + opers.rightOperand + "){//" + o.toString() + "\n";
				}else if(opers.op == Codes.Comparator.LT){//<
					str += " >= r" + opers.rightOperand + "){//" + o.toString() + "\n";
				}else if(opers.op == Codes.Comparator.LTEQ){//<=
					str += " > r" + opers.rightOperand + "){//" + o.toString() + "\n";
				}else if(opers.op == Codes.Comparator.NEQ){//!=
					str += " == r" + opers.rightOperand + "){//" + o.toString() + "\n";
				}
				indent++;
				str+= getIndentBlock() + "throw {name: 'Assert Failed', message: 'r" + opers.leftOperand + " !" + opers.op + " r" + opers.rightOperand + "'}\n";
				indent--;
				str+= getIndentBlock() + "}\n";
			}else if(c instanceof Codes.Label){
				ignoreLabels.add((Codes.Label) c);
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
	
	private HashMap<String, Integer> labelIndex =  new HashMap<String, Integer>();
	
	private void write(Codes.If o){
		System.out.println("If not supported");
	}
	
	private void write(Codes.Goto o){
		System.out.println("Goto not supported");
	}
	
	private void write(Codes.Label o){
		if(ignoreLabels.contains(o)){
			//IGNORE
		}else{
			System.out.println("Label not supported");
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
			
			//WyJS wy = new WyJS(wyilFile);
		} catch (IOException e) {
			System.out.println(e.getMessage());
		}
	}
}
