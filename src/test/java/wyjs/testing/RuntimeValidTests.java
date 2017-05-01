// Copyright (c) 2011, David J. Pearce (djp@ecs.vuw.ac.nz)
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//    * Redistributions of source code must retain the above copyright
//      notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above copyright
//      notice, this list of conditions and the following disclaimer in the
//      documentation and/or other materials provided with the distribution.
//    * Neither the name of the <organization> nor the
//      names of its contributors may be used to endorse or promote products
//      derived from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL DAVID J. PEARCE BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

package wyjs.testing;

import static org.junit.Assert.fail;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
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

import wybs.util.StdProject;
import wyc.commands.Compile;
import wyc.util.TestUtils;
import wycc.util.Pair;
import wyil.io.WyilFileReader;
import wyil.lang.WyilFile;
import wyjs.io.JavaScriptFileWriter;

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
	public final static String WYJS_RUNTIME = "lib/wyjs.js".replace('/', File.separatorChar);

	/**
	 * Ignored tests and a reason why we ignore them.
	 */
	public final static Map<String, String> IGNORED = new HashMap<>();

	static {
		// Bring over all the currently failing tests for the compiler. There's
		// absolutely no point trying to see whether these work or not, since we
		// already know they will not.
		IGNORED.put("RecursiveType_Valid_12", "#339");
		IGNORED.put("RecursiveType_Valid_22", "#339");
		//
		IGNORED.put("Function_Valid_15", "#566");
		IGNORED.put("TypeEquals_Valid_23", "#566");
		IGNORED.put("TypeEquals_Valid_41", "#566");
		//
		IGNORED.put("Lifetime_Lambda_Valid_4", "#645");
		//
		IGNORED.put("RecordSubtype_Valid_1", "#696");
		IGNORED.put("RecordSubtype_Valid_2", "#696");
		IGNORED.put("RecursiveType_Valid_3", "#696");
		IGNORED.put("TypeEquals_Valid_36", "#696");
		IGNORED.put("TypeEquals_Valid_37", "#696");
		IGNORED.put("TypeEquals_Valid_38", "#696");
		//
		IGNORED.put("Function_Valid_11", "#702");
		//
		IGNORED.put("Complex_Valid_3", "#339");
		IGNORED.put("DoWhile_Valid_4", "#339");
		IGNORED.put("RecursiveType_Valid_28", "#339");
	}

	/**
	 * The directory where compiler libraries are stored. This is necessary
	 * since it will contain the Whiley Runtime.
	 */
	public final static String WYC_LIB_DIR = "../../lib/".replace('/', File.separatorChar);

	// ======================================================================
	// Test Harness
	// ======================================================================

	/**
	 * Compile a syntactically invalid test case with verification enabled. The
	 * expectation is that compilation should fail with an error and, hence, the
	 * test fails if compilation does not.
	 *
	 * @param name
	 *            Name of the test to run. This must correspond to a whiley
	 *            source file in the <code>WHILEY_SRC_DIR</code> directory.
	 * @throws ScriptException
	 */
	protected void runTest(String testName) throws IOException, ScriptException {
		File whileySrcDir = new File(WHILEY_SRC_DIR);
		// this will need to turn on verification at some point.
		String whileyFilename = WHILEY_SRC_DIR + File.separatorChar + testName
				+ ".whiley";

		Pair<Compile.Result,String> p = TestUtils.compile(
				whileySrcDir,      // location of source directory
				false,               // no verification
				whileyFilename);     // name of test to compile

		Compile.Result r = p.first();

		System.out.print(p.second());

		if (r != Compile.Result.SUCCESS) {
			fail("Test failed to compile!");
		} else if (r == Compile.Result.INTERNAL_FAILURE) {
			fail("Test caused internal failure!");
		}

		// Execute the compile WyIL file
		execWyil(WHILEY_SRC_DIR, testName);
	}

	private void execWyil(String wyilSrcDir, String testName) throws IOException, ScriptException {
		String wyilFilename = WHILEY_SRC_DIR + File.separatorChar + testName
				+ ".wyil";
		FileInputStream fin = new FileInputStream(wyilFilename);
		WyilFileReader reader = new WyilFileReader(fin);
		WyilFile f = reader.read();
		ByteArrayOutputStream os = new ByteArrayOutputStream();
		StdProject project = new StdProject();
		new JavaScriptFileWriter(project,os).apply(f);
		// Extract the javascript
		String output = new String(os.toByteArray());
		// Execute the javascript
		execJS(output);
	}

	private void execJS(String script) throws ScriptException, FileNotFoundException {
		ScriptEngine engine = new ScriptEngineManager().getEngineByName("nashorn");
		engine.eval(new FileReader(WYJS_RUNTIME));
		engine.eval(script);
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
