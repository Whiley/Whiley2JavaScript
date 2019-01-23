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
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

import org.junit.*;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;

import wybs.lang.Build;
import wybs.lang.SyntaxError;
import wybs.util.StdBuildGraph;
import wybs.util.StdBuildRule;
import wybs.util.StdProject;
import wyc.lang.WhileyFile;
import wyc.task.CompileTask;
import wyc.util.TestUtils;
import wycc.util.Logger;
import wycc.util.Pair;
import wyfs.lang.Content;
import wyfs.lang.Path;
import wyfs.util.DirectoryRoot;
import wyil.lang.WyilFile;
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
		// Problem Type Checking Union Type
		IGNORED.put("RecordSubtype_Valid_1", "#696");
		IGNORED.put("RecordSubtype_Valid_2", "#696");
		// Function Overloading for Nominal Types
		IGNORED.put("Function_Valid_11", "#702");
		IGNORED.put("Function_Valid_15", "#702");
		//  Normalisation for Method Subtyping
		IGNORED.put("Lifetime_Lambda_Valid_2", "#794");
		IGNORED.put("Lifetime_Lambda_Valid_5", "#794");
		IGNORED.put("Lifetime_Lambda_Valid_6", "#794");
		// Support Captured Lifetime Parameters
		IGNORED.put("Lifetime_Lambda_Valid_7", "#795");
		// Type Tests with Invariants
		IGNORED.put("TypeEquals_Valid_23", "#787");
		IGNORED.put("TypeEquals_Valid_25", "#787");
		IGNORED.put("TypeEquals_Valid_30", "#787");
		IGNORED.put("TypeEquals_Valid_41", "#787");
		// Remove Any and Negation Types
		IGNORED.put("ConstrainedReference_Valid_1", "#827");
		// Temporary Removal of Intersections
		IGNORED.put("Intersection_Valid_1", "#843");
		IGNORED.put("Intersection_Valid_2", "#843");
		IGNORED.put("NegationType_Valid_3", "#843");
		// Problems with relaxed versus strict subtype operator
		IGNORED.put("Function_Valid_22", "#845");
		// Unclassified
		IGNORED.put("Lifetime_Valid_8", "???");
		// Readable Reference Types
		IGNORED.put("UnionType_Valid_26", "#849");
		// Rethinking Runtime Type Test Operator ?
		IGNORED.put("RecordAssign_Valid_11", "#850");
		// Ambiguous coercions
		IGNORED.put("TypeEquals_Valid_33", "#837");
		IGNORED.put("TypeEquals_Valid_35", "#837");
		IGNORED.put("Coercion_Valid_10", "#837");

		// ===================================================
		// WyJS problems
		// ===================================================

		IGNORED.put("Assign_Valid_3", "??");
		IGNORED.put("Assign_Valid_4", "??");
		IGNORED.put("Assign_Valid_5", "??");
		IGNORED.put("Complex_Valid_10", "??");
		IGNORED.put("Complex_Valid_11", "??");
		IGNORED.put("ConstrainedReference_Valid_1", "??");
		IGNORED.put("FunctionRef_Valid_13", "#9");
		IGNORED.put("Switch_Valid_12", "#12");
		IGNORED.put("Switch_Valid_4", "???");
		// Following related to runtime assertion checking
		IGNORED.put("Cast_Valid_5", "??");
		IGNORED.put("OpenRecord_Valid_9", "??");
		IGNORED.put("Return_Valid_1", "??");
		IGNORED.put("Subtype_Valid_5", "??");
		IGNORED.put("UnionType_Valid_2", "??");
		IGNORED.put("While_Valid_42", "??");
	}

	/**
	 * The directory where compiler libraries are stored. This is necessary
	 * since it will contain the Whiley Runtime.
	 */
	public final static String WYC_LIB_DIR = "../../lib/".replace('/', File.separatorChar);

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
			execJS(jsFilename);
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
	 * @param args
	 *            --- list of command-line arguments to provide to the Whiley
	 *            Compiler.
	 * @return
	 * @throws IOException
	 */
	public static Pair<Boolean,String> compileWhiley2JavaScript(String whileydir, String... args) throws IOException {
		ByteArrayOutputStream syserr = new ByteArrayOutputStream();
		ByteArrayOutputStream sysout = new ByteArrayOutputStream();
		//
		boolean result = true;
		//
		try {
			// Construct the project
			DirectoryRoot root = new DirectoryRoot(whileydir, registry);
			StdProject project = new StdProject(root);
			// Add build rules
			addCompilationRules(project,root,false);
			// Create empty build graph
			Build.Graph graph = new StdBuildGraph();
			// Identify source files and build project
			project.build(TestUtils.findSourceFiles(root, graph, args), graph);
			// Flush any created resources (e.g. wyil files)
			root.flush();
		} catch (SyntaxError e) {
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
	 * Add build rules to project for compiling from Whiley source to JavaScript.
	 * This is a two step process whereby we first using the Whiley Compiler (WyC)
	 * to generate wyil files, and then use the JavaScript compiler for the final
	 * stage.
	 *
	 * @param project
	 * @param root
	 * @param verify
	 */
	private static void addCompilationRules(StdProject project, Path.Root root, boolean verify) {
		CompileTask wyTask = new CompileTask(project);
		JavaScriptCompileTask jsTask = new JavaScriptCompileTask(project);
		// Add compilation rule(s) (whiley => wyil)
		project.add(new StdBuildRule(wyTask, root, Content.filter("**", WhileyFile.ContentType), null, root));
		// Add compilation rule(s) (wyil => js)
		project.add(new StdBuildRule(jsTask, root, Content.filter("**", WyilFile.ContentType), null, root));
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
	private void execJS(String filename) throws ScriptException, IOException {
		ScriptEngine engine = new ScriptEngineManager().getEngineByName("nashorn");
		// Load the WyJS runtime which provides necessary support methods.
		engine.eval(new FileReader(WYJS_RUNTIME));
		// Load the js script from the filesystem
		engine.eval(new FileReader(filename));
		// Execute the test() method
		engine.eval("test();");
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
