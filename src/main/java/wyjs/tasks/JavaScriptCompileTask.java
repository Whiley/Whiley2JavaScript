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

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import wycc.lang.Build;
import wycc.lang.Build.Artifact;
import wycc.lang.Build.SnapShot;
import wycc.util.Pair;
import wycc.util.Trie;
import wyil.lang.WyilFile;
import wyjs.core.JavaScriptFile;

public class JavaScriptCompileTask implements Build.Task {
	/**
	 * The set of source files that this task will compiler from.
	 */
	private final Trie source;
	/**
	 * Identifier for target of this build task.
	 */
	private final Trie target;
	/**
	 * Specify whether or not to generate a "strict" JavaScript file.
	 */
	private final boolean strict;
	/**
	 *  Specify JavaScript standard to generate for
	 */
	private final JavaScriptFile.Standard standard;
	/**
	 * Additional JavaScript files to include in generated file.
	 */
	private final List<WyilFile> wyIncludes;
	/**
	 * Additional JavaScript files to include in generated file.
	 */
	private final List<JavaScriptFile> jsIncludes;

	public JavaScriptCompileTask(Trie target, Trie source, JavaScriptFile.Standard standard) {
		this(target, source, true, standard, Collections.emptyList(), Collections.emptyList());
	}

	public JavaScriptCompileTask(Trie target, Trie source, boolean strict, JavaScriptFile.Standard standard,
			List<WyilFile> wyIncludes, List<JavaScriptFile> jsIncludes) {
		if(target == null) {
			throw new IllegalArgumentException("invalid target");
		} else if(source == null) {
			throw new IllegalArgumentException("invalid source");
		}
		this.target = target;
		this.source = source;
		this.strict = strict;
		this.standard = standard;
		this.wyIncludes = wyIncludes;
		this.jsIncludes = jsIncludes;
	}

	@Override
	public Trie getPath() {
		return target;
	}

	@Override
	public Type<? extends Artifact> getContentType() {
		return JavaScriptFile.ContentType;
	}

	@Override
	public List<? extends Artifact> getSourceArtifacts() {
		throw new IllegalArgumentException();
	}

	@Override
	public Pair<SnapShot, Boolean> apply(SnapShot s) {
		// Read out the WyilFile which we are translating into JavaScript.
		WyilFile binary = s.get(WyilFile.ContentType, source);
		// Compile into a single binary target
		Pair<JavaScriptFile, Boolean> r = compile(binary);
		// Write target into snapshot
		s = s.put(r.first());
		// Done
		return new Pair<>(s, r.second());
	}

	private Pair<JavaScriptFile, Boolean> compile(WyilFile source) {
		// Construct initial (empty) JavaScript file
		JavaScriptFile jsFile = new JavaScriptFile(target, Arrays.asList(source), strict, standard);
		// FIXME: this is a fairly temporary solution at the moment which just
		// turns the WyIL file directly into a string. A more useful solution
		// will be to generate an intermediate file representing JavaScript in
		// an AST. This would enable, for example, better support for different
		// standards. It would also enable minification, and allow support for
		// different module systems (e.g. CommonJS).
		new JavaScriptCompiler(jsFile).visitModule(source);
		// Process Wyil includes
		for (WyilFile i : wyIncludes) {
			new JavaScriptCompiler(jsFile).visitModule(i);
		}
		// Process JavaScript includes
		for (JavaScriptFile i : jsIncludes) {
			jsFile.getDeclarations().addAll(i.getDeclarations());
		}
		// How could this fail?
		return new Pair<>(jsFile, true);
	}
}
