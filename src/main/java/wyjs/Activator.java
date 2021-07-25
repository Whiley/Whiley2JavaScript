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
import java.util.List;

import wycc.lang.Build;
import wycc.lang.Filter;
import wycc.util.AbstractCompilationUnit.Value;
import wycli.cfg.Configuration;
import wycli.lang.Command;
import wycli.lang.Package;
import wycli.lang.Plugin;
import wyil.lang.WyilFile;
import wycc.lang.Content;
import wycc.lang.Path;
import static wyc.Activator.PACKAGE_NAME;
import static wyc.Activator.BUILD_WHILEY_TARGET;
import wyjs.core.JavaScriptFile;
import wyjs.tasks.JavaScriptCompileTask;

public class Activator implements Plugin.Activator {

	private static Path BUILD_JS_TARGET = Path.fromString("build/js/target");
	private static Path BUILD_JS_INCLUDES = Path.fromString("build/js/includes");
	private static Path BUILD_JS_STANDARD = Path.fromString("build/js/standard");
	private static Path BUILD_JS_STRICTMODE = Path.fromString("build/js/strictmode");
	private static Value.Array INCLUDES_DEFAULT = new Value.Array();
	private static Value.UTF8 STANDARD_DEFAULT = new Value.UTF8(JavaScriptFile.Standard.ES6.toString());
	private static Value.Bool STRICTMODE_DEFAULT = new Value.Bool(true);
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
					Configuration.UNBOUND_STRING_ARRAY(BUILD_JS_INCLUDES, "Files to include in package",
							INCLUDES_DEFAULT),
					Configuration.UNBOUND_STRING(BUILD_JS_TARGET, "Specify location for generated JavaScript files",
							TARGET_DEFAULT),
					Configuration.UNBOUND_STRING(BUILD_JS_STANDARD,
							"Specify JavaScript standard to target (e.g.\"ES5\",\"ES6\",\"ES6_BIGINT\")",
							STANDARD_DEFAULT),
					Configuration.UNBOUND_BOOLEAN(BUILD_JS_STRICTMODE,
							"Specify whether or not employ JavaScript strict mode)", STRICTMODE_DEFAULT));
		}

		@Override
		public Build.Task initialise(Path path, Command.Environment environment) throws IOException {
			// Determine local configuration
			Configuration config = environment.get(path);
			Build.Repository repo = environment.getRepository();
			Package.Resolver resolver = environment.getPackageResolver();
			// Extract the package name.
			Path pkg = Path.fromString(config.get(Value.UTF8.class, PACKAGE_NAME).unwrap());
			// Identify source WyilFile
			Path src = Path.fromString(config.get(Value.UTF8.class, BUILD_WHILEY_TARGET).unwrap());
			// Determine target directory
			Path target = Path.fromString(config.get(Value.UTF8.class, BUILD_JS_TARGET).unwrap());
			// Extract strict mode setting
			boolean strict = config.get(Value.Bool.class, BUILD_JS_STRICTMODE).unwrap();
			// Extract and parse target JS standard
			JavaScriptFile.Standard standard = fromStandardString(
					config.get(Value.UTF8.class, BUILD_JS_STANDARD).unwrap());
			// Determine all native JS files to include
			List<JavaScriptFile> jsIncludes = new ArrayList<>();
			List<WyilFile> wyIncludes = new ArrayList<>();
			// Add all JavaScript files based on the given includes filter(s). These are
			// JavaScript files contained within the current package being built.
			Value.Array jsIncludeFilters = config.get(Value.Array.class, BUILD_JS_INCLUDES);
			for (int i = 0; i != jsIncludeFilters.size(); ++i) {
				String ith = ((Value.UTF8) jsIncludeFilters.get(i)).unwrap();
				// FIXME: an interesting question is whether or not it makes sense to read the
				// JavaScript files at this point. In principle, they could be derived files
				// from elsewhere, meaning that deferring the actual reading would be sensible.
				jsIncludes.addAll(repo.getAll(JavaScriptFile.ContentType, Filter.fromString(ith)));
			}
			// Traverse all dependencies and include any JavaScript files that they contain.
			for (Content.Source p : resolver.resolve(config)) {
				// Add all WyilFiles from dependency
				wyIncludes.addAll(p.getAll(WyilFile.ContentType, Filter.EVERYTHING));
				// Add all native JavaScript files from dependency
				jsIncludes.addAll(p.getAll(JavaScriptFile.ContentType, Filter.EVERYTHING));
			}
			// Done
			return new JavaScriptCompileTask(target.append(pkg), src.append(pkg), strict, standard, wyIncludes, jsIncludes);
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
	public Plugin start(Plugin.Context context) {
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
