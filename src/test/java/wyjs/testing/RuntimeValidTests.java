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
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ForkJoinPool;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

import org.junit.Assume;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;

import wybs.lang.Build;
import wybs.lang.SyntacticException;
import wybs.util.SequentialBuildProject;
import wyc.lang.WhileyFile;
import wyc.task.CompileTask;
import wyc.util.TestUtils;
import wyc.util.TestUtils.Environment;
import wycc.util.Pair;
import wyfs.lang.Content;
import wyfs.lang.Path;
import wyfs.util.DirectoryRoot;
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
	public final static String WYJS_RUNTIME = "lib/wy.js".replace('/', File.separatorChar);

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
	}

	// ======================================================================
	// Test Harness
	// ======================================================================

 	protected void runTest(String name) throws IOException {
		String jsFilename = WHILEY_SRC_DIR + File.separatorChar + name + ".js";
		// Compile to Java Bytecode
		Pair<Boolean, String> p = compileWhiley2JavaScript(
				WHILEY_SRC_DIR, // location of source directory
				name); // name of test to compile

		boolean r = p.first();
		System.out.print(p.second());

		if (!r) {
			fail("Test failed to compile!");
		}
		// Execute the generated JavaScript Program.
		try {
			execJS(jsFilename,name);
		} catch(ScriptException e) {
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
	 * Run the Whiley Compiler with the given list of arguments to produce a
	 * JavaScript source file. This will then need to be separately compiled.
	 *
	 * @param arg
	 *            --- list of command-line arguments to provide to the Whiley
	 *            Compiler.
	 * @return
	 * @throws IOException
	 */
	public static Pair<Boolean,String> compileWhiley2JavaScript(String whileydir, String arg) throws IOException {
		ByteArrayOutputStream syserr = new ByteArrayOutputStream();
		ByteArrayOutputStream sysout = new ByteArrayOutputStream();
		PrintStream psyserr = new PrintStream(syserr);
		//
		boolean result = true;
		//
		try {
			// Construct the project
			DirectoryRoot root = new DirectoryRoot(whileydir, registry);
			// Construct temporary build environment
			Build.Environment environment = new Environment(root,false);
			//
			SequentialBuildProject project = new SequentialBuildProject(environment, root);
			// Identify source files and target files
			Pair<Path.Entry<WhileyFile>,Path.Entry<WyilFile>> p = TestUtils.findSourceFiles(root,arg);
			List<Path.Entry<WhileyFile>> sources = Arrays.asList(p.first());
			Path.Entry<WyilFile> wyilTarget = p.second();
			// Add Whiley => WyIL build rule
			project.add(new Build.Rule() {
				@Override
				public void apply(Collection<Build.Task> tasks) throws IOException {
					// Construct a new build task
					CompileTask task = new CompileTask(project, root, wyilTarget, sources);
					// Submit the task for execution
					tasks.add(task);
				}
			});
			// Construct an empty JavaScriptFile
			Path.Entry<JavaScriptFile> jsTarget = root.create(wyilTarget.id(), JavaScriptFile.ContentType);
			// NOTE: Java Nashorn supports ES5 only?
			jsTarget.write(new JavaScriptFile(JavaScriptFile.Standard.ES5));
			// Add WyIL => JavaScript Build Rule
			project.add(new Build.Rule() {
				@Override
				public void apply(Collection<Build.Task> tasks) throws IOException {
					// Construct a new build task
					JavaScriptCompileTask task = new JavaScriptCompileTask(project, jsTarget, wyilTarget);
					// Submit the task for execution
					tasks.add(task);
				}
			});
			project.refresh();
			// Actually force the project to build
			project.build(ForkJoinPool.commonPool(), Build.NULL_METER).get();
			// Flush any created resources (e.g. wyil files)
			root.flush();
			// Check whether any syntax error produced
			result = !TestUtils.findSyntaxErrors(wyilTarget.read().getRootItem(), new BitSet());
			// Print out any error messages
			wycc.commands.Build.printSyntacticMarkers(psyserr, (List) sources, (Path.Entry) wyilTarget);
			// Flush any created resources (e.g. wyil files)
			root.flush();
		} catch (SyntacticException e) {
			// Print out the syntax error
			e.outputSourceError(new PrintStream(syserr),false);
			result = false;
		} catch (Exception e) {
			// Print out the syntax error
			e.printStackTrace(new PrintStream(syserr));
			result = false;
		}
		// Convert bytes produced into resulting string.
		byte[] errBytes = syserr.toByteArray();
		byte[] outBytes = sysout.toByteArray();
		String output = new String(errBytes) + new String(outBytes);
		return new Pair<>(result, output);
	}

	/**
	 * Execute a given JavaScript file stored on disk using the built-in
	 * "Nashorn" interpreter.
	 *
	 * @param filename
	 *            The fully qualified name of the JavaScript file to be
	 *            executed.
	 * @throws ScriptException
	 * @throws IOException
	 */
	private void execJS(String filename, String name) throws ScriptException, IOException {
		ScriptEngine engine = new ScriptEngineManager().getEngineByName("nashorn");
		// Load the WyJS runtime which provides necessary support methods.
		engine.eval(new FileReader(WYJS_RUNTIME));
		// Load the js script from the filesystem
		engine.eval(new FileReader(filename));
		// Execute the test() method
		engine.eval(name + "$test();");
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
