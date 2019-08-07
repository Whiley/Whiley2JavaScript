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
import java.util.Collection;
import java.util.List;

import wybs.lang.Build;
import wybs.lang.Build.Project;
import wybs.lang.Build.Task;
import wybs.util.AbstractBuildRule;
import wybs.util.AbstractCompilationUnit.Value;
import wycc.cfg.Configuration;
import wycc.lang.Module;
import wycc.util.Logger;
import wyfs.lang.Content;
import wyfs.lang.Content.Type;
import wyfs.lang.Path;
import wyfs.lang.Path.Entry;
import wyfs.lang.Path.ID;
import wyfs.util.Trie;
import wyil.lang.WyilFile;
import wyjs.core.JavaScriptFile;
import wyjs.io.JavaScriptFilePrinter;
import wyjs.tasks.JavaScriptCompileTask;

public class Activator implements Module.Activator {

	private static Trie PKGNAME_CONFIG_OPTION = Trie.fromString("package/name");
	private static Trie DEBUG_CONFIG_OPTION = Trie.fromString("build/js/debug");
	private static Trie TARGET_CONFIG_OPTION = Trie.fromString("build/js/target");
	private static Trie SOURCE_CONFIG_OPTION = Trie.fromString("build/whiley/target");
	private static Trie STANDARD_CONFIG_OPTION = Trie.fromString("build/js/standard");
	private static Trie STRICTMODE_CONFIG_OPTION = Trie.fromString("build/js/strictmode");
	private static Value.UTF8 STANDARD_DEFAULT = new Value.UTF8(JavaScriptFile.Standard.ES6.toString());
	private static Value.Bool STRICTMODE_DEFAULT = new Value.Bool(true);
	private static Value.Bool DEBUG_DEFAULT = new Value.Bool(false);
	private static Value.UTF8 TARGET_DEFAULT = new Value.UTF8("bin/js".getBytes());


	// =======================================================================
	// Build Platform
	// =======================================================================

	public static Build.Platform JS_PLATFORM = new Build.Platform() {

		@Override
		public String getName() {
			return "js";
		}

		@Override
		public Configuration.Schema getConfigurationSchema() {
			return Configuration.fromArray(
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
		public void initialise(Configuration configuration, Build.Project project) throws IOException {
			Trie pkgName = Trie.fromString(configuration.get(Value.UTF8.class, PKGNAME_CONFIG_OPTION).unwrap());
			// Specify directory where generated JS files are dumped.
			Trie source = Trie.fromString(configuration.get(Value.UTF8.class, SOURCE_CONFIG_OPTION).unwrap());
			// Construct the source root
			Path.Root sourceRoot = project.getRoot().createRelativeRoot(source);
			// Register build target for this package
			registerBuildTarget(configuration,project,sourceRoot,pkgName);
			// Add build rules for any project dependencies
			for(Build.Package dep : project.getPackages()) {
				// Determine package name
				Trie depName = Trie.fromString(dep.getConfiguration().get(Value.UTF8.class, PKGNAME_CONFIG_OPTION).unwrap());
				// Determine source root
				Path.Root pkgRoot = dep.getRoot();
				// Register corresponding build target
				registerBuildTarget(configuration,project,pkgRoot,depName);
			}
		}

		@Override
		public Type<?> getSourceType() {
			return WyilFile.ContentType;
		}

		@Override
		public Type<?> getTargetType() {
			return JavaScriptFile.ContentType;
		}

		@Override
		public void execute(Project project, ID path, String name, Value... args) {
			throw new IllegalArgumentException("native JavaScript execution currently unsupported");
		}

		private void registerBuildTarget(Configuration configuration, Build.Project project, Path.Root sourceRoot,
				Trie pkg) throws IOException {
			// Specify directory where generated JS files are dumped.
			Trie target= Trie.fromString(configuration.get(Value.UTF8.class, TARGET_CONFIG_OPTION).unwrap());
			// Extract target JS standard
			String standard = configuration.get(Value.UTF8.class, STANDARD_CONFIG_OPTION).unwrap();
			// Extract strict mode setting
			boolean strict = configuration.get(Value.Bool.class, STRICTMODE_CONFIG_OPTION).unwrap();
			// Specify set of files included
			Content.Filter<WyilFile> includes = Content.filter("**", WyilFile.ContentType);
			// Specify whether debug mode enabled or not.
			boolean debug = configuration.get(Value.Bool.class, DEBUG_CONFIG_OPTION).get();;
			// Construct the binary root
			Path.Root binaryRoot = project.getRoot().createRelativeRoot(target);
			// Initialise the target file being built
			Path.Entry<JavaScriptFile> binary = initialiseBinaryTarget(binaryRoot, pkg, strict, standard);
			//
			project.getRules().add(new AbstractBuildRule<WyilFile, JavaScriptFile>(sourceRoot, includes, null) {

				@Override
				protected void apply(List<Entry<WyilFile>> matches, Collection<Task> tasks) throws IOException {
					// FIXME: this looks like a bug when we have multiple matches
					JavaScriptCompileTask task = new JavaScriptCompileTask(project,binary,matches.get(0));
					task.setDebug(debug);
					tasks.add(task);
				}

			});
		}

		private Path.Entry<JavaScriptFile> initialiseBinaryTarget(Path.Root binroot, Path.ID id, boolean strictMode,
				String stdString) throws IOException {
			JavaScriptFile.Standard std = fromStandardString(stdString);
			Path.Entry<JavaScriptFile> target;
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
	public Module start(Module.Context context) {
		// FIXME: logger is a hack!
		final Logger logger = new Logger.Default(System.err);
		// Register build platform
		context.register(Build.Platform.class, JS_PLATFORM);
		// Register JavaScript Content Type
		context.register(Content.Type.class, JavaScriptFile.ContentType);
		// Done
		return new Module() {
			// what goes here?
		};
	}

	// =======================================================================
	// Stop
	// =======================================================================

	@Override
	public void stop(Module module, Module.Context context) {
		// could do more here?
	}
}
