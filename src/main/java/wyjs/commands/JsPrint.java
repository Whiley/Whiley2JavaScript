package wyjs.commands;

import java.io.FileInputStream;
import java.util.ArrayList;

import wybs.util.StdProject;
import wyc.Activator;
import wycc.lang.Command;
import wycc.util.Logger;
import wyfs.lang.Content;
import wyfs.lang.Path;
import wyfs.util.VirtualRoot;
import wyil.io.WyilFileReader;
import wyil.lang.WyilFile;
import wyjs.io.JavaScriptFileWriter;

public class JsPrint implements Command<String> {

	public JsPrint(Content.Registry registry, Logger logger) {

	}

	@Override
	public String[] getOptions() {
		return new String[0];
	}

	@Override
	public String describe(String name) {
		return "A description";
	}

	@Override
	public void set(String name, Object value) throws ConfigurationError {
		// TODO Auto-generated method stub

	}

	@Override
	public Object get(String name) {
		return null;
	}

	@Override
	public String getName() {
		return "jsprint";
	}

	@Override
	public String getDescription() {
		return "Translate a wyil file into JavaScript";
	}

	@Override
	public String execute(String... args) {
		try {
			Content.Registry registry = new Activator.Registry();
			VirtualRoot root = new VirtualRoot(registry);
			ArrayList<Path.Root> roots = new ArrayList<>();
			roots.add(root);
			StdProject project = new StdProject(roots);
			for (String arg : args) {
				WyilFileReader reader = new WyilFileReader(new FileInputStream(arg));
				WyilFile f = reader.read();
				new JavaScriptFileWriter(project,System.out).apply(f);
			}
			return "OK";
		} catch (RuntimeException e) {
			throw e;
		} catch (Exception e) {
			// FIXME: this is a problem because it is swallowing exceptions!!
			return "ERROR";
		}
	}
}
