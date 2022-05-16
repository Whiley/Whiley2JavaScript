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
import java.io.IOException;
import java.nio.file.Path;
import java.util.Map;

import wyc.util.testing.WhileyCompileTest;
import wycc.lang.Syntactic;
import wycc.util.*;
import wycc.util.testing.TestFile;
import wycc.util.testing.TestStage;
import wycc.util.testing.TestFile.Error;
import wycc.util.testing.TestStage.Result;
import wyil.lang.WyilFile;
import wyjs.Main;
import wyjs.core.JavaScriptFile;

public class JsCompileTest implements TestStage {

	/**
	 * The location of the WyJS runtime library. This provides critical
	 * functions used in generated javascript and is distinct from the Whiley
	 * standard library.
	 */
	public final static String WYJS_RUNTIME = "lib/js.js".replace('/', File.separatorChar);

	@Override
	public Result apply(Trie path, Path dir, Map<Trie, TextFile> state, TestFile tf) throws IOException {
		boolean ignored = tf.get(Boolean.class, "js.compile.ignore").orElse(false);
		// Test was expected to compile, so attempt to run the code.
		String unit = tf.get(String.class, "main.file").orElse("main");
		try {
			// FIXME: enable standard configuration
			new Main().setWyilDir(dir.toFile()).setJsDir(dir.toFile()).setTarget(path).addSource(path)
					.setStandard(JavaScriptFile.Standard.ES5).run();
			//
			return new Result(ignored, new Error[0]);
		} catch (Syntactic.Exception e) {
			e.printStackTrace();
			TestFile.Error err = WhileyCompileTest.toError(state, e);
			return new TestStage.Result(ignored, new TestFile.Error[] { err });
		} catch(Throwable e) {
			TestFile.Coordinate c = new TestFile.Coordinate(0, new TestFile.Range(0, 0));
			return new Result(ignored, new Error(WyilFile.INTERNAL_FAILURE, Trie.fromString(unit), c));
		}
	}

	@Override
	public Error[] filter(Error[] errors) {
		return new Error[0];
	}

	@Override
	public boolean required() {
		return false;
	}
}
