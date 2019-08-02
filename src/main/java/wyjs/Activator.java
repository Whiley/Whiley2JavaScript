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
import wyjs.tasks.JavaScriptCompileTask;

public class Activator implements Module.Activator {

	private static Trie PKGNAME_CONFIG_OPTION = Trie.fromString("package/name");
	private static Trie DEBUG_CONFIG_OPTION = Trie.fromString("build/js/debug");
	private static Trie TARGET_CONFIG_OPTION = Trie.fromString("build/js/target");
	private static Trie SOURCE_CONFIG_OPTION = Trie.fromString("build/whiley/target");
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
					Configuration.UNBOUND_STRING(TARGET_CONFIG_OPTION, "Specify location for generated JavaScript files", TARGET_DEFAULT));
		}

		@Override
		public void initialise(Configuration configuration, Build.Project project) throws IOException {
			Trie pkg = Trie.fromString(configuration.get(Value.UTF8.class, PKGNAME_CONFIG_OPTION).unwrap());
			// Specify directory where generated JS files are dumped.
			Trie source = Trie.fromString(configuration.get(Value.UTF8.class, SOURCE_CONFIG_OPTION).unwrap());
			// Specify directory where generated JS files are dumped.
			Trie target= Trie.fromString(configuration.get(Value.UTF8.class, TARGET_CONFIG_OPTION).unwrap());
			// Specify set of files included
			Content.Filter<WyilFile> includes = Content.filter("**", WyilFile.ContentType);
			// Specify whether debug mode enabled or not.
			boolean debug = configuration.get(Value.Bool.class, DEBUG_CONFIG_OPTION).get();;
			// Construct the source root
			Path.Root sourceRoot = project.getRoot().createRelativeRoot(source);
			// Construct the binary root
			Path.Root binaryRoot = project.getRoot().createRelativeRoot(target);
			// Initialise the target file being built
			Path.Entry<JavaScriptFile> binary = initialiseBinaryTarget(binaryRoot,pkg);
			// Add build rule to project.
			project.getRules().add(new AbstractBuildRule<WyilFile, JavaScriptFile>(sourceRoot, includes, null) {

				@Override
				protected void apply(List<Entry<WyilFile>> matches, Collection<Task> tasks) throws IOException {
					JavaScriptCompileTask task = new JavaScriptCompileTask(project,binary,matches.get(0));
					task.setDebug(debug);
					tasks.add(task);
				}

			});
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

		private Path.Entry<JavaScriptFile> initialiseBinaryTarget(Path.Root binroot, Path.ID id) throws IOException {
			if (binroot.exists(id, JavaScriptFile.ContentType)) {
				// Yes, it does so reuse it.
				return binroot.get(id, JavaScriptFile.ContentType);
			} else {
				// No, it doesn't so create and initialise it
				Path.Entry<JavaScriptFile> target = binroot.create(id, JavaScriptFile.ContentType);
				// Initialise with empty javascript file
				JavaScriptFile jsf = new JavaScriptFile();
				// Write
				target.write(jsf);
				// Done
				return target;
			}
		}
	};

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
