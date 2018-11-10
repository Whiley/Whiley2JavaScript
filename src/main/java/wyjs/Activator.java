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

import wybs.lang.Build;
import wybs.lang.Build.Project;
import wybs.lang.Build.Task;
import wybs.util.AbstractCompilationUnit.Value;
import wyc.lang.WhileyFile;
import wycc.cfg.Configuration;
import wycc.lang.Module;
import wycc.util.Logger;
import wyfs.lang.Content;
import wyfs.lang.Path;
import wyfs.lang.Path.ID;
import wyfs.lang.Content.Type;
import wyfs.util.Trie;
import wyil.lang.WyilFile;
import wyjs.core.JavaScriptFile;
import wyjs.tasks.JavaScriptCompileTask;

public class Activator implements Module.Activator {

	private static Trie DEBUG_CONFIG_OPTION = Trie.fromString("build/js/debug");
	private static Trie TARGET_CONFIG_OPTION = Trie.fromString("build/js/target");
	private static Trie SOURCE_CONFIG_OPTION = Trie.fromString("build/whiley/target");

	// =======================================================================
	// Build Platform
	// =======================================================================

	private static Build.Platform JS_PLATFORM = new Build.Platform() {
		// Specify directory where generated JS files are dumped.
		private Trie source = Trie.fromString("bin");
		// Specify directory where generated JS files are dumped.
		private Trie target = Trie.fromString("bin/js");
		// Specify whether debug mode enabled or not.
		private boolean debug = true;

		@Override
		public String getName() {
			return "js";
		}

		@Override
		public Configuration.Schema getConfigurationSchema() {
			return Configuration.fromArray(
					Configuration.UNBOUND_BOOLEAN(DEBUG_CONFIG_OPTION, "Set debug mode (default is ON)", false),
					Configuration.UNBOUND_STRING(TARGET_CONFIG_OPTION, "Specify location for generated JavaScript files", false));
		}

		@Override
		public void apply(Configuration configuration) {
			//
			if(!configuration.matchAll(DEBUG_CONFIG_OPTION).isEmpty()) {
				debug = configuration.get(Value.Bool.class, Trie.fromString(DEBUG_CONFIG_OPTION)).get();
			}
			if(!configuration.matchAll(TARGET_CONFIG_OPTION).isEmpty()) {
				String path = configuration.get(Value.UTF8.class, Trie.fromString(TARGET_CONFIG_OPTION)).unwrap();
				target = Trie.fromString(path);
			}
			if(!configuration.matchAll(SOURCE_CONFIG_OPTION).isEmpty()) {
				String path = configuration.get(Value.UTF8.class, Trie.fromString(SOURCE_CONFIG_OPTION)).unwrap();
				source = Trie.fromString(path);
			}
		}

		@Override
		public Task initialise(Build.Project project) {
			JavaScriptCompileTask task = new JavaScriptCompileTask(project);
			task.setDebug(debug);
			return task;
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
		public Content.Filter<?> getSourceFilter() {
			return Content.filter("**", WyilFile.ContentType);
		}

		@Override
		public Content.Filter<?> getTargetFilter() {
			return Content.filter("**", JavaScriptFile.ContentType);
		}

		@Override
		public Path.Root getSourceRoot(Path.Root root) throws IOException {
			return root.createRelativeRoot(source);
		}

		@Override
		public Path.Root getTargetRoot(Path.Root root) throws IOException {
			return root.createRelativeRoot(target);
		}

		@Override
		public void execute(Project project, ID path, String name, Value... args) {
			throw new IllegalArgumentException("native JavaScript execution currently unsupported");
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
