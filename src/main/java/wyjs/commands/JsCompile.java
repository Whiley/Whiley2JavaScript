package wyjs.commands;

import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;

import wybs.util.StdBuildRule;
import wybs.util.StdProject;
import wyc.commands.Compile;
import wyc.commands.Compile.Result;
import wyc.lang.WhileyFile;
import wycc.util.Logger;
import wyfs.lang.Content;
import wyfs.lang.Path;
import wyfs.util.DirectoryRoot;
import wyil.lang.WyilFile;
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
		return "Compile Whiley source files to JavaScript source files";
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
	protected Result compile(StdProject project, List<Path.Entry<WhileyFile>> entries) {
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
		Content.Filter<WyilFile> wyilIncludes = Content.filter("**", WyilFile.ContentType);
		Content.Filter<WyilFile> wyilExcludes = null;
		// Rule for compiling Whiley to WyIL
		JavaScriptCompileTask jsBuilder = new JavaScriptCompileTask(project);
		if(verbose) {
			jsBuilder.setLogger(logger);
		}
		project.add(new StdBuildRule(jsBuilder, wyildir, wyilIncludes, wyilExcludes, javascriptdir));
	}
}
