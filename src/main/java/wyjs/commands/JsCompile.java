package wyjs.commands;

import java.io.IOException;
import java.io.OutputStream;

import wybs.util.StdBuildRule;
import wybs.util.StdProject;
import wyc.commands.Compile;
import wycc.util.Logger;
import wyfs.lang.Content;
import wyil.lang.WyilFile;
import wyjs.tasks.JavaScriptCompileTask;

public class JsCompile extends Compile {

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
		project.add(new StdBuildRule(jsBuilder, wyildir, wyilIncludes, wyilExcludes, wyildir));
	}
}
