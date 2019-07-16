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

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import wybs.util.AbstractCompilationUnit.Identifier;
import wybs.util.AbstractCompilationUnit.Tuple;
import wybs.util.AbstractCompilationUnit.Value;
import wycc.util.Pair;
import wyil.lang.WyilFile;
import wyil.lang.WyilFile.Decl;
import wyil.lang.WyilFile.Expr;
import wyil.lang.WyilFile.LVal;
import wyil.lang.WyilFile.Stmt;
import wyil.lang.WyilFile.Type;
import wyil.type.subtyping.EmptinessTest.LifetimeRelation;
import wyil.type.subtyping.StrictTypeEmptinessTest;
import wyil.type.subtyping.SubtypeOperator;
import wyil.util.AbstractVisitor;
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
import wyjs.core.JavaScriptFile.IfElse;
import wyjs.core.JavaScriptFile.Invoke;
import wyjs.core.JavaScriptFile.Lambda;
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


public class NewJavaScriptCompiler extends AbstractTranslator<Term> {
	/**
	 * Provides a standard mechanism for writing out type mangles.
	 */
	private final static TypeMangler mangler = new StdTypeMangler();

	/**
	 * Provides a standard mechanism for checking whether two Whiley types are
	 * subtypes or not.
	 */
	private final static SubtypeOperator subtyping = new SubtypeOperator(new StrictTypeEmptinessTest());

	/**
	 * Represents the JavaScriptFile which is being written to.
	 */
	private final JavaScriptFile jsFile;

	/**
	 * Provides numbering for temporary variables to ensure uniqueness.
	 */
	private int temporaryIndex = 0;

	public NewJavaScriptCompiler(JavaScriptFile jsFile) {
		super(subtyping);
		this.jsFile = jsFile;
	}

	@Override
	public Term visitDeclaration(Decl decl) {
		Term t = super.visitDeclaration(decl);
		if(t != null) {
			jsFile.getDeclarations().add((Declaration) t);
		}
		return null;
	}

	// ====================================================================================
	// Declarations
	// ====================================================================================

	@Override
	public Term constructType(Decl.Type d, List<Term> invariant) {
		// TODO Auto-generated method stub
		return null;
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
		Term body = new Return(new Operator(Kind.AND, clauses));
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
		throw new UnsupportedOperationException();
	}

	@Override
	public Term constructDoWhile(Stmt.DoWhile stmt, Term body, Term condition, List<Term> invariant) {
		// FIXME: support loop invariant
		return new DoWhile((Block) body,condition);
	}

	@Override
	public Term constructFail(Stmt.Fail stmt) {
		return WY_ASSERT(new JavaScriptFile.Constant(false));
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
		return WY_DEREF(operand);
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
		throw new UnsupportedOperationException();
	}

	@Override
	public Term constructLogicalAnd(Expr.LogicalAnd expr, List<Term> operands) {
		return new JavaScriptFile.Operator(Kind.AND, operands);
	}

	@Override
	public Term constructLogicalImplication(Expr.LogicalImplication expr, Term lhs, Term rhs) {
		// A ==> B equivalent to (!A) || B
		return new JavaScriptFile.Operator(Kind.OR, new JavaScriptFile.Operator(Kind.NOT, lhs), rhs);
	}

	@Override
	public Term constructLogicalIff(Expr.LogicalIff expr, Term lhs, Term rhs) {
		Type lhsT = expr.getFirstOperand().getType();
		Type rhsT = expr.getSecondOperand().getType();
		return translateEquality(true, lhs, lhsT, rhs, rhsT);
	}

	@Override
	public Term constructLogicalNot(Expr.LogicalNot expr, Term operand) {
		return new JavaScriptFile.Operator(Kind.NOT, operand);
	}

	@Override
	public Term constructLogicalOr(Expr.LogicalOr expr, List<Term> operands) {
		return new JavaScriptFile.Operator(Kind.OR, operands);
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
		// NOTE: Invoking Wy.record is necessary to set the prototype on the generated
		// object.
		return WY_RECORD(new JavaScriptFile.ObjectLiteral(fields));
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
			return new JavaScriptFile.Operator(positive ? Kind.EQ : Kind.NEQ, lhs, rhs);
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
				Term c = eqs.length == 1 ? eqs[0] : new Operator(Kind.OR, eqs);
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
		Term ret = new Return(new Constant(isUniversal));
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
			Term body = new Return(new Constant(!isUniversal));
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
		String name = decl.getQualifiedName().toString().replace("::", "$");
		if(decl instanceof Decl.Method) {
			Decl.Method method = (Decl.Method) decl;
			Tuple<Type> parameters = method.getType().getParameters();
			Tuple<Identifier> lifetimes = method.getType().getLifetimeParameters();
			name += mangler.getMangle(parameters, lifetimes);
		} else if(decl instanceof Decl.Callable) {
			Decl.Callable callable = (Decl.Callable) decl;
			Tuple<Type> parameters = callable.getType().getParameters();
			name += mangler.getMangle(parameters, new Tuple<>());
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

	private static Term WY_DEREF(Term t1) {
		return new JavaScriptFile.Invoke(WY_RUNTIME, "deref", t1);
	}

	private static Term WY_EQUALS(Term t1, Term t2) {
		return new JavaScriptFile.Invoke(WY_RUNTIME, "equals", t1, t2);
	}

	private static Term WY_RECORD(Term t1) {
		return new JavaScriptFile.Invoke(WY_RUNTIME, "record", t1);
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

	private static Term MATH_FLOOR(Term t1) {
		return new JavaScriptFile.Invoke(MATH_RUNTIME, "floor", t1);
	}

	private static Term MASK_FF(Term t1) {
		Term FF = new Constant(0xFF);
		return new Operator(Operator.Kind.BITWISEAND,t1,FF);
	}

}
