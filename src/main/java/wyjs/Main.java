// Copyright 2011 The Whiley Project Developers
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
package wyjs;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import wycc.util.Trie;
import wyil.io.WyilFileWriter;
import wyil.lang.WyilFile;
import wyjs.core.JavaScriptFile;
import wyjs.io.JavaScriptFilePrinter;

public class Main {


//	public JavaScriptFile readJavaScriptFile(Trie p, InputStream inputStream, Content.Registry registry) throws IOException {
//		// NOTE: this is strictly a hack at this time as its unclear what the best
//		// alternative option is. Specifically, parsing JavaScriptFiles is not something
//		// I'm contemplating right now :)
//		Reader reader = new InputStreamReader(inputStream);
//		BufferedReader in = new BufferedReader(reader);
//
//		StringBuilder text = new StringBuilder();
//		int len = 0;
//		char[] buf = new char[1024];
//		while ((len = in.read(buf)) != -1) {
//			text.append(buf, 0, len);
//		}
//		// Finally, construct the native declaration
//		NativeDeclaration d = new NativeDeclaration(text.toString());
//		//
//		JavaScriptFile js = new JavaScriptFile(p, Collections.EMPTY_LIST, true, Standard.ES6);
//		// Append our native declarations.
//		js.declarations.add(d);
//		return js;
//	}


	/**
	 * Write a given WyilFile to disk using the given directory as a root.
	 *
	 * @param wf
	 * @param dir
	 * @throws IOException
	 */
	public static void writeJavaScriptFile(Trie target, JavaScriptFile wf, File dir) throws IOException {
		String filename = target.toNativeString() + ".js";
		try (FileOutputStream fout = new FileOutputStream(new File(dir, filename))) {
			new JavaScriptFilePrinter(fout).write(wf);
			fout.flush();
		}
	}

}
