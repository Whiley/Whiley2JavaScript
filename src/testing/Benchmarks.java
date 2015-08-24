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
	@Test public void math(){ runTest("Math");}
}
