package testing;

import static org.junit.Assert.fail;

import java.io.*;

import wyil.io.WyilFileReader;
import wyil.lang.WyilFile;
import wyjs.WyJS;

public class TestUtils {
	
	private static String whileyBuild = "wyjc-all-v0.3.33.jar";
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
				js.makeFile(filename, srcDir);
				
				tmp = "node " + filename + ".js";
				
				p = Runtime.getRuntime().exec(tmp, null, new File(srcDir));

				syserr = new StringBuffer();
				sysout = new StringBuffer();
				new StreamGrabber(p.getErrorStream(), syserr);
				new StreamGrabber(p.getInputStream(), sysout);
				exitCode = p.waitFor();
				if (exitCode != 0) {
					System.err
							.println("============================================================");
					System.err.println(filename);
					System.err
							.println("============================================================");
					System.err.println(syserr);
					return null;
				} else {
					return sysout.toString();
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			fail("Problem running compiled test");
		}

		return null;
	}
	
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

