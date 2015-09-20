package testing;

import static org.junit.Assert.fail;

import org.junit.Test;

public class Benchmarks {
	private static String srcDir = "tests/benchmarks";
	
	protected void runTest(String filename){
		String out = TestUtils.exec(filename, srcDir);
		if(!out.equals("")){
			System.err.println(out);
			fail("Running had output " + out);
		}
	}
	
	@Test public void average_001(){ runTest("001_average");}
	@Test public void fib_002(){ runTest("002_fib");}
	@Test public void gcd_003(){ runTest("003_gcd");}
	@Test public void matrix_004(){ runTest("004_matrix");}
	@Test public void queens_006(){ runTest("006_queens");}
	@Test public void regex_007(){ runTest("007_regex");}
	@Test public void scc_008(){ runTest("008_scc");}
	@Test public void sort_010(){ runTest("010_sort");}
	@Test public void codejam_011(){ runTest("011_codejam");}
	@Test public void btree_013(){ runTest("013_btree");}
	@Test public void trafficlights_014(){ runTest("014_trafficlights");}
	@Test public void date_016(){ runTest("016_date");}
	@Test public void conway_102(){ runTest("102_conway");}
	@Test public void math(){ runTest("Math");}
	@Test public void parser(){ runTest("Parser");}
}
