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
import wybs.lang.Build.Task;
import wyc.lang.WhileyFile;
import wycc.lang.Module;
import wycc.util.Logger;
import wyfs.lang.Content;
import wyfs.lang.Path;
import wyfs.lang.Content.Type;
import wyfs.util.Trie;
import wyjs.core.JavaScriptFile;
import wyjs.tasks.JavaScriptCompileTask;

public class Activator implements Module.Activator {

	// =======================================================================
	// Build Platform
	// =======================================================================

	private static Build.Platform JS_PLATFORM = new Build.Platform() {

		@Override
		public String getName() {
			return "js";
		}

		@Override
		public Task initialise(Build.Project project) {
			return new JavaScriptCompileTask(project);
		}

		@Override
		public Type<?> getSourceType() {
			return WhileyFile.BinaryContentType;
		}

		@Override
		public Type<?> getTargetType() {
			return JavaScriptFile.ContentType;
		}

		@Override
		public Content.Filter<?> getSourceFilter() {
			return Content.filter("**", WhileyFile.BinaryContentType);
		}

		@Override
		public Content.Filter<?> getTargetFilter() {
			return Content.filter("**", JavaScriptFile.ContentType);
		}

		@Override
		public Path.Root getSourceRoot(Path.Root root) throws IOException {
			return root.createRelativeRoot(Trie.fromString("bin"));
		}

		@Override
		public Path.Root getTargetRoot(Path.Root root) throws IOException {
			return root.createRelativeRoot(Trie.fromString("bin/js"));
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
