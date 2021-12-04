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
package wyjs.testing;

import static org.junit.Assert.fail;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintStream;
import java.util.Arrays;
import java.util.BitSet;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ForkJoinPool;
import java.util.function.Predicate;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

import org.junit.Assume;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;

import jbfs.core.Build;
import jbfs.core.Content;
import jbfs.util.ByteRepository;
import jbfs.util.DirectoryRoot;
import jbfs.util.Pair;
import jbfs.util.Transactions;
import jbfs.util.Trie;

import wycc.lang.SyntacticException;
import wycc.util.Logger;
import wycc.util.AbstractCompilationUnit.Name;
import wycc.util.AbstractCompilationUnit.Tuple;
import wycc.util.AbstractCompilationUnit.Value;
import wycc.util.AbstractCompilationUnit.Identifier;

import static wyil.lang.WyilFile.*;
import wyc.lang.WhileyFile;
import wyil.lang.WyilFile.Type;
import wyc.task.CompileTask;
import wyc.util.TestUtils;

import wyil.lang.WyilFile;
import wyjs.core.JavaScriptFile;
import wyjs.tasks.JavaScriptCompileTask;

/**
 * Run through all valid test cases with verification enabled. Since every test
 * file is valid, a successful test occurs when the compiler succeeds and, when
 * executed, the compiled file produces the expected output. Note that an
 * internal failure does not count as a valid pass, and indicates the test
 * exposed some kind of compiler bug.
 *
 * @author David J. Pearce
 *
 */
@RunWith(Parameterized.class)
public class RuntimeValidTests {

	/**
	 * The directory containing the source files for each test case. Every test
	 * corresponds to a file in this directory.
	 */
	public final static String WHILEY_SRC_DIR = "tests/valid".replace('/', File.separatorChar);

	/**
	 * The location of the WyJS runtime library. This provides critical
	 * functions used in generated javascript and is distinct from the Whiley
	 * standard library.
	 */
	public final static String WYJS_RUNTIME = "lib/js.js".replace('/', File.separatorChar);

	/**
	 * Ignored tests and a reason why we ignore them.
	 */
	public final static Map<String, String> IGNORED = new HashMap<>();

	static {
		// ===================================================
		// WyC problems
		// ===================================================
		// Bring over all the currently failing tests for the compiler. There's
		// absolutely no point trying to see whether these work or not, since we
		// already know they will not.
		IGNORED.putAll(TestUtils.VALID_IGNORED);
		// ===================================================
		// WyJS problems
		// ===================================================
		// Unbound arithmetic
		IGNORED.put("IntOp_Valid_1", "#15");
		IGNORED.put("IntConst_Valid_1", "#15");
		IGNORED.put("Function_Valid_3", "#15");
		// Replace Type Mangle with Interface
		IGNORED.put("FunctionRef_Valid_13", "#9");
		// Type Tests against Open Records
//		VALID_IGNORED.put("OpenRecord_Valid_5", "#30");
		// Static Initialiser Order
		IGNORED.put("StaticVar_Valid_7", "#29");
		IGNORED.put("StaticVar_Valid_8", "#29");
		// Problem with Cloning
		IGNORED.put("Template_Valid_29", "#32");
		// Coercions for Unknown References
		IGNORED.put("UnknownReference_Valid_1", "#44");
		IGNORED.put("UnknownReference_Valid_2", "#44");
		IGNORED.put("UnknownReference_Valid_3", "#44");
		IGNORED.put("Reference_Valid_20", "#44");
		// Old values
		IGNORED.put("Old_Valid_1", "#58");
		IGNORED.put("Old_Valid_2", "#58");
		IGNORED.put("Old_Valid_3", "#58");
		IGNORED.put("Old_Valid_4", "#58");
		IGNORED.put("Old_Valid_7", "#58");
		IGNORED.put("Old_Valid_8", "#58");
		IGNORED.put("Old_Valid_9", "#58");
		IGNORED.put("Old_Valid_10", "#58");
		IGNORED.put("Old_Valid_11", "#58");
		IGNORED.put("Old_Valid_12", "#58");
		IGNORED.put("Old_Valid_13", "#58");
		IGNORED.put("Old_Valid_14", "#58");
		IGNORED.put("Old_Valid_15", "#58");
		IGNORED.put("Old_Valid_16", "#58");
		IGNORED.put("Old_Valid_17", "#58");
		IGNORED.put("Old_Valid_18", "#58");
		IGNORED.put("Old_Valid_20", "#58");
		IGNORED.put("Reference_Valid_1", "#58");
		IGNORED.put("Reference_Valid_6", "#58");
		IGNORED.put("Reference_Valid_9", "#58");
		IGNORED.put("Reference_Valid_27", "#58");
		IGNORED.put("Reference_Valid_28", "#58");
		IGNORED.put("Reference_Valid_33", "#58");
		IGNORED.put("Reference_Valid_39", "#58");
		IGNORED.put("Reference_Valid_41", "#58");
		IGNORED.put("Reference_Valid_42", "#58");
		//
		IGNORED.put("MethodRef_Valid_6", "???");
		// Mutable native strings
		IGNORED.put("JsString_Valid_4", "#48");
		IGNORED.put("JsString_Valid_12", "#48");
		IGNORED.put("JsString_Valid_13", "#49");
	}

	// ======================================================================
	// Test Harness
	// ======================================================================

 	protected void runTest(String name) throws IOException {
		File jsFile = new File(WHILEY_SRC_DIR + File.separatorChar + name + ".js");
		// Compile to JavaScript
		Pair<Boolean, String> p = compileWhiley2JavaScript(new File(WHILEY_SRC_DIR), name); // name of test to compile

		boolean r = p.first();
		System.out.print(p.second());

		if (!r) {
			fail("Test failed to compile!");
		}
		// Execute the generated JavaScript Program.
		try {
			execJS(jsFile, name);
		} catch (ScriptException e) {
			System.err.println("=========================================================");
			System.err.println("TEST: " + name);
			System.err.println("=========================================================");
			e.printStackTrace();
			fail("unexpected output!");
		}
	}

 	/**
 	 * A simple default registry which knows about whiley files and wyil files.
 	 */
 	private static final Content.Registry registry = new TestUtils.Registry();

 	/**
	 * Mock of js::core package which is needed for various JavaScript specific
	 * tests (e.g. for native strings, etc).
	 */
 	private static final Content.Source JSCORE_PACKAGE = new Content.Source() {
 		private final Trie path = Trie.fromString("js/core");
 		private final WyilFile jsCore = new WyilFile(path, Collections.emptyList());

 		{
 			// FIXME: type here is incorrect and should be updated with fixed-with integer
			// type (i.e. uint:16).
 			Decl.Variable var = new Decl.Variable(new Tuple<>(), new Identifier("$"), new Type.Array(Type.Int));
 			// public type string is (int[] $) where true
 			Decl.Type type = new Decl.Type(new Tuple<>(new Modifier.Public()), new Identifier("string"),
 					new Tuple<>(), var, new Tuple<>(new Expr.Constant(Type.Bool, new Value.Bool(true))));
 			//
 			Decl.Unit unit = new Decl.Unit(new Name(path), new Tuple<>(type));
 			jsCore.setRootItem(new WyilFile.Decl.Module(new Name(path), new Tuple<>(unit), new Tuple<>(), new Tuple<>()));
 		}

		@Override
		public <T extends Content> T get(Content.Type<T> kind, Trie p) throws IOException {
			if (kind == WyilFile.ContentType && p.equals(path)) {
				return (T) jsCore;
			}
			return null;
		}

		@Override
		public <T extends Content> List<T> getAll(Content.Filter<T> filter) throws IOException {
			if (filter.includes(WyilFile.ContentType, path)) {
				return Arrays.asList((T) jsCore);
			}
			return null;
		}

		@Override
		public List<Trie> match(Content.Filter<? extends Content> filter) {
			throw new UnsupportedOperationException();
		}

		@Override
		public <T extends Content> List<Trie> match(Content.Filter<T> filter, Predicate<T> p) {
			throw new UnsupportedOperationException();
		}

		@Override
		public Registry getContentRegistry() {
			return registry;
		}
 	};

 	/**
	 * Run the Whiley Compiler with the given list of arguments to produce a
	 * JavaScript source file. This will then need to be separately compiled.
	 *
	 * @param arg
	 *            --- list of command-line arguments to provide to the Whiley
	 *            Compiler.
	 * @return
	 * @throws IOException
	 */
 	public static Pair<Boolean,String> compileWhiley2JavaScript(File whileydir, String arg) throws IOException {
 		String filename = arg + ".whiley";
		ByteArrayOutputStream syserr = new ByteArrayOutputStream();
		PrintStream psyserr = new PrintStream(syserr);
		// Determine the ID of the test being compiler
		Trie path = Trie.fromString(arg);
		//
		boolean result = true;
		// Construct the directory root
		DirectoryRoot root = new DirectoryRoot(registry, whileydir, f -> {
			return f.getName().equals(filename);
		});
		//
		try {
			// Extract source file
			WhileyFile source = root.get(WhileyFile.ContentType, path);
			// Construct build repository
			Build.Repository repository = new ByteRepository(registry, source);
			// Construct compile task (including special js::core package)
			CompileTask wycTask = new CompileTask(path, Arrays.asList(source), Arrays.asList(JSCORE_PACKAGE));
			// NOTE: Java Nashorn supports ES5 only?
			JavaScriptCompileTask jsTask = new JavaScriptCompileTask(path, path, JavaScriptFile.Standard.ES5);
			// Apply Whiley Compiler to repository
			result = repository.apply(Transactions.create(wycTask, jsTask));
			// Read out binary file from build repository
			WyilFile target = repository.get(WyilFile.ContentType, path);
			// Write binary file to directory
			root.put(path, target);
			// Check whether result valid (or not)
			result &= target.isValid();
			// Print out syntactic markers
			wycli.commands.BuildCmd.printSyntacticMarkers(psyserr, target, source);
			// Add invariant handler for js::core::string
			JavaScriptFile jsFile = repository.get(JavaScriptFile.ContentType, path);
			// FIXME: this should not be permitted in a functional setting :)
			jsFile.getDeclarations().add(constructJsCoreStringInvariant());
			// Finally flush the generated JavaScript file to disk
			root.put(path, jsFile);
		} catch (SyntacticException e) {
			// Print out the syntax error
			//e.outputSourceError(psyserr);
			result = false;
		} catch (Exception e) {
			// Print out the syntax error
			TestUtils.printStackTrace(psyserr, e);
			result = false;
		} finally {
			// Writeback any results
			root.synchronise();
		}
		//
		psyserr.flush();
		// Convert bytes produced into resulting string.
		byte[] errBytes = syserr.toByteArray();
		String output = new String(errBytes);
		return new Pair<>(result, output);
 	}

//	public static Pair<Boolean,String> compileWhiley2JavaScript_OLD(String whileydir, String arg) throws IOException {
//		ByteArrayOutputStream syserr = new ByteArrayOutputStream();
//		ByteArrayOutputStream sysout = new ByteArrayOutputStream();
//		PrintStream psyserr = new PrintStream(syserr);
//		//
//		boolean result = true;
//		//
//		try {
//			// Construct the project
//			DirectoryRoot root = new DirectoryRoot(whileydir, registry);
//			//
//			SequentialBuildProject project = new SequentialBuildProject(root);
//			// Add mock for js::core
//			project.getPackages().add(JSCORE_PACKAGE);
//			// Identify source files and target files
//			Pair<FileSystem.Entry<WhileyFile>, FileSystem.Entry<WyilFile>> p = TestUtils.findSourceFiles(root,arg);
//			List<FileSystem.Entry<WhileyFile>> sources = Arrays.asList(p.first());
//			FileSystem.Entry<WyilFile> wyilTarget = p.second();
//			// Add Whiley => WyIL build rule
//			project.add(new Build.Rule() {
//				@Override
//				public void apply(Collection<Build.Task> tasks) throws IOException {
//					// Construct a new build task
//					CompileTask task = new CompileTask(project, Logger.NULL, root, wyilTarget, sources);
//					// Submit the task for execution
//					tasks.add(task);
//				}
//			});
//			// Construct an empty JavaScriptFile
//			FileSystem.Entry<JavaScriptFile> jsTarget = root.create(wyilTarget.id(), JavaScriptFile.ContentType);
//			// NOTE: Java Nashorn supports ES5 only?
//			JavaScriptFile jsFile = new JavaScriptFile(JavaScriptFile.Standard.ES5);
//			// Add invariant handler for js::core::string
//			jsFile.getDeclarations().add(constructJsCoreStringInvariant());
//			// Write out the JavaScriptFile
//			jsTarget.write(jsFile);
//			// Add WyIL => JavaScript Build Rule
//			project.add(new Build.Rule() {
//				@Override
//				public void apply(Collection<Build.Task> tasks) throws IOException {
//					// Construct a new build task
//					JavaScriptCompileTask task = new JavaScriptCompileTask(project, jsTarget, wyilTarget);
//					// Submit the task for execution
//					tasks.add(task);
//				}
//			});
//			project.refresh();
//			// Actually force the project to build
//			project.build(ForkJoinPool.commonPool(), Build.NULL_METER).get();
//			// Flush any created resources (e.g. wyil files)
//			root.flush();
//			// Check whether any syntax error produced
//			result = !TestUtils.findSyntaxErrors(wyilTarget.read().getRootItem(), new BitSet());
//			// Print out any error messages
//			wycli.commands.Build.printSyntacticMarkers(psyserr, (List) sources, (FileSystem.Entry) wyilTarget);
//			// Flush any created resources (e.g. wyil files)
//			root.flush();
//		} catch (SyntacticException e) {
//			// Print out the syntax error
//			e.outputSourceError(new PrintStream(syserr),false);
//			result = false;
//		} catch (Exception e) {
//			// Print out the syntax error
//			e.printStackTrace(new PrintStream(syserr));
//			result = false;
//		}
//		// Convert bytes produced into resulting string.
//		byte[] errBytes = syserr.toByteArray();
//		byte[] outBytes = sysout.toByteArray();
//		String output = new String(errBytes) + new String(outBytes);
//		return new Pair<>(result, output);
//	}

	/**
	 * Execute a given JavaScript file stored on disk using the built-in
	 * "Nashorn" interpreter.
	 *
	 * @param jsFile The file to be executed.
	 * @param name
	 *            The fully qualified name of the JavaScript file to be
	 *            executed.
	 * @throws ScriptException
	 * @throws IOException
	 */
	private void execJS(File jsFile, String name) throws ScriptException, IOException {
		ScriptEngine engine = new ScriptEngineManager().getEngineByName("nashorn");
		// Load the WyJS runtime which provides necessary support methods.
		engine.eval(new FileReader(WYJS_RUNTIME));
		// Load the js script from the filesystem
		engine.eval(new FileReader(jsFile));
		// Execute the test() method
		engine.eval(name + "$test();");
	}

	private static JavaScriptFile.Method constructJsCoreStringInvariant() {
		JavaScriptFile.Term body = new JavaScriptFile.Return(new JavaScriptFile.Constant(true));
		return new JavaScriptFile.Method("js$core$string$type", Arrays.asList("v"), new JavaScriptFile.Block(body));
	}

	// ======================================================================
	// Tests
	// ======================================================================

	// Parameter to test case is the name of the current test.
	// It will be passed to the constructor by JUnit.
	private final String testName;
	public RuntimeValidTests(String testName) {
		this.testName = testName;
	}

	// Here we enumerate all available test cases.
	@Parameters(name = "{0}")
	public static Collection<Object[]> data() {
		return TestUtils.findTestNames(WHILEY_SRC_DIR);
	}

	// Skip ignored tests
	@Before
	public void beforeMethod() {
		String ignored = IGNORED.get(this.testName);
		Assume.assumeTrue("Test " + this.testName + " skipped: " + ignored, ignored == null);
	}

	@Test
	public void valid() throws IOException, ScriptException {
		if (new File("../../running_on_travis").exists()) {
			System.out.println(".");
		}
		runTest(this.testName);
	}
}
