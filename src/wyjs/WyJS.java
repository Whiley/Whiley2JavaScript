package wyjs;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;

import wyil.io.WyilFilePrinter;
import wyil.io.WyilFileReader;
import wyil.lang.Codes;
import wyil.lang.Type;
import wyil.lang.WyilFile;
import wyil.lang.WyilFile.Block;
import wyil.lang.WyilFile.FunctionOrMethod;

public class WyJS {

	private WyilFile file;
	private int indent = 0;
	//Sorted list of strings that make up the javascript file
	private ArrayList<String> js;
	private int entryPoint = -1;
	
	public WyJS(WyilFile file) {
		this.file = file;
		ArrayList<Block> blocks = new ArrayList<Block>(file.blocks());
		js = new ArrayList<String>();
		for (Block f : blocks) {
			write(f);
		}
	}

	private void write(Block e){
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
			js.add("}");
			
			for(String s: js){
				System.out.print(s);
			}
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
		}else if(o instanceof Codes.Label){
			write((Codes.Label) o);
		}else{
			System.out.println("Unknown object " + o.getClass());
		}
	}
	
	private void write(Codes.Const o){
		if(entryPoint == -1){
			js.add(getIndentBlock() + "var r" + o.target() + " = " + o.constant + ";//" + o.toString() +"\n");
		}else{
			js.add(entryPoint, getIndentBlock() + "var r" + o.target() + " = " + o.constant + ";//" + o.toString() +"\n");
			entryPoint++;
			//realign();
		}

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
		
		if(entryPoint == -1){
			js.add(str);
		}else{
			js.add(entryPoint, str);
			entryPoint++;
			//realign();
		}
	}
	
	private void write(Codes.Return o){
		if(o.operand!=-1){
			if(entryPoint == -1){
				js.add(getIndentBlock() + "return r" + o.operand + ";//" + o.toString() +"\n");
			}
			else{
				js.add(entryPoint+1, getIndentBlock() + "return r" + o.operand + ";//" + o.toString() +"\n");
				entryPoint++;
				//realign();
			}
			
		}
	}
	
	private void write(Codes.Assign o){
		if(entryPoint == -1){
			js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) + ";//" + o.toString() +"\n");
		}else{
			js.add(entryPoint, getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) + ";//" + o.toString() +"\n");
			entryPoint++;
			//realign();
		}

	}
	
	private HashMap<String, Integer> labelIndex =  new HashMap<String, Integer>();
	
	private void write(Codes.If o){
		String str = "";
		str +=getIndentBlock() + "if(r" + o.leftOperand;
		if(o.op == Codes.Comparator.EQ){//==
			str += " == r" + o.rightOperand + "){//" + o.toString() + "\n";
		}else if(o.op == Codes.Comparator.GT){//>
			str += " > r" + o.rightOperand + "){//" + o.toString() + "\n";
		}else if(o.op == Codes.Comparator.GTEQ){//>=
			str += " >= r" + o.rightOperand + "){//" + o.toString() + "\n";
		}else if(o.op == Codes.Comparator.IN){//?
			
		}else if(o.op == Codes.Comparator.LT){//<
			str += " < r" + o.rightOperand + "){//" + o.toString() + "\n";
		}else if(o.op == Codes.Comparator.LTEQ){//<=
			str += " <= r" + o.rightOperand + "){//" + o.toString() + "\n";
		}else if(o.op == Codes.Comparator.NEQ){//!=
			str += " != r" + o.rightOperand + "){//" + o.toString() + "\n";
		}else if(o.op == Codes.Comparator.SUBSET){//?
			
		}else if(o.op == Codes.Comparator.SUBSETEQ){//?
			
		}else {
			System.out.println("Unknown operator");
		}
		if(entryPoint == -1){
			js.add(str);
			labelIndex.put(o.target, js.size());
			js.add(getIndentBlock() + "} else{\n");
		}else{
			js.add(entryPoint, str);
			entryPoint++;
			//realign();
			labelIndex.put(o.target, js.size());
			js.add(getIndentBlock() + "} else{\n");
			entryPoint++;
			//realign();
		}
		//indent++;
	}
	
	private void write(Codes.Goto o){
		//indent--;
		if(entryPoint == -1){
			js.add(getIndentBlock() + "}\n");
		}else{
			js.add(entryPoint, getIndentBlock() + "}\n");
			entryPoint++;
			//realign();
		}
		labelIndex.put(o.target, js.size());
	}
	
	private void write(Codes.Label o){
		//indent++;
		entryPoint = labelIndex.get(o.label);
	}
	
	private String getIndentBlock(){
		String str = "";
		for(int i = 0; i < indent; i++){
			str+="   ";
		}
		return str;
	}
	
	private void realign(){
		for(Integer i: labelIndex.values()){
			i++;
		}
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
