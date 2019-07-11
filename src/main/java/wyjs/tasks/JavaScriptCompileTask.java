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

import java.io.IOException;
import java.util.Arrays;
import java.util.concurrent.Callable;

import wybs.lang.Build;
import wybs.util.AbstractBuildTask;
import wycc.util.Logger;
import wyfs.lang.Path;
import wyil.lang.WyilFile;
import wyjs.core.JavaScriptFile;

public class JavaScriptCompileTask extends AbstractBuildTask<WyilFile, JavaScriptFile> {

	/**
	 * Enable debug mode
	 */
	protected boolean debug = true;

	/**
	 * For logging information.
	 */
	private Logger logger = Logger.NULL;

	public JavaScriptCompileTask(Build.Project project,Path.Entry<JavaScriptFile> target,
			Path.Entry<WyilFile> sources) {
		super(project, target, Arrays.asList(sources));
	}

	public void setLogger(Logger logger) {
		this.logger = logger;
	}

	public void setDebug(boolean debug) {
		this.debug = debug;
	}

	@Override
	public Build.Project project() {
		return project;
	}

	@Override
	public Callable<Boolean> initialise() throws IOException {
		// Extract target and source files for compilation. This is the component which
		// requires I/O.
		JavaScriptFile jsf = target.read();
		WyilFile wyf = sources.get(0).read();
		// Construct the lambda for subsequent execution. This will eventually make its
		// way into some kind of execution pool, possibly for concurrent execution with
		// other tasks.
		return () -> execute(jsf, wyf);
	}

	public boolean execute(JavaScriptFile target, WyilFile source) {
		// FIXME: this is a fairly temporary solution at the moment which just
		// turns the WyIL file directly into a string. A more useful solution
		// will be to generate an intermediate file representing JavaScript in
		// an AST. This would enable, for example, better support for different
		// standards. It would also enable minification, and allow support for
		// different module systems (e.g. CommonJS).
		new JavaScriptCompiler(target).visitModule(source, null);
		// How can this fail?
		return true;
	}
}
