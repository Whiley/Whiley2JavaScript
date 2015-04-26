package testing;

import static org.junit.Assert.fail;

import org.junit.Test;



public class JavascriptValidTests {
	
	private static String srcDir = "tests/valid";
	
	protected void runTest(String filename){
		String out = TestUtils.exec(filename, srcDir);
		if(!out.equals("")){
			fail("Running had output");
		}
	}
	
	@Test public void JSValidTest1(){ runTest("integer01.js");}
}
