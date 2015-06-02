package testing;

import static org.junit.Assert.fail;

import org.junit.Test;



public class JavascriptValidTests {
	
	private static String srcDir = "tests/valid";
	
	protected void runTest(String filename){
		String out = TestUtils.exec(filename, srcDir);
		if(!out.equals("")){
			fail("Running had output " + out);
		}
	}
	
	@Test public void JSValidTest1(){ runTest("integer01");}
	@Test public void JSValidTest2(){ runTest("integer02");}
	@Test public void JSValidTest3(){ runTest("integer03");}

	@Test public void JSValidTest4(){ runTest("boolean01");}
	@Test public void JSValidTest5(){ runTest("boolean02");}
	
	@Test public void JSValidTest6(){ runTest("real01");}
	@Test public void JSValidTest7(){ runTest("real02");}
	
	@Test public void JSValidTest8(){ runTest("controlflow01");}
	@Test public void JSValidTest9(){ runTest("controlflow02");}
	@Test public void JSValidTest10(){ runTest("controlflow03");}
	@Test public void JSValidTest11(){ runTest("controlflow04");}
	@Test public void JSValidTest12(){ runTest("controlflownew1");}
	@Test public void JSValidTest13(){ runTest("controlflownew2");}
	
	
	@Test public void JSValidTest14(){ runTest("whilevalid1");}
	@Test public void JSValidTest15(){ runTest("whilevalid2");}
	@Test public void JSValidTestum1(){ runTest("whilevalid5");}
	
	@Test public void JSValidTest16(){ runTest("ifelsevalid_1");}
	@Test public void JSValidTest17(){ runTest("ifelsevalid_2");}
	@Test public void JSValidTest18(){ runTest("ifelsevalid_3");}
	@Test public void JSValidTest19(){ runTest("ifelsevalid_4");}
	
	@Test public void JSValidTest20(){ runTest("recordvalid_1");}
	@Test public void JSValidTest21(){ runTest("recordvalid_2");}
	@Test public void JSValidTest22(){ runTest("recordvalid_3");}
	
	@Test public void JSValidTest23(){ runTest("listvalid1");}
}
