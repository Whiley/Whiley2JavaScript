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

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Enumeration;
import java.util.List;
import java.util.Map;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;

import wycc.util.OptArg;
import wycc.util.Trie;
import wyil.lang.WyilFile;
import wyjs.core.JavaScriptFile;
import wyjs.core.JavaScriptFile.NativeDeclaration;
import wyjs.core.JavaScriptFile.Standard;
import wyjs.io.JavaScriptFilePrinter;
import wyjs.tasks.JavaScriptCompileTask;

public class Main {
	/**
	 * Determine the JavaScript standard to use.
	 */
	private Standard standard = Standard.ES6;
	/**
	 * Destination directory of Wyil files.
	 */
	private File wyildir = new File(".");
	/**
	 * Destination directory of Wyil files.
	 */
	private File jsdir = new File(".");
	/**
	 * List of source files.
	 */
	private List<Trie> sources = new ArrayList<>();
	/**
	 * Determine target filename.
	 */
	private Trie target = Trie.fromString("main");
	/**
	 * List of JavaScript files to include.
	 */
	private List<File> includes = new ArrayList<>();
	/**
	 * WyIL dependencies to include during compilation.
	 */
	private List<File> whileypath = Collections.EMPTY_LIST;

	public Main addSource(Trie source) {
		this.sources.add(source);
		return this;
	}

	public Main setStandard(Standard standard) {
		this.standard = standard;
		return this;
	}

	public Main setTarget(Trie target) {
		this.target = target;
		return this;
	}

	public Main setWyilDir(File wyildir) {
		this.wyildir = wyildir;
		return this;
	}

	public Main setJsDir(File jsdir) {
		this.jsdir = jsdir;
		return this;
	}

	public Main setWhileyPath(List<File> whileypath) {
		this.whileypath = whileypath;
		return this;
	}

	public boolean run() throws IOException {
		// Construct compile task
		JavaScriptCompileTask task = new JavaScriptCompileTask().setTarget(target).setStandard(standard);
		// Add sources
		for(Trie source : sources) {
			// Extract source file
			task.addSource(wyc.Compiler.readWyilFile(wyildir, source));
		}
		// Extract any dependencies from zips
		for(File dep : whileypath) {
			List<WyilFile> deps = new ArrayList<>();
			wyc.Compiler.extractDependencies(dep,deps);
			task.addSources(deps);
		}
		// Load local includes
		for(File include : includes) {
			FileInputStream fin = new FileInputStream(include);
			JavaScriptFile jsf = readJavaScriptFile(fin);
			fin.close();
			task.addInclude(jsf);
		}
		// Load includes from dependencies
		for(JavaScriptFile js : extractIncludes(whileypath)) {
			task.addInclude(js);
		}
		JavaScriptFile target = task.run();
		// Write out binary target
		wyjs.Main.writeJavaScriptFile(this.target, target, jsdir);
		// Unsure how it can fail!
		return true;
	}

	public static List<JavaScriptFile> extractIncludes(List<File> whileypath) throws IOException {
		List<JavaScriptFile> includes = new ArrayList<>();
		for(File f : whileypath) {
			String suffix = getSuffix(f.getName());
			//
			switch(suffix) {
			case "zip":
				extractFromZip(f,includes);
				break;
			default:
				throw new IllegalArgumentException("invalid whileypath entry \"" + f.getName() + "\"");
			}
		}
		return includes;
	}

	/**
	 * Extract all WyilFiles contained in a zipfile.
	 *
	 * @param dep
	 * @param dependencies
	 * @throws IOException
	 */
	public static void extractFromZip(File dep, List<JavaScriptFile> includes) throws IOException {
		ZipFile zf = new ZipFile(dep);
		Enumeration<? extends ZipEntry> entries = zf.entries();
		while(entries.hasMoreElements()) {
			ZipEntry e = entries.nextElement();
			String suffix = getSuffix(e.getName());
			if(suffix != null && suffix.equals("js")) {
				JavaScriptFile jsf = readJavaScriptFile(zf.getInputStream(e));
				includes.add(jsf);
			}
		}
		zf.close();
	}

	/**
	 * Extract the suffix from a given filename. For example, given "std-0.3.2.zip"
	 * we return "zip".
	 *
	 * @param t
	 * @return
	 */
	private static String getSuffix(String t) {
		int i = t.lastIndexOf('.');
		if (i >= 0) {
			return t.substring(i + 1);
		} else {
			return null;
		}
	}

	/**
	 * Command-line options
	 */
	private static final OptArg[] OPTIONS = {
			// Standard options
			new OptArg("verbose","v","set verbose output"),
			new OptArg("standard","s",OptArg.STRING,"set JavaScript standard","ES6"),
			new OptArg("output","o",OptArg.STRING,"set output file","main"),
			new OptArg("wyildir", OptArg.FILEDIR, "Specify where to place binary (WyIL) files", new File(".")),
			new OptArg("jsdir", OptArg.FILEDIR, "Specify where to place JavaScript files", new File(".")),
			new OptArg("whileypath", OptArg.FILELIST, "Specify additional dependencies", new ArrayList<>())
	};
	//
	public static void main(String[] _args) throws IOException {
		List<String> args = new ArrayList<>(Arrays.asList(_args));
		Map<String, Object> options = OptArg.parseOptions(args, OPTIONS);
		//
		File wyildir = (File) options.get("wyildir");
		File jsdir = (File) options.get("jsdir");
		Trie target = Trie.fromString((String) options.get("output"));
		Standard standard = Standard.valueOf((String) options.get("standard"));
		ArrayList<File> whileypath = (ArrayList<File>) options.get("whileypath");
		// Construct Main object
		Main main = new Main().setStandard(standard).setWyilDir(wyildir).setJsDir(jsdir).setTarget(target).setWhileyPath(whileypath);
		// Add source files
		for (String s : args) {
			main.addSource(Trie.fromString(s));
		}
		// Run the compiler!
		boolean result = main.run();
		// Produce exit code
		System.exit(result ? 0 : 1);
	}

	public static JavaScriptFile readJavaScriptFile(InputStream inputStream) throws IOException {
		// NOTE: this is strictly a hack at this time as its unclear what the best
		// alternative option is. Specifically, parsing JavaScriptFiles is not something
		// I'm contemplating right now :)
		Reader reader = new InputStreamReader(inputStream);
		BufferedReader in = new BufferedReader(reader);

		StringBuilder text = new StringBuilder();
		int len = 0;
		char[] buf = new char[1024];
		while ((len = in.read(buf)) != -1) {
			text.append(buf, 0, len);
		}
		// Finally, construct the native declaration
		NativeDeclaration d = new NativeDeclaration(text.toString());
		//
		JavaScriptFile js = new JavaScriptFile(true, Standard.ES6);
		// Append our native declarations.
		js.getDeclarations().add(d);
		return js;
	}

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
