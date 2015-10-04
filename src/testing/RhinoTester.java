package testing;

import static org.junit.Assert.fail;

import java.io.*;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;

public class RhinoTester {
	
	public static String exec(String filename, String srcDir) {
		try {
			filename = srcDir + File.separatorChar + filename + ".js";
			Reader file = new FileReader(new File(filename));
		    Context cxt = Context.enter();
		    Scriptable scope = cxt.initStandardObjects();
		    OutputStream out = new ByteArrayOutputStream();
		    Object jssysout = Context.javaToJS(new PrintStream(out), scope);
		    OutputStream err = new ByteArrayOutputStream();
		    Object jssyserr = Context.javaToJS(new PrintStream(err), scope);

		    ScriptableObject.putConstProperty(scope, "sysout", jssysout);
		    ScriptableObject.putConstProperty(scope, "syserr", jssyserr);

		    //Set up the library
		    String lib = "tests" + File.separatorChar + "WyJS_Runtime.js";
		    String math = "tests" + File.separatorChar + "Math.js";
		    String main = srcDir + File.separatorChar + "Main.js";
		    Reader library = new FileReader(new File(lib));
		    Reader mathlib = new FileReader(new File(math));
		    Reader mainlib = new FileReader(new File(main));
		    cxt.setOptimizationLevel(-1);
		    cxt.evaluateReader(scope, library, lib, 1, null);
		    cxt.evaluateReader(scope, mathlib, math, 1, null);
		    cxt.evaluateReader(scope, mainlib, main, 1, null);
		    cxt.evaluateReader(scope, file, filename, 1, null);
		    cxt.evaluateString(scope, "run();", "run", 1, null);
		    return out.toString();
		}catch (Exception ex) {
			ex.printStackTrace();
			fail("Problem running compiled test");
		}
		return "fail";
		
	}
}
