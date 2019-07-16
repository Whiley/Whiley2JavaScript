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

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import wybs.lang.CompilationUnit;
import wybs.util.AbstractCompilationUnit;
import wyfs.lang.Content;
import wyfs.lang.Path;
import wyjs.io.JavaScriptFilePrinter;

public class JavaScriptFile extends AbstractCompilationUnit {
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
			// At this stage, parsing javascript files is strictly off-limits :)
			throw new UnsupportedOperationException();
		}

		@Override
		public void write(OutputStream output, JavaScriptFile jf) throws IOException {
			new JavaScriptFilePrinter(output).write(jf);
		}

		@Override
		public String toString() {
			return "Content-Type: java";
		}

		@Override
		public String getSuffix() {
			return "js";
		}
	};

	/**
	 * The list of top-level declarations within this file.
	 */
	private List<Declaration> declarations;

	public JavaScriptFile(Path.Entry<? extends CompilationUnit> entry) {
		super(entry);
		this.declarations = new ArrayList<>();
	}

	public List<Declaration> getDeclarations() {
		return declarations;
	}

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

	public static class VariableDeclaration extends AbstractDeclaration implements Term {
		private final Term initialiser;

		public VariableDeclaration(String name) {
			super(name);
			this.initialiser = null;
		}

		public VariableDeclaration(String name, Term initialiser) {
			super(name);
			this.initialiser = initialiser;
		}

		public boolean hasInitialisr() {
			return initialiser != null;
		}

		public Term getInitialiser() {
			return initialiser;
		}
	}

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
		public final static Constant NULL = new Constant(null);
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
		private Constant(Object value) {
			if (value == null) {
				this.value = value;
			} else {
				throw new IllegalArgumentException("invalid constant value: " + value);
			}
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
			NOT, NEG, EQ, NEQ, LT, LTEQ, GT, GTEQ, ADD, SUB, MUL, DIV, REM, AND, OR, BITWISEOR, BITWISEXOR, BITWISEAND,
			BITWISEINVERT, LEFTSHIFT, RIGHTSHIFT, NEW
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
