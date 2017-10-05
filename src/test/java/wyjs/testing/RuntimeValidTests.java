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

import wyc.command.Compile;
import wyc.util.TestUtils;
import wycc.util.Logger;
import wycc.util.Pair;
import wyfs.lang.Content;
import wyjs.commands.JsCompile;

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
		// Unclassified
		IGNORED.put("Lifetime_Valid_8", "???");

		// ===================================================
		// WyJS problems
		// ===================================================

		IGNORED.put("ConstrainedList_Valid_23", "#10");
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
 		String whileyFilename = WHILEY_SRC_DIR + File.separatorChar + name + ".whiley";
 		String jsFilename = WHILEY_SRC_DIR + File.separatorChar + name + ".js";
		// Compile to Java Bytecode
		Pair<Compile.Result, String> p = compileWhiley2JavaScript(
				WHILEY_SRC_DIR, // location of source directory
				whileyFilename); // name of test to compile

		Compile.Result r = p.first();
		System.out.print(p.second());

		if (r == Compile.Result.INTERNAL_FAILURE) {
			fail("Test caused internal failure!");
		} else if (r != Compile.Result.SUCCESS) {
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
	 * Run the Whiley Compiler with the given list of arguments to produce a
	 * JavaScript source file. This will then need to be separately compiled.
	 *
	 * @param args
	 *            --- list of command-line arguments to provide to the Whiley
	 *            Compiler.
	 * @return
	 * @throws IOException
	 */
	public static Pair<Compile.Result,String> compileWhiley2JavaScript(String whileydir, String... args) throws IOException {
		ByteArrayOutputStream syserr = new ByteArrayOutputStream();
		ByteArrayOutputStream sysout = new ByteArrayOutputStream();
		Content.Registry registry = new wyc.Activator.Registry();
		JsCompile cmd = new JsCompile(registry,Logger.NULL,sysout,syserr);
		cmd.setWhileydir(new File(whileydir));
		cmd.setVerbose();
		Compile.Result result = cmd.execute(args);
		byte[] errBytes = syserr.toByteArray();
		byte[] outBytes = sysout.toByteArray();
		String output = new String(errBytes) + new String(outBytes);
		return new Pair<>(result,output);
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
