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
import wycc.lang.Path;
import wycc.util.Logger;
import wycc.util.Pair;
import wyil.lang.WyilFile;
import wyjs.core.JavaScriptFile;

public class JavaScriptCompileTask implements Build.Task {
	/**
	 * Enable debug mode
	 */
	protected boolean debug = true;
	/**
	 * The set of source files that this task will compiler from.
	 */
	private final WyilFile source;
	/**
	 * Identifier for target of this build task.
	 */
	private final Path target;
	/**
	 * Additional JavaScript files to include in generated file.
	 */
	private List<JavaScriptFile> includes = Collections.EMPTY_LIST;

	public JavaScriptCompileTask(Path target,
			WyilFile source) {
		this.target = target;
		this.source = source;
	}

	public void setDebug(boolean debug) {
		this.debug = debug;
	}

	public void setIncludes(List<JavaScriptFile> includes) {
		this.includes = includes;
	}

	@Override
	public Path getPath() {
		return target;
	}

	@Override
	public Type<? extends Artifact> getContentType() {
		return JavaScriptFile.ContentType;
	}

	@Override
	public List<? extends Artifact> getSourceArtifacts() {
		return Arrays.asList(source);
	}

	@Override
	public Pair<SnapShot, Boolean> apply(SnapShot s) {
		// Compile into a single binary target
		Pair<JavaScriptFile, Boolean> r = compile(source);
		// Write target into snapshot
		s = s.put(r.first());
		// Done
		return new Pair<>(s, r.second());
	}

	private Pair<JavaScriptFile, Boolean> compile(WyilFile source) {
		boolean strictMode = true;
		JavaScriptFile.Standard std = JavaScriptFile.Standard.ES6;
		JavaScriptFile jsFile = new JavaScriptFile(target, Arrays.asList(source), strictMode, std);
		// FIXME: this is a fairly temporary solution at the moment which just
		// turns the WyIL file directly into a string. A more useful solution
		// will be to generate an intermediate file representing JavaScript in
		// an AST. This would enable, for example, better support for different
		// standards. It would also enable minification, and allow support for
		// different module systems (e.g. CommonJS).
		new JavaScriptCompiler(jsFile).visitModule(source);
		// Process includes
		for (JavaScriptFile i : includes) {
			jsFile.getDeclarations().addAll(i.getDeclarations());
		}
		// How could this fail?
		return new Pair<>(jsFile, true);
	}

//	@Override
//	public Function<Build.Meter,Boolean> initialise() throws IOException {
//		// Extract target and source files for compilation. This is the component which
//		// requires I/O.
//		JavaScriptFile jsf = target.read();
//		WyilFile wyf = sources.get(0).read();
//		// Extract other (native) includes
//		JavaScriptFile[] jsincs = readAll(includes);
//		// Construct the lambda for subsequent execution. This will eventually make its
//		// way into some kind of execution pool, possibly for concurrent execution with
//		// other tasks.
//		return (Build.Meter meter) -> execute(meter, jsf, wyf, jsincs);
//	}
//
//	public boolean execute(Build.Meter meter, JavaScriptFile target, WyilFile source, JavaScriptFile... includes) {
//		meter = meter.fork("JavaScriptCompiler");

//		//
//		meter.done();
//		// How can this fail?
//		return true;
//	}
//
//	private JavaScriptFile[] readAll(List<Path.Entry<JavaScriptFile>> includes) throws IOException {
//		JavaScriptFile[] files = new JavaScriptFile[includes.size()];
//		for(int i=0;i!=files.length;++i) {
//			files[i] = includes.get(i).read();
//		}
//		return files;
//	}
}
