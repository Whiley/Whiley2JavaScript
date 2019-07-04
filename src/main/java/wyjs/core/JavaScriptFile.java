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
package wyjs.core;

import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import wybs.lang.CompilationUnit;
import wybs.lang.SyntacticItem;
import wybs.util.AbstractCompilationUnit;
import wybs.util.AbstractSyntacticItem;
import wyfs.lang.Content;
import wyfs.lang.Path;

public class JavaScriptFile  {
	// =========================================================================
	// Content Type
	// =========================================================================

	/**
	 * Responsible for identifying and reading/writing WyilFiles. The normal
	 * extension is ".wyil" for WyilFiles.
	 */
	public static final Content.Type<JavaScriptFile> ContentType = new Content.Type<JavaScriptFile>() {
		public Path.Entry<JavaScriptFile> accept(Path.Entry<?> e) {
			if (e.contentType() == this) {
				return (Path.Entry<JavaScriptFile>) e;
			}
			return null;
		}

		@Override
		public JavaScriptFile read(Path.Entry<JavaScriptFile> e, InputStream input) throws IOException {
			// At this stage, parsing java files is strictly off-limits :)
			throw new UnsupportedOperationException();
		}

		@Override
		public void write(OutputStream output, JavaScriptFile jf) throws IOException {
			output.write(jf.bytes);
		}

		@Override
		public String toString() {
			return "Content-Type: java";
		}

		@Override
		public String getSuffix() {
			return "js";
		}
	};

	/**
	 * Raw contents of the JavaScript file. Eventually, this will use a
	 * structured form here to help support different ECMAScript standards, etc.
	 */
	private byte[] bytes;

	public JavaScriptFile(byte[] bytes) {
		this.bytes = bytes;
	}

	public byte[] getBytes() {
		return bytes;
	}

	public void setBytes(byte[] bytes) {
		this.bytes = bytes;
	}

	@Override
	public String toString() {
		return new String(bytes);
	}
}
