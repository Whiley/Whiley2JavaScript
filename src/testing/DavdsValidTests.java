package testing;

import static org.junit.Assert.fail;

import org.junit.Test;



public class DavdsValidTests {
	
	private static String srcDir = "tests/wycvalid";
	
	protected void runTest(String filename){
		String out = TestUtils.exec(filename, srcDir);
		if(!out.equals("")){
			fail("Running had output " + out);
		}
	}
	
	@Test public void Access_Valid_1(){ runTest("Access_Valid_1");}
	@Test public void Access_Valid_2(){ runTest("Access_Valid_2");}
	@Test public void Assume_Valid_1(){ runTest("Assume_Valid_1");}
	@Test public void Assume_Valid_2(){ runTest("Assume_Valid_2");}

	@Test public void BoolAssign_Valid_1(){ runTest("BoolAssign_Valid_1");}
	@Test public void BoolAssign_Valid_2(){ runTest("BoolAssign_Valid_2");}
	@Test public void BoolAssign_Valid_3(){ runTest("BoolAssign_Valid_3");}
	@Test public void BoolAssign_Valid_4(){ runTest("BoolAssign_Valid_4");}
	@Test public void BoolAssign_Valid_5(){ runTest("BoolAssign_Valid_5");}
	@Test public void BoolAssign_Valid_6(){ runTest("BoolAssign_Valid_6");}
	
	@Test public void IfElse_Valid_1(){ runTest("IfElse_Valid_1");}
	@Test public void IfElse_Valid_2(){ runTest("IfElse_Valid_2");}
	@Test public void IfElse_Valid_3(){ runTest("IfElse_Valid_3");}
	@Test public void IfElse_Valid_4(){ runTest("IfElse_Valid_4");}
	@Test public void IfElse_Valid_5(){ runTest("IfElse_Valid_5");}
}
