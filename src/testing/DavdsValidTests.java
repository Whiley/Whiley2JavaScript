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
	
	@Test public void DecimalAssignment_Valid_1(){ runTest("DecimalAssignment_Valid_1");}
	
	@Test public void Constant_Valid_3(){ runTest("Constant_Valid_3");}
	
	@Test public void IntMul_Valid_1(){ runTest("IntMul_Valid_1");}
	@Test public void IntMul_Valid_2(){ runTest("IntMul_Valid_2");}
	
	@Test public void IntOp_Valid_1(){ runTest("IntOp_Valid_1");}
	
	@Test public void Real_Valid_1(){ runTest("Real_Valid_1");}
	
	@Test public void RealConst_Valid_1(){ runTest("RealConst_Valid_1");}
	
	@Test public void Resolution_Valid_1(){ runTest("Resolution_Valid_1");}
	
	@Test public void MultilineComment_Valid_1(){ runTest("MultilineComment_Valid_1");}
	@Test public void MultilineComment_Valid_2(){ runTest("MultilineComment_Valid_2");}
	
	@Test public void SinglelineComment_Valid_1(){ runTest("SinglelineComment_Valid_1");}
	
	@Test public void Assume_Valid_1(){ runTest("Assume_Valid_1");}
	@Test public void Assume_Valid_2(){ runTest("Assume_Valid_2");}

	@Test public void BoolAssign_Valid_1(){ runTest("BoolAssign_Valid_1");}
	@Test public void BoolAssign_Valid_2(){ runTest("BoolAssign_Valid_2");}
	@Test public void BoolAssign_Valid_3(){ runTest("BoolAssign_Valid_3");}
	@Test public void BoolAssign_Valid_4(){ runTest("BoolAssign_Valid_4");}
	@Test public void BoolAssign_Valid_5(){ runTest("BoolAssign_Valid_5");}
	@Test public void BoolAssign_Valid_6(){ runTest("BoolAssign_Valid_6");}
	
	@Test public void BoolFun_Valid_1(){ runTest("BoolFun_Valid_1");}
	
	@Test public void BoolIfElse_Valid_1(){ runTest("BoolIfElse_Valid_1");}
	@Test public void BoolIfElse_Valid_2(){ runTest("BoolIfElse_Valid_2");}
	
	@Test public void BoolReturn_Valid_1(){ runTest("BoolReturn_Valid_1");}
	
	@Test public void RecordAccess_Valid_1(){ runTest("RecordAccess_Valid_1");}
	@Test public void RecordAccess_Valid_2(){ runTest("RecordAccess_Valid_2");}
	
	@Test public void RecordAssign_Valid_1(){ runTest("RecordAssign_Valid_1");}
	@Test public void RecordAssign_Valid_2(){ runTest("RecordAssign_Valid_2");}
	
	@Test public void IfElse_Valid_1(){ runTest("IfElse_Valid_1");}
	@Test public void IfElse_Valid_2(){ runTest("IfElse_Valid_2");}
	@Test public void IfElse_Valid_3(){ runTest("IfElse_Valid_3");}
	@Test public void IfElse_Valid_4(){ runTest("IfElse_Valid_4");}
	@Test public void IfElse_Valid_5(){ runTest("IfElse_Valid_5");}
	
	@Test public void ListGenerator_Valid_1(){ runTest("ListGenerator_Valid_1");}
	@Test public void ListGenerator_Valid_2(){ runTest("ListGenerator_Valid_2");}
	@Test public void ListGenerator_Valid_3(){ runTest("ListGenerator_Valid_3");}
	@Test public void ListGenerator_Valid_5(){ runTest("ListGenerator_Valid_5");}
	
	@Test public void ListAssign_Valid_1(){ runTest("ListAssign_Valid_1");}
	@Test public void ListAssign_Valid_2(){ runTest("ListAssign_Valid_2");}
	@Test public void ListAssign_Valid_3(){ runTest("ListAssign_Valid_3");}
	@Test public void ListAssign_Valid_4(){ runTest("ListAssign_Valid_4");}
	@Test public void ListAssign_Valid_5(){ runTest("ListAssign_Valid_5");}
	@Test public void ListAssign_Valid_6(){ runTest("ListAssign_Valid_6");}
	@Test public void ListAssign_Valid_7(){ runTest("ListAssign_Valid_7");}
	@Test public void ListAssign_Valid_8(){ runTest("ListAssign_Valid_8");}
	@Test public void ListAssign_Valid_9(){ runTest("ListAssign_Valid_9");}
	@Test public void ListAssign_Valid_10(){ runTest("ListAssign_Valid_10");}
	@Test public void ListAssign_Valid_11(){ runTest("ListAssign_Valid_11");}
	
	@Test public void While_Valid_1(){ runTest("While_Valid_1");}
	@Test public void While_Valid_2(){ runTest("While_Valid_2");}
	@Test public void While_Valid_3(){ runTest("While_Valid_3");}
	@Test public void While_Valid_5(){ runTest("While_Valid_5");}
	@Test public void While_Valid_7(){ runTest("While_Valid_7");}
	@Test public void While_Valid_9(){ runTest("While_Valid_9");}
	
	@Test public void Function_Valid_1(){ runTest("Function_Valid_1");}
	@Test public void Function_Valid_2(){ runTest("Function_Valid_2");}
	@Test public void Function_Valid_3(){ runTest("Function_Valid_3");}
	@Test public void Function_Valid_4(){ runTest("Function_Valid_4");}
	@Test public void Function_Valid_5(){ runTest("Function_Valid_5");}
	@Test public void Function_Valid_6(){ runTest("Function_Valid_6");}
	@Test public void Function_Valid_7(){ runTest("Function_Valid_7");}
	@Test public void Function_Valid_8(){ runTest("Function_Valid_8");}
	@Test public void Function_Valid_9(){ runTest("Function_Valid_9");}
	@Test public void Function_Valid_10(){ runTest("Function_Valid_10");}
	@Test public void Function_Valid_11(){ runTest("Function_Valid_11");}
	@Test public void Function_Valid_12(){ runTest("Function_Valid_12");}
	@Test public void Function_Valid_13(){ runTest("Function_Valid_13");}
	@Test public void Function_Valid_14(){ runTest("Function_Valid_14");}
	@Test public void Function_Valid_15(){ runTest("Function_Valid_15");}
	@Test public void Function_Valid_16(){ runTest("Function_Valid_16");}
	@Test public void Function_Valid_17(){ runTest("Function_Valid_17");}
	@Test public void Function_Valid_18(){ runTest("Function_Valid_18");}
	@Test public void Function_Valid_19(){ runTest("Function_Valid_19");}
	@Test public void Function_Valid_20(){ runTest("Function_Valid_20");}
	@Test public void Function_Valid_21(){ runTest("Function_Valid_21");}
}
