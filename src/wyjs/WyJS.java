package wyjs;


import java.io.IOException;

import wyil.io.WyilFilePrinter;
import wyil.io.WyilFileReader;
import wyil.lang.WyilFile;

public class WyJS {
	public static void main(String[] args) {
		try {
			// First, read the WyIL file specified on the command-line.
			WyilFileReader r = new WyilFileReader(args[0]);
			WyilFile wyilFile = r.read();
			// Second, print out its contents (for now, though this should be
			// changed)
			WyilFilePrinter printer = new WyilFilePrinter(System.out);
			printer.apply(wyilFile);
		} catch (IOException e) {
			System.out.println(e.getMessage());
		}
	}
}
