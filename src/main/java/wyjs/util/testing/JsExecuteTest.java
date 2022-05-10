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
package wyjs.util.testing;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Path;
import java.util.Arrays;
import java.util.Map;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

import wycc.util.*;
import wycc.util.testing.TestFile;
import wycc.util.testing.TestStage;
import wycc.util.testing.TestFile.Error;
import wyc.util.testing.ExecuteTest;
import wyil.lang.WyilFile;

public class JsExecuteTest implements TestStage {

	/**
	 * The location of the WyJS runtime library. This provides critical
	 * functions used in generated javascript and is distinct from the Whiley
	 * standard library.
	 */
	public final static String WYJS_RUNTIME = "lib/js.js".replace('/', File.separatorChar);

	@Override
	public Result apply(Trie path, Path dir, Map<Trie, TextFile> state, TestFile tf) throws IOException {
		boolean blocked = tf.get(Boolean.class, "js.execute.block").orElse(false);
		boolean ignored = tf.get(Boolean.class, "js.execute.ignore").orElse(false);
		if(blocked) {
			// Blocked is like ignore, but means "don't even try to execute this".
			return new Result(true, new Error[0]);
		} else {
			// Test was expected to compile, so attempt to run the code.
			String unit = tf.get(String.class, "main.file").orElse("main");
			try {
				Path jsFile = dir.resolve(path + ".js");
				execJS(jsFile.toFile(), unit);
				return new Result(ignored, new Error[0]);
			} catch (ScriptException|StackOverflowError e) {
				TestFile.Coordinate c = extractCoordinate(e.getMessage(),state);
				int errno = extractErrorNumber(e.getMessage());
				Trie filename = extractFilename(e.getMessage());
				return new Result(ignored, new Error(errno, filename, c));
			}
		}
	}

	private Trie extractFilename(String msg) {
		if(msg != null) {
			String[] split = msg.split(" ");
			//
			if(split.length > 0) {
				split = split[0].split(":");
				if(split.length == 4) {
					return Trie.fromString(split[0]);
				}
			}
		}
		return Trie.fromString("main.whiley");
	}

	private TestFile.Coordinate extractCoordinate(String msg, Map<Trie, TextFile> state) {
		if(msg != null) {
			String[] split = msg.split(" ");
			//
			if(split.length > 0) {
				split = split[0].split(":");
				if(split.length == 4) {
					Trie filename = Trie.fromString(split[0]);
					int start = Integer.parseInt(split[1]);
					int end = Integer.parseInt(split[2]);
					return extractCoordinate(filename, start, end, state);
				}
			}
		}
		// Fall back
		return new TestFile.Coordinate(0, new TestFile.Range(0, 0));
	}

	private int extractErrorNumber(String msg) {
		if(msg != null) {
			String[] split = msg.split(" ");
			//
			if(split.length > 0) {
				split = split[0].split(":");
				if(split.length == 4) {
					return Integer.parseInt(split[3].substring(1));
				}
			}
		}
		return WyilFile.RUNTIME_FAULT;
	}

	private TestFile.Coordinate extractCoordinate(Trie filename, int start, int end, Map<Trie, TextFile> state) {
		// Extract source file
		TextFile sf = state.get(filename);
		// Extract enclosing line
		TextFile.Line l = sf.getEnclosingLine(start);
		int line;
		TestFile.Range range;
		//
		if (l != null) {
			// Convert space into coordinate
			start -= l.getOffset();
			end -= l.getOffset();
			//
			line = l.getNumber();
			range = new TestFile.Range(start, end);
		} else {
			line = 1;
			range = new TestFile.Range(0, 1);
		}
		return new TestFile.Coordinate(line, range);
	}


	/**
	 * Execute a given JavaScript file stored on disk using the built-in
	 * "Nashorn" interpreter.
	 *
	 * @param jsFile The file to be executed.
	 * @param name
	 *            The fully qualified name of the JavaScript file to be
	 *            executed.
	 * @throws ScriptException
	 * @throws IOException
	 */
	private void execJS(File jsFile, String unit) throws ScriptException, IOException {
		ScriptEngine engine = new ScriptEngineManager().getEngineByName("nashorn");
		// Load the WyJS runtime which provides necessary support methods.
		engine.eval(new FileReader(WYJS_RUNTIME));
		// Load the js script from the filesystem
		engine.eval(new FileReader(jsFile));
		// Execute the test() method
		engine.eval(unit + "$test();");
	}

	@Override
	public Error[] filter(Error[] errors) {
		return Arrays.asList(errors).stream().filter(m -> ExecuteTest.isRuntimeError(m.getErrorNumber()))
				.toArray(TestFile.Error[]::new);
	}
}
