// Copyright 2011 The Whiley Project Developers
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
package wyjs.core;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.Reader;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import wybs.lang.CompilationUnit;
import wybs.lang.SyntacticHeap;
import wybs.lang.SyntacticItem;
import wybs.util.AbstractCompilationUnit;
import wycc.util.ArrayUtils;
import wyfs.lang.Content;
import wyfs.lang.Path;
import wyfs.lang.Path.Entry;
import wyjs.io.JavaScriptFilePrinter;

public class JavaScriptFile {
	// =========================================================================
	// Content Type
	// =========================================================================

	/**
	 * Responsible for identifying and reading/writing WyilFiles. The normal
	 * extension is ".wyil" for WyilFiles.
	 */
	public static final Content.Type<JavaScriptFile> ContentType = new Content.Type<JavaScriptFile>() {
		public Path.Entry<JavaScriptFile> accept(Path.Entry<?> e) {
			if (e.contentType() == this) {
				return (Path.Entry<JavaScriptFile>) e;
			}
			return null;
		}

		@Override
		public JavaScriptFile read(Path.Entry<JavaScriptFile> e, InputStream input) throws IOException {
			// NOTE: this is strictly a hack at this time as its unclear what the best
			// alternative option is. Specifically, parsing JavaScriptFiles is not something
			// I'm contemplating right now :)
			Reader reader = new InputStreamReader(e.inputStream());
			BufferedReader in = new BufferedReader(reader);

	        StringBuilder text = new StringBuilder();
			int len = 0;
			char[] buf = new char[1024];
			while ((len = in.read(buf)) != -1) {
				text.append(buf, 0, len);
			}
	        // Finally, construct the native declaration
			NativeDeclaration d = new NativeDeclaration(text.toString());
			//
			JavaScriptFile js = new JavaScriptFile(true, Standard.ES6);
			// Append our native declarations.
			js.declarations.add(d);
			return js;
		}

		@Override
		public void write(OutputStream output, JavaScriptFile jf) throws IOException {
			new JavaScriptFilePrinter(output).write(jf);
		}

		@Override
		public String toString() {
			return "Content-Type: javascript";
		}

		@Override
		public String getSuffix() {
			return "js";
		}
	};

	// =========================================================================
	// JavaScript Standard
	// =========================================================================

	public enum Standard {
		ES5,
		/**
		 * Support for ES6 which introduced several syntactic improvements, such as
		 * <code>let</code> and <code>const</code>, simplified object literal and
		 * destructuring syntax and modules.
		 */
		ES6,
		/**
		 * Support for (proposed) TC39 BigInt standard which is currently supported by
		 * some browser.
		 */
		ES6_BIGINT
	}

	// =========================================================================
	//
	// =========================================================================

	/**
	 * Indicate whether or not to use strict mode.
	 */
	private final boolean strictMode;

	/**
	 * Indicate which JavaScript standard this file conforms to.
	 */
	private final Standard standard;
	/**
	 * The list of top-level declarations within this file.
	 */
	private List<Declaration> declarations;

	public JavaScriptFile(Standard standard) {
		this(true,standard);
	}

	public JavaScriptFile(boolean strictMode, Standard standard) {
		this.strictMode = strictMode;
		this.standard = standard;
		this.declarations = new ArrayList<>();
	}

	/**
	 * Indicate whether or not this file supports to strict mode.
	 *
	 * @return
	 */
	public boolean strictMode() {
		return strictMode;
	}

	/**
	 * Indicate whether target platform is ES5 or later.
	 *
	 * @return
	 */
	public boolean ES5() {
		return standard == Standard.ES5;
	}

	/**
	 * Indicate whether target platform is ES6 or later.
	 *
	 * @return
	 */
	public boolean ES6() {
		return standard == Standard.ES6 || standard == Standard.ES6_BIGINT;
	}

	/**
	 * Indicate whether target platform must support (draft) TC39 BigInt
	 * specification.
	 *
	 * @return
	 */
	public boolean bigInt() {
		return standard == Standard.ES6_BIGINT;
	}

	public List<Declaration> getDeclarations() {
		return declarations;
	}

	// =========================================================================
	// Static Constructors
	// =========================================================================

	public static Term and(List<Term> operands) {
		return and(operands.toArray(new Term[operands.size()]));
	}

	public static Term and(Term... operands) {
		if(ArrayUtils.firstIndexOf(operands, Constant.FALSE) > 0) {
			return Constant.FALSE;
		} else {
			operands = ArrayUtils.removeAll(operands, Constant.TRUE);
			switch(operands.length) {
			case 0:
				return Constant.TRUE;
			case 1:
				return operands[0];
			default:
				return new Operator(Operator.Kind.AND, operands);
			}
		}
	}

	public static Term or(List<Term> operands) {
		return or(operands.toArray(new Term[operands.size()]));
	}

	public static Term or(Term... operands) {
		if(ArrayUtils.firstIndexOf(operands, Constant.TRUE) > 0) {
			return Constant.TRUE;
		} else {
			operands = ArrayUtils.removeAll(operands, Constant.FALSE);
			switch(operands.length) {
			case 0:
				return Constant.FALSE;
			case 1:
				return operands[0];
			default:
				return new Operator(Operator.Kind.OR, operands);
			}
		}
	}

	public static Term not(Term operand) {
		if(operand instanceof Operator) {
			Operator op = (Operator) operand;
			Operator.Kind kind = op.getKind();
			List<Term> operands = op.getOperands();
			switch(kind) {
			case EQ:
			case NEQ:
			case EEQ:
			case NEEQ:
			case LT:
			case LTEQ:
			case GT:
			case GTEQ:
				return new Operator(invert(kind),operands);
			case NOT:
				return op.getOperands().get(0);
			case AND: {
				Term[] ts = new Term[operands.size()];
				for(int i=0;i!=ts.length;++i) {
					ts[i] = not(operands.get(i));
				}
				return or(ts);
			}

			case OR: {
				Term[] ts = new Term[operands.size()];
				for(int i=0;i!=ts.length;++i) {
					ts[i] = not(operands.get(i));
				}
				return and(ts);
			}
			}
		} else if(operand == Constant.FALSE) {
			return Constant.TRUE;
		} else if(operand == Constant.TRUE) {
			return Constant.FALSE;
		}
		return new Operator(Operator.Kind.NOT, operand);
	}

	private static Operator.Kind invert(Operator.Kind kind) {
		switch(kind) {
		case EQ:
			return Operator.Kind.NEQ;
		case NEQ:
			return Operator.Kind.EQ;
		case EEQ:
			return Operator.Kind.NEEQ;
		case NEEQ:
			return Operator.Kind.EEQ;
		case LT:
			return Operator.Kind.GTEQ;
		case LTEQ:
			return Operator.Kind.GT;
		case GT:
			return Operator.Kind.LTEQ;
		case GTEQ:
			return Operator.Kind.LT;
		default:
			throw new IllegalArgumentException("cannot invert operator kind: " + kind);
		}
	}

	// =========================================================================
	// Declaration
	// =========================================================================


	/**
	 * A declaration (e.g. class or method) within a Java file
	 *
	 * @author David J. Pearce
	 *
	 */
	public interface Declaration extends Term {

	}

	private static class AbstractDeclaration implements Declaration {
		/**
		 * The name of the class in question
		 */
		private final String name;

		public AbstractDeclaration(String name) {
			this.name = name;
		}

		public String getName() {
			return name;
		}
	}

	public static class Method extends AbstractDeclaration implements Declaration {
		private final List<String> parameters;
		private final Block body;

		public Method(String name, List<String> parameters, Block body) {
			super(name);
			this.parameters = parameters;
			this.body = body;
		}

		public List<String> getParameters() {
			return parameters;
		}

		public Block getBody() {
			return body;
		}
	}

	public static class VariableDeclaration implements Declaration, Term {
		public static enum Kind {
			VAR,
			LET,
			CONST
		}
		private final Kind kind;
		private final String[][] names;
		private final Term[] initialisers;

		public VariableDeclaration(Kind kind,String name) {
			this(kind,name,null);
		}

		public VariableDeclaration(Kind kind,String name, Term initialiser) {
			this(kind,new String[][] {{name}},new Term[]{initialiser});
		}

		public VariableDeclaration(Kind kind,String[][] names, Term[] initialisers) {
			this.kind = kind;
			this.names = names;
			this.initialisers = initialisers;
			if(names.length == 0) {
				throw new IllegalArgumentException("Cannot declare zero variables");
			} else if(initialisers.length != names.length) {
				throw new IllegalArgumentException("invalid number of initialisers");
			}
		}

		public int size() {
			return names.length;
		}

		public String[] getNames(int ith) {
			return names[ith];
		}

		public Kind getKind() {
			return kind;
		}

		public boolean hasInitialiser(int ith) {
			return initialisers[ith] != null;
		}

		public Term getInitialiser(int ith) {
			return initialisers[ith];
		}
	}

	public static class NativeDeclaration implements Declaration {
		private final String contents;

		public NativeDeclaration(String contents) {
			this.contents = contents;
		}

		public String getContents() {
			return contents;
		}
	};

	/**
	 * Represents either a statement or expression in a Java source file.
	 *
	 * @author David J. Pearce
	 *
	 */
	public interface Term {

	}

	public static class Block implements Term {
		private List<Term> terms;

		public Block() {
			terms = new ArrayList<>();
		}

		public Block(List<Term> terms) {
			this.terms = new ArrayList<>(terms);
		}

		public Block(Term... terms) {
			this.terms = Arrays.asList(terms);
		}

		public List<Term> getTerms() {
			return terms;
		}
	}

	public static class ArrayAccess implements Term {
		private Term src;
		private Term index;

		public ArrayAccess(Term src, Term index) {
			this.src = src;
			this.index = index;
		}

		public Term getSource() {
			return src;
		}

		public Term getIndex() {
			return index;
		}
	}

	public static class ArrayInitialiser implements Term {
		private List<Term> elements;

		public ArrayInitialiser(Collection<Term> elements) {
			this.elements = new ArrayList<>(elements);
		}

		public ArrayInitialiser(Term... elements) {
			this.elements = Arrays.asList(elements);
		}

		public int size() {
			return elements.size();
		}

		public Term getElement(int i) {
			return elements.get(i);
		}
	}

	public static class ArrayLength implements Term {
		private final Term src;

		public ArrayLength(Term src) {
			this.src = src;
		}

		public Term getSource() {
			return src;
		}
	}

	public static class Assignment implements Term {
		private Term lhs;
		private Term rhs;

		public Assignment(Term lhs, Term rhs) {
			this.lhs = lhs;
			this.rhs = rhs;
		}

		public Term getLefthandSide() {
			return lhs;
		}

		public Term getRighthandSide() {
			return rhs;
		}
	}

	public static class Break implements Term {
	}

	public static class Continue implements Term {
	}

	public static class Constant implements Term {
		public final static Constant NULL = new Constant((String) null);
		public final static Constant TRUE = new Constant(true);
		public final static Constant FALSE = new Constant(false);

		private Object value;

		public Constant(boolean v) {
			this.value = v;
		}
		public Constant(byte v) {
			this.value = v;
		}
		public Constant(long v) {
			this.value = v;
		}
		public Constant(double v) {
			this.value = v;
		}
		public Constant(BigInteger v) {
			this.value = v;
		}
		public Constant(String v) {
			this.value = v;
		}

		public Object getValue() {
			return value;
		}
	}


	public static class DoWhile implements Term {
		private Block body;
		private Term condition;

		public DoWhile(Block body, Term condition) {
			this.condition = condition;
			this.body = body;
		}

		public Term getCondition() {
			return condition;
		}

		public Block getBody() {
			return body;
		}
	}

	public static class For implements Term {
		private VariableDeclaration initialiser;
		private Term condition;
		private Term increment;
		private Block body;

		public For(VariableDeclaration initialiser, Term condition, Term increment, Block body) {
			this.initialiser = initialiser;
			this.condition = condition;
			this.increment = increment;
			this.body = body;
		}

		public VariableDeclaration getInitialiser() {
			return initialiser;
		}

		public Term getCondition() {
			return condition;
		}

		public Term getIncrement() {
			return increment;
		}

		public Block getBody() {
			return body;
		}
	}

	public static class IfElse implements Term {
		private List<Case> cases;

		public IfElse(List<Case> cases) {
			this.cases = cases;
		}

		public IfElse(Case... cases) {
			this.cases = Arrays.asList(cases);
		}

		public List<Case> getCases() {
			return cases;
		}

		public static class Case implements Term {
			private Term condition;
			private Block body;

			public Case(Term label, Block body) {
				this.condition = label;
				this.body = body;
			}

			public Term getLabel() {
				return condition;
			}

			public Block getBlock() {
				return body;
			}
		}
	}

	public static class Invoke implements Term {
		private Term receiver;
		private String name;
		private List<Term> arguments;

		public Invoke(Term receiver, String name, Term... arguments) {
			this.receiver = receiver;
			this.name = name;
			this.arguments = Arrays.asList(arguments);
		}
		public Invoke(Term receiver, String name, Collection<Term> arguments) {
			this.receiver = receiver;
			this.name = name;
			this.arguments = new ArrayList<>(arguments);
		}

		public Term getReceiver() {
			return receiver;
		}

		public String getName() {
			return name;
		}

		public List<Term> getArguments() {
			return arguments;
		}
	}

	public static class IndirectInvoke implements Term {
		private Term receiver;
		private List<Term> arguments;

		public IndirectInvoke(Term receiver, Term... arguments) {
			this.receiver = receiver;
			this.arguments = Arrays.asList(arguments);
		}
		public IndirectInvoke(Term receiver, Collection<Term> arguments) {
			this.receiver = receiver;
			this.arguments = new ArrayList<>(arguments);
		}

		public Term getReceiver() {
			return receiver;
		}

		public List<Term> getArguments() {
			return arguments;
		}
	}

	public static class Lambda implements Term {
		private List<String> parameters;
		private Block body;

		public Lambda(List<String> parameters, Block body) {
			this.parameters = parameters;
			this.body = body;
		}

		public List<String> getParameters() {
			return parameters;
		}

		public Block getBody() {
			return body;
		}
	}

	public static class Operator implements Term {
		public enum Kind {
			NOT, NEG, EQ, EEQ, NEQ, NEEQ, LT, LTEQ, GT, GTEQ, ADD, SUB, MUL, DIV, REM, AND, OR, BITWISEOR, BITWISEXOR, BITWISEAND, BITWISEINVERT,
			LEFTSHIFT, RIGHTSHIFT, NEW, TYPEOF
		}
		private Kind kind;
		private List<Term> operands;

		public Operator(Kind kind, List<Term> operands) {
			this.kind = kind;
			this.operands = operands;
		}

		public Operator(Kind kind, Term... operands) {
			this.kind = kind;
			this.operands = Arrays.asList(operands);
		}

		public Kind getKind() {
			return kind;
		}

		public List<Term> getOperands() {
			return operands;
		}
	}

	public static class Return implements Term {
		private Term initialiser;

		public Return() {
			this.initialiser = null;
		}

		public Return(Term initialiser) {
			this.initialiser = initialiser;
		}

		public Term getInitialiser() {
			return initialiser;
		}
	}

	public static class ObjectLiteral implements Term {
		private List<wycc.util.Pair<String,Term>> properties;

		public ObjectLiteral(Collection<wycc.util.Pair<String,Term>> fields) {
			this.properties = new ArrayList<>(fields);
		}

		public int size() {
			return properties.size();
		}

		public wycc.util.Pair<String,Term> getProperty(int index) {
			return properties.get(index);
		}

		public List<wycc.util.Pair<String,Term>> getProperties() {
			return properties;
		}
	}

	public static class PropertyAccess implements Term {
		private final Term source;
		private final String property;

		public PropertyAccess(Term source, String property) {
			this.source = source;
			this.property = property;
		}

		public Term getSource() {
			return source;
		}

		public String getProperty() {
			return property;
		}
	}

	public static class Switch implements Term {
		private Term condition;
		private List<Case> cases;

		public Switch(Term condition, List<Case> cases) {
			this.condition = condition;
			this.cases = cases;
		}

		public Term getCondition() {
			return condition;
		}

		public List<Case> getCases() {
			return cases;
		}

		public static class Case implements Term {
			private Term label;
			private Block body;

			public Case(Term label, Block body) {
				this.label = label;
				this.body = body;
			}

			public Term getLabel() {
				return label;
			}

			public Block getBody() {
				return body;
			}
		}
	}

	public static class VariableAccess implements Term {
		private String name;

		public VariableAccess(String name) {
			this.name = name;
		}

		public String getName() {
			return name;
		}
	}

	public static class While implements Term {
		private Term condition;
		private Block body;

		public While(Term condition, Block body) {
			this.condition = condition;
			this.body = body;
		}

		public Term getCondition() {
			return condition;
		}

		public Block getBody() {
			return body;
		}
	}
}
