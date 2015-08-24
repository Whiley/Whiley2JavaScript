package testing;

import static org.junit.Assert.fail;

import java.io.*;

import wyil.io.WyilFileReader;
import wyjs.WyJS;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;

public class TestUtils {
	
	private static String whileyBuild = "wyjc-all-v0.3.35.jar";
	private static String wyilFolder = '"' + "wyil" +'"';
	
	public static String exec(String filename, String srcDir) {
		try {
			//First execute the Whiley test case files to make the Wyil files
			String tmp = "java -jar ../../lib/" + whileyBuild + " -bp ../../lib/" + whileyBuild + " -od " + wyilFolder + " " + filename + ".whiley";
			srcDir = srcDir.replace('/', File.separatorChar);
			Process p = Runtime.getRuntime().exec(tmp, null, new File(srcDir));

			StringBuffer syserr = new StringBuffer();
			StringBuffer sysout = new StringBuffer();
			new StreamGrabber(p.getErrorStream(), syserr);
			new StreamGrabber(p.getInputStream(), sysout);
			int exitCode = p.waitFor();
			if (exitCode != 0) {
				System.err
						.println("============================================================");
				System.err.println(filename);
				System.err
						.println("============================================================");
				System.err.println(syserr);
				return null;
			} else {
				WyilFileReader r = new WyilFileReader(srcDir + "/wyil/" + filename + ".wyil");
				WyJS js = new WyJS(r.read());
				String start = js.makeFile(filename, srcDir);
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
			    Reader library = new FileReader(new File(lib));
			    Reader mathlib = new FileReader(new File(math));
			    cxt.evaluateReader(scope, library, lib, 1, null);
			    cxt.evaluateReader(scope, mathlib, math, 1, null);
    		    cxt.evaluateReader(scope, file, filename, 1, null);
			    cxt.evaluateString(scope, start + "();", "test", 1, null);
				
//				tmp = "node " + filename + ".js";
//				
//				p = Runtime.getRuntime().exec(tmp, null, new File(srcDir));
//
//				syserr = new StringBuffer();
//				sysout = new StringBuffer();
//				new StreamGrabber(p.getErrorStream(), syserr);
//				new StreamGrabber(p.getInputStream(), sysout);
//				exitCode = p.waitFor();
				if (exitCode != 0) {
					System.err
							.println("============================================================");
					System.err.println(filename);
					System.err
							.println("============================================================");
					System.err.println(jssyserr);
					
					System.err.println(jssysout);
					return null;
				} else {
					return out.toString() + err.toString();
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			fail("Problem running compiled test");
		} finally{
			Context.exit();
		}

		return null;
	}
	
	/**
	 * Execute the main() method on a given (generated) Javascript file, and
	 * capture the output.
	 *
	 * @param filename Filename of generated JavaScript source file.
	 * @return
	 */
//	private static String execJavaScript(String filename) {
//		OutputStream out = new ByteArrayOutputStream();
//	    try {
//	      Reader file = new FileReader(new File(filename));
//	      Context cxt = Context.enter();
//	      Scriptable scope = cxt.initStandardObjects();
//
//
//	      Object sysout = Context.javaToJS(new PrintStream(out), scope);
//	      OutputStream err = new ByteArrayOutputStream();
//	      Object syserr = Context.javaToJS(new PrintStream(err), scope);
//
//	      ScriptableObject.putConstProperty(scope, "sysout", sysout);
//	      ScriptableObject.putConstProperty(scope, "syserr", syserr);
//
//	      //Set up the library
//	      String lib = testdir + File.separatorChar + "Wyscript.js";
//	      Reader library = new FileReader(new File(lib));
//	      cxt.evaluateReader(scope, library, lib, 1, null);
//
//	      cxt.evaluateReader(scope, file, filename, 1, null);
//	      cxt.evaluateString(scope, "main()", "main", 1, null);
//
//	      System.err.println(err);
//	      return out.toString();
//	    } catch (Exception ex) {
//	      System.err.print(out);
//	      ex.printStackTrace();
//	      fail("Problem running compiled test");
//	    } finally {
//	      Context.exit();
//	    }
//
//	    return null;
//	  }
	
	static public class StreamGrabber extends Thread {
		private InputStream input;
		private StringBuffer buffer;

		StreamGrabber(InputStream input, StringBuffer buffer) {
			this.input = input;
			this.buffer = buffer;
			start();
		}

		public void run() {
			try {
				int nextChar;
				// keep reading!!
				while ((nextChar = input.read()) != -1) {
					buffer.append((char) nextChar);
				}
			} catch (IOException ioe) {
			}
		}
	}
}

