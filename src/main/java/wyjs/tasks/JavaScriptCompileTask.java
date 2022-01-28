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
package wyjs.tasks;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import wycc.util.Pair;
import wycc.util.Trie;
import wyil.lang.WyilFile;
import wyjs.core.JavaScriptFile;
import wyjs.core.JavaScriptFile.Standard;

public class JavaScriptCompileTask {
	/**
	 * Identifier for target of this build task.
	 */
	private Trie target = Trie.fromString("main");
	/**
	 * The set of source files that this task will compiler from.
	 */
	private final List<WyilFile> sources = new ArrayList<>();
	/**
	 * Additional JavaScript files to include in generated file.
	 */
	private final List<JavaScriptFile> includes = new ArrayList<>();
	/**
	 * Specify whether or not to generate a "strict" JavaScript file.
	 */
	private boolean strict = true;
	/**
	 *  Specify JavaScript standard to generate for
	 */
	private Standard standard = Standard.ES6;

	public JavaScriptCompileTask setTarget(Trie target) {
		this.target = target;
		return this;
	}

	public JavaScriptCompileTask setStrict(boolean flag) {
		this.strict = flag;
		return this;
	}

	public JavaScriptCompileTask setStandard(Standard std) {
		this.standard = std;
		return this;
	}

	public JavaScriptCompileTask addSource(WyilFile f) {
		this.sources.add(f);
		return this;
	}

	public JavaScriptCompileTask addInclude(JavaScriptFile f) {
		this.includes.add(f);
		return this;
	}

	public Trie getPath() {
		return target;
	}

	public JavaScriptFile run() {
		// Construct initial (empty) JavaScript file
		JavaScriptFile jsFile = new JavaScriptFile(strict, standard);
		// Process source files one by one
		for (WyilFile i : sources) {
			new JavaScriptCompiler(jsFile).visitModule(i);
		}
		// Process additional JavaScript includes
		for (JavaScriptFile i : includes) {
			jsFile.getDeclarations().addAll(i.getDeclarations());
		}
		// How could this fail?
		return jsFile;
	}
}
