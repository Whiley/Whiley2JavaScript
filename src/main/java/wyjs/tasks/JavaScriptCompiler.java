package wyjs.tasks;

import static wybs.util.AbstractCompilationUnit.ITEM_bool;
import static wybs.util.AbstractCompilationUnit.ITEM_byte;
import static wybs.util.AbstractCompilationUnit.ITEM_int;
import static wybs.util.AbstractCompilationUnit.ITEM_null;
import static wybs.util.AbstractCompilationUnit.ITEM_utf8;
import static wyil.lang.WyilFile.EXPR_arrayaccess;
import static wyil.lang.WyilFile.EXPR_arrayborrow;
import static wyil.lang.WyilFile.EXPR_bitwiseand;
import static wyil.lang.WyilFile.EXPR_bitwisenot;
import static wyil.lang.WyilFile.EXPR_bitwiseor;
import static wyil.lang.WyilFile.EXPR_bitwiseshl;
import static wyil.lang.WyilFile.EXPR_bitwiseshr;
import static wyil.lang.WyilFile.EXPR_bitwisexor;
import static wyil.lang.WyilFile.EXPR_dereference;
import static wyil.lang.WyilFile.EXPR_equal;
import static wyil.lang.WyilFile.EXPR_integeraddition;
import static wyil.lang.WyilFile.EXPR_integerdivision;
import static wyil.lang.WyilFile.EXPR_integergreaterequal;
import static wyil.lang.WyilFile.EXPR_integergreaterthan;
import static wyil.lang.WyilFile.EXPR_integerlessequal;
import static wyil.lang.WyilFile.EXPR_integerlessthan;
import static wyil.lang.WyilFile.EXPR_integermultiplication;
import static wyil.lang.WyilFile.EXPR_integernegation;
import static wyil.lang.WyilFile.EXPR_integerremainder;
import static wyil.lang.WyilFile.EXPR_integersubtraction;
import static wyil.lang.WyilFile.EXPR_logicaland;
import static wyil.lang.WyilFile.EXPR_logicaliff;
import static wyil.lang.WyilFile.EXPR_logicalnot;
import static wyil.lang.WyilFile.EXPR_logicalor;
import static wyil.lang.WyilFile.EXPR_notequal;
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
import wyil.util.AbstractFunction;
import wyil.util.AbstractVisitor;
import wyjs.core.JavaScriptFile;
import wyjs.core.JavaScriptFile.ArrayAccess;
import wyjs.core.JavaScriptFile.Assignment;
import wyjs.core.JavaScriptFile.Block;
import wyjs.core.JavaScriptFile.Break;
import wyjs.core.JavaScriptFile.Constant;
import wyjs.core.JavaScriptFile.Declaration;
import wyjs.core.JavaScriptFile.DoWhile;
import wyjs.core.JavaScriptFile.IfElse;
import wyjs.core.JavaScriptFile.IndirectInvoke;
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
import wyjs.util.StdTypeMangler;

/**
 * Key invariant maintained is ownership.
 *
 * @author David J. Pearce
 *
 */
public class JavaScriptCompiler extends AbstractFunction<Object,Term> {
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

	public JavaScriptCompiler(JavaScriptFile jsFile) {
		this.jsFile = jsFile;
	}

	// ====================================================================================
	// Declarations
	// ====================================================================================

	@Override
	public Term visitDeclaration(Decl decl, Object data) {
		Term t = super.visitDeclaration(decl, data);
		if(t != null) {
			jsFile.getDeclarations().add((Declaration) t);
		}
		return null;
	}

	@Override
	public Declaration visitStaticVariable(Decl.StaticVariable decl, Object data) {
		// Determine qualified name
		String name = toMangledName(decl);
		//
		if (decl.hasInitialiser()) {
			Term initialiser = visitExpression(decl.getInitialiser(), data);
			return new VariableDeclaration(name, initialiser);
		} else {
			return new VariableDeclaration(name);
		}
	}

	@Override
	public Term visitFunctionOrMethod(Decl.FunctionOrMethod decl, Object data) {
		// Determine qualified name
		String name = toMangledName(decl);
		// Translate parameters
		List<String> parameters = toParameterNames(decl.getParameters());
		// Translate body
		Block body = visitBlock(decl.getBody(), data);
		//
		return new JavaScriptFile.Method(name, parameters, body);
	}

	@Override
	public Term visitProperty(Decl.Property decl, Object data) {
		// Determine qualified name
		String name = toMangledName(decl);
		// Translate parameters
		List<String> parameters = toParameterNames(decl.getParameters());
		// Translate property clauses
		Term[] clauses = translateOperands(decl.getInvariant());
		Term body = new Return(new Operator(Kind.AND, clauses));
		// Done
		return new JavaScriptFile.Method(name, parameters, new Block(body));
	}

	// ====================================================================================
	// Blocks
	// ====================================================================================

	@Override
	public Block visitBlock(Stmt.Block block, Object data) {
		ArrayList<Term> terms = new ArrayList<>();
		for(int i=0;i!=block.size();++i) {
			Term term = visitStatement(block.get(i), data);
			if(term != null) {
				terms.add(term);
			}
		}
		return new JavaScriptFile.Block(terms);
	}

	// ====================================================================================
	// Statements
	// ====================================================================================

	@Override
	public Term visitAssert(Stmt.Assert stmt, Object data) {
		Term condition = visitExpression(stmt.getCondition(), data);
		return WY_ASSERT(condition);
	}

	@Override
	public Term visitAssign(Stmt.Assign stmt, Object data) {
		Term[] lhs = translateLVals(stmt.getLeftHandSide());
		Term[] rhs = translateOperands(stmt.getRightHandSide());
		//
		// FIXME: es6 supports destructuring assignment which could be used here.
		//
		if(lhs.length == 1) {
			// Easy case
			return new JavaScriptFile.Assignment(lhs[0], rhs[0]);
		} else if(isSimpleAssignment(stmt)) {
			// NOTE: what we know here is that there is no interference between the left and
			// right-hand sides. Also, that we have no multi-assignment
			ArrayList<Term> stmts = new ArrayList<>();
			for(int i=0;i!=lhs.length;++i) {
				stmts.add(new JavaScriptFile.Assignment(lhs[i], rhs[i]));
			}
			return new Block(stmts);
		} else {
			// Harder case as have to workaround interference.
			Tuple<LVal> lvals = stmt.getLeftHandSide();
			Tuple<Expr> exprs = stmt.getRightHandSide();
			ArrayList<Term> first = new ArrayList<>();
			ArrayList<Term> second = new ArrayList<>();
			//
			for(int i=0,j=0;i!=exprs.size();++i) {
				Expr e = exprs.get(i);
				Tuple<Type> types = e.getTypes();
				// Translate right-hand side
				VariableAccess tmp = new VariableAccess("$" + (temporaryIndex++));
				first.add(new VariableDeclaration(tmp.getName(), visitExpression(e, data)));
				// Translate left-hand side
				if(types == null) {
					// Unit assignment
					second.add(new JavaScriptFile.Assignment(lhs[j++], tmp));
				} else {
					// Multi-assignment
					for(int k=0;k!=types.size();++k) {
						Term t = new ArrayAccess(tmp,new Constant(k));
						second.add(new JavaScriptFile.Assignment(lhs[j++], t));
					}
				}
			}
			// Build
			first.addAll(second);
			return new Block(first);
		}
	}

	@Override
	public Term visitAssume(Stmt.Assume stmt, Object data) {
		Term condition = visitExpression(stmt.getCondition(), data);
		return WY_ASSERT(condition);
	}

	@Override
	public Term visitBreak(Stmt.Break stmt, Object data) {
		return new JavaScriptFile.Break();
	}

	@Override
	public Term visitContinue(Stmt.Continue stmt, Object data) {
		return new JavaScriptFile.Continue();
	}

	@Override
	public Term visitDoWhile(Stmt.DoWhile stmt, Object data) {
		// Translation body
		Block body = visitBlock(stmt.getBody(), data);
		// Translate condition
		Term condition = visitExpression(stmt.getCondition(), data);
		// FIXME: loop invariants
		// Done
		return new DoWhile(body, condition);
	}

	@Override
	public Term visitFail(Stmt.Fail stmt, Object data) {
		return WY_ASSERT(new JavaScriptFile.Constant(false));
	}

	@Override
	public Term visitIfElse(Stmt.IfElse stmt, Object data) {
		ArrayList<IfElse.Case> cases = new ArrayList<>();
		// Translate true branch
		Term condition = visitExpression(stmt.getCondition(), data);
		Block trueBlock = visitBlock(stmt.getTrueBranch(), null);
		cases.add(new IfElse.Case(condition, trueBlock));
		// Translate false branch (if applicable)
		if (stmt.hasFalseBranch()) {
			Block falseBlock = visitBlock(stmt.getFalseBranch(), null);
			cases.add(new IfElse.Case(null, falseBlock));
		}
		return new JavaScriptFile.IfElse(cases);
	}

	@Override
	public Term visitNamedBlock(Stmt.NamedBlock stmt, Object data) {
		return visitBlock(stmt.getBlock(), data);
	}

	@Override
	public Term visitReturn(Stmt.Return stmt, Object data) {
		if(stmt.getReturns().size() > 0) {
			Term term = visitExpressions(stmt.getReturns(),data);
			return new JavaScriptFile.Return(term);
		} else {
			return new JavaScriptFile.Return();
		}
	}

	@Override
	public Term visitSwitch(Stmt.Switch stmt, Object data) {
		// NOTE: switches are challenging because we cannot necessarily translate a
		// Whiley switch directly as a JavaScript switch. This is because switches in
		// Whiley are valid for any datatype, whilst in JavaScript they are only valid
		// for integer types. Therefore, we must first identify which case we are in,
		// then handle them separately.
		boolean simple = subtyping.isSubtype(Type.Int,stmt.getCondition().getType(), EMPTY_LIFETIMES);
		//
		if(!simple) {
			// hard case
			return translateSwitchAsIfElse(stmt);
		} else {
			return translateSwitchAsSwitch(stmt);
		}

	}

	@Override
	public Term visitWhile(Stmt.While stmt, Object data) {
		// Translate condition
		Term condition = visitExpression(stmt.getCondition(), data);
		// Translation body
		Block body = visitBlock(stmt.getBody(), data);
		// FIXME: loop invariants
		// Done
		return new While(condition, body);
	}

	@Override
	public Term visitVariable(Decl.Variable stmt, Object data) {
		String name = stmt.getName().toString();
		if (stmt.hasInitialiser()) {
			Term initialiser = visitExpression(stmt.getInitialiser(), data);
			return new JavaScriptFile.VariableDeclaration(name,initialiser);
		} else {
			return new JavaScriptFile.VariableDeclaration(name);
		}
	}

	// ====================================================================================
	// Multi-Expressions
	// ====================================================================================

	@Override
	public Term visitExpressions(Tuple<Expr> exprs, Object data) {
		if(exprs.size() == 1) {
			// Easy case
			return visitExpression(exprs.get(0),data);
		} else  {
			// Hard cases
			ArrayList<Term> terms = new ArrayList<>();
			for (int i = 0; i != exprs.size(); ++i) {
				terms.add(visitExpression(exprs.get(i),data));
			}
			//
			if(allUnitExpressions(exprs)) {
				// Easier as direct mapping between expressions.
				return new JavaScriptFile.ArrayInitialiser(terms);
			} else {
				throw new UnsupportedOperationException();
			}
		}
	}

	// ====================================================================================
	// Expressions
	// ====================================================================================

	@Override
	public Term visitArrayAccess(Expr.ArrayAccess expr, Object data) {
		Term src = visitExpression(expr.getFirstOperand(),data);
		Term index = visitExpression(expr.getSecondOperand(),data);
		Term term = new JavaScriptFile.ArrayAccess(src, index);
		if(expr.isMove()) {
			return term;
		} else {
			return WY_COPY(term);
		}
	}

	@Override
	public Term visitArrayGenerator(Expr.ArrayGenerator expr, Object data) {
		Term value = visitExpression(expr.getFirstOperand(),data);
		Term length = visitExpression(expr.getSecondOperand(),data);
		return WY_ARRAY(value,length);
	}

	@Override
	public Term visitArrayInitialiser(Expr.ArrayInitialiser expr, Object data) {
		Term[] terms = translateOperands(expr.getOperands());
		return new JavaScriptFile.ArrayInitialiser(terms);
	}

	@Override
	public Term visitArrayLength(Expr.ArrayLength expr, Object data) {
		Term src = visitExpression(expr.getOperand(),data);
		return new JavaScriptFile.ArrayLength(src);
	}

	@Override
	public Term visitArrayRange(Expr.ArrayRange expr, Object data) {
		throw new UnsupportedOperationException();
	}

	@Override
	public Term visitBitwiseComplement(Expr.BitwiseComplement expr, Object data) {
		Term src = visitExpression(expr.getOperand(),data);
		return MASK_FF(new Operator(Kind.BITWISEINVERT,src));
	}

	@Override
	public Term visitBitwiseAnd(Expr.BitwiseAnd expr, Object data) {
		return translateInfixOperator(expr);
	}

	@Override
	public Term visitBitwiseOr(Expr.BitwiseOr expr, Object data) {
		return translateInfixOperator(expr);
	}

	@Override
	public Term visitBitwiseXor(Expr.BitwiseXor expr, Object data) {
		return translateInfixOperator(expr);
	}

	@Override
	public Term visitBitwiseShiftLeft(Expr.BitwiseShiftLeft expr, Object data) {
		return MASK_FF(translateInfixOperator(expr));
	}

	@Override
	public Term visitBitwiseShiftRight(Expr.BitwiseShiftRight expr, Object data) {
		return MASK_FF(translateInfixOperator(expr));
	}

	@Override
	public Term visitCast(Expr.Cast expr, Object data) {
		// FIXME: need to do much more here
		return visitExpression(expr.getOperand(),data);
	}

	@Override
	public Term visitDereference(Expr.Dereference expr, Object data) {
		Term term = visitExpression(expr.getOperand(),data);
		return WY_DEREF(term);
	}

	@Override
	public Term visitConstant(Expr.Constant expr, Object data) {
		Value val = expr.getValue();
		Object c;
		switch (val.getOpcode()) {
		case ITEM_null:
			c = null;
			break;
		case ITEM_bool:
			c = ((Value.Bool) val).get();
			break;
		case ITEM_byte:
			c = ((Value.Byte) val).get();
			break;
		case ITEM_int:
			// FIXME: broken for arbitrary precision integers.
			c = ((Value.Int) val).get().intValue();
			break;
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
		//
		return new JavaScriptFile.Constant(c);
	}

	@Override
	public Term visitEqual(Expr.Equal expr, Object data) {
		Type lhsT = expr.getFirstOperand().getType();
		Type rhsT = expr.getSecondOperand().getType();
		Term lhs = visitExpression(expr.getFirstOperand(),data);
		Term rhs = visitExpression(expr.getSecondOperand(),data);
		return translateEquality(true, lhs, lhsT, rhs, rhsT);
	}

	@Override
	public Term visitNotEqual(Expr.NotEqual expr, Object data) {
		Type lhsT = expr.getFirstOperand().getType();
		Type rhsT = expr.getSecondOperand().getType();
		Term lhs = visitExpression(expr.getFirstOperand(),data);
		Term rhs = visitExpression(expr.getSecondOperand(),data);
		return translateEquality(false, lhs, lhsT, rhs, rhsT);
	}


	@Override
	public Term visitIntegerAddition(Expr.IntegerAddition expr, Object data) {
		return translateInfixOperator(expr);
	}

	@Override
	public Term visitIntegerDivision(Expr.IntegerDivision expr, Object data) {
		return MATH_FLOOR(translateInfixOperator(expr));
	}

	@Override
	public Term visitIntegerRemainder(Expr.IntegerRemainder expr, Object data) {
		return translateInfixOperator(expr);
	}

	@Override
	public Term visitIntegerGreaterThan(Expr.IntegerGreaterThan expr, Object data) {
		return translateInfixOperator(expr);
	}

	@Override
	public Term visitIntegerGreaterThanOrEqual(Expr.IntegerGreaterThanOrEqual expr, Object data) {
		return translateInfixOperator(expr);
	}

	@Override
	public Term visitIntegerLessThan(Expr.IntegerLessThan expr, Object data) {
		return translateInfixOperator(expr);
	}

	@Override
	public Term visitIntegerLessThanOrEqual(Expr.IntegerLessThanOrEqual expr, Object data) {
		return translateInfixOperator(expr);
	}

	@Override
	public Term visitIntegerMultiplication(Expr.IntegerMultiplication expr, Object data) {
		return translateInfixOperator(expr);
	}

	@Override
	public Term visitIntegerNegation(Expr.IntegerNegation expr, Object data) {
		Term t1 = visitExpression(expr.getOperand(),data);
		return new JavaScriptFile.Operator(Kind.NEG, t1);
	}

	@Override
	public Term visitIntegerSubtraction(Expr.IntegerSubtraction expr, Object data) {
		return translateInfixOperator(expr);
	}

	@Override
	public Term visitIs(Expr.Is expr, Object data) {
		throw new UnsupportedOperationException();
	}

	@Override
	public Term visitLogicalAnd(Expr.LogicalAnd expr, Object data) {
		return translateInfixOperator(expr);
	}

	@Override
	public Term visitLogicalImplication(Expr.LogicalImplication expr, Object data) {
		Term t1 = visitExpression(expr.getFirstOperand(), null);
		Term t2 = visitExpression(expr.getSecondOperand(), null);
		// A ==> B equivalent to (!A) || B
		return new JavaScriptFile.Operator(Kind.OR, new JavaScriptFile.Operator(Kind.NOT, t1), t2);
	}

	@Override public Term visitLogicalIff(Expr.LogicalIff expr, Object data) {
		return translateInfixOperator(expr);
	}

	@Override
	public Term visitLogicalNot(Expr.LogicalNot expr, Object data) {
		Term t1 = visitExpression(expr.getOperand(),data);
		return new JavaScriptFile.Operator(Kind.NOT, t1);
	}

	@Override
	public Term visitLogicalOr(Expr.LogicalOr expr, Object data) {
		return translateInfixOperator(expr);
	}

	@Override
	public Term visitExistentialQuantifier(Expr.ExistentialQuantifier expr, Object data) {
		return translateQuantifier(expr);
	}

	@Override
	public Term visitUniversalQuantifier(Expr.UniversalQuantifier expr, Object data) {
		return translateQuantifier(expr);
	}

	@Override
	public Term visitInvoke(Expr.Invoke expr, Object data) {
		// Determine the qualified name
		String name = toMangledName(expr.getLink().getTarget());
		// Translate arguments
		Term[] arguments = translateOperands(expr.getOperands());
		// Done
		return new JavaScriptFile.Invoke(null, name, arguments);
	}

	@Override
	public Term visitIndirectInvoke(Expr.IndirectInvoke expr, Object data) {
		Term src = visitExpression(expr.getSource(),data);
		Term[] args = translateOperands(expr.getArguments());
		return new IndirectInvoke(src,args);
	}

	@Override
	public Term visitLambda(Decl.Lambda expr, Object data) {
		List<String> parameters = toParameterNames(expr.getParameters());
		// Construct body
		Term term = visitExpression(expr.getBody(),data);
		Term body = new Return(term);
		//
		return new Lambda(parameters,new Block(body));
	}

	@Override
	public Term visitLambdaAccess(Expr.LambdaAccess expr, Object data) {
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
	public Term visitNew(Expr.New expr, Object data) {
		Term term = visitExpression(expr.getOperand(), data);
		return new Operator(Kind.NEW,WY_REF(term));
	}

	@Override
	public Term visitRecordAccess(Expr.RecordAccess expr, Object data) {
		Term term = visitExpression(expr.getOperand(), data);
		term = new JavaScriptFile.PropertyAccess(term, expr.getField().toString());
		if(expr.isMove()) {
			return term;
		} else {
			return WY_COPY(term);
		}
	}

	@Override
	public Term visitRecordInitialiser(Expr.RecordInitialiser expr, Object data) {
		// Translate intialiser operands
		Term[] terms = translateOperands(expr.getOperands());
		// Extract field names
		Tuple<Identifier> names = expr.getFields();
		ArrayList<Pair<String, Term>> fields = new ArrayList<>();
		//
		for (int i = 0; i != terms.length; ++i) {
			fields.add(new Pair<>(names.get(i).toString(), terms[i]));
		}
		return new JavaScriptFile.ObjectLiteral(fields);
	}

	@Override
	public Term visitRecordUpdate(Expr.RecordUpdate expr, Object data) {
		throw new UnsupportedOperationException();
	}

	@Override
	public Term visitStaticVariableAccess(Expr.StaticVariableAccess expr, Object data) {
		// FIXME: should copy data?
		String name = toMangledName(expr.getLink().getTarget());
		return new JavaScriptFile.VariableAccess(name);
	}

	@Override
	public Term visitVariableAccess(Expr.VariableAccess expr, Object data) {
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
	 * Translate a bunch of lvals correctly. The key challenge when translating an
	 * LVal is that we cannot clone the value.
	 *
	 * @param lvals
	 * @return
	 */
	public Term[] translateLVals(Tuple<LVal> lvals) {
		Term[] terms = new Term[lvals.size()];
		for (int i = 0; i != terms.length; ++i) {
			terms[i] = translateLVal(lvals.get(i));
		}
		return terms;
	}

	/**
	 * Translate an LVal. For example, the following Whiley code:
	 *
	 * <pre>
	 * x[0] = 2
	 * r.f = 3
	 * </pre>
	 *
	 * is translated into the following JavaScript code:
	 *
	 * <pre>
	 * x[0] = 2;
	 * r.f = 3;
	 * </pre>
	 *
	 * This seems straightforward, but there are some subtleties regarding the
	 * semantics of Whiley. A key invariant maintained by the system is that each
	 * variable owns the items it refers to. Thus, we can avoid cloning at this
	 * point to preserve Whiley's semantics because we know the cloning has already
	 * occurred somewhere upstream (where necessary).
	 *
	 * @param lval
	 * @return
	 */
	public Term translateLVal(LVal lval) {
		switch (lval.getOpcode()) {
		case EXPR_arrayaccess:
		case EXPR_arrayborrow: {
			Expr.ArrayAccess e = (Expr.ArrayAccess) lval;
			Term src = translateLVal((WyilFile.LVal) e.getFirstOperand());
			Term index = visitExpression(e.getSecondOperand(),null);
			return new ArrayAccess(src,index);
		}
		case EXPR_dereference: {
			Expr.Dereference e = (Expr.Dereference) lval;
			Term src = translateLVal((WyilFile.LVal) e.getOperand());
			return new PropertyAccess(src,"$ref");
		}
		case EXPR_recordaccess:
		case EXPR_recordborrow: {
			Expr.RecordAccess e = (Expr.RecordAccess) lval;
			Term src = translateLVal((WyilFile.LVal) e.getOperand());
			return new PropertyAccess(src,e.getField().toString());
		}
		case EXPR_variablecopy:
		case EXPR_variablemove: {
			Expr.VariableAccess e = (Expr.VariableAccess) lval;
			return new VariableAccess(e.getVariableDeclaration().getName().toString());
		}
		default:
			throw new IllegalArgumentException("invalid lval: " + lval);
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
	private Term translateSwitchAsSwitch(Stmt.Switch stmt) {
		// Easy case --- direct translation possible.
		Term condition = visitExpression(stmt.getCondition(), null);
		// Translate each case one-by-one.
		Tuple<Stmt.Case> wycases = stmt.getCases();
		ArrayList<Switch.Case> jscases = new ArrayList<>();
		for (int i = 0; i != wycases.size(); ++i) {
			// NOTE: one case in Whiley can correspond to multiple cases in JavaScript.
			// That's because Whiley allows multiple values per case.
			Stmt.Case wycase = wycases.get(i);
			// Translate the operands
			Term[] values = translateOperands(wycase.getConditions());
			// Translate case body
			Block body = visitBlock(wycase.getBlock(), null);
			// Add terminal break since Whiley doesn't use them
			body.getTerms().add(new Break());
			// Check for default case
			if (values.length == 0) {
				jscases.add(new Switch.Case(null, body));
			} else {
				// Handle all fall-thru cases first.
				for (int j = 1; j != values.length; ++j) {
					jscases.add(new Switch.Case(values[j - 1], null));
				}
				// Handle content case finally
				jscases.add(new Switch.Case(values[values.length - 1], body));
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
	private Term translateSwitchAsIfElse(Stmt.Switch stmt) {
		Type conditionT = stmt.getCondition().getType();
		Term condition = visitExpression(stmt.getCondition(),null);
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
			// Translate the operands
			Tuple<Expr> values = wycase.getConditions();
			// Translate case body
			Block body = visitBlock(wycase.getBlock(), null);
			// Check for default case
			if (values.size() == 0) {
				jscases.add(new IfElse.Case(null, body));
			} else {
				Term[] eqs = new Term[values.size()];
				// Construct disjunction of cases
				for (int j = 0; j != eqs.length; ++j) {
					Expr value = values.get(j);
					Term term = visitExpression(value, null);
					eqs[j] = translateEquality(true, tmp, conditionT, term, value.getType());
				}
				Term c = eqs.length == 1 ? eqs[0] : new Operator(Kind.OR, eqs);
				// Handle content case finally
				jscases.add(new IfElse.Case(c, body));
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
	private Term translateQuantifier(Expr.Quantifier expr) {
		boolean isUniversal = expr instanceof Expr.UniversalQuantifier;
		// Translate quantifier into loop nest
		Term body = translateQuantifier(expr,0);
		// Construct final return statement
		Term ret = new Return(new Constant(isUniversal));
		// Construct lambda itself
		Term lambda = new Lambda(Collections.EMPTY_LIST, new Block(body,ret));
		// Return invocation of lambda
		return new JavaScriptFile.IndirectInvoke(lambda);
	}

	private Term translateQuantifier(Expr.Quantifier expr, int index) {
		boolean isUniversal = expr instanceof Expr.UniversalQuantifier;
		Tuple<Decl.Variable> parameters = expr.getParameters();
		// Generate nest
		if(parameters.size() == index) {
			// Base case
			Term condition = visitExpression(expr.getOperand(),null);
			Term body = new Return(new Constant(!isUniversal));
			if(isUniversal) {
				condition = new Operator(Kind.NOT, condition);
			}
			return new IfElse(new IfElse.Case(condition, new Block(body)));
		} else {
			// Recursive case
			Decl.Variable v = parameters.get(index);
			// Quantifiers always use array ranges at this time.
			Expr.ArrayRange r = (Expr.ArrayRange) v.getInitialiser();
			// Translate start and end
			Term start = visitExpression(r.getFirstOperand(),null);
			Term end = visitExpression(r.getSecondOperand(),null);
			//
			VariableAccess var = new VariableAccess(v.getName().toString());
			VariableDeclaration decl = new VariableDeclaration(var.getName(),start);
			Term condition = new Operator(Kind.LT,var,end);
			Term increment = new Assignment(var, new Operator(Kind.ADD,var,new Constant(1)));
			Term body = translateQuantifier(expr,index+1);
			//
			return new JavaScriptFile.For(decl, condition, increment, new Block(body));
		}
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
	 * Translate an arbitrary binary operator, assuming that it is safe to do so.
	 *
	 * @param expr
	 * @param context
	 * @return
	 */
	private Term translateInfixOperator(Expr.BinaryOperator expr) {
		Term t1 = visitExpression(expr.getFirstOperand(), null);
		Term t2 = visitExpression(expr.getSecondOperand(), null);
		return new JavaScriptFile.Operator(opcode(expr.getOpcode()), t1, t2);
	}

	/**
	 * Translate an arbitrary n-ary operator, assuming that it is safe to do so.
	 *
	 * @param expr
	 * @return
	 */
	private Term translateInfixOperator(Expr.NaryOperator expr) {
		Term[] operands = translateOperands(expr.getOperands());
		return new JavaScriptFile.Operator(opcode(expr.getOpcode()), operands);
	}

	/**
	 * Translate zero or more Whiley expressions into the corresponding JavaScript
	 * terms.
	 *
	 * @param operands
	 * @return
	 */
	private Term[] translateOperands(Tuple<? extends Expr> operands) {
		Term[] terms = new Term[operands.size()];
		for(int i=0;i!=terms.length;++i) {
			terms[i] = visitExpression(operands.get(i),null);
		}
		return terms;
	}

	/**
	 * Translate between a While operator and a JavaScript operator. Observe that
	 * this is not always safe to do, and care must be taken. For example, addition
	 * in Whiley is not equivalent to addition in JavaScript (i.e. because the
	 * former is unbounded). Likewise, equality is not always equivalent (i.e.
	 * because equality of compound types is handled differently).
	 *
	 * @param k
	 * @return
	 */
	private static Kind opcode(int k) {
		switch(k) {
		case EXPR_integernegation:
			return Kind.NEG;
		case EXPR_logicalnot:
			return Kind.NOT;
		case EXPR_bitwisenot:
			return Kind.BITWISEINVERT;
		// Binary
		case EXPR_integeraddition:
			return Kind.ADD;
		case EXPR_integersubtraction:
			return Kind.SUB;
		case EXPR_integermultiplication:
			return Kind.MUL;
		case EXPR_integerdivision:
			return Kind.DIV;
		case EXPR_integerremainder:
			return Kind.REM;
		case EXPR_equal:
			return Kind.EQ;
		case EXPR_notequal:
			return Kind.NEQ;
		case EXPR_integerlessthan:
			return Kind.LT;
		case EXPR_integerlessequal:
			return Kind.LTEQ;
		case EXPR_integergreaterthan:
			return Kind.GT;
		case EXPR_integergreaterequal:
			return Kind.GTEQ;
		case EXPR_logicaland:
			return Kind.AND;
		case EXPR_logicalor:
			return Kind.OR;
		case EXPR_logicaliff:
			return Kind.EQ;
		case EXPR_bitwiseor:
			return Kind.BITWISEOR;
		case EXPR_bitwisexor:
			return Kind.BITWISEXOR;
		case EXPR_bitwiseand:
			return Kind.BITWISEAND;
		case EXPR_bitwiseshl:
			return Kind.LEFTSHIFT;
		case EXPR_bitwiseshr:
			return Kind.RIGHTSHIFT;
		default:
			throw new IllegalArgumentException("unknown operator kind : " + k);
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
