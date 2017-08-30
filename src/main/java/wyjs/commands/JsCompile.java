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
package wyjs.commands;

import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;

import wybs.util.StdBuildRule;
import wybs.util.StdProject;
import wyc.command.Compile;
import wycc.util.ArrayUtils;
import wycc.util.Logger;
import wyfs.lang.Content;
import wyfs.lang.Path;
import wyfs.util.DirectoryRoot;
import wyc.lang.WhileyFile;
import wyc.lang.WyilFile;
import wyjs.core.JavaScriptFile;
import wyjs.tasks.JavaScriptCompileTask;

public class JsCompile extends Compile {

	/**
	 * The location in which class generated js files are stored, or null if not
	 * specified.
	 */
	protected DirectoryRoot javascriptdir;

	/**
	 * Construct a new instance of this command.
	 *
	 * @param registry
	 *            The content registry being used to match files to content
	 *            types.
	 * @throws IOException
	 */
	public JsCompile(Content.Registry registry, Logger logger) {
		super(registry, logger);
	}

	/**
	 * Construct a new instance of this command.
	 *
	 * @param registry
	 *            The content registry being used to match files to content
	 *            types.
	 * @throws IOException
	 */
	public JsCompile(Content.Registry registry, Logger logger, OutputStream sysout, OutputStream syserr) {
		super(registry, logger, sysout, syserr);
	}


	@Override
	public String getName() {
		return "jscompile";
	}

	@Override
	public String getDescription() {
		return "Compile Whiley source files to JavaScript source files [EXPERIMENTAL]";
	}

	private static final String[] SCHEMA = {
			"jsdir"
	};

	@Override
	public String[] getOptions() {
		return ArrayUtils.append(super.getOptions(),SCHEMA);
	}

	@Override
	public void set(String option, Object value) throws ConfigurationError {
		try {
			switch(option) {
			case "jsdir":
				setJavascriptdir(new File((String)value));
				break;
			default:
				super.set(option, value);
			}
		} catch(IOException e) {
			throw new ConfigurationError(e);
		}
	}

	@Override
	public String describe(String option) {
		switch(option) {
		case "jsdir":
			return "Specify where to place generated javascript files";
		default:
			return super.describe(option);
		}
	}

	public void setJavascriptdir(File dir) throws IOException {
		this.javascriptdir = new DirectoryRoot(dir,registry);
	}

	@Override
	protected void finaliseConfiguration() throws IOException {
		super.finaliseConfiguration();
		this.javascriptdir = getDirectoryRoot(javascriptdir,wyildir);
	}

	@Override
	protected Result compile(StdProject project, List<? extends Path.Entry<?>> entries) {
		try {
			Result r = super.compile(project, entries);
			javascriptdir.flush();
			return r;
		} catch (IOException e) {
			// now what?
			throw new RuntimeException(e);
		}
	}

	/**
	 * Add build rules necessary for compiling whiley source files into binary
	 * wyil files.
	 *
	 * @param project
	 */
	@Override
	protected void addCompilationBuildRules(StdProject project) {
		super.addCompilationBuildRules(project);
		addWyil2JavaScriptBuildRule(project);
	}

	protected void addWyil2JavaScriptBuildRule(StdProject project) {
		// Configure build rules for normal compilation
		Content.Filter<WhileyFile> wyilIncludes = Content.filter("**", WyilFile.ContentType);
		Content.Filter<WhileyFile> wyilExcludes = null;
		// Rule for compiling Whiley to WyIL
		JavaScriptCompileTask jsBuilder = new JavaScriptCompileTask(project);
		if(verbose) {
			jsBuilder.setLogger(logger);
		}
		project.add(new StdBuildRule(jsBuilder, wyildir, wyilIncludes, wyilExcludes, javascriptdir));
	}

	@Override
	public List<? extends Path.Entry<?>> getModifiedSourceFiles() throws IOException {
		return getModifiedSourceFiles(wyildir, wyilIncludes, javascriptdir, JavaScriptFile.ContentType);
	}
}
