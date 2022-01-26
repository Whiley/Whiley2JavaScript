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

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

import org.junit.Assume;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;

import wycc.util.Pair;
import wycc.util.Trie;
import wycc.util.AbstractCompilationUnit.Name;
import wycc.util.AbstractCompilationUnit.Tuple;
import wycc.util.AbstractCompilationUnit.Value;
import wycc.util.AbstractCompilationUnit.Identifier;

import static wyil.lang.WyilFile.*;
import wyil.lang.WyilFile.Type;
import wyil.lang.WyilFile;
import wyc.util.TestUtils;
import wyjs.Main;
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

 	protected void runTest(Trie path) throws IOException {
		File jsFile = new File(WHILEY_SRC_DIR + File.separatorChar + path + ".js");
		// Compile to JavaScript
		compileWhiley2JavaScript(new File(WHILEY_SRC_DIR), path); // name of test to compile
		try {
			execJS(jsFile, path);
		} catch (ScriptException e) {
			System.err.println("=========================================================");
			System.err.println("TEST: " + path);
			System.err.println("=========================================================");
			e.printStackTrace();
			fail("unexpected output!");
		}
	}

 	/**
	 * Mock of js::core package which is needed for various JavaScript specific
	 * tests (e.g. for native strings, etc).
	 */
	private final static Trie path = Trie.fromString("js/core");
	private final static WyilFile jsCore = new WyilFile(Collections.emptyList());
	static {
		// FIXME: type here is incorrect and should be updated with fixed-with integer
		// type (i.e. uint:16).
		Decl.Variable var = new Decl.Variable(new Tuple<>(), new Identifier("$"), new Type.Array(Type.Int));
		// public type string is (int[] $) where true
		Decl.Type type = new Decl.Type(new Tuple<>(new Modifier.Public()), new Identifier("string"), new Tuple<>(), var,
				new Tuple<>(new Expr.Constant(Type.Bool, new Value.Bool(true))));
		//
		Decl.Unit unit = new Decl.Unit(new Name(path), new Tuple<>(type));
		jsCore.setRootItem(new WyilFile.Decl.Module(new Name(path), new Tuple<>(unit), new Tuple<>(), new Tuple<>()));
	}

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
	public static void compileWhiley2JavaScript(File whileydir, Trie path) throws IOException {
		File whileySrcDir = new File(WHILEY_SRC_DIR);
		// Configure and run Whiley compiler.
		boolean r = new wyc.Compiler().setWhileyDir(whileySrcDir).setWyilDir(whileySrcDir).setTarget(path)
				.addSource(path).addDependency(jsCore).run();
		if (!r) {
			fail("Test failed to compile!");
		} else {
			// Configure and run JavaScript backend.
			new Main().setWyilDir(whileydir).setJsDir(whileydir).setTarget(path).addSource(path)
					.setStandard(JavaScriptFile.Standard.ES5).run();
		}
	}

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
	private void execJS(File jsFile, Trie path) throws ScriptException, IOException {
		ScriptEngine engine = new ScriptEngineManager().getEngineByName("nashorn");
		// Load the WyJS runtime which provides necessary support methods.
		engine.eval(new FileReader(WYJS_RUNTIME));
		// Load the js script from the filesystem
		engine.eval(new FileReader(jsFile));
		// Execute the test() method
		engine.eval(path + "$test();");
	}

	// ======================================================================
	// Tests
	// ======================================================================

	// Parameter to test case is the name of the current test.
	// It will be passed to the constructor by JUnit.
	private final Trie testName;
	public RuntimeValidTests(String testName) {
		this.testName = Trie.fromString(testName);
	}

	// Here we enumerate all available test cases.
	@Parameters(name = "{0}")
	public static Collection<Object[]> data() {
		return TestUtils.findTestNames(WHILEY_SRC_DIR);
	}

	// Skip ignored tests
	@Before
	public void beforeMethod() {
		String ignored = IGNORED.get(this.testName.toString());
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
