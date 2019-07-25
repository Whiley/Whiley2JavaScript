package wyjs.tasks;
import static wybs.util.AbstractCompilationUnit.ITEM_bool;
import static wybs.util.AbstractCompilationUnit.ITEM_byte;
import static wybs.util.AbstractCompilationUnit.ITEM_int;
import static wybs.util.AbstractCompilationUnit.ITEM_null;
import static wybs.util.AbstractCompilationUnit.ITEM_utf8;
import static wyil.lang.WyilFile.EXPR_arrayaccess;
import static wyil.lang.WyilFile.EXPR_arrayborrow;
import static wyil.lang.WyilFile.EXPR_dereference;
import static wyil.lang.WyilFile.EXPR_recordaccess;
import static wyil.lang.WyilFile.EXPR_recordborrow;
import static wyil.lang.WyilFile.EXPR_variablecopy;
import static wyil.lang.WyilFile.EXPR_variablemove;
import static wyil.lang.WyilFile.TYPE_array;
import static wyil.lang.WyilFile.TYPE_bool;
import static wyil.lang.WyilFile.TYPE_byte;
import static wyil.lang.WyilFile.TYPE_int;
import static wyil.lang.WyilFile.TYPE_nominal;
import static wyil.lang.WyilFile.TYPE_null;
import static wyil.lang.WyilFile.TYPE_record;
import static wyil.lang.WyilFile.TYPE_union;
import static wyjs.core.JavaScriptFile.and;
import static wyjs.core.JavaScriptFile.not;
import static wyjs.core.JavaScriptFile.or;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import wybs.util.AbstractCompilationUnit.Identifier;
import wybs.util.AbstractCompilationUnit.Tuple;
import wybs.util.AbstractCompilationUnit.Value;
import wycc.util.ArrayUtils;
import wycc.util.Pair;
import wyil.lang.WyilFile;
import wyil.lang.WyilFile.Decl;
import wyil.lang.WyilFile.Expr;
import wyil.lang.WyilFile.LVal;
import wyil.lang.WyilFile.Modifier;
import wyil.lang.WyilFile.Stmt;
import wyil.lang.WyilFile.Type;
import wyil.util.AbstractVisitor;
import wyil.util.SubtypeOperator;
import wyil.util.SubtypeOperator.LifetimeRelation;
import wyjs.core.JavaScriptFile;
import wyjs.core.JavaScriptFile.ArrayAccess;
import wyjs.core.JavaScriptFile.ArrayInitialiser;
import wyjs.core.JavaScriptFile.ArrayLength;
import wyjs.core.JavaScriptFile.Assignment;
import wyjs.core.JavaScriptFile.Block;
import wyjs.core.JavaScriptFile.Break;
import wyjs.core.JavaScriptFile.Constant;
import wyjs.core.JavaScriptFile.Continue;
import wyjs.core.JavaScriptFile.Declaration;
import wyjs.core.JavaScriptFile.DoWhile;
import wyjs.core.JavaScriptFile.For;
import wyjs.core.JavaScriptFile.IfElse;
import wyjs.core.JavaScriptFile.Invoke;
import wyjs.core.JavaScriptFile.Lambda;
import wyjs.core.JavaScriptFile.ObjectLiteral;
import wyjs.core.JavaScriptFile.Operator;
import wyjs.core.JavaScriptFile.Operator.Kind;
import wyjs.core.JavaScriptFile.PropertyAccess;
import wyjs.core.JavaScriptFile.Return;
import wyjs.core.JavaScriptFile.Switch;
import wyjs.core.JavaScriptFile.Term;
import wyjs.core.JavaScriptFile.VariableAccess;
import wyjs.core.JavaScriptFile.VariableDeclaration;
import wyjs.core.JavaScriptFile.While;
import wyjs.core.TypeMangler;
import wyjs.util.AbstractTranslator;
import wyjs.util.StdTypeMangler;


public class JavaScriptCompiler extends AbstractTranslator<Term> {
	/**
	 * Provides a standard mechanism for writing out type mangles.
	 */
	private final static TypeMangler mangler = new StdTypeMangler();

	/**
	 * Provides a standard mechanism for checking whether two Whiley types are
	 * subtypes or not.
	 */
	private final static SubtypeOperator subtyping = new SubtypeOperator.Relaxed();

	private final static SubtypeOperator strictSubtyping = new SubtypeOperator.Strict();

	/**
	 * Represents the JavaScriptFile which is being written to.
	 */
	private final JavaScriptFile jsFile;

	/**
	 * Used to determine what runtime type tests are required.
	 */
	private final HashSet<Pair<Type,Type>> runtimeTypeTests = new HashSet<>();

	/**
	 * Provides numbering for temporary variables to ensure uniqueness.
	 */
	private int temporaryIndex = 0;

	public JavaScriptCompiler(JavaScriptFile jsFile) {
		super(subtyping);
		this.jsFile = jsFile;
	}

	public void visitModule(WyilFile wf) {
		// Translate local units
		for (Decl.Unit unit : wf.getModule().getUnits()) {
			for(Decl decl : unit.getDeclarations()) {
				Declaration d = (Declaration) visitDeclaration(decl);
				if(d != null) {
					jsFile.getDeclarations().add(d);
				}
			}
		}
		// Translate all type tests
		translateTypeTests(runtimeTypeTests);
		// Release memory
		runtimeTypeTests.clear();
	}

	// ====================================================================================
	// Declarations
	// ====================================================================================

	@Override
	public Term constructImport(Decl.Import d) {
		// NOTE: it's unclear what we can or should do here.
		return null;
	}

	@Override
	public Term constructType(Decl.Type d, List<Term> clauses) {
		// NOTE: an interesting question is whether we need to always generate this
		// method, especially in cases where there is no invariant.
		String name = toMangledName(d);
		String param = d.getVariableDeclaration().getName().toString();
		// Construct body from translated clauses
		Term body;
		if(clauses.isEmpty()) {
			return null;
		} else {
			body = new Return(and(clauses));
		}
		// Done
		return new JavaScriptFile.Method(name,Arrays.asList(param),new Block(body));
	}

	@Override
	public Term constructVariable(Decl.Variable decl, Term initialiser) {
		String name = decl.getName().toString();
		// TODO: ES6 supports let modifier
		if (decl.hasInitialiser()) {
			return new JavaScriptFile.VariableDeclaration(name,initialiser);
		} else {
			return new JavaScriptFile.VariableDeclaration(name);
		}
	}

	@Override
	public Term constructStaticVariable(Decl.StaticVariable decl, Term initialiser) {
		// Determine qualified name
		String name = toMangledName(decl);
		// TODO: ES6 supports const modifier
		if (decl.hasInitialiser()) {
			return new JavaScriptFile.VariableDeclaration(name,initialiser);
		} else {
			return new JavaScriptFile.VariableDeclaration(name);
		}
	}

	@Override
	public Term constructProperty(Decl.Property decl, List<Term> clauses) {
		// Determine qualified name
		String name = toMangledName(decl);
		// Translate parameters
		List<String> parameters = toParameterNames(decl.getParameters());
		// Construct body from translated clauses
		Term body = new Return(and(clauses));
		// Done
		return new JavaScriptFile.Method(name, parameters, new Block(body));
	}

	@Override
	public Term constructFunction(Decl.Function decl, List<Term> precondition, List<Term> postcondition, Term body) {
		// Determine qualified name
		String name = toMangledName(decl);
		// Translate parameters
		List<String> parameters = toParameterNames(decl.getParameters());
		// Done
		return new JavaScriptFile.Method(name, parameters, (Block) body);
	}

	@Override
	public Term constructMethod(Decl.Method decl, List<Term> precondition, List<Term> postcondition, Term body) {
		// Determine qualified name
		String name = toMangledName(decl);
		// Translate parameters
		List<String> parameters = toParameterNames(decl.getParameters());
		// Done
		return new JavaScriptFile.Method(name, parameters, (Block) body);
	}

	@Override
	public Term constructLambda(Decl.Lambda decl, Term term) {
		List<String> parameters = toParameterNames(decl.getParameters());
		// Construct body
		Term body = new Return(term);
		//
		return new Lambda(parameters,new Block(body));
	}

	// ====================================================================================
	// Statements
	// ====================================================================================

	@Override
	public Term constructAssert(Stmt.Assert stmt, Term condition) {
		return WY_ASSERT(condition);
	}

	@Override
	public Term constructAssign(Stmt.Assign stmt, List<Term> lhs, List<Term> rhs) {
		//
		// FIXME: es6 supports destructuring assignment which could be used here.
		//
		if(lhs.size() == 1) {
			// Easy case
			return new JavaScriptFile.Assignment(lhs.get(0), rhs.get(0));
		} else if(isSimpleAssignment(stmt)) {
			// NOTE: what we know here is that there is no interference between the left and
			// right-hand sides. Also, that we have no multi-assignment
			ArrayList<Term> stmts = new ArrayList<>();
			for(int i=0;i!=lhs.size();++i) {
				stmts.add(new JavaScriptFile.Assignment(lhs.get(i), rhs.get(i)));
			}
			return new Block(stmts);
		} else {
			// Harder case as have to workaround interference.
			Tuple<Expr> exprs = stmt.getRightHandSide();
			ArrayList<Term> first = new ArrayList<>();
			ArrayList<Term> second = new ArrayList<>();
			//
			for(int i=0,j=0;i!=exprs.size();++i) {
				Expr e = exprs.get(i);
				Tuple<Type> types = e.getTypes();
				// Translate right-hand side
				VariableAccess tmp = new VariableAccess("$" + (temporaryIndex++));
				first.add(new VariableDeclaration(tmp.getName(), rhs.get(i)));
				// Translate left-hand side
				if(types == null) {
					// Unit assignment
					second.add(new JavaScriptFile.Assignment(lhs.get(j++), tmp));
				} else {
					// Multi-assignment
					for(int k=0;k!=types.size();++k) {
						Term t = new ArrayAccess(tmp,new Constant(k));
						second.add(new JavaScriptFile.Assignment(lhs.get(j++), t));
					}
				}
			}
			// Build
			first.addAll(second);
			return new Block(first);
		}
	}

	@Override
	public Term constructAssume(Stmt.Assume stmt, Term condition) {
		return WY_ASSERT(condition);
	}

	@Override
	public Term constructBlock(Stmt.Block s, List<Term> stmts) {
		return new Block(stmts);
	}


	@Override
	public Term constructBreak(Stmt.Break stmt) {
		return new Break();
	}

	@Override
	public Term constructContinue(Stmt.Continue stmt) {
		return new Continue();
	}

	@Override
	public Term constructDebug(Stmt.Debug stmt, Term operand) {
		return null;
	}

	@Override
	public Term constructDoWhile(Stmt.DoWhile stmt, Term body, Term condition, List<Term> invariant) {
		// FIXME: support loop invariant
		return new DoWhile((Block) body,condition);
	}

	@Override
	public Term constructFail(Stmt.Fail stmt) {
		return WY_ASSERT(Constant.FALSE);
	}

	@Override
	public Term constructIfElse(Stmt.IfElse stmt, Term condition, Term trueBranch, Term falseBranch) {
		ArrayList<IfElse.Case> cases = new ArrayList<>();
		// Translate true branch
		cases.add(new IfElse.Case(condition, (Block) trueBranch));
		// Translate false branch (if applicable)
		if (stmt.hasFalseBranch()) {
			cases.add(new IfElse.Case(null, (Block) falseBranch));
		}
		return new JavaScriptFile.IfElse(cases);
	}

	@Override
	public Term constructNamedBlock(Stmt.NamedBlock stmt, List<Term> stmts) {
		return new Block(stmts);
	}

	@Override
	public Term constructReturn(Stmt.Return stmt, List<Term> returns) {
		Term rval;
		if(returns.size() == 0) {
			rval = null;
		} else if (returns.size() == 1) {
			// Easy case
			rval = returns.get(0);
		} else {
			//
			if (allUnitExpressions(stmt.getReturns())) {
				// Easier as direct mapping between expressions.
				rval = new JavaScriptFile.ArrayInitialiser(returns);
			} else {
				// FIXME: implement multiple expressions!!
				throw new UnsupportedOperationException();
			}
		}
		//
		return new Return(rval);
	}

	@Override
	public Term constructSkip(Stmt.Skip stmt) {
		// There is no skip statement in JavaScript!
		return new Block();
	}

	@Override
	public Term constructSwitch(Stmt.Switch stmt, Term condition, List<Pair<List<Term>,Term>> cases) {
		// NOTE: switches are challenging because we cannot necessarily translate a
		// Whiley switch directly as a JavaScript switch. This is because switches in
		// Whiley are valid for any datatype, whilst in JavaScript they are only valid
		// for integer types. Therefore, we must first identify which case we are in,
		// then handle them separately.
		boolean simple = subtyping.isSubtype(Type.Int,stmt.getCondition().getType(), EMPTY_LIFETIMES);
		//
		if(!simple) {
			// hard case
			return translateSwitchAsIfElse(stmt, condition, cases);
		} else {
			return translateSwitchAsSwitch(stmt, condition, cases);
		}
	}

	@Override
	public Term constructWhile(Stmt.While stmt, Term condition, List<Term> invariant, Term body) {
		// FIXME: support loop invariant
		return new While(condition,(Block) body);
	}

	// ====================================================================================
	// LVal Constructors
	// ====================================================================================

	@Override
	public Term constructArrayAccessLVal(Expr.ArrayAccess expr, Term source, Term index) {
		return new ArrayAccess(source,index);
	}

	@Override
	public Term constructDereferenceLVal(Expr.Dereference expr, Term operand) {
		return new PropertyAccess(operand,"$ref");
	}

	@Override
	public Term constructRecordAccessLVal(Expr.RecordAccess expr, Term source) {
		return new JavaScriptFile.PropertyAccess(source, expr.getField().toString());
	}

	@Override
	public Term constructVariableAccessLVal(Expr.VariableAccess expr) {
		String name = expr.getVariableDeclaration().getName().toString();
		return new JavaScriptFile.VariableAccess(name);
	}

	// ====================================================================================
	// Expression Constructors
	// ====================================================================================

	@Override
	public Term constructArrayAccess(Expr.ArrayAccess expr, Term source, Term index) {
		Term term = new ArrayAccess(source,index);
		if(expr.isMove() || isCopyable(expr.getType())) {
			return term;
		} else {
			return WY_COPY(term);
		}
	}

	@Override
	public Term constructArrayLength(Expr.ArrayLength expr, Term source) {
		return new ArrayLength(source);
	}

	@Override
	public Term constructArrayGenerator(Expr.ArrayGenerator expr, Term value, Term length) {
		return WY_ARRAY(value,length);
	}

	@Override
	public Term constructArrayInitialiser(Expr.ArrayInitialiser expr, List<Term> values) {
		return new ArrayInitialiser(values);
	}

	@Override
	public Term constructBitwiseComplement(Expr.BitwiseComplement expr, Term operand) {
		return MASK_FF(new Operator(Kind.BITWISEINVERT, operand));
	}

	@Override
	public Term constructBitwiseAnd(Expr.BitwiseAnd expr, List<Term> operands) {
		return new JavaScriptFile.Operator(Kind.BITWISEAND, operands);
	}

	@Override
	public Term constructBitwiseOr(Expr.BitwiseOr expr, List<Term> operands) {
		return new JavaScriptFile.Operator(Kind.BITWISEOR, operands);
	}

	@Override
	public Term constructBitwiseXor(Expr.BitwiseXor expr, List<Term> operands) {
		return new JavaScriptFile.Operator(Kind.BITWISEXOR, operands);
	}

	@Override
	public Term constructBitwiseShiftLeft(Expr.BitwiseShiftLeft expr, Term lhs, Term rhs) {
		return new JavaScriptFile.Operator(Kind.LEFTSHIFT, lhs, rhs);
	}

	@Override
	public Term constructBitwiseShiftRight(Expr.BitwiseShiftRight expr, Term lhs, Term rhs) {
		return new JavaScriptFile.Operator(Kind.RIGHTSHIFT, lhs, rhs);
	}

	@Override
	public Term constructCast(Expr.Cast expr, Term operand) {
		// TODO: implement this properly
		return operand;
	}

	@Override
	public Term constructConstant(Expr.Constant expr) {
		Value val = expr.getValue();
		Object c;
		switch (val.getOpcode()) {
		case ITEM_null:
			return Constant.NULL;
		case ITEM_bool: {
			boolean b = ((Value.Bool) val).get();
			return b ? Constant.TRUE : Constant.FALSE;
		}
		case ITEM_byte:
			return new Constant(((Value.Byte) val).get());
		case ITEM_int:
			// FIXME: broken for arbitrary precision integers.
			return new Constant(((Value.Int) val).get().longValue());
		default:
		case ITEM_utf8:
			// NOTE: special case as Whiley strings are int arrays.
			Value.UTF8 utf8 = (Value.UTF8) val;
			byte[] bytes = utf8.get();
			ArrayList<Term> terms = new ArrayList<>();
			for (int i = 0; i != bytes.length; ++i) {
				terms.add(new JavaScriptFile.Constant(bytes[i]));
			}
			return new JavaScriptFile.ArrayInitialiser(terms);
		}
	}

	@Override
	public Term constructDereference(Expr.Dereference expr, Term operand) {
		return new PropertyAccess(operand,"$ref");
	}

	@Override
	public Term constructEqual(Expr.Equal expr, Term lhs, Term rhs) {
		Type lhsT = expr.getFirstOperand().getType();
		Type rhsT = expr.getSecondOperand().getType();
		return translateEquality(true, lhs, lhsT, rhs, rhsT);
	}

	@Override
	public Term constructIntegerLessThan(Expr.IntegerLessThan expr, Term lhs, Term rhs) {
		return new JavaScriptFile.Operator(Kind.LT, lhs, rhs);
	}

	@Override
	public Term constructIntegerLessThanOrEqual(Expr.IntegerLessThanOrEqual expr, Term lhs, Term rhs) {
		return new JavaScriptFile.Operator(Kind.LTEQ, lhs, rhs);
	}

	@Override
	public Term constructIntegerGreaterThan(Expr.IntegerGreaterThan expr, Term lhs, Term rhs) {
		return new JavaScriptFile.Operator(Kind.GT, lhs, rhs);
	}

	@Override
	public Term constructIntegerGreaterThanOrEqual(Expr.IntegerGreaterThanOrEqual expr, Term lhs, Term rhs) {
		return new JavaScriptFile.Operator(Kind.GTEQ, lhs, rhs);
	}

	@Override
	public Term constructIntegerNegation(Expr.IntegerNegation expr, Term operand) {
		return new JavaScriptFile.Operator(Kind.NEG, operand);
	}

	@Override
	public Term constructIntegerAddition(Expr.IntegerAddition expr, Term lhs, Term rhs) {
		return new JavaScriptFile.Operator(Kind.ADD, lhs, rhs);
	}

	@Override
	public Term constructIntegerSubtraction(Expr.IntegerSubtraction expr, Term lhs, Term rhs) {
		return new JavaScriptFile.Operator(Kind.SUB, lhs, rhs);
	}

	@Override
	public Term constructIntegerMultiplication(Expr.IntegerMultiplication expr, Term lhs, Term rhs) {
		return new JavaScriptFile.Operator(Kind.MUL, lhs, rhs);
	}

	@Override
	public Term constructIntegerDivision(Expr.IntegerDivision expr, Term lhs, Term rhs) {
		// NOTE: must floor result as JavaScript numbers are floating point.
		return MATH_FLOOR(new JavaScriptFile.Operator(Kind.DIV, lhs, rhs));
	}

	@Override
	public Term constructIntegerRemainder(Expr.IntegerRemainder expr, Term lhs, Term rhs) {
		return new JavaScriptFile.Operator(Kind.REM, lhs, rhs);
	}

	@Override
	public Term constructIs(Expr.Is expr, Term operand) {
		Type test = expr.getTestType();
		Type type = expr.getOperand().getType();
		return translateIs(type, test, operand, runtimeTypeTests);
	}

	@Override
	public Term constructLogicalAnd(Expr.LogicalAnd expr, List<Term> operands) {
		return and(operands);
	}

	@Override
	public Term constructLogicalImplication(Expr.LogicalImplication expr, Term lhs, Term rhs) {
		// A ==> B equivalent to (!A) || B
		return or(not(lhs), rhs);
	}

	@Override
	public Term constructLogicalIff(Expr.LogicalIff expr, Term lhs, Term rhs) {
		Type lhsT = expr.getFirstOperand().getType();
		Type rhsT = expr.getSecondOperand().getType();
		return translateEquality(true, lhs, lhsT, rhs, rhsT);
	}

	@Override
	public Term constructLogicalNot(Expr.LogicalNot expr, Term operand) {
		return not(operand);
	}

	@Override
	public Term constructLogicalOr(Expr.LogicalOr expr, List<Term> operands) {
		return or(operands);
	}

	@Override
	public Term constructExistentialQuantifier(Expr.ExistentialQuantifier expr, List<Pair<Term,Term>> ranges, Term body) {
		return translateQuantifier(expr,ranges,body);
	}

	@Override
	public Term constructUniversalQuantifier(Expr.UniversalQuantifier expr, List<Pair<Term,Term>> ranges, Term body) {
		return translateQuantifier(expr,ranges,body);
	}

	@Override
	public Term constructInvoke(Expr.Invoke expr, List<Term> arguments) {
		// Determine the qualified name
		String name = toMangledName(expr.getLink().getTarget());
		// Done
		return new JavaScriptFile.Invoke(null, name, arguments);
	}

	@Override
	public Term constructIndirectInvoke(Expr.IndirectInvoke expr, Term source, List<Term> arguments) {
		return new JavaScriptFile.IndirectInvoke(source, arguments);
	}

	@Override
	public Term constructLambdaAccess(Expr.LambdaAccess expr) {
		ArrayList<String> parameters = new ArrayList<>();
		ArrayList<Term> arguments = new ArrayList<>();
		// NOTE: the reason we use a function declaration here (i.e. instead of
		// just assigning the name) is that it protects against potential name
		// clashes with local variables.
		Type.Callable ft = expr.getLink().getTarget().getType();
		Tuple<Type> params = ft.getParameters();
		//
		for(int i=0;i!=params.size();++i) {
			String v = "p" + i;
			parameters.add(v);
			arguments.add(new VariableAccess(v));
		}
		// Construct body
		String name = toMangledName(expr.getLink().getTarget());
		Term body = new Return(new Invoke(null,name,arguments));
		//
		return new Lambda(parameters,new Block(body));
	}

	@Override
	public Term constructNew(Expr.New expr, Term operand) {
		return new Operator(Kind.NEW,WY_REF(operand));
	}

	@Override
	public Term constructNotEqual(Expr.NotEqual expr, Term lhs, Term rhs) {
		Type lhsT = expr.getFirstOperand().getType();
		Type rhsT = expr.getSecondOperand().getType();
		return translateEquality(false, lhs, lhsT, rhs, rhsT);
	}

	@Override
	public Term constructRecordAccess(Expr.RecordAccess expr, Term source) {
		Term term = new JavaScriptFile.PropertyAccess(source, expr.getField().toString());
		if(expr.isMove() || isCopyable(expr.getType())) {
			return term;
		} else {
			return WY_COPY(term);
		}
	}

	@Override
	public Term constructRecordInitialiser(Expr.RecordInitialiser expr, List<Term> operands) {
		// Extract field names
		Tuple<Identifier> names = expr.getFields();
		ArrayList<Pair<String, Term>> fields = new ArrayList<>();
		//
		for (int i = 0; i != operands.size(); ++i) {
			fields.add(new Pair<>(names.get(i).toString(), operands.get(i)));
		}
		// NOTE: Invoking Wy.Record is necessary to set the prototype on the generated
		// object.
		return new Operator(Kind.NEW,WY_RECORD(new JavaScriptFile.ObjectLiteral(fields)));
	}

	@Override
	public Term constructStaticVariableAccess(Expr.StaticVariableAccess expr) {
		String name = toMangledName(expr.getLink().getTarget());
		VariableAccess var = new JavaScriptFile.VariableAccess(name);
		// Check whether variable move is sufficient
		// FIXME: should support isMove?
		if(isCopyable(expr.getType())) {
			return var;
		} else {
			return WY_COPY(var);
		}
	}

	@Override
	public Term constructVariableAccess(Expr.VariableAccess expr) {
		String name = expr.getVariableDeclaration().getName().toString();
		VariableAccess var = new JavaScriptFile.VariableAccess(name);
		// Check whether variable move is sufficient
		if(expr.isMove() || isCopyable(expr.getType())) {
			return var;
		} else {
			return WY_COPY(var);
		}
	}

	// ====================================================================================
	// Helpers
	// ====================================================================================

	/**
	 * Translate a runtime type test, given the type of the operand and the type
	 * being tested against. For example, consider this:
	 *
	 * <pre>
	 * function get(int|null x):
	 *    if x is int:
	 *       return x
	 *    else:
	 *       return 0
	 * </pre>
	 *
	 * In this case, the type of the source operand is <code>int|null</code> whilst
	 * the type being tested against is <code>int</code>.
	 *
	 * @param type    The type of the operand.
	 * @param test    The type being tested against
	 * @param operand The translated operand expression
	 * @param tests   Records additional type tests which are required.
	 * @return
	 */
	private Term translateIs(Type type, Type test, Term operand, Set<Pair<Type, Type>> tests) {
		Term result = null;
		// Quick sanity check first
		if(type.equals(test)) {
			return Constant.TRUE;
		}
		// Handle all easy cases first. These can all be inlined directly and do not
		// require the creation of a separate helper method. We want to do this as much
		// as possible.
		switch(test.getOpcode()) {
		case TYPE_null:
			result = translateIsNull(type, (Type.Null) test, operand);
			break;
		case TYPE_bool:
			result = translateIsBool(type, (Type.Bool) test, operand);
			break;
		case TYPE_byte:
			result = translateIsByte(type, (Type.Byte) test, operand);
			break;
		case TYPE_int:
			result = translateIsInt(type, (Type.Int) test, operand);
			break;
		case TYPE_nominal: {
			Type.Nominal t = (Type.Nominal) test;
			Decl.Type decl = t.getLink().getTarget();
			// NOTE: we only consider case where empty invariant. This is necessary because,
			// otherwise, would have to evaluate operand more than once.
			if(decl.getInvariant().size() == 0) {
				result = translateIs(type,t.getConcreteType(),operand,tests);
			}
			break;
		}
		}
		//
		if(result != null) {
			return result;
		} else {
			// In this event, we're going to fall back to creating a specialised helper
			// method.
			tests.add(new Pair<>(type, test));
			// Calculate mangled name
			String name = "is" + getMangle(new Tuple<>(), type, test);
			// Done
			return new JavaScriptFile.Invoke(null, name, operand);
		}
	}

	/**
	 * Translate a type tests against <code>null</code>. This is very easy in
	 * JavaScript since we can just directly compare against the <code>null</code>
	 * value. For example, the following Whiley:
	 *
	 * <pre>
	 * if x is null:
	 *    ...
	 * </pre>
	 *
	 * Becomes the following in JavaScript:
	 *
	 * <pre>
	 * if(x == null) {
	 *   ...
	 * }
	 * </pre>
	 *
	 *
	 * @param type    The type of the operand.
	 * @param test    The type being tested against
	 * @param operand The translated operand expression
	 * @return
	 */
	private Term translateIsNull(Type type, Type.Null test, Term operand) {
		return new Operator(Kind.EEQ,operand,Constant.NULL);
	}

	/**
	 * Translate a type test against <code>bool</code>. This is very easy in
	 * JavaScript since we can employ the <code>typeof</code> operator to resolve
	 * this. For example, the following Whiley:
	 *
	 * <pre>
	 * if x is bool:
	 *    ...
	 * </pre>
	 *
	 * Becomes the following in JavaScript:
	 *
	 * <pre>
	 * if((typeof x) == "boolean") {
	 *   ...
	 * }
	 * </pre>
	 *
	 *
	 * @param type    The type of the operand.
	 * @param test    The type being tested against
	 * @param operand The translated operand expression
	 * @return
	 */
	private Term translateIsBool(Type type, Type.Bool test, Term operand) {
		return TypeOf(operand,"boolean");
	}

	private Term translateIsByte(Type type, Type.Byte test, Term operand) {
		// FIXME: need constructor for byte types??
		throw new UnsupportedOperationException();
	}

	/**
	 * Translate a type test against <code>int</code>. This is very easy in
	 * JavaScript since we can employ the <code>typeof</code> operator to resolve
	 * this. For example, the following Whiley:
	 *
	 * <pre>
	 * if x is int:
	 *    ...
	 * </pre>
	 *
	 * Becomes the following in JavaScript:
	 *
	 * <pre>
	 * if((typeof x) == "number") {
	 *   ...
	 * }
	 * </pre>
	 *
	 *
	 * @param type    The type of the operand.
	 * @param test    The type being tested against
	 * @param operand The translated operand expression
	 * @return
	 */
	private Term translateIsInt(Type type, Type.Int test, Term operand) {
		return TypeOf(operand,"number");
	}

	/**
	 * Translate all type tests into corresponding functions. This must be done in
	 * an iterative fashion, since translating a given type test might require
	 * generating another, etc.
	 *
	 * @param tests
	 */
	private void translateTypeTests(HashSet<Pair<Type,Type>> tests) {
		HashSet<Pair<Type,Type>> delta = new HashSet<>(tests);
		//
		while(delta.size() > 0) {
			Pair<Type,Type>[] iteration = delta.toArray(new Pair[delta.size()]);
			delta.clear();
			for(Pair<Type,Type> p : iteration) {
				// Construct type test method
				Declaration d = translateTypeTest(p.first(),p.second(),delta);
				// Add test to the JavaScript file
				jsFile.getDeclarations().add(d);
			}
			// Remove all from delta to see what is left!
			delta.removeAll(tests);
			// Ensure tests contains all known type tests
			tests.addAll(delta);
		}
	}

	/**
	 * Translate a runtime type test, given the type of the source operand and the
	 * type being tested against. For example, consider this:
	 *
	 * <pre>
	 * function get(int|null x):
	 *    if x is int:
	 *       return x
	 *    else:
	 *       return 0
	 * </pre>
	 *
	 * In this case, the type of the source operand is <code>int|null</code> whilst
	 * the type being tested against is <code>int</code>.
	 *
	 * @param type  The type of the source operand.
	 * @param test  The type being tested against
	 * @param tests Records additional type tests which are required.
	 * @return
	 */
	private Declaration translateTypeTest(Type type, Type test, Set<Pair<Type, Type>> tests) {
		// Calculate mangled name
		String name = "is" + getMangle(new Tuple<>(), type, test);
		String parameter = "v";
		Term operand = new VariableAccess(parameter);
		Block body;
		//
		switch (test.getOpcode()) {
		case TYPE_null:
		case TYPE_bool:
		case TYPE_byte:
		case TYPE_int:
			// NOTE: these are all handled separately
			throw new IllegalArgumentException("unexpected type: " + test);
		case TYPE_nominal:
			body = translateIsNominal(type, (Type.Nominal) test, operand, tests);
			break;
		case TYPE_union:
			body = translateIsUnion(type, (Type.Union) test, operand, tests);
			break;
		case TYPE_record:
			body = translateIsRecord(type, (Type.Record) test, operand, tests);
			break;
		case TYPE_array:
			body = translateIsArray(type, (Type.Array) test, operand, tests);
			break;
		default:
			throw new IllegalArgumentException("unexpected type: " + test);
		}
		//
		return new JavaScriptFile.Method(name, Arrays.asList(parameter), body);
	}

	/**
	 * Translate a type tests against a nominal type, whilst making sure any type
	 * invariants hold. For example, consider the following:
	 *
	 * <pre>
	 * type nat is (int x) where x >= 0
	 *
	 * function f(nat|null n) -> nat:
	 *    if n is nat:
	 *       return n
	 *    else:
	 *       return 0
	 * </pre>
	 *
	 * Here, we have a nominal type <code>nat</code> with a simple type invariant.
	 * The above type test is implemented as follows:
	 *
	 * <pre>
	 * function nat$type(x) {
	 *   return x >= 0;
	 * }
	 * function f(n) {
	 *    if(is$XXX(n)) {
	 *       return n;
	 *    } else {
	 *       return 0;
	 *    }
	 * }
	 * function is$XXX(v) {
	 *    return (typeof v) === "number" && nat$type(v)
	 * }
	 * </pre>
	 *
	 * @param type
	 * @param test
	 * @param operand
	 * @param tests
	 * @return
	 */
	private Block translateIsNominal(Type type, Type.Nominal test, Term operand, Set<Pair<Type,Type>> tests) {
		Decl.Type decl = test.getLink().getTarget();
		// Test against the underlying type
		Term t1 = translateIs(type, test.getConcreteType(), operand, tests);
		// Test against invariant (if applicable)
		if(decl.getInvariant().size() == 0) {
			return new Block(new Return(t1));
		} else {
			// Second, test against type invariant
			String name = toMangledName(decl);
			Term t2 = new Invoke(null,name,operand);
			// Done
			return new Block(new Return(and(t1, t2)));
		}
	}

	/**
	 * Translate a type tests against a union type by using a disjunction. For
	 * example, consider the following:
	 *
	 * <pre>
	 * function f(int|bool|null n) -> int:
	 *    if n is bool|null:
	 *       return 0
	 *    else:
	 *       return n
	 * </pre>
	 *
	 * Here, we have a union type <code>bool|int</code> being tested and this is
	 * implemented as follows:
	 *
	 * <pre>
	 * function f(n) {
	 *    if(is$XXX(n)) {
	 *       return 0;
	 *    } else {
	 *       return n;
	 *    }
	 * }
	 * function is$XXX(v) {
	 *    return (typeof v) === "boolean" || v == null;
	 * }
	 * </pre>
	 *
	 * @param type
	 * @param test
	 * @param operand
	 * @param tests
	 * @return
	 */
	private Block translateIsUnion(Type type, Type.Union test, Term operand, Set<Pair<Type,Type>> tests) {
		ArrayList<Term> terms = new ArrayList<>();
		for (int i = 0; i != test.size(); ++i) {
			terms.add(translateIs(type, test.get(i), operand, tests));
		}
		return new Block(new Return(or(terms)));
	}

	/**
	 * Translate a type test against a record type, and there are two stages:
	 * <i>selection</i> and <i>narrowing</i>. In the first stage, we are selecting a
	 * record from an arbitrary set of objects. In the second stage, we are
	 * narrowing the selected record to that being matched. For example, consider
	 * the following Whiley:
	 *
	 * <pre>
	 * function f(int|{int f} x) -> (int r):
	 *    if x is {int f}:
	 *       return x.f
	 *    else:
	 *       return x
	 * </pre>
	 *
	 * This case consists entirely of simple selection. That is, we need only
	 * determine whether or not <code>x</code> is a record. Thus, the above
	 * translates as follows:
	 *
	 * <pre>
	 * function f(x) {
	 *    if(is$XXX(x)) {
	 *       return x.f
	 *    else:
	 *       return x;
	 * }
	 * function is$XXX(v) {
	 *   return (typeof v) === "object";
	 * }
	 * </pre>
	 *
	 * Things get more challenging when the selection job is harder. For example,
	 * consider the following Whiley:
	 *
	 * <pre>
	 * function f(int|{int x}|{int f} x) -> (int r):
	 *    if x is {int f}:
	 *       return x.f
	 *    else:
	 *       return 0
	 * </pre>
	 *
	 * In this case, it's not enough to know that <code>x</code> is a record. We
	 * must also distinguish between the two record types. In fact, we can do this
	 * quite easily by checking whether or not the field <code>f</code> is defined.
	 * Thus, the above translates as follows:
	 *
	 * <pre>
	 * function f(x) {
	 *    if(is$XXX(x)) {
	 *       return x.f
	 *    else:
	 *       return 0;
	 * }
	 * function is$XXX(v) {
	 *    return (typeof v) === "Object" && (typeof v.f) !== "undefined");
	 * }
	 * </pre>
	 *
	 * The final, and perhaps hardest case, is when we must do some form of
	 * narrowing as this requires recursive examination. For example, consider the
	 * following Whiley:
	 *
	 * <pre>
	 * function f(int|{int|null f} x) -> (int r):
	 *    if x is {int f}:
	 *       return x.f
	 *    else:
	 *       return 0
	 * </pre>
	 *
	 * This case is problematic because it's not enough to know that <code>x</code>
	 * is a record. We must further determine that the field <code>f</code> is also
	 * an <code>int</code>. We could translate the above as follows:
	 *
	 * <pre>
     * function f(x) {
	 *    if(is$XXX(x)) {
	 *       return x.f
	 *    else:
	 *       return 0;
	 * }
	 * function is$XXX(v) {
	 *    return (typeof x) === "Object" && (typeof x.f) === "Number";
	 * }
	 * </pre>
	 *
	 * @param type
	 * @param test
	 * @param operand
	 * @return
	 */
	private Block translateIsRecord(Type type, Type.Record test, Term operand, Set<Pair<Type,Type>> tests) {
		// Attempt simple selection
		ArrayList<Term> operands = new ArrayList<>();
		if (isSubtype(type, Type.Null)) {
			// NOTE: since null could be a value of the operand being tested, we must
			// eliminate this to be sure we have a record. That's because <code>typeof
			// null</code> annoyingly returns <code>"object"</code> in JavaScript.
			operands.add(NonNull(operand));
		}
		// Check whether any non-record types.
		if(hasOtherSubtypesBesidesNull(type,Type.Record.class)) {
			// Yes, therefore check this is an object.
			operands.add(TypeOf(operand,"object"));
		}
		// Eliminate all non-records
		List<Type.Record> candidates = filter(Type.Record.class,type);
		// Is that enough?
		if(areStrictSubtypes(test,candidates)) {
			// YES!
			return new Block(new Return(and(operands)));
		}
		// Eliminate records based on their field count
		Tuple<Type.Field> fields = test.getFields();
		if(filteredByFieldCount(candidates,fields.size())) {
			operands.add(checkFieldCount(operand,fields.size()));
			// Is that enough?
			if(areStrictSubtypes(test,candidates)) {
				// YES!
				return new Block(new Return(and(operands)));
			}
		}
		// NOTE: at this point, we could do more by attempting to find one or more
		// fields which uniquely identify this record.
		Block returnFalse = new Block(new Return(Constant.FALSE));
		ArrayList<IfElse.Case> cases = new ArrayList<>();
		if (operands.size() > 0) {
			cases.add(new IfElse.Case(not(and(operands)), returnFalse));
		}
		for (int i = 0; i != fields.size(); ++i) {
			Type.Field field = fields.get(i);
			Type type_field = toFieldType(field.getName(), candidates);
			// Create field check
			Term f = new PropertyAccess(operand, field.getName().toString());
			Term condition = or(TypeOf(f, "undefined"), not(translateIs(type_field, field.getType(), f, tests)));
			cases.add(new IfElse.Case(condition, returnFalse));
		}
		//
		return new Block(new IfElse(cases), new Return(Constant.TRUE));
	}

	/**
	 * Translate a type test against an array type, and there are two stages:
	 * <i>selection</i> and <i>narrowing</i>. In the first stage, we are selecting
	 * an array from an arbitrary set of objects. In the second stage, we are
	 * narrowing the selected array to that being matched. For example, consider the
	 * following Whiley:
	 *
	 * <pre>
	 * function f(int|(int[]) x) -> (int[] r):
	 *    if x is int[]:
	 *       return x
	 *    else:
	 *       return [x]
	 * </pre>
	 *
	 * This case consists entirely of simple selection. That is, we need only
	 * determine whether or not <code>x</code> is an array. Thus, the above
	 * translates as follows:
	 *
	 * <pre>
	 * function f(x) {
	 *    if(is$XXX(x)) {
	 *       return x
	 *    else:
	 *       return [x];
	 * }
	 * function is$XXX(v) {
	 *   return (v.constructor == "Array");
	 * }
	 * </pre>
	 *
	 * Things get more challenging when the selection job is harder. For example,
	 * consider the following Whiley:
	 *
	 * <pre>
	 * function f(int|(bool[])|(int[]) x) -> (int[] r):
	 *    if x is int[]:
	 *       return x
	 *    else:
	 *       return [0]
	 * </pre>
	 *
	 * In this case, it's not enough to know that <code>x</code> is an array. We
	 * must also distinguish between boolean and integer arrays. In fact, we can do
	 * this quite easily by checking whether or not the first element is a boolean.
	 * Observer that, if there are no elements then it is automatically an instance.
	 *
	 * <pre>
	 * function f(x) {
	 *    if(is$XXX(x)) {
	 *       return x
	 *    else:
	 *       return [0];
	 * }
	 * function is$XXX(v) {
	 *    return v.constructor === "Array" && (v.length == 0 || typeof v[0]) == "number");
	 * }
	 * </pre>
	 *
	 * The final, and perhaps hardest case, is when we must do some form of
	 * narrowing as this requires recursive examination. For example, consider the
	 * following Whiley:
	 *
	 * <pre>
	 * function f((null|int)[] x) -> (int[] r):
	 *    if x is int[]:
	 *       return x
	 *    else:
	 *       return [0]
	 * </pre>
	 *
	 * This case is problematic because we must check every element has the require
	 * type.
	 *
	 * @param type
	 * @param test
	 * @param operand
	 * @return
	 */
	private Block translateIsArray(Type type, Type.Array test, Term operand, Set<Pair<Type,Type>> tests) {
		// Attempt simple selection
		ArrayList<Term> operands = new ArrayList<>();
		// Check whether non-null possible
		if (isSubtype(type, Type.Null)) {
			// NOTE: since null could be a value of the operand being tested, we must
			// eliminate this to be sure we have a record. That's because <code>typeof
			// null</code> annoyingly returns <code>"object"</code> in JavaScript.
			operands.add(NonNull(operand));
		}
		// Check whether any non-record types.
		if(hasOtherSubtypesBesidesNull(type,Type.Array.class)) {
			// Yes, therefore check this is an object.
			operands.add(ArrayConstructor(operand));
		}
		// Have now eliminated all non-array types. This maybe enough.
		List<Type.Array> candidates = filter(Type.Array.class,type);
		// Check whether can select purely on basis of being array
		if(areStrictSubtypes(test,candidates)) {
			// YES
			return new Block(new Return(and(operands)));
		}
		// TODO: can improve this in some cases by examining the first element. This
		// works when the element types are disjoint.
		Type.Array arrtype = toArrayType(candidates);
		// Create inner for loop
		Block body = translateIsArrayHelper(arrtype, test, operand, tests);
		// Create outer if (where necessary)
		if (operands.size() == 0) {
			// Not necessary
			return body;
		} else {
			IfElse.Case caSe = new IfElse.Case(and(operands), body);
			Term outerIf = new IfElse(Arrays.asList(caSe));
			return new Block(outerIf, new Return(Constant.FALSE));
		}
	}

	/**
	 * Construct a for loop of the following form:
	 *
	 * <pre>
	 * for (int i = 0; i < v.length; i = i + 1) {
	 * 	if (!isXXX(v[i])) {
	 * 		return false;
	 * 	}
	 * }
	 * return true;
	 * </pre>
	 *
	 * This basically iterates through all the elements of an array and checks the
	 * have a given type.
	 *
	 * @param from
	 * @param test
	 * @param operand
	 * @return
	 */
	private Block translateIsArrayHelper(Type.Array from, Type.Array test, Term operand, Set<Pair<Type, Type>> tests) {
		// Loop Header
		VariableDeclaration decl = new VariableDeclaration("i", new Constant(0));
		VariableAccess var = new VariableAccess("i");
		Term loopTest = new Operator(Kind.LT, var, new ArrayLength(operand));
		Term increment = new Assignment(var, new Operator(Kind.ADD, var, new Constant(1)));
		// Loop Body
		Term if_condition = new Operator(Kind.NOT,
				translateIs(from.getElement(), test.getElement(), new ArrayAccess(operand, var), tests));
		Block if_body = new Block(new Return(Constant.FALSE));
		Term inner_if = new IfElse(new IfElse.Case(if_condition, if_body));
		//
		Term forLoop = new For(decl, loopTest, increment, new Block(inner_if));
		// Done
		return new Block(forLoop, new Return(Constant.TRUE));
	}

	/**
	 * Implementing equality is tricky because of the disparity between JavaScript
	 * types and Whiley types. For example, equality of arrays is not reference
	 * equality in Whiley (as it is in JavaScript).
	 *
	 * @param expr
	 * @return
	 */
	private Term translateEquality(boolean positive, Term lhs, Type lhsT, Term rhs, Type rhsT) {
		//
		if (isCopyable(lhsT) && isCopyable(rhsT)) {
			return new JavaScriptFile.Operator(positive ? Kind.EEQ : Kind.NEEQ, lhs, rhs);
		} else {
			Term t3 = WY_EQUALS(lhs, rhs);
			if (!positive) {
				t3 = new JavaScriptFile.Operator(Kind.NOT, t3);
			}
			return t3;
		}
	}


	/**
	 * This is the easy case for translating switches. We translate a While switch
	 * directly as a JavaScript switch. For example, the following Whiley code:
	 *
	 * <pre>
	 * switch x:
	 *  case 1, 2:
	 *      return -1
	 *  case 3:
	 *      return 1
	 * </pre>
	 *
	 * into the following JavaScript code:
	 *
	 * <pre>
	 * switch (x) {
	 * case 1:
	 * case 2: {
	 * 	return -1;
	 * 	break;
	 * }
	 * case 3: {
	 * 	return 1;
	 * 	break;
	 * }
	 * }
	 * </pre>
	 *
	 * A further optimisation could be made in this case to drop the break
	 * statements.
	 *
	 * @param stmt
	 * @return
	 */
	private Term translateSwitchAsSwitch(Stmt.Switch stmt, Term condition, List<Pair<List<Term>,Term>> cases) {
		// Translate each case one-by-one.
		Tuple<Stmt.Case> wycases = stmt.getCases();
		ArrayList<Switch.Case> jscases = new ArrayList<>();
		for (int i = 0; i != wycases.size(); ++i) {
			// NOTE: one case in Whiley can correspond to multiple cases in JavaScript.
			// That's because Whiley allows multiple values per case.
			List<Term> values = cases.get(i).first();
			Block body = (Block) cases.get(i).second();
			// Add terminal break since Whiley doesn't use them
			body.getTerms().add(new Break());
			// Check for default case
			if (values.size() == 0) {
				jscases.add(new Switch.Case(null, body));
			} else {
				// Handle all fall-thru cases first.
				for (int j = 1; j != values.size(); ++j) {
					jscases.add(new Switch.Case(values.get(j - 1), null));
				}
				// Handle content case finally
				jscases.add(new Switch.Case(values.get(values.size() - 1), body));
			}
		}
		return new Switch(condition, jscases);
	}

	/**
	 * This is the hard case for translating a switch statement. For example, we
	 * translate the following Whiley code:
	 *
	 * <pre>
	 * switch x:
	 *   case true:
	 *       return 0
	 *   case false:
	 *       return -1
	 * </pre>
	 *
	 * into the following JavaScript code:
	 *
	 * <pre>
	 * {
	 * 	var $0 = x;
	 * 	if ($0 == true) {
	 * 		return 0;
	 * 	} else if ($0 == false) {
	 * 		return -1;
	 * 	}
	 * }
	 * </pre>
	 *
	 * The temporary variable is used to ensure the switch condition is only ever
	 * evaluated once. In this case, the temporary variable is not actuall required.
	 *
	 * @param stmt
	 * @return
	 */
	private Term translateSwitchAsIfElse(Stmt.Switch stmt, Term condition, List<Pair<List<Term>,Term>> cases) {
		Type conditionT = stmt.getCondition().getType();
		VariableAccess tmp = new VariableAccess("$" + temporaryIndex++);
		// Create temporary variable declaration
		VariableDeclaration decl = new VariableDeclaration(tmp.getName(),condition);
		// Translate each case one-by-one.
		Tuple<Stmt.Case> wycases = stmt.getCases();
		ArrayList<IfElse.Case> jscases = new ArrayList<>();
		for (int i = 0; i != wycases.size(); ++i) {
			// NOTE: one case in Whiley can correspond to multiple cases in JavaScript.
			// That's because Whiley allows multiple values per case.
			Stmt.Case wycase = wycases.get(i);
			Pair<List<Term>,Term> jscase = cases.get(i);
			// Translate the operands
			Tuple<Expr> values = wycase.getConditions();
			// Check for default case
			if (values.size() == 0) {
				jscases.add(new IfElse.Case(null, (Block) jscase.second()));
			} else {
				Term[] eqs = new Term[values.size()];
				List<Term> terms = jscase.first();
				// Construct disjunction of cases
				for (int j = 0; j != eqs.length; ++j) {
					Expr value = values.get(j);
					eqs[j] = translateEquality(true, tmp, conditionT, terms.get(j), value.getType());
				}
				Term c = eqs.length == 1 ? eqs[0] : or(eqs);
				// Handle content case finally
				jscases.add(new IfElse.Case(c, (Block) jscase.second()));
			}
		}
		//
		return new Block(decl, new IfElse(jscases));
	}


	/**
	 * Translate a quantifier expression into JavaScript. This is done use a loop
	 * nest embedded within a lambda. For example, the following While code:
	 *
	 * <pre>
	 * bool b = all { i in 0..|items| | items[i] >= 0 }
	 * </pre>
	 *
	 * Is translated into the following JavaScript:
	 *
	 * <pre>
	 * var b = function() {
	 * 	for(int i=0;i<items.length;i=i+1) {
	 *    if(!(items[i] < 0)) { return false; }
	 *  }
	 *  return true;
	 * }();
	 * </pre>
	 *
	 * This is a bit more verbose, but it works quite well.
	 *
	 * @param expr
	 * @return
	 */
	private Term translateQuantifier(Expr.Quantifier expr, List<Pair<Term,Term>> ranges, Term condition) {
		boolean isUniversal = expr instanceof Expr.UniversalQuantifier;
		// Translate quantifier into loop nest
		Term body = translateQuantifier(0,expr,ranges,condition);
		// Construct final return statement
		Term ret = new Return(isUniversal ? Constant.TRUE : Constant.FALSE);
		// Construct lambda itself
		Term lambda = new Lambda(Collections.EMPTY_LIST, new Block(body,ret));
		// Return invocation of lambda
		return new JavaScriptFile.IndirectInvoke(lambda);
	}

	private Term translateQuantifier(int index, Expr.Quantifier expr, List<Pair<Term, Term>> ranges, Term condition) {
		boolean isUniversal = expr instanceof Expr.UniversalQuantifier;
		Tuple<Decl.Variable> parameters = expr.getParameters();
		// Generate nest
		if (parameters.size() == index) {
			// Base case
			Term body = new Return(isUniversal ? Constant.FALSE : Constant.TRUE);
			if (isUniversal) {
				condition = new Operator(Kind.NOT, condition);
			}
			return new IfElse(new IfElse.Case(condition, new Block(body)));
		} else {
			// Recursive case
			Decl.Variable v = parameters.get(index);
			Pair<Term, Term> range = ranges.get(index);
			//
			VariableAccess var = new VariableAccess(v.getName().toString());
			VariableDeclaration decl = new VariableDeclaration(var.getName(), range.first());
			Term test = new Operator(Kind.LT, var, range.second());
			Term increment = new Assignment(var, new Operator(Kind.ADD, var, new Constant(1)));
			Term body = translateQuantifier(index + 1, expr, ranges, condition);
			//
			return new JavaScriptFile.For(decl, test, increment, new Block(body));
		}
	}

	/**
	 * Check whether a given assignment is "simple" or not. That is, where the
	 * right-hand side contains no multi-expressions and there is no interference
	 * between the lhs and rhs. The following illustrates a multi-assignment case:
	 *
	 * <pre>
	 * x,y = f()
	 * </pre>
	 *
	 * This case is problematic because the return of <code>f()</code> will be an
	 * array which must be destructured. The following illustrates interference
	 * between the lhs and rhs:
	 *
	 * <pre>
	 * x,y = y,x
	 * </pre>
	 *
	 * Interference means that locations assigned on the left-hand side are
	 * (potentially) present on the right-hand side. To understand why this is a
	 * problem, consider this naive translation into JavaScript:
	 *
	 * <pre>
	 * x = y;
	 * y = x;
	 * </pre>
	 *
	 * This obviously doesn't work because <code>x</code> is assigned a new value
	 * before its original value is assigned to <code>y</code>. To work around this,
	 * we need to introduce temporary variables.
	 *
	 * @param stmt
	 * @return
	 */
	private boolean isSimpleAssignment(Stmt.Assign stmt) {
		Tuple<LVal> lhs = stmt.getLeftHandSide();
		Tuple<Expr> rhs = stmt.getRightHandSide();
		//
		if(lhs.size() != rhs.size()) {
			// Multi-assignment is present
			return false;
		} else {
			Decl.Variable[] defs = new Decl.Variable[lhs.size()];
			HashSet<Decl.Variable> uses = new HashSet<>();
			// Identify all defs and uses
			for(int i=0;i!=lhs.size();++i) {
				defs[i] = extractDefinedVariable(lhs.get(i));
				if(defs[i] == null) {
					// Couldn't tell what was being defined.
					return false;
				}
				extractUsedVariables(lhs.get(i),uses);
				extractUsedVariables(rhs.get(i),uses);

			}
			// Check for interference
			for(int i=0;i!=defs.length;++i) {
				if(uses.contains(defs[i])) {
					// Interference detected
					return false;
				}
			}
			//
			return true;
		}
	}

	private Decl.Variable extractDefinedVariable(LVal lval) {
		switch (lval.getOpcode()) {
		case EXPR_arrayaccess:
		case EXPR_arrayborrow: {
			Expr.ArrayAccess e = (Expr.ArrayAccess) lval;
			return extractDefinedVariable((WyilFile.LVal) e.getFirstOperand());
		}
		case EXPR_dereference: {
			// NOTE: it's impossible to tell what variable is being defined through a
			// dereference.
			return null;
		}
		case EXPR_recordaccess:
		case EXPR_recordborrow: {
			Expr.RecordAccess e = (Expr.RecordAccess) lval;
			return extractDefinedVariable((WyilFile.LVal) e.getOperand());
		}
		case EXPR_variablecopy:
		case EXPR_variablemove: {
			Expr.VariableAccess e = (Expr.VariableAccess) lval;
			return e.getVariableDeclaration();
		}
		default:
			throw new IllegalArgumentException("invalid lval: " + lval);
		}
	}

	private void extractUsedVariables(LVal lval, Set<Decl.Variable> uses) {
		switch (lval.getOpcode()) {
		case EXPR_arrayaccess:
		case EXPR_arrayborrow: {
			Expr.ArrayAccess e = (Expr.ArrayAccess) lval;
			extractUsedVariables((WyilFile.LVal) e.getFirstOperand(), uses);
			extractUsedVariables(e.getSecondOperand(), uses);
			break;
		}
		case EXPR_dereference: {
			Expr.Dereference e = (Expr.Dereference) lval;
			extractUsedVariables(e.getOperand(), uses);
			break;
		}
		case EXPR_recordaccess:
		case EXPR_recordborrow: {
			Expr.RecordAccess e = (Expr.RecordAccess) lval;
			extractUsedVariables((WyilFile.LVal) e.getOperand(), uses);
			break;
		}
		case EXPR_variablecopy:
		case EXPR_variablemove: {
			// NOTE: nothing to do here, since this variable is being defined.
			break;
		}
		default:
			throw new IllegalArgumentException("invalid lval: " + lval);
		}
	}

	/**
	 * Extract all used variables from a given expression. This is tricky as we must
	 * account properly for captured variables, etc.
	 *
	 * @param e
	 * @param uses
	 */
	private void extractUsedVariables(Expr e, Set<Decl.Variable> uses) {
		// Construct appropriate visitor
		AbstractVisitor visitor = new AbstractVisitor() {
			@Override
			public void visitVariableAccess(Expr.VariableAccess e) {
				uses.add(e.getVariableDeclaration());
			}
			@Override
			public void visitDeclaration(Decl d) {
				// NOTE: this is needed to prevent traversal into type invariants, etc.
				if(d instanceof Decl.Lambda) {
					// NOTE: must account for variable capture here
					Decl.Lambda l = (Decl.Lambda) d;
					HashSet<Decl.Variable> tmp = new HashSet<>();
					// Traverse quantify body
					super.visitLambda(l);
					// Remove all captured variables
					for(Decl.Variable v : l.getParameters()) {
						tmp.remove(v);
					}
					// Done
					uses.addAll(tmp);
				}
			}

			@Override
			public void visitUniversalQuantifier(Expr.UniversalQuantifier q) {
				// NOTE: must account for variable capture here
				HashSet<Decl.Variable> tmp = new HashSet<>();
				// Traverse quantify body
				super.visitUniversalQuantifier(q);
				// Remove all captured variables
				for(Decl.Variable v : q.getParameters()) {
					tmp.remove(v);
				}
				// Done
				uses.addAll(tmp);
			}

			@Override
			public void visitExistentialQuantifier(Expr.ExistentialQuantifier q) {
				// NOTE: must account for variable capture here
				HashSet<Decl.Variable> tmp = new HashSet<>();
				// Traverse quantify body
				super.visitExistentialQuantifier(q);
				// Remove all captured variables
				for(Decl.Variable v : q.getParameters()) {
					tmp.remove(v);
				}
				// Done
				uses.addAll(tmp);
			}

			@Override
			public void visitType(Type t) {
				// NOTE: stop traversal here since we cannot reach any variable declarations
				// from here.  This is just an optimisation.
			}
		};
		//
		visitor.visitExpression(e);
	}

	/**
	 * Check that a given type (<code>t2</code>) is a subtype of another
	 * (<code>t1</code>).
	 *
	 * @param t1  The supertype being checked.
	 * @param t2 The subtype(s) being checked.
	 * @return
	 */
	private boolean isSubtype(Type t1, Type t2) {
		return subtyping.isSubtype(t1, t2, EMPTY_LIFETIMES);
	}

	/**
	 * Check that a given set of types are all subtypes of a given type.
	 *
	 * @param type The supertype being checked.
	 * @param types The subtype(s) being checked.
	 * @return
	 */
	private boolean areStrictSubtypes(Type type, List<? extends Type> types) {
		for(Type t : types) {
			if (t != null && !strictSubtyping.isSubtype(type, t, EMPTY_LIFETIMES)) {
				return false;
			}
		}
		return true;
	}


	/**
	 * Return true if the type in question can be copied directly. More
	 * specifically, if a bitwise copy of the value is sufficient to fully copy
	 * it. In general, this is true for primitive data types in JavaScript. But,
	 * for array types or general class types, it is not true (since these are
	 * references into the heap). As an exception, class types which are known
	 * to be immutable can be safely considered as copyable.
	 *
	 * @param type
	 * @return
	 */
	private boolean isCopyable(Type type) {
		if (type instanceof Type.Primitive) {
			return true;
		} else if (type instanceof Type.Callable) {
			return true;
		} else if (type instanceof Type.Reference) {
			return true;
		} else if (type instanceof Type.Nominal) {
			Type.Nominal tn = (Type.Nominal) type;
			//
			Decl.Type td = tn.getLink().getTarget();
			return isCopyable(td.getType());
		} else {
			return false;
		}
	}

	/**
	 * Check whether the given type has any subtypes other than that of the given
	 * kind. For example, <code>int|{int f}</code> has a subtype other than a record
	 * (i.e. an <code>int</code>).
	 *
	 * @param type
	 * @param kind
	 * @return
	 */
	public static boolean hasOtherSubtypesBesidesNull(Type type, Class<? extends Type> kind) {
		if (type instanceof Type.Nominal) {
			Type.Nominal t = (Type.Nominal) type;
			return hasOtherSubtypesBesidesNull(t.getConcreteType(), kind);
		} else if (type instanceof Type.Union) {
			Type.Union t = (Type.Union) type;
			for (int i = 0; i != t.size(); ++i) {
				if (hasOtherSubtypesBesidesNull(t.get(i), kind)) {
					return true;
				}
			}
		} else if (!(type instanceof Type.Null || kind.isInstance(type))) {
			return true;
		}
		return false;
	}

	/**
	 * Determine whether a sequence of expressions are all "unit" expressions (that
	 * is, return a single value) or not.
	 *
	 * @param exprs
	 * @return
	 */
	private static boolean allUnitExpressions(Tuple<Expr> exprs) {
		for(int i=0;i!=exprs.size();++i) {
			Tuple<Type> types = exprs.get(i).getTypes();
			if(types != null) {
				return false;
			}
		}
		return true;
	}

	/**
	 * Determine the appropriate mangled string for a given named declaration. This
	 * is critical to ensuring that overloaded declarations do not clash.
	 *
	 * @param decl
	 * @return
	 */
	private String toMangledName(Decl.Named<?> decl) {
		// Determine whether this is an exported symbol or not
		boolean exported = decl.getModifiers().match(Modifier.Export.class) != null;
		// Construct base name
		String name = decl.getQualifiedName().toString().replace("::", "$");
		// Add type mangles for non-exported symbols
		if(!exported && decl instanceof Decl.Method) {
			Decl.Method method = (Decl.Method) decl;
			Tuple<Type> parameters = method.getType().getParameters();
			Tuple<Identifier> lifetimes = method.getType().getLifetimeParameters();
			name += getMangle(parameters, lifetimes);
		} else if(!exported && decl instanceof Decl.Callable) {
			Decl.Callable callable = (Decl.Callable) decl;
			Tuple<Type> parameters = callable.getType().getParameters();
			name += getMangle(parameters, new Tuple<>());
		} else if(decl instanceof Decl.Type) {
			name += "$type";
		}
		return name;
	}

	/**
	 * Convert a tuple of parameters into a list of their name strings.
	 *
	 * @param parameters
	 * @return
	 */
	private List<String> toParameterNames(Tuple<Decl.Variable> parameters) {
		ArrayList<String> results = new ArrayList<>();
		for(int i=0;i!=parameters.size();++i) {
			results.add(parameters.get(i).getName().toString());
		}
		return results;
	}

	private String getMangle(Tuple<Type> types, Tuple<Identifier> lifetimes) {
		if (types.size() == 0) {
			return "";
		} else {
			return "$" + mangler.getMangle(types, lifetimes);
		}
	}

	private String getMangle(Tuple<Identifier> lifetimes, Type... types) {
		if (types.length == 0) {
			return "";
		} else {
			return "$" + mangler.getMangle(lifetimes, types);
		}
	}

	/**
	 * Attempt to filter the record array based on the number of fields.
	 * Specifically, any records which don't have the specified number of fields are
	 * eliminated.
	 *
	 * @param records
	 * @param size
	 * @return
	 */
	private static boolean filteredByFieldCount(List<Type.Record> records, int size) {
		boolean r = false;
		for (int i = 0; i != records.size(); ++i) {
			Type.Record record = records.get(i);
			if (record.getFields().size() != size) {
				records.set(i, null);
				r = true;
			}
		}
		return r;
	}

	/**
	 * Combine one or more array types into a single array type.
	 *
	 * @param types
	 * @return
	 */
	private static Type.Array toArrayType(List<Type.Array> types) {
		if(types.size() == 0) {
			throw new IllegalArgumentException();
		} else if(types.size() == 1) {
			return types.get(0);
		} else {
			Type[] elements = new Type[types.size()];
			for(int i=0;i!=elements.length;++i) {
				elements[i] = types.get(i).getElement();
			}
			return new Type.Array(new Type.Union(elements));
		}
	}

	private static Type toFieldType(Identifier field, List<Type.Record> types) {
		if(types.size() == 0) {
			throw new IllegalArgumentException();
		} else {
			Type[] elements = new Type[types.size()];
			for(int i=0;i!=types.size();++i) {
				Type.Record rec = types.get(i);
				if (rec != null) {
					Type t = rec.getField(field);
					if (rec.isOpen() && t == null) {
						// NOTE: this is important as, otherwise, we'll make false assumptions in the
						// resulting type test.
						return Type.Any;
					}
					elements[i] = t;
				}
			}
			// Strip any null elements
			elements = ArrayUtils.removeAll(elements, null);
			// Done
			return new Type.Union(elements);
		}
	}

	/**
	 * Strip off any nominal information.
	 *
	 * @param type
	 * @return
	 */
	private static Type stripNominal(Type type) {
		if(type instanceof Type.Nominal) {
			Type.Nominal t = (Type.Nominal) type;
			return stripNominal(t.getConcreteType());
		} else {
			return type;
		}
	}

	/**
	 * This is a simple implementation which doesn't do anything.
	 */
	private static LifetimeRelation EMPTY_LIFETIMES = new LifetimeRelation() {
		@Override
		public boolean isWithin(String inner, String outer) {
			return false;
		}
	};

	// ====================================================================================
	// Whiley Runtime Accessors
	// ====================================================================================

	/**
	 * The unique name via which we can access the While runtime. This provides a
	 * range of useful features for simplifying the translation to JavaScript.
	 */
	private static Term WY_RUNTIME = new JavaScriptFile.VariableAccess("Wy");

	private static Term WY_ARRAY(Term t1, Term t2) {
		return new JavaScriptFile.Invoke(WY_RUNTIME, "array", t1, t2);
	}

	private static Term WY_ASSERT(Term t1) {
		return new JavaScriptFile.Invoke(WY_RUNTIME, "assert", t1);
	}

	private static Term WY_COPY(Term t1) {
		return new JavaScriptFile.Invoke(WY_RUNTIME, "copy", t1);
	}

	private static Term WY_EQUALS(Term t1, Term t2) {
		return new JavaScriptFile.Invoke(WY_RUNTIME, "equals", t1, t2);
	}

	private static Term WY_RECORD(Term t1) {
		return new JavaScriptFile.Invoke(WY_RUNTIME, "Record", t1);
	}

	private static Term WY_REF(Term t1) {
		return new JavaScriptFile.Invoke(WY_RUNTIME, "Ref", t1);
	}

	// ====================================================================================
	// JavaScript Runtime Accessors
	// ====================================================================================

	/**
	 * Represents the Math module available from JavaScript.
	 */
	private static Term MATH_RUNTIME = new JavaScriptFile.VariableAccess("Math");

	private static Term TypeOf(Term t1, String kind) {
		return new Operator(Kind.EEQ, new Operator(Kind.TYPEOF, t1), new Constant(kind));
	}

	private static Term NonNull(Term t1) {
		return new Operator(Kind.NEEQ, t1, Constant.NULL);
	}

	private static Term ArrayConstructor(Term t1) {
		return new Operator(Kind.EEQ, new PropertyAccess(t1, "constructor"), new VariableAccess("Array"));
	}

	private static Term MATH_FLOOR(Term t1) {
		return new JavaScriptFile.Invoke(MATH_RUNTIME, "floor", t1);
	}

	private static Term checkFieldCount(Term operand, int size) {
		Term term = new Invoke(new VariableAccess("Object"),"keys",operand);
		return new Operator(Kind.EEQ, new ArrayLength(term), new Constant(size));
	}

	private static Term MASK_FF(Term t1) {
		Term FF = new Constant(0xFF);
		return new Operator(Operator.Kind.BITWISEAND,t1,FF);
	}

}
