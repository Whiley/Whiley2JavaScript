package testing;

import static org.junit.Assert.fail;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintStream;
import java.io.Reader;

import org.junit.Ignore;
import org.junit.Test;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;
import org.mozilla.javascript.tools.shell.Global;

import wyc.WycMain;
import wyil.io.WyilFileReader;
import wyjc.WyjcMain;
import wyjc.util.WyjcBuildTask;
import wyjs.WyJS;

public class RuntimeValidTests {
	/**
	 * The directory containing the source files for each test case. Every test
	 * corresponds to a file in this directory.
	 */
	public final static String WHILEY_TESTS_VALID_DIR = "../WhileyCompiler/tests/valid";

	/**
	 * The directory where compiler libraries are stored. This is necessary
	 * since we will call the Whiley Compiler to compile the Whiley files into
	 * wyil files before running this compiler.
	 */
	public final static String WYC_CLASS_DIR = "lib/wyjc-all-v0.3.36.jar";

	/**
	 * The path to the Whiley RunTime (WyRT) library. This contains the Whiley
	 * standard library, which includes various helper functions, etc.
	 */
	private static String WYRT_PATH = "lib/wyrt-v0.3.36.jar";

	/**
	 * The path to the directory containing the JavaScript libraries need for
	 * execution.
	 */
	private static String JS_LIB_DIR = "lib";

	/**
	 * The set of libraries which need to be included when executing the
	 * generated JavaScript. Each of these should be contained in the
	 * JS_LIB_DIR.
	 */
	private static String[] JS_LIBS = { "WyJS_Runtime.js", "Math.js" };

	/**
	 * The directory into which all generated intermediate files should be
	 * placed.
	 */
	private static String TEST_OUTPUT_DIR = "tests/valid";

	/**
	 * Compile a syntactically invalid test case with verification enabled. The
	 * expectation is that compilation should fail with an error and, hence, the
	 * test fails if compilation does not.
	 *
	 * @param name
	 *            Name of the test to run. This must correspond to a whiley
	 *            source file in the <code>WHILEY_SRC_DIR</code> directory.
	 * @throws Exception
	 */
	protected void runTest(String name) throws IOException {
		// this will need to turn on verification at some point.
		String filename = WHILEY_TESTS_VALID_DIR + File.separatorChar + name + ".whiley";

		int r = compile("-wd", WHILEY_TESTS_VALID_DIR, // location of source
														// directory
				"-wyildir", TEST_OUTPUT_DIR, "-wp", WYRT_PATH, // add wyrt to
																// whileypath
				filename); // name of test to compile

		if (r != WycMain.SUCCESS) {
			fail("Test failed to compile!");
		} else if (r == WycMain.INTERNAL_FAILURE) {
			fail("Test caused internal failure!");
		}

		// (1) Need to generate JS here
		WyilFileReader wyilReader = new WyilFileReader(TEST_OUTPUT_DIR + File.separatorChar + name + ".wyil");
		try {
			WyJS js = new WyJS(wyilReader.read());
			String start = js.makeFile(name, TEST_OUTPUT_DIR);
			// (2) Need to execute JS here
			exec(name);
		} catch (Exception e) {
			throw new RuntimeException("Internal Failure", e);
		}
	}

	/**
	 * Execute the generate JavaScript version of a test using the Rhino
	 * JavaScript interpreter.
	 *
	 * @return
	 * @throws IOException
	 */
	public static String exec(String name) throws IOException {
		// Setup the JavaScript execution context
		OutputStream out = new ByteArrayOutputStream();
		OutputStream err = new ByteArrayOutputStream();
		Context ctx = Context.enter();
		Scriptable scope = createJavaScriptScriptable(ctx, out, err);

		// Now, include all necessary JavaScript files to actually run the test.
		// This include the WyJS runtime, along with any additional support
		// libraries.
		for (String lib : JS_LIBS) {
			String filename = JS_LIB_DIR + File.separatorChar + lib;
			Reader r = new FileReader(new File(filename));
			ctx.evaluateReader(scope, r, lib, 1, null);
		}

		// Finally, execute the test case itself
		String filename = TEST_OUTPUT_DIR + File.separatorChar + name + ".js";
		Reader testReader = new FileReader(new File(filename));
		ctx.evaluateReader(scope, testReader, filename, 1, null);
		ctx.evaluateString(scope, "test();", "test", 1, null);
		// Done
		return out.toString() + err.toString();
	}

	private static Scriptable createJavaScriptScriptable(Context ctx, OutputStream out, OutputStream err) {
		ctx.initStandardObjects();
		Scriptable scope = new Global(ctx); // ctx.initStandardObjects();
		// scope.defineProperty("", new MyGlobalNativeFunction());

		Object jssysout = Context.javaToJS(new PrintStream(out), scope);
		Object jssyserr = Context.javaToJS(new PrintStream(err), scope);
		ScriptableObject.putConstProperty(scope, "sysout", jssysout);
		ScriptableObject.putConstProperty(scope, "syserr", jssyserr);

		ctx.setOptimizationLevel(-1);
		return scope;
	}

	/**
	 * Run the Whiley Compiler with the given list of arguments.
	 *
	 * @param args
	 *            --- list of command-line arguments to provide to the Whiley
	 *            Compiler.
	 * @return
	 */
	public static int compile(String... args) {
		return new WyjcMain(new WyjcBuildTask(), WyjcMain.DEFAULT_OPTIONS).run(args);
	}

	// ======================================================================
	// Tests
	// ======================================================================

	@Test
	public void Access_Valid_1() throws IOException {
		runTest("Access_Valid_1");
	}

	@Test
	public void Access_Valid_2() throws IOException {
		runTest("Access_Valid_2");
	}

	@Test
	public void Assume_Valid_1() throws IOException {
		runTest("Assume_Valid_1");
	}

	@Test
	public void Assume_Valid_2() throws IOException {
		runTest("Assume_Valid_2");
	}

	@Test
	public void BoolAssign_Valid_1() throws IOException {
		runTest("BoolAssign_Valid_1");
	}

	@Test
	public void BoolAssign_Valid_2() throws IOException {
		runTest("BoolAssign_Valid_2");
	}

	@Test
	public void BoolAssign_Valid_3() throws IOException {
		runTest("BoolAssign_Valid_3");
	}

	@Test
	public void BoolAssign_Valid_4() throws IOException {
		runTest("BoolAssign_Valid_4");
	}

	@Test
	public void BoolAssign_Valid_5() throws IOException {
		runTest("BoolAssign_Valid_5");
	}

	@Test
	public void BoolAssign_Valid_6() throws IOException {
		runTest("BoolAssign_Valid_6");
	}

	@Test
	public void BoolFun_Valid_1() throws IOException {
		runTest("BoolFun_Valid_1");
	}

	@Test
	public void BoolIfElse_Valid_1() throws IOException {
		runTest("BoolIfElse_Valid_1");
	}

	@Test
	public void BoolIfElse_Valid_2() throws IOException {
		runTest("BoolIfElse_Valid_2");
	}

	@Test
	public void BoolList_Valid_1() throws IOException {
		runTest("BoolList_Valid_1");
	}

	@Ignore("Issue ??")
	@Test
	public void BoolList_Valid_2() throws IOException {
		runTest("BoolList_Valid_2");
	}

	@Test
	public void BoolList_Valid_3() throws IOException {
		runTest("BoolList_Valid_3");
	}

	@Test
	public void BoolRecord_Valid_1() throws IOException {
		runTest("BoolRecord_Valid_1");
	}

	@Test
	public void BoolRecord_Valid_2() throws IOException {
		runTest("BoolRecord_Valid_2");
	}

	@Test
	public void BoolRequires_Valid_1() throws IOException {
		runTest("BoolRequires_Valid_1");
	}

	@Test
	public void BoolReturn_Valid_1() throws IOException {
		runTest("BoolReturn_Valid_1");
	}

	@Test
	public void ByteSimple_Valid_1() throws IOException {
		runTest("ByteSimple_Valid_1");
	}

	@Test
	public void ByteSimple_Valid_2() throws IOException {
		runTest("ByteSimple_Valid_2");
	}

	@Test
	public void ByteSimple_Valid_3() throws IOException {
		runTest("ByteSimple_Valid_3");
	}

	@Test
	public void ByteSimple_Valid_4() throws IOException {
		runTest("ByteSimple_Valid_4");
	}

	@Test
	public void ByteSimple_Valid_5() throws IOException {
		runTest("ByteSimple_Valid_5");
	}

	@Test
	public void ByteSimple_Valid_6() throws IOException {
		runTest("ByteSimple_Valid_6");
	}

	@Test
	public void ByteSimple_Valid_7() throws IOException {
		runTest("ByteSimple_Valid_7");
	}

	@Test
	public void ByteSimple_Valid_9() throws IOException {
		runTest("ByteSimple_Valid_9");
	}

	@Test
	public void Byte_Valid_1() throws IOException {
		runTest("Byte_Valid_1");
	}

	@Ignore("long but passing")
	@Test
	public void Byte_Valid_2() throws IOException {
		runTest("Byte_Valid_2");
	}

	@Ignore("long but passing")
	@Test
	public void Byte_Valid_3() throws IOException {
		runTest("Byte_Valid_3");
	}

	@Ignore("long but passing")
	@Test
	public void Byte_Valid_4() throws IOException {
		runTest("Byte_Valid_4");
	}

	@Ignore("long but passing")
	@Test
	public void Byte_Valid_5() throws IOException {
		runTest("Byte_Valid_5");
	}

	@Test
	public void Byte_Valid_6() throws IOException {
		runTest("Byte_Valid_6");
	}

	@Test
	public void Byte_Valid_7() throws IOException {
		runTest("Byte_Valid_7");
	}

	@Test
	public void Byte_Valid_8() throws IOException {
		runTest("Byte_Valid_8");
	}

	@Test
	public void Byte_Valid_9() throws IOException {
		runTest("Byte_Valid_9");
	}

	@Test
	public void Cast_Valid_1() throws IOException {
		runTest("Cast_Valid_1");
	}

	@Test
	public void Cast_Valid_2() throws IOException {
		runTest("Cast_Valid_2");
	}

	@Test
	public void Cast_Valid_3() throws IOException {
		runTest("Cast_Valid_3");
	}

	@Test
	public void Cast_Valid_4() throws IOException {
		runTest("Cast_Valid_4");
	}

	@Ignore("checked")
	@Test
	public void Cast_Valid_5() throws IOException {
		runTest("Cast_Valid_5");
	}

	@Test
	public void Cast_Valid_6() throws IOException {
		runTest("Cast_Valid_6");
	}

	@Test
	public void Coercion_Valid_1() throws IOException {
		runTest("Coercion_Valid_1");
	}

	@Test
	public void Coercion_Valid_2() throws IOException {
		runTest("Coercion_Valid_2");
	}

	@Test
	public void Coercion_Valid_3() throws IOException {
		runTest("Coercion_Valid_3");
	}

	@Test
	public void Coercion_Valid_7() throws IOException {
		runTest("Coercion_Valid_7");
	}

	@Ignore("#406")
	@Test
	public void Coercion_Valid_8() throws IOException {
		runTest("Coercion_Valid_8");
	}

	@Ignore("checked")
	@Test
	public void Coercion_Valid_9() throws IOException {
		runTest("Coercion_Valid_9");
	}

	@Ignore("checked")
	@Test
	public void Complex_Valid_1() throws IOException {
		runTest("Complex_Valid_1");
	}

	@Ignore("checked")
	@Test
	public void Complex_Valid_2() throws IOException {
		runTest("Complex_Valid_2");
	}

	@Ignore("Crash")
	@Test
	public void Complex_Valid_3() throws IOException {
		runTest("Complex_Valid_3");
	}

	@Ignore("Crash")
	@Test
	public void Complex_Valid_4() throws IOException {
		runTest("Complex_Valid_4");
	}

	@Test
	public void Complex_Valid_5() throws IOException {
		runTest("Complex_Valid_5");
	}

	@Test
	public void Complex_Valid_6() throws IOException {
		runTest("Complex_Valid_6");
	}

	@Test
	public void Complex_Valid_7() throws IOException {
		runTest("Complex_Valid_7");
	}

	@Ignore("checked")
	@Test
	public void Complex_Valid_8() throws IOException {
		runTest("Complex_Valid_8");
	}

	@Test
	public void Constant_Valid_3() throws IOException {
		runTest("Constant_Valid_3");
	}

	@Test
	public void ConstrainedInt_Valid_1() throws IOException {
		runTest("ConstrainedInt_Valid_1");
	}

	@Test
	public void ConstrainedInt_Valid_10() throws IOException {
		runTest("ConstrainedInt_Valid_10");
	}

	@Test
	public void ConstrainedInt_Valid_12() throws IOException {
		runTest("ConstrainedInt_Valid_12");
	}

	@Test
	public void ConstrainedInt_Valid_13() throws IOException {
		runTest("ConstrainedInt_Valid_13");
	}

	@Ignore("checked")
	@Test
	public void ConstrainedInt_Valid_15() throws IOException {
		runTest("ConstrainedInt_Valid_15");
	}

	@Ignore("checked")
	@Test
	public void ConstrainedInt_Valid_16() throws IOException {
		runTest("ConstrainedInt_Valid_16");
	}

	@Test
	public void ConstrainedInt_Valid_17() throws IOException {
		runTest("ConstrainedInt_Valid_17");
	}

	@Test
	public void ConstrainedInt_Valid_18() throws IOException {
		runTest("ConstrainedInt_Valid_18");
	}

	@Test
	public void ConstrainedInt_Valid_19() throws IOException {
		runTest("ConstrainedInt_Valid_19");
	}

	@Test
	public void ConstrainedInt_Valid_2() throws IOException {
		runTest("ConstrainedInt_Valid_2");
	}

	@Test
	public void ConstrainedInt_Valid_20() throws IOException {
		runTest("ConstrainedInt_Valid_20");
	}

	@Test
	public void ConstrainedInt_Valid_21() throws IOException {
		runTest("ConstrainedInt_Valid_21");
	}

	@Test
	public void ConstrainedInt_Valid_22() throws IOException {
		runTest("ConstrainedInt_Valid_22");
	}

	@Test
	public void ConstrainedInt_Valid_23() throws IOException {
		runTest("ConstrainedInt_Valid_23");
	}

	@Test
	public void ConstrainedInt_Valid_24() throws IOException {
		runTest("ConstrainedInt_Valid_24");
	}

	@Test
	public void ConstrainedInt_Valid_3() throws IOException {
		runTest("ConstrainedInt_Valid_3");
	}

	@Test
	public void ConstrainedInt_Valid_4() throws IOException {
		runTest("ConstrainedInt_Valid_4");
	}

	@Test
	public void ConstrainedInt_Valid_5() throws IOException {
		runTest("ConstrainedInt_Valid_5");
	}

	@Test
	public void ConstrainedInt_Valid_6() throws IOException {
		runTest("ConstrainedInt_Valid_6");
	}

	@Ignore("checked")
	@Test
	public void ConstrainedInt_Valid_8() throws IOException {
		runTest("ConstrainedInt_Valid_8");
	}

	@Ignore("Crash")
	@Test
	public void ConstrainedIntersection_Valid_1() throws IOException {
		runTest("ConstrainedIntersection_Valid_1");
	}

	@Test
	public void ConstrainedList_Valid_1() throws IOException {
		runTest("ConstrainedList_Valid_1");
	}

	@Test
	public void ConstrainedList_Valid_11() throws IOException {
		runTest("ConstrainedList_Valid_11");
	}

	@Test
	public void ConstrainedList_Valid_12() throws IOException {
		runTest("ConstrainedList_Valid_12");
	}

	@Ignore("checked")
	@Test
	public void ConstrainedList_Valid_14() throws IOException {
		runTest("ConstrainedList_Valid_14");
	}

	@Test
	public void ConstrainedList_Valid_15() throws IOException {
		runTest("ConstrainedList_Valid_15");
	}

	@Test
	public void ConstrainedList_Valid_16() throws IOException {
		runTest("ConstrainedList_Valid_16");
	}

	@Test
	public void ConstrainedList_Valid_17() throws IOException {
		runTest("ConstrainedList_Valid_17");
	}

	@Test
	public void ConstrainedList_Valid_18() throws IOException {
		runTest("ConstrainedList_Valid_18");
	}

	@Test
	public void ConstrainedList_Valid_19() throws IOException {
		runTest("ConstrainedList_Valid_19");
	}

	@Test
	public void ConstrainedList_Valid_2() throws IOException {
		runTest("ConstrainedList_Valid_2");
	}

	@Test
	public void ConstrainedList_Valid_20() throws IOException {
		runTest("ConstrainedList_Valid_20");
	}

	@Test
	public void ConstrainedList_Valid_21() throws IOException {
		runTest("ConstrainedList_Valid_21");
	}

	@Ignore("???")
	@Test
	public void ConstrainedList_Valid_22() throws IOException {
		runTest("ConstrainedList_Valid_22");
	}

	@Test
	public void ConstrainedList_Valid_23() throws IOException {
		runTest("ConstrainedList_Valid_23");
	}

	@Test
	public void ConstrainedList_Valid_25() throws IOException {
		runTest("ConstrainedList_Valid_25");
	}

	@Test
	public void ConstrainedList_Valid_26() throws IOException {
		runTest("ConstrainedList_Valid_26");
	}

	@Ignore("checked")
	@Test
	public void ConstrainedList_Valid_27() throws IOException {
		runTest("ConstrainedList_Valid_27");
	}

	@Test
	public void ConstrainedList_Valid_3() throws IOException {
		runTest("ConstrainedList_Valid_3");
	}

	@Test
	public void ConstrainedList_Valid_4() throws IOException {
		runTest("ConstrainedList_Valid_4");
	}

	@Test
	public void ConstrainedList_Valid_5() throws IOException {
		runTest("ConstrainedList_Valid_5");
	}

	@Test
	public void ConstrainedList_Valid_6() throws IOException {
		runTest("ConstrainedList_Valid_6");
	}

	@Test
	public void ConstrainedList_Valid_7() throws IOException {
		runTest("ConstrainedList_Valid_7");
	}

	@Test
	public void ConstrainedList_Valid_8() throws IOException {
		runTest("ConstrainedList_Valid_8");
	}

	@Test
	public void ConstrainedList_Valid_9() throws IOException {
		runTest("ConstrainedList_Valid_9");
	}

	@Ignore("#342")
	@Test
	public void ConstrainedNegation_Valid_1() throws IOException {
		runTest("ConstrainedNegation_Valid_1");
	}

	@Ignore("#342")
	@Test
	public void ConstrainedNegation_Valid_2() throws IOException {
		runTest("ConstrainedNegation_Valid_2");
	}

	@Test
	public void ConstrainedRecord_Valid_1() throws IOException {
		runTest("ConstrainedRecord_Valid_1");
	}

	@Test
	public void ConstrainedRecord_Valid_2() throws IOException {
		runTest("ConstrainedRecord_Valid_2");
	}

	@Test
	public void ConstrainedRecord_Valid_3() throws IOException {
		runTest("ConstrainedRecord_Valid_3");
	}

	@Ignore("checked")
	@Test
	public void ConstrainedRecord_Valid_4() throws IOException {
		runTest("ConstrainedRecord_Valid_4");
	}

	@Test
	public void ConstrainedRecord_Valid_5() throws IOException {
		runTest("ConstrainedRecord_Valid_5");
	}

	@Test
	public void ConstrainedRecord_Valid_6() throws IOException {
		runTest("ConstrainedRecord_Valid_6");
	}

	@Test
	public void ConstrainedRecord_Valid_8() throws IOException {
		runTest("ConstrainedRecord_Valid_8");
	}

	@Test
	public void ConstrainedRecord_Valid_9() throws IOException {
		runTest("ConstrainedRecord_Valid_9");
	}

	@Ignore("checked")
	@Test
	public void ConstrainedRecord_Valid_10() throws IOException {
		runTest("ConstrainedRecord_Valid_10");
	}

	@Ignore("checked")
	@Test
	public void ConstrainedReference_Valid_1() throws IOException {
		runTest("ConstrainedReference_Valid_1");
	}

	@Ignore("checked")
	@Test
	public void ConstrainedUnion_Valid_1() throws IOException {
		runTest("ConstrainedUnion_Valid_1");
	}

	@Test
	public void ConstrainedTuple_Valid_1() throws IOException {
		runTest("ConstrainedTuple_Valid_1");
	}

	@Ignore("checked")
	@Test
	public void ConstrainedTuple_Valid_2() throws IOException {
		runTest("ConstrainedTuple_Valid_2");
	}

	@Ignore("Crash")
	@Test
	public void Contractive_Valid_1() throws IOException {
		runTest("Contractive_Valid_1");
	}

	@Ignore
	@Test
	public void Contractive_Valid_2() throws IOException {
		runTest("Contractive_Valid_2");
	}

	@Test
	public void DecimalAssignment_Valid_1() throws IOException {
		runTest("DecimalAssignment_Valid_1");
	}

	@Ignore("checked")
	@Test
	public void Define_Valid_1() throws IOException {
		runTest("Define_Valid_1");
	}

	@Ignore("checked")
	@Test
	public void Define_Valid_2() throws IOException {
		runTest("Define_Valid_2");
	}

	@Ignore("checked")
	@Test
	public void Define_Valid_3() throws IOException {
		runTest("Define_Valid_3");
	}

	@Test
	public void Define_Valid_4() throws IOException {
		runTest("Define_Valid_4");
	}

	@Test
	public void DoWhile_Valid_1() throws IOException {
		runTest("DoWhile_Valid_1");
	}

	@Test
	public void DoWhile_Valid_2() throws IOException {
		runTest("DoWhile_Valid_2");
	}

	@Test
	public void DoWhile_Valid_3() throws IOException {
		runTest("DoWhile_Valid_3");
	}

	@Ignore("Crash")
	@Test
	public void DoWhile_Valid_4() throws IOException {
		runTest("DoWhile_Valid_4");
	}

	@Test
	public void DoWhile_Valid_5() throws IOException {
		runTest("DoWhile_Valid_5");
	}

	@Test
	public void DoWhile_Valid_6() throws IOException {
		runTest("DoWhile_Valid_6");
	}

	@Ignore("Crash")
	@Test
	public void EffectiveList_Valid_1() throws IOException {
		runTest("EffectiveList_Valid_1");
	}

	@Test
	public void Ensures_Valid_1() throws IOException {
		runTest("Ensures_Valid_1");
	}

	@Test
	public void Ensures_Valid_2() throws IOException {
		runTest("Ensures_Valid_2");
	}

	@Ignore("Crash")
	@Test
	public void Ensures_Valid_3() throws IOException {
		runTest("Ensures_Valid_3");
	}

	@Ignore("Crash")
	@Test
	public void Ensures_Valid_4() throws IOException {
		runTest("Ensures_Valid_4");
	}

	@Test
	public void Ensures_Valid_5() throws IOException {
		runTest("Ensures_Valid_5");
	}

	@Ignore("Crash")
	@Test
	public void Ensures_Valid_6() throws IOException {
		runTest("Ensures_Valid_6");
	}

	@Test
	public void Ensures_Valid_7() throws IOException {
		runTest("Ensures_Valid_7");
	}

	@Test
	public void Ensures_Valid_8() throws IOException {
		runTest("Ensures_Valid_8");
	}

	@Ignore("checked")
	@Test
	public void FunctionRef_Valid_1() throws IOException {
		runTest("FunctionRef_Valid_1");
	}

	@Ignore("Crash")
	@Test
	public void FunctionRef_Valid_2() throws IOException {
		runTest("FunctionRef_Valid_2");
	}

	@Ignore("checked")
	@Test
	public void FunctionRef_Valid_3() throws IOException {
		runTest("FunctionRef_Valid_3");
	}

	@Ignore("checked")
	@Test
	public void FunctionRef_Valid_4() throws IOException {
		runTest("FunctionRef_Valid_4");
	}

	@Ignore("checked")
	@Test
	public void FunctionRef_Valid_5() throws IOException {
		runTest("FunctionRef_Valid_5");
	}

	@Ignore("checked")
	@Test
	public void FunctionRef_Valid_6() throws IOException {
		runTest("FunctionRef_Valid_6");
	}

	@Ignore("checked")
	@Test
	public void FunctionRef_Valid_7() throws IOException {
		runTest("FunctionRef_Valid_7");
	}

	@Ignore("checked")
	@Test
	public void FunctionRef_Valid_8() throws IOException {
		runTest("FunctionRef_Valid_8");
	}

	@Ignore("checked")
	@Test
	public void FunctionRef_Valid_9() throws IOException {
		runTest("FunctionRef_Valid_9");
	}

	@Test
	public void Function_Valid_1() throws IOException {
		runTest("Function_Valid_1");
	}

	@Test
	public void Function_Valid_12() throws IOException {
		runTest("Function_Valid_12");
	}

	@Ignore("checked")
	@Test
	public void Function_Valid_13() throws IOException {
		runTest("Function_Valid_13");
	}

	@Test
	public void Function_Valid_14() throws IOException {
		runTest("Function_Valid_14");
	}

	@Test
	public void Function_Valid_16() throws IOException {
		runTest("Function_Valid_16");
	}

	@Test
	public void Function_Valid_17() throws IOException {
		runTest("Function_Valid_17");
	}

	@Ignore("checked")
	@Test
	public void Function_Valid_18() throws IOException {
		runTest("Function_Valid_18");
	}

	@Test
	public void Function_Valid_2() throws IOException {
		runTest("Function_Valid_2");
	}

	@Test
	public void Function_Valid_20() throws IOException {
		runTest("Function_Valid_20");
	}

	@Test
	public void Function_Valid_21() throws IOException {
		runTest("Function_Valid_21");
	}

	@Test
	public void Function_Valid_3() throws IOException {
		runTest("Function_Valid_3");
	}

	@Test
	public void Function_Valid_4() throws IOException {
		runTest("Function_Valid_4");
	}

	@Test
	public void Function_Valid_5() throws IOException {
		runTest("Function_Valid_5");
	}

	@Ignore("Crash")
	@Test
	public void Function_Valid_6() throws IOException {
		runTest("Function_Valid_6");
	}

	@Ignore("Crash")
	@Test
	public void Function_Valid_7() throws IOException {
		runTest("Function_Valid_7");
	}

	@Ignore("Crash")
	@Test
	public void Function_Valid_8() throws IOException {
		runTest("Function_Valid_8");
	}

	@Ignore("Crash")
	@Test
	public void Function_Valid_9() throws IOException {
		runTest("Function_Valid_9");
	}

	@Ignore("Crash")
	@Test
	public void HexAssign_Valid_1() throws IOException {
		runTest("HexAssign_Valid_1");
	}

	@Ignore("checked")
	@Test
	public void IfElse_Valid_1() throws IOException {
		runTest("IfElse_Valid_1");
	}

	@Ignore("checked")
	@Test
	public void IfElse_Valid_2() throws IOException {
		runTest("IfElse_Valid_2");
	}

	@Ignore("checked")
	@Test
	public void IfElse_Valid_3() throws IOException {
		runTest("IfElse_Valid_3");
	}

	@Ignore
	@Test
	public void IfElse_Valid_4() throws IOException {
		runTest("IfElse_Valid_4");
	}

	@Ignore("checked")
	@Test
	public void IfElse_Valid_5() throws IOException {
		runTest("IfElse_Valid_5");
	}

	@Test
	public void Import_Valid_1() throws IOException {
		runTest("Import_Valid_1");
	}

	@Test
	public void Import_Valid_2() throws IOException {
		runTest("Import_Valid_2");
	}

	@Test
	public void Import_Valid_3() throws IOException {
		runTest("Import_Valid_3");
	}

	@Ignore("#492")
	@Test
	public void Import_Valid_4() throws IOException {
		runTest("Import_Valid_4");
	}

	@Ignore("#492")
	@Test
	public void Import_Valid_5() throws IOException {
		runTest("Import_Valid_5");
	}

	@Ignore("checked")
	@Test
	public void Import_Valid_6() throws IOException {
		runTest("Import_Valid_6");
	}

	@Ignore("checked")
	@Test
	public void IntConst_Valid_1() throws IOException {
		runTest("IntConst_Valid_1");
	}

	@Test
	public void IntDefine_Valid_1() throws IOException {
		runTest("IntDefine_Valid_1");
	}

	@Test
	public void IntDefine_Valid_2() throws IOException {
		runTest("IntDefine_Valid_2");
	}

	@Test
	public void IntDiv_Valid_1() throws IOException {
		runTest("IntDiv_Valid_1");
	}

	@Test
	public void IntDiv_Valid_3() throws IOException {
		runTest("IntDiv_Valid_3");
	}

	@Test
	public void IntDiv_Valid_4() throws IOException {
		runTest("IntDiv_Valid_4");
	}

	@Test
	public void IntDiv_Valid_5() throws IOException {
		runTest("IntDiv_Valid_5");
	}

	@Test
	public void IntEquals_Valid_1() throws IOException {
		runTest("IntEquals_Valid_1");
	}

	@Test
	public void IntMul_Valid_1() throws IOException {
		runTest("IntMul_Valid_1");
	}

	@Test
	public void IntMul_Valid_2() throws IOException {
		runTest("IntMul_Valid_2");
	}

	@Ignore("checked")
	@Test
	public void IntOp_Valid_1() throws IOException {
		runTest("IntOp_Valid_1");
	}

	@Ignore("Crash")
	@Test
	public void Intersection_Valid_1() throws IOException {
		runTest("Intersection_Valid_1");
	}

	@Ignore("Crash")
	@Test
	public void Intersection_Valid_2() throws IOException {
		runTest("Intersection_Valid_2");
	}

	@Ignore("checked")
	@Test
	public void Lambda_Valid_1() throws IOException {
		runTest("Lambda_Valid_1");
	}

	@Ignore("checked")
	@Test
	public void Lambda_Valid_2() throws IOException {
		runTest("Lambda_Valid_2");
	}

	@Ignore
	@Test
	public void Lambda_Valid_3() throws IOException {
		runTest("Lambda_Valid_3");
	}

	@Ignore
	@Test
	public void Lambda_Valid_4() throws IOException {
		runTest("Lambda_Valid_4");
	}

	@Ignore("checked")
	@Test
	public void Lambda_Valid_5() throws IOException {
		runTest("Lambda_Valid_5");
	}

	@Ignore("checked")
	@Test
	public void Lambda_Valid_6() throws IOException {
		runTest("Lambda_Valid_6");
	}

	@Ignore("checked")
	@Test
	public void Lambda_Valid_7() throws IOException {
		runTest("Lambda_Valid_7");
	}

	@Ignore("checked")
	@Test
	public void Lambda_Valid_8() throws IOException {
		runTest("Lambda_Valid_8");
	}

	@Ignore("checked")
	@Test
	public void Lambda_Valid_9() throws IOException {
		runTest("Lambda_Valid_9");
	}

	@Test
	public void LengthOf_Valid_1() throws IOException {
		runTest("LengthOf_Valid_1");
	}

	@Test
	public void LengthOf_Valid_4() throws IOException {
		runTest("LengthOf_Valid_4");
	}

	@Test
	public void LengthOf_Valid_5() throws IOException {
		runTest("LengthOf_Valid_5");
	}

	@Test
	public void ListAccess_Valid_1() throws IOException {
		runTest("ListAccess_Valid_1");
	}

	@Test
	public void ListAccess_Valid_3() throws IOException {
		runTest("ListAccess_Valid_3");
	}

	@Test
	public void ListAccess_Valid_5() throws IOException {
		runTest("ListAccess_Valid_5");
	}

	@Ignore("Crash")
	@Test
	public void ListAccess_Valid_6() throws IOException {
		runTest("ListAccess_Valid_6");
	}

	@Ignore("Crash")
	@Test
	public void ListAccess_Valid_7() throws IOException {
		runTest("ListAccess_Valid_7");
	}

	@Ignore("Crash")
	@Test
	public void ListAccess_Valid_8() throws IOException {
		runTest("ListAccess_Valid_8");
	}

	@Test
	public void ListAccess_Valid_9() throws IOException {
		runTest("ListAccess_Valid_9");
	}

	@Test
	public void ListAssign_Valid_1() throws IOException {
		runTest("ListAssign_Valid_1");
	}

	@Test
	public void ListAssign_Valid_11() throws IOException {
		runTest("ListAssign_Valid_11");
	}

	@Test
	public void ListAssign_Valid_2() throws IOException {
		runTest("ListAssign_Valid_2");
	}

	@Ignore("checked")
	@Test
	public void ListAssign_Valid_3() throws IOException {
		runTest("ListAssign_Valid_3");
	}

	@Ignore("checked")
	@Test
	public void ListAssign_Valid_4() throws IOException {
		runTest("ListAssign_Valid_4");
	}

	@Ignore("checked")
	@Test
	public void ListAssign_Valid_5() throws IOException {
		runTest("ListAssign_Valid_5");
	}

	@Test
	public void ListAssign_Valid_6() throws IOException {
		runTest("ListAssign_Valid_6");
	}

	@Test
	public void ListAssign_Valid_7() throws IOException {
		runTest("ListAssign_Valid_7");
	}

	@Test
	public void ListAssign_Valid_8() throws IOException {
		runTest("ListAssign_Valid_8");
	}

	@Test
	public void ListAssign_Valid_9() throws IOException {
		runTest("ListAssign_Valid_9");
	}

	@Test
	public void ListConversion_Valid_1() throws IOException {
		runTest("ListConversion_Valid_1");
	}

	@Test
	public void ListEmpty_Valid_1() throws IOException {
		runTest("ListEmpty_Valid_1");
	}

	@Test
	public void ListEquals_Valid_1() throws IOException {
		runTest("ListEquals_Valid_1");
	}

	@Test
	public void ListGenerator_Valid_1() throws IOException {
		runTest("ListGenerator_Valid_1");
	}

	@Test
	public void ListGenerator_Valid_2() throws IOException {
		runTest("ListGenerator_Valid_2");
	}

	@Test
	public void ListGenerator_Valid_3() throws IOException {
		runTest("ListGenerator_Valid_3");
	}

	@Test
	public void ListGenerator_Valid_5() throws IOException {
		runTest("ListGenerator_Valid_5");
	}

	@Ignore("checked")
	@Test
	public void ListGenerator_Valid_6() throws IOException {
		runTest("ListGenerator_Valid_6");
	}

	@Ignore("checked")
	@Test
	public void ListGenerator_Valid_7() throws IOException {
		runTest("ListGenerator_Valid_7");
	}

	@Ignore("checked")
	@Test
	public void ListGenerator_Valid_8() throws IOException {
		runTest("ListGenerator_Valid_8");
	}

	@Ignore("checked")
	@Test
	public void ListGenerator_Valid_9() throws IOException {
		runTest("ListGenerator_Valid_9");
	}

	@Ignore("checked")
	@Test
	public void ListGenerator_Valid_10() throws IOException {
		runTest("ListGenerator_Valid_10");
	}

	@Ignore("checked")
	@Test
	public void ListGenerator_Valid_11() throws IOException {
		runTest("ListGenerator_Valid_11");
	}

	@Ignore("checked")
	@Test
	public void ListGenerator_Valid_12() throws IOException {
		runTest("ListGenerator_Valid_12");
	}

	@Test
	public void ListLength_Valid_1() throws IOException {
		runTest("ListLength_Valid_1");
	}

	@Ignore("checked")
	@Test
	public void ListLength_Valid_2() throws IOException {
		runTest("ListLength_Valid_2");
	}

	@Ignore("checked")
	@Test
	public void ListLength_Valid_3() throws IOException {
		runTest("ListLength_Valid_3");
	}

	@Ignore("checked")
	@Test
	public void MessageRef_Valid_1() throws IOException {
		runTest("MessageRef_Valid_1");
	}

	@Ignore("checked")
	@Test
	public void MessageRef_Valid_2() throws IOException {
		runTest("MessageRef_Valid_2");
	}

	@Ignore("checked")
	@Test
	public void MessageSend_Valid_1() throws IOException {
		runTest("MessageSend_Valid_1");
	}

	@Ignore("checked")
	@Test
	public void MessageSend_Valid_2() throws IOException {
		runTest("MessageSend_Valid_2");
	}

	@Ignore("checked")
	@Test
	public void MessageSend_Valid_3() throws IOException {
		runTest("MessageSend_Valid_3");
	}

	@Ignore("checked")
	@Test
	public void MessageSend_Valid_4() throws IOException {
		runTest("MessageSend_Valid_4");
	}

	@Ignore("checked")
	@Test
	public void MessageSend_Valid_5() throws IOException {
		runTest("MessageSend_Valid_5");
	}

	@Test
	public void MethodCall_Valid_1() throws IOException {
		runTest("MethodCall_Valid_1");
	}

	@Ignore("checked")
	@Test
	public void MethodCall_Valid_2() throws IOException {
		runTest("MethodCall_Valid_2");
	}

	@Test
	public void MethodCall_Valid_3() throws IOException {
		runTest("MethodCall_Valid_3");
	}

	@Ignore("checked")
	@Test
	public void MethodCall_Valid_4() throws IOException {
		runTest("MethodCall_Valid_4");
	}

	@Ignore("checked")
	@Test
	public void MethodRef_Valid_1() throws IOException {
		runTest("MethodRef_Valid_1");
	}

	@Ignore("checked")
	@Test
	public void MethodRef_Valid_2() throws IOException {
		runTest("MethodRef_Valid_2");
	}

	@Ignore("checked")
	@Test
	public void Method_Valid_1() throws IOException {
		runTest("Method_Valid_1");
	}

	@Ignore("checked")
	@Test
	public void MultiLineComment_Valid_1() throws IOException {
		runTest("MultiLineComment_Valid_1");
	}

	@Ignore("checked")
	@Test
	public void MultiLineComment_Valid_2() throws IOException {
		runTest("MultiLineComment_Valid_2");
	}

	@Test
	public void NegationType_Valid_1() throws IOException {
		runTest("NegationType_Valid_1");
	}

	@Test
	public void NegationType_Valid_2() throws IOException {
		runTest("NegationType_Valid_2");
	}

	@Ignore("Crash")
	@Test
	public void NegationType_Valid_3() throws IOException {
		runTest("NegationType_Valid_3");
	}

	@Test
	public void NegationType_Valid_4() throws IOException {
		runTest("NegationType_Valid_4");
	}

	@Test
	public void OpenRecord_Valid_1() throws IOException {
		runTest("OpenRecord_Valid_1");
	}

	@Ignore("checked")
	@Test
	public void OpenRecord_Valid_2() throws IOException {
		runTest("OpenRecord_Valid_2");
	}

	@Ignore("checked")
	@Test
	public void OpenRecord_Valid_3() throws IOException {
		runTest("OpenRecord_Valid_3");
	}

	@Test
	public void OpenRecord_Valid_4() throws IOException {
		runTest("OpenRecord_Valid_4");
	}

	@Ignore("checked")
	@Test
	public void OpenRecord_Valid_5() throws IOException {
		runTest("OpenRecord_Valid_5");
	}

	@Ignore("checked")
	@Test
	public void OpenRecord_Valid_6() throws IOException {
		runTest("OpenRecord_Valid_6");
	}

	@Ignore("checked")
	@Test
	public void OpenRecord_Valid_7() throws IOException {
		runTest("OpenRecord_Valid_7");
	}

	@Test
	public void OpenRecord_Valid_8() throws IOException {
		runTest("OpenRecord_Valid_8");
	}

	@Ignore("checked")
	@Test
	public void OpenRecord_Valid_9() throws IOException {
		runTest("OpenRecord_Valid_9");
	}

	@Ignore("checked")
	@Test
	public void OpenRecord_Valid_10() throws IOException {
		runTest("OpenRecord_Valid_10");
	}

	@Ignore("checked")
	@Test
	public void ProcessAccess_Valid_1() throws IOException {
		runTest("ProcessAccess_Valid_1");
	}

	@Ignore("checked")
	@Test
	public void ProcessAccess_Valid_2() throws IOException {
		runTest("ProcessAccess_Valid_2");
	}

	@Ignore("checked")
	@Test
	public void Process_Valid_1() throws IOException {
		runTest("Process_Valid_1");
	}

	@Ignore("checked")
	@Test
	public void Process_Valid_10() throws IOException {
		runTest("Process_Valid_10");
	}

	@Ignore("checked")
	@Test
	public void Process_Valid_11() throws IOException {
		runTest("Process_Valid_11");
	}

	@Ignore("checked")
	@Test
	public void Process_Valid_12() throws IOException {
		runTest("Process_Valid_12");
	}

	@Test
	public void Process_Valid_2() throws IOException {
		runTest("Process_Valid_2");
	}

	@Test
	public void Process_Valid_3() throws IOException {
		runTest("Process_Valid_3");
	}

	@Ignore("checked")
	@Test
	public void Process_Valid_4() throws IOException {
		runTest("Process_Valid_4");
	}

	@Ignore("checked")
	@Test
	public void Process_Valid_5() throws IOException {
		runTest("Process_Valid_5");
	}

	@Ignore("checked")
	@Test
	public void Process_Valid_6() throws IOException {
		runTest("Process_Valid_6");
	}

	@Ignore("checked")
	@Test
	public void Process_Valid_7() throws IOException {
		runTest("Process_Valid_7");
	}

	@Ignore("checked")
	@Test
	public void Process_Valid_8() throws IOException {
		runTest("Process_Valid_8");
	}

	@Ignore("checked")
	@Test
	public void Process_Valid_9() throws IOException {
		runTest("Process_Valid_9");
	}

	@Test
	public void Quantifiers_Valid_1() throws IOException {
		runTest("Quantifiers_Valid_1");
	}

	@Ignore("checked")
	@Test
	public void RealConst_Valid_1() throws IOException {
		runTest("RealConst_Valid_1");
	}

	@Test
	public void RealDiv_Valid_1() throws IOException {
		runTest("RealDiv_Valid_1");
	}

	@Test
	public void RealDiv_Valid_2() throws IOException {
		runTest("RealDiv_Valid_2");
	}

	@Test
	public void RealDiv_Valid_3() throws IOException {
		runTest("RealDiv_Valid_3");
	}

	@Test
	public void RealDiv_Valid_4() throws IOException {
		runTest("RealDiv_Valid_4");
	}

	@Test
	public void RealDiv_Valid_5() throws IOException {
		runTest("RealDiv_Valid_5");
	}

	@Test
	public void RealDiv_Valid_6() throws IOException {
		runTest("RealDiv_Valid_6");
	}

	@Test
	public void RealDiv_Valid_7() throws IOException {
		runTest("RealDiv_Valid_7");
	}

	@Ignore("checked")
	@Test
	public void RealNeg_Valid_1() throws IOException {
		runTest("RealNeg_Valid_1");
	}

	@Ignore("checked")
	@Test
	public void RealNeg_Valid_2() throws IOException {
		runTest("RealNeg_Valid_2");
	}

	@Ignore("checked")
	@Test
	public void RealSplit_Valid_1() throws IOException {
		runTest("RealSplit_Valid_1");
	}

	@Test
	public void RealSub_Valid_1() throws IOException {
		runTest("RealSub_Valid_1");
	}

	@Test
	public void RealSub_Valid_2() throws IOException {
		runTest("RealSub_Valid_2");
	}

	@Test
	public void RealSub_Valid_3() throws IOException {
		runTest("RealSub_Valid_3");
	}

	@Ignore("check")
	@Test
	public void Real_Valid_1() throws IOException {
		runTest("Real_Valid_1");
	}

	@Ignore("check")
	@Test
	public void RecordAccess_Valid_1() throws IOException {
		runTest("RecordAccess_Valid_1");
	}

	@Test
	public void RecordAccess_Valid_2() throws IOException {
		runTest("RecordAccess_Valid_2");
	}

	@Ignore("checked")
	@Test
	public void RecordAssign_Valid_1() throws IOException {
		runTest("RecordAssign_Valid_1");
	}

	@Test
	public void RecordAssign_Valid_10() throws IOException {
		runTest("RecordAssign_Valid_10");
	}

	@Test
	public void RecordAssign_Valid_2() throws IOException {
		runTest("RecordAssign_Valid_2");
	}

	@Ignore("checked")
	@Test
	public void RecordAssign_Valid_3() throws IOException {
		runTest("RecordAssign_Valid_3");
	}

	@Test
	public void RecordAssign_Valid_4() throws IOException {
		runTest("RecordAssign_Valid_4");
	}

	@Test
	public void RecordAssign_Valid_5() throws IOException {
		runTest("RecordAssign_Valid_5");
	}

	@Ignore("checked")
	@Test
	public void RecordAssign_Valid_6() throws IOException {
		runTest("RecordAssign_Valid_6");
	}

	@Test
	public void RecordAssign_Valid_7() throws IOException {
		runTest("RecordAssign_Valid_7");
	}

	@Test
	public void RecordAssign_Valid_8() throws IOException {
		runTest("RecordAssign_Valid_8");
	}

	@Test
	public void RecordAssign_Valid_9() throws IOException {
		runTest("RecordAssign_Valid_9");
	}

	@Ignore("checked")
	@Test
	public void RecordCoercion_Valid_1() throws IOException {
		runTest("RecordCoercion_Valid_1");
	}

	@Test
	public void RecordConversion_Valid_1() throws IOException {
		runTest("RecordConversion_Valid_1");
	}

	@Test
	public void RecordDefine_Valid_1() throws IOException {
		runTest("RecordDefine_Valid_1");
	}

	@Test
	public void RecordDefine_Valid_2() throws IOException {
		runTest("RecordDefine_Valid_2");
	}

	@Ignore("Crash")
	@Test
	public void RecordSubtype_Valid_1() throws IOException {
		runTest("RecordSubtype_Valid_1");
	}

	@Ignore("Crash")
	@Test
	public void RecordSubtype_Valid_2() throws IOException {
		runTest("RecordSubtype_Valid_2");
	}

	@Test
	public void RecursiveType_Valid_1() throws IOException {
		runTest("RecursiveType_Valid_1");
	}

	@Test
	public void RecursiveType_Valid_10() throws IOException {
		runTest("RecursiveType_Valid_10");
	}

	@Test
	public void RecursiveType_Valid_11() throws IOException {
		runTest("RecursiveType_Valid_11");
	}

	@Ignore
	@Test
	public void RecursiveType_Valid_12() throws IOException {
		runTest("RecursiveType_Valid_12");
	}

	@Test
	public void RecursiveType_Valid_13() throws IOException {
		runTest("RecursiveType_Valid_13");
	}

	@Test
	public void RecursiveType_Valid_14() throws IOException {
		runTest("RecursiveType_Valid_14");
	}

	@Test
	public void RecursiveType_Valid_15() throws IOException {
		runTest("RecursiveType_Valid_15");
	}

	@Test
	public void RecursiveType_Valid_16() throws IOException {
		runTest("RecursiveType_Valid_16");
	}

	@Test
	public void RecursiveType_Valid_17() throws IOException {
		runTest("RecursiveType_Valid_17");
	}

	@Test
	public void RecursiveType_Valid_18() throws IOException {
		runTest("RecursiveType_Valid_18");
	}

	@Test
	public void RecursiveType_Valid_19() throws IOException {
		runTest("RecursiveType_Valid_19");
	}

	@Ignore("checked")
	@Test
	public void RecursiveType_Valid_2() throws IOException {
		runTest("RecursiveType_Valid_2");
	}

	@Test
	public void RecursiveType_Valid_20() throws IOException {
		runTest("RecursiveType_Valid_20");
	}

	@Ignore
	@Test
	public void RecursiveType_Valid_21() throws IOException {
		runTest("RecursiveType_Valid_21");
	}

	@Ignore("checked")
	@Test
	public void RecursiveType_Valid_22() throws IOException {
		runTest("RecursiveType_Valid_22");
	}

	@Ignore("checked")
	@Test
	public void RecursiveType_Valid_23() throws IOException {
		runTest("RecursiveType_Valid_23");
	}

	@Ignore("checked")
	@Test
	public void RecursiveType_Valid_24() throws IOException {
		runTest("RecursiveType_Valid_24");
	}

	@Ignore("checked")
	@Test
	public void RecursiveType_Valid_25() throws IOException {
		runTest("RecursiveType_Valid_25");
	}

	@Ignore("checked")
	@Test
	public void RecursiveType_Valid_26() throws IOException {
		runTest("RecursiveType_Valid_26");
	}

	@Ignore("checked")
	@Test
	public void RecursiveType_Valid_27() throws IOException {
		runTest("RecursiveType_Valid_27");
	}

	@Ignore("#364")
	@Test
	public void RecursiveType_Valid_28() throws IOException {
		runTest("RecursiveType_Valid_28");
	}

	@Ignore("#406")
	@Test
	public void RecursiveType_Valid_3() throws IOException {
		runTest("RecursiveType_Valid_3");
	}

	@Ignore("#406")
	@Test
	public void RecursiveType_Valid_4() throws IOException {
		runTest("RecursiveType_Valid_4");
	}

	@Ignore("#18")
	@Test
	public void RecursiveType_Valid_5() throws IOException {
		runTest("RecursiveType_Valid_5");
	}

	@Test
	public void RecursiveType_Valid_6() throws IOException {
		runTest("RecursiveType_Valid_6");
	}

	@Ignore("checked")
	@Test
	public void RecursiveType_Valid_7() throws IOException {
		runTest("RecursiveType_Valid_7");
	}

	@Test
	public void RecursiveType_Valid_8() throws IOException {
		runTest("RecursiveType_Valid_8");
	}

	@Test
	public void RecursiveType_Valid_9() throws IOException {
		runTest("RecursiveType_Valid_9");
	}

	@Ignore
	@Test
	public void Reference_Valid_1() throws IOException {
		runTest("Reference_Valid_1");
	}

	@Ignore("checked")
	@Test
	public void Reference_Valid_2() throws IOException {
		runTest("Reference_Valid_2");
	}

	@Ignore("checked")
	@Test
	public void Reference_Valid_3() throws IOException {
		runTest("Reference_Valid_3");
	}

	@Ignore
	@Test
	public void Reference_Valid_4() throws IOException {
		runTest("Reference_Valid_4");
	}

	@Ignore
	@Test
	public void Reference_Valid_5() throws IOException {
		runTest("Reference_Valid_5");
	}

	@Test
	public void Remainder_Valid_1() throws IOException {
		runTest("Remainder_Valid_1");
	}

	@Test
	public void Requires_Valid_1() throws IOException {
		runTest("Requires_Valid_1");
	}

	@Test
	public void Resolution_Valid_1() throws IOException {
		runTest("Resolution_Valid_1");
	}

	@Test
	public void SingleLineComment_Valid_1() throws IOException {
		runTest("SingleLineComment_Valid_1");
	}

	@Test
	public void Skip_Valid_1() throws IOException {
		runTest("Skip_Valid_1");
	}

	@Ignore("checked")
	@Test
	public void String_Valid_1() throws IOException {
		runTest("String_Valid_1");
	}

	@Test
	public void String_Valid_2() throws IOException {
		runTest("String_Valid_2");
	}

	@Test
	public void String_Valid_3() throws IOException {
		runTest("String_Valid_3");
	}

	@Test
	public void String_Valid_4() throws IOException {
		runTest("String_Valid_4");
	}

	@Ignore("checked")
	@Test
	public void String_Valid_5() throws IOException {
		runTest("String_Valid_5");
	}

	@Test
	public void String_Valid_6() throws IOException {
		runTest("String_Valid_6");
	}

	@Ignore("checked")
	@Test
	public void Subtype_Valid_1() throws IOException {
		runTest("Subtype_Valid_1");
	}

	@Ignore("checked")
	@Test
	public void Subtype_Valid_10() throws IOException {
		runTest("Subtype_Valid_10");
	}

	@Ignore("checked")
	@Test
	public void Subtype_Valid_11() throws IOException {
		runTest("Subtype_Valid_11");
	}

	@Ignore("checked")
	@Test
	public void Subtype_Valid_12() throws IOException {
		runTest("Subtype_Valid_12");
	}

	@Ignore("checked")
	@Test
	public void Subtype_Valid_13() throws IOException {
		runTest("Subtype_Valid_13");
	}

	@Ignore("checked")
	@Test
	public void Subtype_Valid_14() throws IOException {
		runTest("Subtype_Valid_14");
	}

	@Test
	public void Subtype_Valid_2() throws IOException {
		runTest("Subtype_Valid_2");
	}

	@Test
	public void Subtype_Valid_3() throws IOException {
		runTest("Subtype_Valid_3");
	}

	@Test
	public void Subtype_Valid_4() throws IOException {
		runTest("Subtype_Valid_4");
	}

	@Test
	public void Subtype_Valid_5() throws IOException {
		runTest("Subtype_Valid_5");
	}

	@Test
	public void Subtype_Valid_6() throws IOException {
		runTest("Subtype_Valid_6");
	}

	@Ignore("checked")
	@Test
	public void Subtype_Valid_7() throws IOException {
		runTest("Subtype_Valid_7");
	}

	@Ignore("checked")
	@Test
	public void Subtype_Valid_8() throws IOException {
		runTest("Subtype_Valid_8");
	}

	@Test
	public void Subtype_Valid_9() throws IOException {
		runTest("Subtype_Valid_9");
	}

	@Test
	public void Switch_Valid_1() throws IOException {
		runTest("Switch_Valid_1");
	}

	@Ignore("checked")
	@Test
	public void Switch_Valid_10() throws IOException {
		runTest("Switch_Valid_10");
	}

	@Test
	public void Switch_Valid_11() throws IOException {
		runTest("Switch_Valid_11");
	}

	@Ignore("checked")
	@Test
	public void Switch_Valid_12() throws IOException {
		runTest("Switch_Valid_12");
	}

	@Ignore("checked")
	@Test
	public void Switch_Valid_13() throws IOException {
		runTest("Switch_Valid_13");
	}

	@Test
	public void Switch_Valid_2() throws IOException {
		runTest("Switch_Valid_2");
	}

	@Test
	public void Switch_Valid_3() throws IOException {
		runTest("Switch_Valid_3");
	}

	@Test
	public void Switch_Valid_4() throws IOException {
		runTest("Switch_Valid_4");
	}

	@Test
	public void Switch_Valid_5() throws IOException {
		runTest("Switch_Valid_5");
	}

	@Test
	public void Switch_Valid_6() throws IOException {
		runTest("Switch_Valid_6");
	}

	@Test
	public void Switch_Valid_7() throws IOException {
		runTest("Switch_Valid_7");
	}

	@Test
	public void Switch_Valid_8() throws IOException {
		runTest("Switch_Valid_8");
	}

	@Test
	public void Switch_Valid_9() throws IOException {
		runTest("Switch_Valid_9");
	}

	@Test
	public void Syntax_Valid_1() throws IOException {
		runTest("Syntax_Valid_1");
	}

	@Test
	public void Syntax_Valid_2() throws IOException {
		runTest("Syntax_Valid_2");
	}

	@Test
	public void TupleType_Valid_1() throws IOException {
		runTest("TupleType_Valid_1");
	}

	@Test
	public void TupleType_Valid_2() throws IOException {
		runTest("TupleType_Valid_2");
	}

	@Test
	public void TupleType_Valid_3() throws IOException {
		runTest("TupleType_Valid_3");
	}

	@Test
	public void TupleType_Valid_4() throws IOException {
		runTest("TupleType_Valid_4");
	}

	@Ignore("checked")
	@Test
	public void TupleType_Valid_5() throws IOException {
		runTest("TupleType_Valid_5");
	}

	@Ignore("checked")
	@Test
	public void TupleType_Valid_6() throws IOException {
		runTest("TupleType_Valid_6");
	}

	@Ignore("checked")
	@Test
	public void TupleType_Valid_7() throws IOException {
		runTest("TupleType_Valid_7");
	}

	@Ignore("checked")
	@Test
	public void TupleType_Valid_8() throws IOException {
		runTest("TupleType_Valid_8");
	}

	@Test
	public void TypeEquals_Valid_1() throws IOException {
		runTest("TypeEquals_Valid_1");
	}

	@Test
	public void TypeEquals_Valid_10() throws IOException {
		runTest("TypeEquals_Valid_10");
	}

	@Test
	public void TypeEquals_Valid_11() throws IOException {
		runTest("TypeEquals_Valid_11");
	}

	@Test
	public void TypeEquals_Valid_12() throws IOException {
		runTest("TypeEquals_Valid_12");
	}

	@Ignore("checked")
	@Test
	public void TypeEquals_Valid_14() throws IOException {
		runTest("TypeEquals_Valid_14");
	}

	@Ignore("checked")
	@Test
	public void TypeEquals_Valid_15() throws IOException {
		runTest("TypeEquals_Valid_15");
	}

	@Ignore("checked")
	@Test
	public void TypeEquals_Valid_16() throws IOException {
		runTest("TypeEquals_Valid_16");
	}

	@Test
	public void TypeEquals_Valid_17() throws IOException {
		runTest("TypeEquals_Valid_17");
	}

	@Test
	public void TypeEquals_Valid_18() throws IOException {
		runTest("TypeEquals_Valid_18");
	}

	@Test
	public void TypeEquals_Valid_19() throws IOException {
		runTest("TypeEquals_Valid_19");
	}

	@Ignore("checked")
	@Test
	public void TypeEquals_Valid_2() throws IOException {
		runTest("TypeEquals_Valid_2");
	}

	@Ignore("checked")
	@Test
	public void TypeEquals_Valid_20() throws IOException {
		runTest("TypeEquals_Valid_20");
	}

	@Test
	public void TypeEquals_Valid_21() throws IOException {
		runTest("TypeEquals_Valid_21");
	}

	@Ignore("Crash")
	@Test
	public void TypeEquals_Valid_23() throws IOException {
		runTest("TypeEquals_Valid_23");
	}

	@Test
	public void TypeEquals_Valid_24() throws IOException {
		runTest("TypeEquals_Valid_24");
	}

	@Ignore("checked")
	@Test
	public void TypeEquals_Valid_25() throws IOException {
		runTest("TypeEquals_Valid_25");
	}

	@Ignore("checked")
	@Test
	public void TypeEquals_Valid_27() throws IOException {
		runTest("TypeEquals_Valid_27");
	}

	@Ignore("checked")
	@Test
	public void TypeEquals_Valid_28() throws IOException {
		runTest("TypeEquals_Valid_28");
	}

	@Ignore("checked")
	@Test
	public void TypeEquals_Valid_29() throws IOException {
		runTest("TypeEquals_Valid_29");
	}

	@Test
	public void TypeEquals_Valid_3() throws IOException {
		runTest("TypeEquals_Valid_3");
	}

	@Ignore("checked")
	@Test
	public void TypeEquals_Valid_30() throws IOException {
		runTest("TypeEquals_Valid_30");
	}

	@Test
	public void TypeEquals_Valid_31() throws IOException {
		runTest("TypeEquals_Valid_31");
	}

	@Test
	public void TypeEquals_Valid_32() throws IOException {
		runTest("TypeEquals_Valid_32");
	}

	@Ignore("checked")
	@Test
	public void TypeEquals_Valid_33() throws IOException {
		runTest("TypeEquals_Valid_33");
	}

	@Ignore("checked")
	@Test
	public void TypeEquals_Valid_34() throws IOException {
		runTest("TypeEquals_Valid_34");
	}

	@Ignore("checked")
	@Test
	public void TypeEquals_Valid_35() throws IOException {
		runTest("TypeEquals_Valid_35");
	}

	@Ignore("Crash")
	@Test
	public void TypeEquals_Valid_36() throws IOException {
		runTest("TypeEquals_Valid_36");
	}

	@Ignore("Crash")
	@Test
	public void TypeEquals_Valid_37() throws IOException {
		runTest("TypeEquals_Valid_37");
	}

	@Ignore("Crash")
	@Test
	public void TypeEquals_Valid_38() throws IOException {
		runTest("TypeEquals_Valid_38");
	}

	@Ignore("checked")
	@Test
	public void TypeEquals_Valid_39() throws IOException {
		runTest("TypeEquals_Valid_39");
	}

	@Ignore("checked")
	@Test
	public void TypeEquals_Valid_40() throws IOException {
		runTest("TypeEquals_Valid_40");
	}

	@Ignore("Crash")
	@Test
	public void TypeEquals_Valid_41() throws IOException {
		runTest("TypeEquals_Valid_41");
	}

	@Ignore("checked")
	@Test
	public void TypeEquals_Valid_42() throws IOException {
		runTest("TypeEquals_Valid_42");
	}

	@Test
	public void TypeEquals_Valid_43() throws IOException {
		runTest("TypeEquals_Valid_43");
	}

	@Test
	public void TypeEquals_Valid_44() throws IOException {
		runTest("TypeEquals_Valid_44");
	}

	@Test
	public void TypeEquals_Valid_45() throws IOException {
		runTest("TypeEquals_Valid_45");
	}

	@Test
	public void TypeEquals_Valid_46() throws IOException {
		runTest("TypeEquals_Valid_46");
	}

	@Ignore("checked")
	@Test
	public void TypeEquals_Valid_47() throws IOException {
		runTest("TypeEquals_Valid_47");
	}

	@Ignore
	@Test
	public void TypeEquals_Valid_5() throws IOException {
		runTest("TypeEquals_Valid_5");
	}

	@Test
	public void TypeEquals_Valid_6() throws IOException {
		runTest("TypeEquals_Valid_6");
	}

	@Test
	public void TypeEquals_Valid_7() throws IOException {
		runTest("TypeEquals_Valid_7");
	}

	@Test
	public void TypeEquals_Valid_8() throws IOException {
		runTest("TypeEquals_Valid_8");
	}

	@Test
	public void TypeEquals_Valid_9() throws IOException {
		runTest("TypeEquals_Valid_9");
	}

	@Test
	public void UnionType_Valid_1() throws IOException {
		runTest("UnionType_Valid_1");
	}

	@Test
	public void UnionType_Valid_10() throws IOException {
		runTest("UnionType_Valid_10");
	}

	@Test
	public void UnionType_Valid_11() throws IOException {
		runTest("UnionType_Valid_11");
	}

	@Test
	public void UnionType_Valid_12() throws IOException {
		runTest("UnionType_Valid_12");
	}

	@Test
	public void UnionType_Valid_13() throws IOException {
		runTest("UnionType_Valid_13");
	}

	@Test
	public void UnionType_Valid_14() throws IOException {
		runTest("UnionType_Valid_14");
	}

	@Test
	public void UnionType_Valid_15() throws IOException {
		runTest("UnionType_Valid_15");
	}

	@Test
	public void UnionType_Valid_16() throws IOException {
		runTest("UnionType_Valid_16");
	}

	@Test
	public void UnionType_Valid_17() throws IOException {
		runTest("UnionType_Valid_17");
	}

	@Test
	public void UnionType_Valid_18() throws IOException {
		runTest("UnionType_Valid_18");
	}

	@Test
	public void UnionType_Valid_19() throws IOException {
		runTest("UnionType_Valid_19");
	}

	// @Test
	// public void UnionType_Valid_2() throws IOException {
	// runTest("UnionType_Valid_2");
	// }

	@Test
	public void UnionType_Valid_20() throws IOException {
		runTest("UnionType_Valid_20");
	}

	@Test
	public void UnionType_Valid_21() throws IOException {
		runTest("UnionType_Valid_21");
	}

	@Test
	public void UnionType_Valid_22() throws IOException {
		runTest("UnionType_Valid_22");
	}

	@Test
	public void UnionType_Valid_23() throws IOException {
		runTest("UnionType_Valid_23");
	}

	@Ignore("checked")
	@Test
	public void UnionType_Valid_3() throws IOException {
		runTest("UnionType_Valid_3");
	}

	@Test
	public void UnionType_Valid_4() throws IOException {
		runTest("UnionType_Valid_4");
	}

	@Test
	public void UnionType_Valid_5() throws IOException {
		runTest("UnionType_Valid_5");
	}

	@Test
	public void UnionType_Valid_6() throws IOException {
		runTest("UnionType_Valid_6");
	}

	@Test
	public void UnionType_Valid_7() throws IOException {
		runTest("UnionType_Valid_7");
	}

	@Test
	public void UnionType_Valid_8() throws IOException {
		runTest("UnionType_Valid_8");
	}

	@Test
	public void UnionType_Valid_9() throws IOException {
		runTest("UnionType_Valid_9");
	}

	@Ignore("checked")
	@Test
	public void Update_Valid_2() throws IOException {
		runTest("Update_Valid_2");
	}

	@Ignore("checked")
	@Test
	public void VarDecl_Valid_1() throws IOException {
		runTest("VarDecl_Valid_1");
	}

	@Test
	public void VarDecl_Valid_2() throws IOException {
		runTest("VarDecl_Valid_2");
	}

	@Test
	public void VarDecl_Valid_3() throws IOException {
		runTest("VarDecl_Valid_3");
	}

	@Test
	public void VarDecl_Valid_4() throws IOException {
		runTest("VarDecl_Valid_4");
	}

	@Test
	public void While_Valid_1() throws IOException {
		runTest("While_Valid_1");
	}

	@Ignore("Crash")
	@Test
	public void While_Valid_10() throws IOException {
		runTest("While_Valid_10");
	}

	@Ignore("Crash")
	@Test
	public void While_Valid_11() throws IOException {
		runTest("While_Valid_11");
	}

	@Test
	public void While_Valid_12() throws IOException {
		runTest("While_Valid_12");
	}

	@Ignore("checked")
	@Test
	public void While_Valid_14() throws IOException {
		runTest("While_Valid_14");
	}

	@Ignore("unknown")
	@Test
	public void While_Valid_15() throws IOException {
		runTest("While_Valid_15");
	}

	@Test
	public void While_Valid_16() throws IOException {
		runTest("While_Valid_16");
	}

	@Test
	public void While_Valid_17() throws IOException {
		runTest("While_Valid_17");
	}

	@Test
	public void While_Valid_18() throws IOException {
		runTest("While_Valid_18");
	}

	@Ignore("Crash")
	@Test
	public void While_Valid_19() throws IOException {
		runTest("While_Valid_19");
	}

	@Test
	public void While_Valid_2() throws IOException {
		runTest("While_Valid_2");
	}

	@Ignore
	@Test
	public void While_Valid_20() throws IOException {
		runTest("While_Valid_20");
	}

	@Test
	public void While_Valid_21() throws IOException {
		runTest("While_Valid_21");
	}

	@Ignore("checked")
	@Test
	public void While_Valid_22() throws IOException {
		runTest("While_Valid_22");
	}

	@Test
	public void While_Valid_23() throws IOException {
		runTest("While_Valid_23");
	}

	@Ignore("Crash")
	@Test
	public void While_Valid_24() throws IOException {
		runTest("While_Valid_24");
	}

	@Test
	public void While_Valid_25() throws IOException {
		runTest("While_Valid_25");
	}

	@Ignore("checked")
	@Test
	public void While_Valid_26() throws IOException {
		runTest("While_Valid_26");
	}

	@Test
	public void While_Valid_27() throws IOException {
		runTest("While_Valid_27");
	}

	@Ignore("checked")
	@Test
	public void While_Valid_28() throws IOException {
		runTest("While_Valid_28");
	}

	@Ignore("checked")
	@Test
	public void While_Valid_29() throws IOException {
		runTest("While_Valid_29");
	}

	@Ignore("checked")
	@Test
	public void While_Valid_30() throws IOException {
		runTest("While_Valid_30");
	}

	@Test
	public void While_Valid_31() throws IOException {
		runTest("While_Valid_31");
	}

	@Ignore("checked")
	@Test
	public void While_Valid_32() throws IOException {
		runTest("While_Valid_32");
	}

	@Test
	public void While_Valid_33() throws IOException {
		runTest("While_Valid_33");
	}

	@Ignore("checked")
	@Test
	public void While_Valid_34() throws IOException {
		runTest("While_Valid_34");
	}

	@Ignore("checked")
	@Test
	public void While_Valid_35() throws IOException {
		runTest("While_Valid_35");
	}

	@Ignore("Issue ??")
	@Test
	public void While_Valid_36() throws IOException {
		runTest("While_Valid_36");
	}

	@Ignore("Issue ??")
	@Test
	public void While_Valid_37() throws IOException {
		runTest("While_Valid_37");
	}

	@Test
	public void While_Valid_38() throws IOException {
		runTest("While_Valid_38");
	}

	@Test
	public void While_Valid_39() throws IOException {
		runTest("While_Valid_39");
	}

	@Test
	public void While_Valid_40() throws IOException {
		runTest("While_Valid_40");
	}

	@Test
	public void While_Valid_41() throws IOException {
		runTest("While_Valid_41");
	}

	@Test
	public void While_Valid_42() throws IOException {
		runTest("While_Valid_42");
	}

	@Ignore("Crash")
	@Test
	public void While_Valid_43() throws IOException {
		runTest("While_Valid_43");
	}

	@Test
	public void While_Valid_44() throws IOException {
		runTest("While_Valid_44");
	}

	@Test
	public void While_Valid_45() throws IOException {
		runTest("While_Valid_45");
	}

	@Test
	public void While_Valid_46() throws IOException {
		runTest("While_Valid_46");
	}

	@Test
	public void While_Valid_3() throws IOException {
		runTest("While_Valid_3");
	}

	@Ignore
	@Test
	public void While_Valid_5() throws IOException {
		runTest("While_Valid_5");
	}

	@Test
	public void While_Valid_7() throws IOException {
		runTest("While_Valid_7");
	}

	@Ignore("checked")
	@Test
	public void While_Valid_9() throws IOException {
		runTest("While_Valid_9");
	}

	@Test
	public void WhileSimple_Valid_1() throws IOException {
		runTest("WhileSimple_Valid_1");
	}

}
