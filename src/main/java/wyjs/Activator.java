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

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import wycc.lang.Build;
import wycc.lang.Build.Task;
import wycc.lang.Filter;
import wycc.util.Logger;
import wycc.util.AbstractCompilationUnit.Value;
import wycli.cfg.Configuration;
import wycli.lang.Command;
import wycli.lang.Plugin;
import wycc.lang.Content;
import wycc.lang.Path;
import wyil.lang.WyilFile;
import wyjs.core.JavaScriptFile;
import wyjs.tasks.JavaScriptCompileTask;

public class Activator implements Plugin.Activator {

	private static Path PKGNAME_CONFIG_OPTION = Path.fromString("package/name");
	private static Path INCLUDES_CONFIG_OPTION = Path.fromString("build/js/includes");
	private static Path DEBUG_CONFIG_OPTION = Path.fromString("build/js/debug");
	private static Path TARGET_CONFIG_OPTION = Path.fromString("build/js/target");
	private static Path SOURCE_CONFIG_OPTION = Path.fromString("build/whiley/target");
	private static Path STANDARD_CONFIG_OPTION = Path.fromString("build/js/standard");
	private static Path STRICTMODE_CONFIG_OPTION = Path.fromString("build/js/strictmode");
	private static Value.Array INCLUDES_DEFAULT = new Value.Array();
	private static Value.UTF8 STANDARD_DEFAULT = new Value.UTF8(JavaScriptFile.Standard.ES6.toString());
	private static Value.Bool STRICTMODE_DEFAULT = new Value.Bool(true);
	private static Value.Bool DEBUG_DEFAULT = new Value.Bool(false);
	private static Value.UTF8 TARGET_DEFAULT = new Value.UTF8("bin/js".getBytes());


	// =======================================================================
	// Build Platform
	// =======================================================================

	public static Command.Platform JS_PLATFORM = new Command.Platform() {

		@Override
		public String getName() {
			return "js";
		}

		@Override
		public Configuration.Schema getConfigurationSchema() {
			return Configuration.fromArray(
					Configuration.UNBOUND_STRING_ARRAY(INCLUDES_CONFIG_OPTION, "Files to include in package", INCLUDES_DEFAULT),
					Configuration.UNBOUND_BOOLEAN(DEBUG_CONFIG_OPTION, "Set debug mode (default is ON)", DEBUG_DEFAULT),
					Configuration.UNBOUND_STRING(TARGET_CONFIG_OPTION, "Specify location for generated JavaScript files", TARGET_DEFAULT),
					Configuration.UNBOUND_STRING(STANDARD_CONFIG_OPTION,
							"Specify JavaScript standard to target (e.g.\"ES5\",\"ES6\",\"ES6_BIGINT\")",
							STANDARD_DEFAULT),
					Configuration.UNBOUND_BOOLEAN(STRICTMODE_CONFIG_OPTION,
							"Specify whether or not employ JavaScript strict mode)",
							STRICTMODE_DEFAULT));
		}

		@Override
		public Build.Task initialise(Path path, Command.Environment environment) throws IOException {
			Configuration configuration = environment.get(path);
			Path pkgName = Path.fromString(configuration.get(Value.UTF8.class, PKGNAME_CONFIG_OPTION).unwrap());
			// Specify directory where generated JS files are dumped.
			Path source = Path.fromString(configuration.get(Value.UTF8.class, SOURCE_CONFIG_OPTION).unwrap());
			// Extract any additional included (i.e. native) files
			List<JavaScriptFile> includes = extractJavaScriptIncludes(project.getRoot(),
					configuration.get(Value.Array.class, INCLUDES_CONFIG_OPTION).toArray(Value.UTF8.class));
			// Construct the source root
			FileSystem.Root sourceRoot = project.getRoot().createRelativeRoot(source);
			// Register build target for this package
			registerBuildTarget(configuration,project,sourceRoot,pkgName, includes);
			// Add build rules for any project dependencies
//			for(Content.Source dep : environment.getPackages()) {
//				//depConfiguration
//				// Determine package name
//				Path depName = Path.fromString(dep.get(Value.UTF8.class, PKGNAME_CONFIG_OPTION).unwrap());
//				// Determine source root
//				FileSystem.Root pkgRoot = dep.getRoot();
//				// Extract package js includes
//				includes = extractJavaScriptIncludes(pkgRoot,
//						dep.get(Value.Array.class, INCLUDES_CONFIG_OPTION).toArray(Value.UTF8.class));
//				// Register corresponding build target
//				registerBuildTarget(configuration, project, pkgRoot, depName, includes);
//			}
			return new JavaScriptCompileTask();
		}

		private void registerBuildTarget(Configuration configuration, Build.Project project, FileSystem.Root sourceRoot,
										 Path pkg, List<FileSystem.Entry<JavaScriptFile>> jsIncludes) throws IOException {
			// Specify directory where generated JS files are dumped.
			Path target= Path.fromString(configuration.get(Value.UTF8.class, TARGET_CONFIG_OPTION).unwrap());
			// Extract target JS standard
			String standard = configuration.get(Value.UTF8.class, STANDARD_CONFIG_OPTION).unwrap();
			// Extract strict mode setting
			boolean strict = configuration.get(Value.Bool.class, STRICTMODE_CONFIG_OPTION).unwrap();
			// Specify set of files included
			Content.Filter<WyilFile> wyilIncludes = Content.filter("**", WyilFile.ContentType);
			// Specify whether debug mode enabled or not.
			boolean debug = configuration.get(Value.Bool.class, DEBUG_CONFIG_OPTION).get();;
			// Construct the binary root
			FileSystem.Root binaryRoot = project.getRoot().createRelativeRoot(target);
			// Initialise the target file being built
			FileSystem.Entry<JavaScriptFile> binary = initialiseBinaryTarget(binaryRoot, pkg, strict, standard);
			//
			project.getRules().add(new AbstractBuildRule<WyilFile, JavaScriptFile>(sourceRoot, wyilIncludes, null) {

				@Override
				protected void apply(List<Entry<WyilFile>> matches, Collection<Task> tasks) throws IOException {
					// FIXME: this looks like a bug when we have multiple matches
					JavaScriptCompileTask task = new JavaScriptCompileTask(project, binary, matches.get(0));
					task.setDebug(debug);
					task.setIncludes(jsIncludes);
					tasks.add(task);
				}

			});
		}

		private FileSystem.Entry<JavaScriptFile> initialiseBinaryTarget(FileSystem.Root binroot, FileSystem.ID id, boolean strictMode,
                                                                        String stdString) throws IOException {
			JavaScriptFile.Standard std = fromStandardString(stdString);
			FileSystem.Entry<JavaScriptFile> target;
			if (binroot.exists(id, JavaScriptFile.ContentType)) {
				// Yes, it does so reuse it.
				target = binroot.get(id, JavaScriptFile.ContentType);
			} else {
				// No, it doesn't so create and initialise it
				target = binroot.create(id, JavaScriptFile.ContentType);
			}
			// Initialise with empty JavaScript file
			JavaScriptFile jsf = new JavaScriptFile(strictMode, std);
			// Write
			target.write(jsf);
			// Done
			return target;
		}
	};

	private static List<FileSystem.Entry<JavaScriptFile>> extractJavaScriptIncludes(FileSystem.Root root, Value.UTF8... items) throws IOException {
		ArrayList<FileSystem.Entry<JavaScriptFile>> files = new ArrayList<>();
		for(int i=0;i!=items.length;++i) {
			String item = items[i].toString();
			// Strip JavaScript suffix
			if(item.endsWith(".js")) {
				Path filter = Path.fromString(item.replaceAll(".js",""));
				files.addAll(root.get(Content.filter(filter, JavaScriptFile.ContentType)));
			}
		}
		return files;
	}

	private static JavaScriptFile.Standard fromStandardString(String str) {
		for (JavaScriptFile.Standard std : JavaScriptFile.Standard.values()) {
			if (str.equals(std.toString())) {
				return std;
			}
		}
		throw new IllegalArgumentException("invalid JavaScript standard string \"" + str + "\"");
	}

	// =======================================================================
	// Start
	// =======================================================================

	@Override
	public Plugin start(Plugin.Context context) {
		// FIXME: logger is a hack!
		final Logger logger = new Logger.Default(System.err);
		// Register build platform
		context.register(Command.Platform.class, JS_PLATFORM);
		// Register JavaScript Content Type
		context.register(Content.Type.class, JavaScriptFile.ContentType);
		// Done
		return new Plugin() {
			// what goes here?
		};
	}

	// =======================================================================
	// Stop
	// =======================================================================

	@Override
	public void stop(Plugin module, Plugin.Context context) {
		// could do more here?
	}
}
