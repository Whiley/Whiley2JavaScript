package testing;

import static org.junit.Assert.fail;

import java.io.IOException;

import org.junit.Ignore;
import org.junit.Test;


public class NewMethodsTests {
	
	private static String srcDir = "tests/newcodetests";
	
	protected void runTest(String filename){
		String out = TestUtils.exec(filename, srcDir);
		if(!out.equals("")){
			fail("Running had output " + out);
		}
	}
	
	@Test
	public void integer_1() throws IOException {
		runTest("unbound_1");
	}
	
	@Test @Ignore("precision error")
	public void real_1() throws IOException {
		runTest("real_1");
	}
	
	@Test
	public void boolean_1() throws IOException {
		runTest("boolean_1");
	}
}