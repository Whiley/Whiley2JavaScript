package wyjs.core;

import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import wybs.lang.CompilationUnit;
import wybs.util.AbstractCompilationUnit;
import wyfs.lang.Content;
import wyfs.lang.Path;

public class JavaScriptFile extends AbstractCompilationUnit {
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

	public JavaScriptFile(Path.Entry<? extends CompilationUnit> entry, byte[] bytes) {
		super(entry);
		this.bytes = bytes;
	}
}
