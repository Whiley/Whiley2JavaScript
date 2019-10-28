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
package wyjs.util;

import static wyil.lang.WyilFile.DECL_function;
import static wyil.lang.WyilFile.DECL_import;
import static wyil.lang.WyilFile.DECL_importfrom;
import static wyil.lang.WyilFile.DECL_importwith;
import static wyil.lang.WyilFile.DECL_lambda;
import static wyil.lang.WyilFile.DECL_method;
import static wyil.lang.WyilFile.DECL_property;
import static wyil.lang.WyilFile.DECL_rectype;
import static wyil.lang.WyilFile.DECL_staticvar;
import static wyil.lang.WyilFile.DECL_type;
import static wyil.lang.WyilFile.DECL_unit;
import static wyil.lang.WyilFile.DECL_variable;
import static wyil.lang.WyilFile.DECL_variableinitialiser;
import static wyil.lang.WyilFile.EXPR_arrayaccess;
import static wyil.lang.WyilFile.EXPR_arrayborrow;
import static wyil.lang.WyilFile.EXPR_arraygenerator;
import static wyil.lang.WyilFile.EXPR_arrayinitialiser;
import static wyil.lang.WyilFile.EXPR_arraylength;
import static wyil.lang.WyilFile.EXPR_arrayrange;
import static wyil.lang.WyilFile.EXPR_arrayupdate;
import static wyil.lang.WyilFile.EXPR_bitwiseand;
import static wyil.lang.WyilFile.EXPR_bitwisenot;
import static wyil.lang.WyilFile.EXPR_bitwiseor;
import static wyil.lang.WyilFile.EXPR_bitwiseshl;
import static wyil.lang.WyilFile.EXPR_bitwiseshr;
import static wyil.lang.WyilFile.EXPR_bitwisexor;
import static wyil.lang.WyilFile.EXPR_cast;
import static wyil.lang.WyilFile.EXPR_constant;
import static wyil.lang.WyilFile.EXPR_dereference;
import static wyil.lang.WyilFile.EXPR_fielddereference;
import static wyil.lang.WyilFile.EXPR_equal;
import static wyil.lang.WyilFile.EXPR_indirectinvoke;
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
import static wyil.lang.WyilFile.EXPR_invoke;
import static wyil.lang.WyilFile.EXPR_is;
import static wyil.lang.WyilFile.EXPR_lambdaaccess;
import static wyil.lang.WyilFile.EXPR_logiaclimplication;
import static wyil.lang.WyilFile.EXPR_logicaland;
import static wyil.lang.WyilFile.EXPR_logicalexistential;
import static wyil.lang.WyilFile.EXPR_logicaliff;
import static wyil.lang.WyilFile.EXPR_logicalnot;
import static wyil.lang.WyilFile.EXPR_logicalor;
import static wyil.lang.WyilFile.EXPR_logicaluniversal;
import static wyil.lang.WyilFile.EXPR_new;
import static wyil.lang.WyilFile.EXPR_notequal;
import static wyil.lang.WyilFile.EXPR_recordaccess;
import static wyil.lang.WyilFile.EXPR_recordborrow;
import static wyil.lang.WyilFile.EXPR_recordinitialiser;
import static wyil.lang.WyilFile.EXPR_recordupdate;
import static wyil.lang.WyilFile.EXPR_staticnew;
import static wyil.lang.WyilFile.EXPR_staticvariable;
import static wyil.lang.WyilFile.EXPR_variablecopy;
import static wyil.lang.WyilFile.EXPR_variablemove;
import static wyil.lang.WyilFile.STMT_assert;
import static wyil.lang.WyilFile.STMT_assign;
import static wyil.lang.WyilFile.STMT_assume;
import static wyil.lang.WyilFile.STMT_block;
import static wyil.lang.WyilFile.STMT_break;
import static wyil.lang.WyilFile.STMT_continue;
import static wyil.lang.WyilFile.STMT_debug;
import static wyil.lang.WyilFile.STMT_dowhile;
import static wyil.lang.WyilFile.STMT_fail;
import static wyil.lang.WyilFile.STMT_if;
import static wyil.lang.WyilFile.STMT_ifelse;
import static wyil.lang.WyilFile.STMT_namedblock;
import static wyil.lang.WyilFile.STMT_return;
import static wyil.lang.WyilFile.STMT_skip;
import static wyil.lang.WyilFile.STMT_switch;
import static wyil.lang.WyilFile.STMT_while;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import wyal.util.NameResolver.ResolutionError;
import wybs.util.AbstractCompilationUnit.Identifier;
import wybs.util.AbstractCompilationUnit.Tuple;
import wycc.util.ArrayUtils;
import wycc.util.Pair;
import wyil.lang.WyilFile;
import wyil.lang.WyilFile.Decl;
import wyil.lang.WyilFile.Expr;
import wyil.lang.WyilFile.LVal;
import wyil.lang.WyilFile.Stmt;
import wyil.lang.WyilFile.Type;
import wyil.util.SubtypeOperator;
import wyil.util.AbstractTypedVisitor.Environment;
import wyil.util.SubtypeOperator.LifetimeRelation;

/**
 * A more complex visitor over all declarations, statements, expressions and
 * types in a given WhileyFile which accepts no additional data parameters and
 * returns nothing. The intention is that this is extended as necessary to
 * provide custom functionality. The key distinction from
 * <code>AbstractVisitor</code> is that this produces <i>concrete</i> type
 * information for all expressions based on a downward propagation (i.e.
 * propagating from assigned locations down through expressions). This gives a
 * more accurate view of type information and allows, for example, ambiguous
 * coercions to be detetected.
 *
 * @author David J. Pearce
 *
 */
public abstract class AbstractTranslator<S> {
	protected final SubtypeOperator subtypeOperator;

	public AbstractTranslator(SubtypeOperator subtypeOperator) {
		this.subtypeOperator = subtypeOperator;
	}

	public S visitDeclaration(Decl decl) {
		switch (decl.getOpcode()) {
		case DECL_unit:
			return visitUnit((Decl.Unit) decl);
		case DECL_importwith:
		case DECL_importfrom:
		case DECL_import:
			return visitImport((Decl.Import) decl);
		case DECL_staticvar:
			return visitStaticVariable((Decl.StaticVariable) decl);
		case DECL_type:
		case DECL_rectype:
			return visitType((Decl.Type) decl);
		case DECL_function:
		case DECL_method:
		case DECL_property:
			return visitCallable((Decl.Callable) decl);
		default:
			throw new IllegalArgumentException("unknown declaration encountered (" + decl.getClass().getName() + ")");
		}
	}

	public S visitUnit(Decl.Unit unit) {
		for (Decl decl : unit.getDeclarations()) {
			visitDeclaration(decl);
		}
		return null;
	}

	public S visitImport(Decl.Import decl) {
		return constructImport(decl);
	}

	public S visitLambda(Decl.Lambda decl, Environment environment) {
		// Redeclare this within
		environment = environment.declareWithin("this", decl.getLifetimes());
		//
		S body = visitExpression(decl.getBody(), decl.getType(), environment);
		return constructLambda(decl,body);
	}

	public S visitVariable(Decl.Variable decl, Environment environment) {
		S initialiser = null;
		if (decl.hasInitialiser()) {
			initialiser = visitExpression(decl.getInitialiser(), decl.getType(), environment);
		}
		return constructVariable(decl,initialiser);
	}

	public S visitStaticVariable(Decl.StaticVariable decl) {
		S initialiser = null;
		if (decl.hasInitialiser()) {
			Environment environment = new Environment();
			initialiser = visitExpression(decl.getInitialiser(), decl.getType(), environment);
		}
		return constructStaticVariable(decl,initialiser);
	}

	public S visitType(Decl.Type decl) {
		Environment environment = new Environment();
		List<S> invariant = visitExpressions(decl.getInvariant(), Type.Bool, environment);
		return constructType(decl, invariant);
	}

	public S visitCallable(Decl.Callable decl) {
		switch (decl.getOpcode()) {
		case DECL_function:
		case DECL_method:
			return visitFunctionOrMethod((Decl.FunctionOrMethod) decl);
		case DECL_property:
			return visitProperty((Decl.Property) decl);
		default:
			throw new IllegalArgumentException("unknown declaration encountered (" + decl.getClass().getName() + ")");
		}
	}

	public S visitFunctionOrMethod(Decl.FunctionOrMethod decl) {
		switch (decl.getOpcode()) {
		case DECL_function:
			return visitFunction((Decl.Function) decl);
		case DECL_method:
			return visitMethod((Decl.Method) decl);
		default:
			throw new IllegalArgumentException("unknown declaration encountered (" + decl.getClass().getName() + ")");
		}
	}

	public S visitProperty(Decl.Property decl) {
		Environment environment = new Environment();
		List<S> clauses = visitExpressions(decl.getInvariant(), Type.Bool, environment);
		return constructProperty(decl,clauses);
	}

	public S visitFunction(Decl.Function decl) {
		Environment environment = new Environment();
		List<S> precondition = visitExpressions(decl.getRequires(), Type.Bool, environment);
		List<S> postcondition = visitExpressions(decl.getEnsures(), Type.Bool, environment);
		S body = visitBlock(decl.getBody(), environment, new FunctionOrMethodScope(decl));
		return constructFunction(decl,precondition,postcondition,body);
	}

	public S visitMethod(Decl.Method decl) {
		// Construct environment relation
		Environment environment = new Environment();
		environment = environment.declareWithin("this", decl.getLifetimes());
		//
		List<S> precondition = visitExpressions(decl.getRequires(), Type.Bool, environment);
		List<S> postcondition = visitExpressions(decl.getEnsures(), Type.Bool, environment);
		S body = visitBlock(decl.getBody(), environment, new FunctionOrMethodScope(decl));
		return constructMethod(decl,precondition,postcondition,body);
	}

	public S visitStatement(Stmt stmt, Environment environment, EnclosingScope scope) {
		switch (stmt.getOpcode()) {
		case DECL_variable:
		case DECL_variableinitialiser:
			return visitVariable((Decl.Variable) stmt, environment);
		case STMT_assert:
			return visitAssert((Stmt.Assert) stmt, environment, scope);
		case STMT_assign:
			return visitAssign((Stmt.Assign) stmt, environment, scope);
		case STMT_assume:
			return visitAssume((Stmt.Assume) stmt, environment, scope);
		case STMT_block:
			return visitBlock((Stmt.Block) stmt, environment, scope);
		case STMT_break:
			return visitBreak((Stmt.Break) stmt, environment, scope);
		case STMT_continue:
			return visitContinue((Stmt.Continue) stmt, environment, scope);
		case STMT_debug:
			return visitDebug((Stmt.Debug) stmt, environment, scope);
		case STMT_dowhile:
			return visitDoWhile((Stmt.DoWhile) stmt, environment, scope);
		case STMT_fail:
			return visitFail((Stmt.Fail) stmt, environment, scope);
		case STMT_if:
		case STMT_ifelse:
			return visitIfElse((Stmt.IfElse) stmt, environment, scope);
		case EXPR_invoke:
			return visitInvoke((Expr.Invoke) stmt, new Tuple<>(), environment);
		case EXPR_indirectinvoke:
			return visitIndirectInvoke((Expr.IndirectInvoke) stmt, new Tuple<>(), environment);
		case STMT_namedblock:
			return visitNamedBlock((Stmt.NamedBlock) stmt, environment, scope);
		case STMT_return:
			return visitReturn((Stmt.Return) stmt, environment, scope);
		case STMT_skip:
			return visitSkip((Stmt.Skip) stmt, environment, scope);
		case STMT_switch:
			return visitSwitch((Stmt.Switch) stmt, environment, scope);
		case STMT_while:
			return visitWhile((Stmt.While) stmt, environment, scope);
		default:
			throw new IllegalArgumentException("unknown statement encountered (" + stmt.getClass().getName() + ")");
		}
	}

	public S visitAssert(Stmt.Assert stmt, Environment environment, EnclosingScope scope) {
		S operand = visitExpression(stmt.getCondition(), Type.Bool, environment);
		return constructAssert(stmt,operand);
	}

	public S visitAssign(Stmt.Assign stmt, Environment environment, EnclosingScope scope) {
		Tuple<Type> targets = stmt.getLeftHandSide().map((LVal l) -> l.getType());
		List<S> lvals = visitLVals(stmt.getLeftHandSide(), environment, scope);
		List<S> rvals = visitExpressions(stmt.getRightHandSide(), targets, environment);
		return constructAssign(stmt,lvals,rvals);
	}

	public List<S> visitLVals(Tuple<LVal> lvals, Environment environment, EnclosingScope scope) {
		ArrayList<S> ls = new ArrayList<>();
		for (int i = 0; i != lvals.size(); ++i) {
			LVal lval = lvals.get(i);
			ls.add(visitLVal(lval, environment));
		}
		return ls;
	}

	public S visitLVal(LVal lval, Environment environment) {
		switch (lval.getOpcode()) {
		case EXPR_arrayaccess:
		case EXPR_arrayborrow: {
			Expr.ArrayAccess e = (Expr.ArrayAccess) lval;
			S src = visitLVal((WyilFile.LVal) e.getFirstOperand(), environment);
			S index = visitExpression(e.getSecondOperand(), Type.Int, environment);
			return constructArrayAccessLVal(e,src,index);
		}
		case EXPR_dereference: {
			Expr.Dereference e = (Expr.Dereference) lval;
			S src = visitLVal((WyilFile.LVal) e.getOperand(), environment);
			return constructDereferenceLVal(e,src);
		}
		case EXPR_fielddereference: {
			Expr.FieldDereference e = (Expr.FieldDereference) lval;
			S src = visitLVal((WyilFile.LVal) e.getOperand(), environment);
			return constructFieldDereferenceLVal(e,src);
		}
		case EXPR_recordaccess:
		case EXPR_recordborrow: {
			Expr.RecordAccess e = (Expr.RecordAccess) lval;
			S src = visitLVal((WyilFile.LVal) e.getOperand(), environment);
			return constructRecordAccessLVal(e,src);
		}
		case EXPR_variablecopy:
		case EXPR_variablemove: {
			Expr.VariableAccess e = (Expr.VariableAccess) lval;
			return constructVariableAccessLVal(e);
		}
		default:
			throw new IllegalArgumentException("invalid lval: " + lval);
		}
	}

	public S visitAssume(Stmt.Assume stmt, Environment environment, EnclosingScope scope) {
		S operand = visitExpression(stmt.getCondition(), Type.Bool, environment);
		return constructAssume(stmt,operand);
	}

	public S visitBlock(Stmt.Block stmt, Environment environment, EnclosingScope scope) {
		ArrayList<S> stmts = new ArrayList<>();
		for (int i = 0; i != stmt.size(); ++i) {
			S s = visitStatement(stmt.get(i), environment, scope);
			if(s != null) {
				stmts.add(s);
			}
		}
		return constructBlock(stmt, stmts);
	}

	public S visitBreak(Stmt.Break stmt, Environment environment, EnclosingScope scope) {
		return constructBreak(stmt);
	}

	public S visitContinue(Stmt.Continue stmt, Environment environment, EnclosingScope scope) {
		return constructContinue(stmt);
	}

	public S visitDebug(Stmt.Debug stmt, Environment environment, EnclosingScope scope) {
		// FIXME: Should be Type.Int(0,255)
		Type std_ascii = new Type.Array(Type.Int);
		S operand = visitExpression(stmt.getOperand(), std_ascii, environment);
		return constructDebug(stmt,operand);
	}

	public S visitDoWhile(Stmt.DoWhile stmt, Environment environment, EnclosingScope scope) {
		S body = visitStatement(stmt.getBody(), environment, scope);
		S condition = visitExpression(stmt.getCondition(), Type.Bool, environment);
		List<S> invariant = visitExpressions(stmt.getInvariant(), Type.Bool, environment);
		return constructDoWhile(stmt, body, condition, invariant);
	}

	public S visitFail(Stmt.Fail stmt, Environment environment, EnclosingScope scope) {
		return constructFail(stmt);
	}

	public S visitIfElse(Stmt.IfElse stmt, Environment environment, EnclosingScope scope) {
		S condition = visitExpression(stmt.getCondition(), Type.Bool, environment);
		S trueBranch = visitStatement(stmt.getTrueBranch(), environment, scope);
		S falseBranch = null;
		if (stmt.hasFalseBranch()) {
			falseBranch = visitStatement(stmt.getFalseBranch(), environment, scope);
		}
		return constructIfElse(stmt, condition, trueBranch, falseBranch);
	}

	public S visitNamedBlock(Stmt.NamedBlock stmt, Environment environment, EnclosingScope scope) {
		Stmt.Block blk = stmt.getBlock();
		// Updated the environment with new within relations
		LifetimeDeclaration enclosing = scope.getEnclosingScope(LifetimeDeclaration.class);
		String[] lifetimes = enclosing.getDeclaredLifetimes();
		environment = environment.declareWithin(stmt.getName().get(), lifetimes);
		// Create an appropriate scope for this block
		scope = new NamedBlockScope(scope, stmt);
		//
		ArrayList<S> stmts = new ArrayList<>();
		for (int i = 0; i != blk.size(); ++i) {
			stmts.add(visitStatement(blk.get(i), environment, scope));
		}
		//
		return constructNamedBlock(stmt,stmts);
	}

	public S visitReturn(Stmt.Return stmt, Environment environment, EnclosingScope scope) {
		Decl.FunctionOrMethod enclosing = stmt.getAncestor(Decl.FunctionOrMethod.class);
		List<S> returns = visitExpressions(stmt.getReturns(), enclosing.getType().getReturns(), environment);
		return constructReturn(stmt,returns);
	}

	public S visitSkip(Stmt.Skip stmt, Environment environment, EnclosingScope scope) {
		return constructSkip(stmt);
	}

	public S visitSwitch(Stmt.Switch stmt, Environment environment, EnclosingScope scope) {
		Type target = stmt.getCondition().getType();
		S condition = visitExpression(stmt.getCondition(), target, environment);
		Tuple<Stmt.Case> cases = stmt.getCases();
		ArrayList<Pair<List<S>,S>> cs = new ArrayList<>();
		for (int i = 0; i != cases.size(); ++i) {
			cs.add(visitCase(cases.get(i), target, environment, scope));
		}
		return constructSwitch(stmt,condition,cs);
	}

	public Pair<List<S>,S> visitCase(Stmt.Case stmt, Type target, Environment environment, EnclosingScope scope) {
		List<S> conditions = visitExpressions(stmt.getConditions(), target, environment);
		S body = visitStatement(stmt.getBlock(), environment, scope);
		return new Pair<>(conditions,body);
	}

	public S visitWhile(Stmt.While stmt, Environment environment, EnclosingScope scope) {
		S condition = visitExpression(stmt.getCondition(), Type.Bool, environment);
		List<S> invariant = visitExpressions(stmt.getInvariant(), Type.Bool, environment);
		S body = visitStatement(stmt.getBody(), environment, scope);
		return constructWhile(stmt,condition,invariant,body);
	}

	public List<S> visitExpressions(Tuple<Expr> exprs, Tuple<Type> targets, Environment environment) {
		int j = 0;
		ArrayList<S> returns = new ArrayList<>();
		for (int i = 0; i != exprs.size(); ++i) {
			Expr e = exprs.get(i);
			// Handle multi expressions
			if (e.getTypes() != null) {
				int len = e.getTypes().size();
				Tuple<Type> types = targets.get(j, j + len);
				returns.add(visitMultiExpression(e, types, environment));
				j = j + len;
			} else {
				// Default to single expression
				returns.add(visitExpression(e, targets.get(j), environment));
				j = j + 1;
			}
		}
		return returns;
	}

	public List<S> visitExpressions(Tuple<Expr> exprs, Type target, Environment environment) {
		ArrayList<S> results = new ArrayList<>();
		for (int i = 0; i != exprs.size(); ++i) {
			results.add(visitExpression(exprs.get(i), target, environment));
		}
		return results;
	}

	public S visitMultiExpression(Expr expr, Tuple<Type> types, Environment environment) {
		if (expr instanceof Expr.Invoke) {
			return visitInvoke((Expr.Invoke) expr, types, environment);
		} else {
			return visitIndirectInvoke((Expr.IndirectInvoke) expr, types, environment);
		}
	}

	/**
	 * Visit a given expression which is being assigned to a location of a given
	 * type.
	 *
	 * @param expr
	 * @param target
	 */
	public S visitExpression(Expr expr, Type target, Environment environment) {
		switch (expr.getOpcode()) {
		// Terminals
		case EXPR_constant:
			return visitConstant((Expr.Constant) expr, target, environment);
		case EXPR_indirectinvoke:
			return visitIndirectInvoke((Expr.IndirectInvoke) expr, new Tuple<>(target), environment);
		case EXPR_lambdaaccess:
			return visitLambdaAccess((Expr.LambdaAccess) expr, target, environment);
		case DECL_lambda:
			return visitLambda((Decl.Lambda) expr, environment);
		case EXPR_staticvariable:
			return visitStaticVariableAccess((Expr.StaticVariableAccess) expr, target, environment);
		case EXPR_variablecopy:
		case EXPR_variablemove:
			return visitVariableAccess((Expr.VariableAccess) expr, target, environment);
		// Unary Operators
		case EXPR_cast:
		case EXPR_integernegation:
		case EXPR_is:
		case EXPR_logicalnot:
		case EXPR_logicalexistential:
		case EXPR_logicaluniversal:
		case EXPR_bitwisenot:
		case EXPR_dereference:
		case EXPR_fielddereference:
		case EXPR_staticnew:
		case EXPR_new:
		case EXPR_recordaccess:
		case EXPR_recordborrow:
		case EXPR_arraylength:
			return visitUnaryOperator((Expr.UnaryOperator) expr, target, environment);
		// Binary Operators
		case EXPR_logiaclimplication:
		case EXPR_logicaliff:
		case EXPR_equal:
		case EXPR_notequal:
		case EXPR_integerlessthan:
		case EXPR_integerlessequal:
		case EXPR_integergreaterthan:
		case EXPR_integergreaterequal:
		case EXPR_integeraddition:
		case EXPR_integersubtraction:
		case EXPR_integermultiplication:
		case EXPR_integerdivision:
		case EXPR_integerremainder:
		case EXPR_bitwiseshl:
		case EXPR_bitwiseshr:
		case EXPR_arrayaccess:
		case EXPR_arrayborrow:
		case EXPR_arrayrange:
		case EXPR_recordupdate:
		case EXPR_arraygenerator:
			return visitBinaryOperator((Expr.BinaryOperator) expr, target, environment);
		// Nary Operators
		case EXPR_logicaland:
		case EXPR_logicalor:
		case EXPR_invoke:
		case EXPR_bitwiseand:
		case EXPR_bitwiseor:
		case EXPR_bitwisexor:
		case EXPR_arrayinitialiser:
		case EXPR_recordinitialiser:
			return visitNaryOperator((Expr.NaryOperator) expr, target, environment);
		// Ternary Operators
		case EXPR_arrayupdate:
			return visitTernaryOperator((Expr.TernaryOperator) expr, target, environment);
		default:
			throw new IllegalArgumentException("unknown expression encountered (" + expr.getClass().getName() + ")");
		}
	}

	public S visitUnaryOperator(Expr.UnaryOperator expr, Type target, Environment environment) {
		switch (expr.getOpcode()) {
		// Unary Operators
		case EXPR_cast:
			return visitCast((Expr.Cast) expr, target, environment);
		case EXPR_integernegation: {
			Type.Int intT = selectInt(target, expr, environment);
			return visitIntegerNegation((Expr.IntegerNegation) expr, intT, environment);
		}
		case EXPR_is:
			return visitIs((Expr.Is) expr, environment);
		case EXPR_logicalnot:
			return visitLogicalNot((Expr.LogicalNot) expr, environment);
		case EXPR_logicalexistential:
			return visitExistentialQuantifier((Expr.ExistentialQuantifier) expr, environment);
		case EXPR_logicaluniversal:
			return visitUniversalQuantifier((Expr.UniversalQuantifier) expr, environment);
		case EXPR_bitwisenot:
			return visitBitwiseComplement((Expr.BitwiseComplement) expr, environment);
		case EXPR_dereference:
			return visitDereference((Expr.Dereference) expr, target, environment);
		case EXPR_fielddereference:
			return visitFieldDereference((Expr.FieldDereference) expr, target, environment);
		case EXPR_staticnew:
		case EXPR_new: {
			Type.Reference refT = selectReference(target, expr, environment);
			return visitNew((Expr.New) expr, refT, environment);
		}
		case EXPR_recordaccess:
		case EXPR_recordborrow:
			return visitRecordAccess((Expr.RecordAccess) expr, target, environment);
		case EXPR_arraylength: {
			Type.Int intT = selectInt(target, expr, environment);
			return visitArrayLength((Expr.ArrayLength) expr, intT, environment);
		}
		default:
			throw new IllegalArgumentException("unknown expression encountered (" + expr.getClass().getName() + ")");
		}
	}

	public S visitBinaryOperator(Expr.BinaryOperator expr, Type target, Environment environment) {
		switch (expr.getOpcode()) {
		// Binary Operators
		case EXPR_equal:
			return visitEqual((Expr.Equal) expr, environment);
		case EXPR_notequal:
			return visitNotEqual((Expr.NotEqual) expr, environment);
		case EXPR_logiaclimplication:
			return visitLogicalImplication((Expr.LogicalImplication) expr, environment);
		case EXPR_logicaliff:
			return visitLogicalIff((Expr.LogicalIff) expr, environment);
		case EXPR_integerlessthan:
			return visitIntegerLessThan((Expr.IntegerLessThan) expr, environment);
		case EXPR_integerlessequal:
			return visitIntegerLessThanOrEqual((Expr.IntegerLessThanOrEqual) expr, environment);
		case EXPR_integergreaterthan:
			return visitIntegerGreaterThan((Expr.IntegerGreaterThan) expr, environment);
		case EXPR_integergreaterequal:
			return visitIntegerGreaterThanOrEqual((Expr.IntegerGreaterThanOrEqual) expr, environment);
		case EXPR_integeraddition: {
			Type.Int intT = selectInt(target, expr, environment);
			return visitIntegerAddition((Expr.IntegerAddition) expr, intT, environment);
		}
		case EXPR_integersubtraction: {
			Type.Int intT = selectInt(target, expr, environment);
			return visitIntegerSubtraction((Expr.IntegerSubtraction) expr, intT, environment);
		}
		case EXPR_integermultiplication: {
			Type.Int intT = selectInt(target, expr, environment);
			return visitIntegerMultiplication((Expr.IntegerMultiplication) expr, intT, environment);
		}
		case EXPR_integerdivision: {
			Type.Int intT = selectInt(target, expr, environment);
			return visitIntegerDivision((Expr.IntegerDivision) expr, intT, environment);
		}
		case EXPR_integerremainder: {
			Type.Int intT = selectInt(target, expr, environment);
			return visitIntegerRemainder((Expr.IntegerRemainder) expr, intT, environment);
		}
		case EXPR_bitwiseshl:
			return visitBitwiseShiftLeft((Expr.BitwiseShiftLeft) expr, environment);
		case EXPR_bitwiseshr:
			return visitBitwiseShiftRight((Expr.BitwiseShiftRight) expr, environment);
		case EXPR_arraygenerator: {
			Type.Array arrayT = selectArray(target, expr, environment);
			return visitArrayGenerator((Expr.ArrayGenerator) expr, arrayT, environment);
		}
		case EXPR_arrayaccess:
		case EXPR_arrayborrow:
			return visitArrayAccess((Expr.ArrayAccess) expr, target, environment);
		case EXPR_arrayrange: {
			Type.Array arrayT = selectArray(target, expr, environment);
			return visitArrayRange((Expr.ArrayRange) expr, arrayT, environment);
		}
		case EXPR_recordupdate:
			Type.Record recordT = selectRecord(target, expr, environment);
			return visitRecordUpdate((Expr.RecordUpdate) expr, recordT, environment);
		default:
			throw new IllegalArgumentException("unknown expression encountered (" + expr.getClass().getName() + ")");
		}
	}

	public S visitTernaryOperator(Expr.TernaryOperator expr, Type target, Environment environment) {
		switch (expr.getOpcode()) {
		// Ternary Operators
		case EXPR_arrayupdate:
			Type.Array arrayT = selectArray(target, expr, environment);
			return visitArrayUpdate((Expr.ArrayUpdate) expr, arrayT, environment);
		default:
			throw new IllegalArgumentException("unknown expression encountered (" + expr.getClass().getName() + ")");
		}
	}

	public S visitNaryOperator(Expr.NaryOperator expr, Type target, Environment environment) {
		switch (expr.getOpcode()) {
		// Nary Operators
		case EXPR_arrayinitialiser:
			Type.Array arrayT = selectArray(target, expr, environment);
			return visitArrayInitialiser((Expr.ArrayInitialiser) expr, arrayT, environment);
		case EXPR_bitwiseand:
			return visitBitwiseAnd((Expr.BitwiseAnd) expr, environment);
		case EXPR_bitwiseor:
			return visitBitwiseOr((Expr.BitwiseOr) expr, environment);
		case EXPR_bitwisexor:
			return visitBitwiseXor((Expr.BitwiseXor) expr, environment);
		case EXPR_invoke:
			return visitInvoke((Expr.Invoke) expr, new Tuple<>(target), environment);
		case EXPR_logicaland:
			return visitLogicalAnd((Expr.LogicalAnd) expr, environment);
		case EXPR_logicalor:
			return visitLogicalOr((Expr.LogicalOr) expr, environment);
		case EXPR_recordinitialiser:
			Type.Record recordT = selectRecord(target, expr, environment);
			return visitRecordInitialiser((Expr.RecordInitialiser) expr, recordT, environment);
		default:
			throw new IllegalArgumentException("unknown expression encountered (" + expr.getClass().getName() + ")");
		}
	}

	public S visitArrayAccess(Expr.ArrayAccess expr, Type target, Environment environment) {
		S source = visitExpression(expr.getFirstOperand(), expr.getFirstOperand().getType(), environment);
		S index = visitExpression(expr.getSecondOperand(), Type.Int, environment);
		return constructArrayAccess(expr,source,index);
	}

	public S visitArrayLength(Expr.ArrayLength expr, Type.Int target, Environment environment) {
		S source = visitExpression(expr.getOperand(), expr.getOperand().getType(), environment);
		return constructArrayLength(expr,source);
	}

	public S visitArrayGenerator(Expr.ArrayGenerator expr, Type.Array target, Environment environment) {
		S value = visitExpression(expr.getFirstOperand(), target.getElement(), environment);
		S length = visitExpression(expr.getSecondOperand(), Type.Int, environment);
		return constructArrayGenerator(expr,value,length);
	}

	public S visitArrayInitialiser(Expr.ArrayInitialiser expr, Type.Array target, Environment environment) {
		List<S> operands = visitExpressions(expr.getOperands(), target.getElement(), environment);
		return constructArrayInitialiser(expr,operands);
	}

	public S visitArrayRange(Expr.ArrayRange expr, Type.Array target, Environment environment) {
		throw new UnsupportedOperationException();
	}

	public S visitArrayUpdate(Expr.ArrayUpdate expr, Type.Array target, Environment environment) {
		throw new UnsupportedOperationException();
	}

	public S visitBitwiseComplement(Expr.BitwiseComplement expr, Environment environment) {
		S operand = visitExpression(expr.getOperand(), Type.Byte, environment);
		return constructBitwiseComplement(expr,operand);
	}

	public S visitBitwiseAnd(Expr.BitwiseAnd expr, Environment environment) {
		List<S> operands = visitExpressions(expr.getOperands(), Type.Byte, environment);
		return constructBitwiseAnd(expr,operands);
	}

	public S visitBitwiseOr(Expr.BitwiseOr expr, Environment environment) {
		List<S> operands = visitExpressions(expr.getOperands(), Type.Byte, environment);
		return constructBitwiseOr(expr,operands);
	}

	public S visitBitwiseXor(Expr.BitwiseXor expr, Environment environment) {
		List<S> operands = visitExpressions(expr.getOperands(), Type.Byte, environment);
		return constructBitwiseXor(expr,operands);
	}

	public S visitBitwiseShiftLeft(Expr.BitwiseShiftLeft expr, Environment environment) {
		S lhs = visitExpression(expr.getFirstOperand(), Type.Byte, environment);
		S rhs = visitExpression(expr.getSecondOperand(), Type.Int, environment);
		return constructBitwiseShiftLeft(expr,lhs,rhs);
	}

	public S visitBitwiseShiftRight(Expr.BitwiseShiftRight expr, Environment environment) {
		S lhs = visitExpression(expr.getFirstOperand(), Type.Byte, environment);
		S rhs = visitExpression(expr.getSecondOperand(), Type.Int, environment);
		return constructBitwiseShiftRight(expr,lhs,rhs);
	}

	public S visitCast(Expr.Cast expr, Type target, Environment environment) {
		S operand = visitExpression(expr.getOperand(), expr.getOperand().getType(), environment);
		return constructCast(expr,operand);
	}

	public S visitConstant(Expr.Constant expr, Type target, Environment environment) {
		return constructConstant(expr);
	}

	public S visitDereference(Expr.Dereference expr, Type target, Environment environment) {
		S operand = visitExpression(expr.getOperand(), expr.getOperand().getType(), environment);
		return constructDereference(expr,operand);
	}

	public S visitFieldDereference(Expr.FieldDereference expr, Type target, Environment environment) {
		S operand = visitExpression(expr.getOperand(), expr.getOperand().getType(), environment);
		return constructFieldDereference(expr,operand);
	}

	public S visitEqual(Expr.Equal expr, Environment environment) {
		S lhs = visitExpression(expr.getFirstOperand(), expr.getFirstOperand().getType(), environment);
		S rhs = visitExpression(expr.getSecondOperand(), expr.getSecondOperand().getType(), environment);
		return constructEqual(expr,lhs,rhs);
	}

	public S visitIntegerLessThan(Expr.IntegerLessThan expr, Environment environment) {
		S lhs = visitExpression(expr.getFirstOperand(), expr.getFirstOperand().getType(), environment);
		S rhs = visitExpression(expr.getSecondOperand(), expr.getSecondOperand().getType(), environment);
		return constructIntegerLessThan(expr,lhs,rhs);
	}

	public S visitIntegerLessThanOrEqual(Expr.IntegerLessThanOrEqual expr, Environment environment) {
		S lhs = visitExpression(expr.getFirstOperand(), expr.getFirstOperand().getType(), environment);
		S rhs = visitExpression(expr.getSecondOperand(), expr.getSecondOperand().getType(), environment);
		return constructIntegerLessThanOrEqual(expr,lhs,rhs);
	}

	public S visitIntegerGreaterThan(Expr.IntegerGreaterThan expr, Environment environment) {
		S lhs = visitExpression(expr.getFirstOperand(), expr.getFirstOperand().getType(), environment);
		S rhs = visitExpression(expr.getSecondOperand(), expr.getSecondOperand().getType(), environment);
		return constructIntegerGreaterThan(expr,lhs,rhs);
	}

	public S visitIntegerGreaterThanOrEqual(Expr.IntegerGreaterThanOrEqual expr, Environment environment) {
		S lhs = visitExpression(expr.getFirstOperand(), expr.getFirstOperand().getType(), environment);
		S rhs = visitExpression(expr.getSecondOperand(), expr.getSecondOperand().getType(), environment);
		return constructIntegerGreaterThanOrEqual(expr,lhs,rhs);
	}

	public S visitIntegerNegation(Expr.IntegerNegation expr, Type.Int target, Environment environment) {
		S operand = visitExpression(expr.getOperand(), target, environment);
		return constructIntegerNegation(expr,operand);
	}

	public S visitIntegerAddition(Expr.IntegerAddition expr, Type.Int target, Environment environment) {
		S lhs = visitExpression(expr.getFirstOperand(), expr.getFirstOperand().getType(), environment);
		S rhs = visitExpression(expr.getSecondOperand(), expr.getSecondOperand().getType(), environment);
		return constructIntegerAddition(expr,lhs,rhs);
	}

	public S visitIntegerSubtraction(Expr.IntegerSubtraction expr, Type.Int target, Environment environment) {
		S lhs = visitExpression(expr.getFirstOperand(), expr.getFirstOperand().getType(), environment);
		S rhs = visitExpression(expr.getSecondOperand(), expr.getSecondOperand().getType(), environment);
		return constructIntegerSubtraction(expr,lhs,rhs);
	}

	public S visitIntegerMultiplication(Expr.IntegerMultiplication expr, Type.Int target, Environment environment) {
		S lhs = visitExpression(expr.getFirstOperand(), expr.getFirstOperand().getType(), environment);
		S rhs = visitExpression(expr.getSecondOperand(), expr.getSecondOperand().getType(), environment);
		return constructIntegerMultiplication(expr,lhs,rhs);
	}

	public S visitIntegerDivision(Expr.IntegerDivision expr, Type.Int target, Environment environment) {
		S lhs = visitExpression(expr.getFirstOperand(), expr.getFirstOperand().getType(), environment);
		S rhs = visitExpression(expr.getSecondOperand(), expr.getSecondOperand().getType(), environment);
		return constructIntegerDivision(expr,lhs,rhs);
	}

	public S visitIntegerRemainder(Expr.IntegerRemainder expr, Type.Int target, Environment environment) {
		S lhs = visitExpression(expr.getFirstOperand(), expr.getFirstOperand().getType(), environment);
		S rhs = visitExpression(expr.getSecondOperand(), expr.getSecondOperand().getType(), environment);
		return constructIntegerRemainder(expr,lhs,rhs);
	}

	public S visitIs(Expr.Is expr, Environment environment) {
		S operand = visitExpression(expr.getOperand(), expr.getOperand().getType(), environment);
		return constructIs(expr,operand);
	}

	public S visitLogicalAnd(Expr.LogicalAnd expr, Environment environment) {
		List<S> operands = visitExpressions(expr.getOperands(), Type.Bool, environment);
		return constructLogicalAnd(expr,operands);
	}

	public S visitLogicalImplication(Expr.LogicalImplication expr, Environment environment) {
		S lhs = visitExpression(expr.getFirstOperand(), expr.getFirstOperand().getType(), environment);
		S rhs = visitExpression(expr.getSecondOperand(), expr.getSecondOperand().getType(), environment);
		return constructLogicalImplication(expr,lhs,rhs);
	}

	public S visitLogicalIff(Expr.LogicalIff expr, Environment environment) {
		S lhs = visitExpression(expr.getFirstOperand(), expr.getFirstOperand().getType(), environment);
		S rhs = visitExpression(expr.getSecondOperand(), expr.getSecondOperand().getType(), environment);
		return constructLogicalIff(expr,lhs,rhs);
	}

	public S visitLogicalNot(Expr.LogicalNot expr, Environment environment) {
		S operand = visitExpression(expr.getOperand(), Type.Bool, environment);
		return constructLogicalNot(expr,operand);
	}

	public S visitLogicalOr(Expr.LogicalOr expr, Environment environment) {
		List<S> operands = visitExpressions(expr.getOperands(), Type.Bool, environment);
		return constructLogicalOr(expr,operands);
	}

	public S visitExistentialQuantifier(Expr.ExistentialQuantifier expr, Environment environment) {
		Tuple<Decl.Variable> parameters = expr.getParameters();
		ArrayList<Pair<S,S>> ranges = new ArrayList<>();
		for (int i = 0; i != parameters.size(); ++i) {
			Decl.Variable parameter = parameters.get(i);
			// NOTE: Currently ranges can only appear in quantifiers. Eventually, this will
			// be deprecated.
			Expr.ArrayRange range = (Expr.ArrayRange) parameter.getInitialiser();
			S start = visitExpression(range.getFirstOperand(),Type.Int, environment);
			S end = visitExpression(range.getSecondOperand(),Type.Int, environment);
			ranges.add(new Pair<>(start,end));
		}
		S body = visitExpression(expr.getOperand(), Type.Bool, environment);
		return constructExistentialQuantifier(expr,ranges,body);
	}

	public S visitUniversalQuantifier(Expr.UniversalQuantifier expr, Environment environment) {
		Tuple<Decl.Variable> parameters = expr.getParameters();
		ArrayList<Pair<S,S>> ranges = new ArrayList<>();
		for (int i = 0; i != parameters.size(); ++i) {
			Decl.Variable parameter = parameters.get(i);
			// NOTE: Currently ranges can only appear in quantifiers. Eventually, this will
			// be deprecated.
			Expr.ArrayRange range = (Expr.ArrayRange) parameter.getInitialiser();
			S start = visitExpression(range.getFirstOperand(),Type.Int, environment);
			S end = visitExpression(range.getSecondOperand(),Type.Int, environment);
			ranges.add(new Pair<>(start,end));
		}
		S body = visitExpression(expr.getOperand(), Type.Bool, environment);
		return constructUniversalQuantifier(expr,ranges,body);
	}

	public S visitInvoke(Expr.Invoke expr, Tuple<Type> targets, Environment environment) {
		Type.Callable signature = expr.getBinding().getConcreteType();
		Tuple<Type> parameters = signature.getParameters();
		List<S> operands = visitExpressions(expr.getOperands(), parameters, environment);
		return constructInvoke(expr, operands);
	}

	public S visitIndirectInvoke(Expr.IndirectInvoke expr, Tuple<Type> targets, Environment environment) {
		Type.Callable sourceT = expr.getSource().getType().as(Type.Callable.class);
		S operand = visitExpression(expr.getSource(), sourceT, environment);
		List<S> operands = visitExpressions(expr.getArguments(), sourceT.getParameters(), environment);
		return constructIndirectInvoke(expr, operand, operands);
	}

	public S visitLambdaAccess(Expr.LambdaAccess expr, Type type, Environment environment) {
		return constructLambdaAccess(expr);
	}

	public S visitNew(Expr.New expr, Type.Reference target, Environment environment) {
		S operand = visitExpression(expr.getOperand(), target.getElement(), environment);
		return constructNew(expr,operand);
	}

	public S visitNotEqual(Expr.NotEqual expr, Environment environment) {
		S lhs = visitExpression(expr.getFirstOperand(), expr.getFirstOperand().getType(), environment);
		S rhs = visitExpression(expr.getSecondOperand(), expr.getSecondOperand().getType(), environment);
		return constructNotEqual(expr,lhs,rhs);
	}

	public S visitRecordAccess(Expr.RecordAccess expr, Type target, Environment environment) {
		S src = visitExpression(expr.getOperand(), expr.getOperand().getType(), environment);
		return constructRecordAccess(expr, src);
	}

	public S visitRecordInitialiser(Expr.RecordInitialiser expr, Type.Record target, Environment environment) {
		Tuple<Identifier> fields = expr.getFields();
		Tuple<Expr> operands = expr.getOperands();
		List<S> args = new ArrayList<>();
		for (int i = 0; i != fields.size(); ++i) {
			Expr operand = operands.get(i);
			Type type = target.getField(fields.get(i));
			if (type == null) {
				// NOTE: open records may not have concrete types for fields.
				type = operand.getType();
			}
			args.add(visitExpression(operand, type, environment));
		}
		return constructRecordInitialiser(expr,args);
	}

	public S visitRecordUpdate(Expr.RecordUpdate expr, Type.Record target, Environment environment) {
		S src = visitExpression(expr.getFirstOperand(), target, environment);
		S val = visitExpression(expr.getSecondOperand(), target.getField(expr.getField()), environment);
		// TODO: implement me!
		// return constructRecordUpdate(expr,src,val);
		throw new UnsupportedOperationException();
	}

	public S visitStaticVariableAccess(Expr.StaticVariableAccess expr, Type target, Environment environment) {
		return constructStaticVariableAccess(expr);
	}

	public S visitVariableAccess(Expr.VariableAccess expr, Type target, Environment environment) {
		return constructVariableAccess(expr);
	}

	// ====================================================================================
	// Declaration Constructors
	// ====================================================================================

	public abstract S constructImport(Decl.Import d);

	public abstract S constructType(Decl.Type d, List<S> invariant);

	public abstract S constructVariable(Decl.Variable d, S initialiser);

	public abstract S constructStaticVariable(Decl.StaticVariable d, S initialiser);

	public abstract S constructProperty(Decl.Property decl, List<S> clauses);

	public abstract S constructFunction(Decl.Function d, List<S> precondition, List<S> postcondition, S body);

	public abstract S constructMethod(Decl.Method d, List<S> precondition, List<S> postcondition, S body);

	public abstract S constructLambda(Decl.Lambda decl, S body);

	// ====================================================================================
	// Statement Constructors
	// ====================================================================================

	public abstract S constructAssert(Stmt.Assert stmt, S condition);

	public abstract S constructAssign(Stmt.Assign stmt, List<S> lvals, List<S> rvals);

	public abstract S constructAssume(Stmt.Assume stmt, S condition);

	public abstract S constructBlock(Stmt.Block stmt, List<S> stmts);

	public abstract S constructBreak(Stmt.Break stmt);

	public abstract S constructContinue(Stmt.Continue stmt);

	public abstract S constructDebug(Stmt.Debug stmt, S operand);

	public abstract S constructDoWhile(Stmt.DoWhile stmt, S body, S condition, List<S> invariant);

	public abstract S constructFail(Stmt.Fail stmt);

	public abstract S constructIfElse(Stmt.IfElse stmt, S condition, S trueBranch, S falseBranch);

	public abstract S constructNamedBlock(Stmt.NamedBlock stmt, List<S> stmts);

	public abstract S constructReturn(Stmt.Return stmt, List<S> returns);

	public abstract S constructSkip(Stmt.Skip stmt);

	public abstract S constructSwitch(Stmt.Switch stmt, S condition, List<Pair<List<S>,S>> cases);

	public abstract S constructWhile(Stmt.While stmt, S condition, List<S> invariant, S body);

	// ====================================================================================
	// LVal Constructors
	// ====================================================================================

	public abstract S constructArrayAccessLVal(Expr.ArrayAccess expr, S source, S index);

	public abstract S constructDereferenceLVal(Expr.Dereference expr, S operand);

	public abstract S constructFieldDereferenceLVal(Expr.FieldDereference expr, S operand);

	public abstract S constructRecordAccessLVal(Expr.RecordAccess expr, S source);

	public abstract S constructVariableAccessLVal(Expr.VariableAccess expr);

	// ====================================================================================
	// Expression Constructors
	// ====================================================================================

	public abstract S constructArrayAccess(Expr.ArrayAccess expr, S source, S index);

	public abstract S constructArrayLength(Expr.ArrayLength expr, S source);

	public abstract S constructArrayGenerator(Expr.ArrayGenerator expr, S value, S length);

	public abstract S constructArrayInitialiser(Expr.ArrayInitialiser expr, List<S> values);

	public abstract S constructBitwiseComplement(Expr.BitwiseComplement expr, S operand);

	public abstract S constructBitwiseAnd(Expr.BitwiseAnd expr, List<S> operands);

	public abstract S constructBitwiseOr(Expr.BitwiseOr expr, List<S> operands);

	public abstract S constructBitwiseXor(Expr.BitwiseXor expr, List<S> operands);

	public abstract S constructBitwiseShiftLeft(Expr.BitwiseShiftLeft expr, S lhs, S rhs);

	public abstract S constructBitwiseShiftRight(Expr.BitwiseShiftRight expr, S lhs, S rhs);

	public abstract S constructCast(Expr.Cast expr, S operand);

	public abstract S constructConstant(Expr.Constant expr);

	public abstract S constructDereference(Expr.Dereference expr, S operand);

	public abstract S constructFieldDereference(Expr.FieldDereference expr, S operand);

	public abstract S constructEqual(Expr.Equal expr, S lhs, S rhs);

	public abstract S constructIntegerLessThan(Expr.IntegerLessThan expr, S lhs, S rhs);

	public abstract S constructIntegerLessThanOrEqual(Expr.IntegerLessThanOrEqual expr, S lhs, S rhs);

	public abstract S constructIntegerGreaterThan(Expr.IntegerGreaterThan expr, S lhs, S rhs);

	public abstract S constructIntegerGreaterThanOrEqual(Expr.IntegerGreaterThanOrEqual expr, S lhs, S rhs);

	public abstract S constructIntegerNegation(Expr.IntegerNegation expr, S operand);

	public abstract S constructIntegerAddition(Expr.IntegerAddition expr, S lhs, S rhs);

	public abstract S constructIntegerSubtraction(Expr.IntegerSubtraction expr, S lhs, S rhs);

	public abstract S constructIntegerMultiplication(Expr.IntegerMultiplication expr, S lhs, S rhs);

	public abstract S constructIntegerDivision(Expr.IntegerDivision expr, S lhs, S rhs);

	public abstract S constructIntegerRemainder(Expr.IntegerRemainder expr, S lhs, S rhs);

	public abstract S constructIs(Expr.Is expr, S operand);

	public abstract S constructLogicalAnd(Expr.LogicalAnd expr, List<S> operands);

	public abstract S constructLogicalImplication(Expr.LogicalImplication expr, S lhs, S rhs);

	public abstract S constructLogicalIff(Expr.LogicalIff expr, S lhs, S rhs);

	public abstract S constructLogicalNot(Expr.LogicalNot expr, S operand);

	public abstract S constructLogicalOr(Expr.LogicalOr expr, List<S> operands);

	public abstract S constructExistentialQuantifier(Expr.ExistentialQuantifier expr, List<Pair<S,S>> ranges, S body);

	public abstract S constructUniversalQuantifier(Expr.UniversalQuantifier expr, List<Pair<S,S>> ranges, S body);

	public abstract S constructInvoke(Expr.Invoke expr, List<S> arguments);

	public abstract S constructIndirectInvoke(Expr.IndirectInvoke expr, S source, List<S> arguments);

	public abstract S constructLambdaAccess(Expr.LambdaAccess expr);

	public abstract S constructNew(Expr.New expr, S operand);

	public abstract S constructNotEqual(Expr.NotEqual expr, S lhs, S rhs);

	public abstract S constructRecordAccess(Expr.RecordAccess expr, S source);

	public abstract S constructRecordInitialiser(Expr.RecordInitialiser expr, List<S> operands);

	public abstract S constructStaticVariableAccess(Expr.StaticVariableAccess expr);

	public abstract S constructVariableAccess(Expr.VariableAccess expr);

	// ====================================================================================
	// Helpers
	// ====================================================================================


	public Type.Int selectInt(Type target, Expr expr, Environment environment) {
		Type.Int type = expr.getType().as(Type.Int.class);
		List<Type.Int> ints = target.filter(Type.Int.class);
		return select(ints, type, environment);
	}

	/**
	 * <p>
	 * Given an arbitrary target type, filter out the target array types. For
	 * example, consider the following method:
	 * </p>
	 *
	 *
	 * <pre>
	 * method f(int x):
	 *    null|int[] xs = [x]
	 *    ...
	 * </pre>
	 * <p>
	 * When type checking the expression <code>[x]</code> the flow type checker will
	 * attempt to determine an <i>expected</i> array type. In order to then
	 * determine the appropriate expected type for expression <code>x</code> it
	 * filters <code>null|int[]</code> down to just <code>int[]</code>.
	 * </p>
	 *
	 * @param target
	 *            Target type for this value
	 * @param expr
	 *            Source expression for this value
	 * @author David J. Pearce
	 *
	 */
	public Type.Array selectArray(Type target, Expr expr, Environment environment) {
		Type.Array type = expr.getType().as(Type.Array.class);
		List<Type.Array> arrays = target.filter(Type.Array.class);
		return select(arrays, type, environment);
	}

	/**
	 * <p>
	 * Given an arbitrary target type, filter out the target record types. For
	 * example, consider the following method:
	 * </p>
	 *
	 *
	 * <pre>
	 * method f(int x):
	 *    {int f}|null xs = {f: x}
	 *    ...
	 * </pre>
	 * <p>
	 * When type checking the expression <code>{f: x}</code> the flow type checker
	 * will attempt to determine an <i>expected</i> record type. In order to then
	 * determine the appropriate expected type for field initialiser expression
	 * <code>x</code> it filters <code>{int f}|null</code> down to just
	 * <code>{int f}</code>.
	 * </p>
	 *
	 * @param target
	 *            Target type for this value
	 * @param expr
	 *            Source expression for this value
	 * @author David J. Pearce
	 *
	 */
	public Type.Record selectRecord(Type target, Expr expr, Environment environment) {
		Type.Record type = expr.getType().as(Type.Record.class);
		List<Type.Record> records = target.filter(Type.Record.class);
		return select(records, type, environment);
	}

	/**
	 * <p>
	 * Given an arbitrary target type, filter out the target reference types. For
	 * example, consider the following method:
	 * </p>
	 *
	 *
	 * <pre>
	 * method f(int x):
	 *    &int|null xs = new(x)
	 *    ...
	 * </pre>
	 * <p>
	 * When type checking the expression <code>new(x)</code> the flow type checker
	 * will attempt to determine an <i>expected</i> reference type. In order to then
	 * determine the appropriate expected type for element expression <code>x</code>
	 * it filters <code>&int|null</code> down to just <code>&int</code>.
	 * </p>
	 *
	 * @param target
	 *            Target type for this value
	 * @param expr
	 *            Source expression for this value
	 *
	 * @author David J. Pearce
	 *
	 */
	public Type.Reference selectReference(Type target, Expr expr, Environment environment) {
		Type.Reference type = expr.getType().as(Type.Reference.class);
		List<Type.Reference> refs = target.filter(Type.Reference.class);
		return select(refs, type, environment);
	}

	/**
	 * <p>
	 * Given an arbitrary target type, filter out the target lambda types. For
	 * example, consider the following method:
	 * </p>
	 *
	 *
	 * <pre>
	 * type fun_t is function(int)->(int)
	 *
	 * method f(int x):
	 *    fun_t|null xs = &(int y -> y+1)
	 *    ...
	 * </pre>
	 * <p>
	 * When type checking the expression <code>&(int y -> y+1)</code> the flow type
	 * checker will attempt to determine an <i>expected</i> lambda type. In order to
	 * then determine the appropriate expected type for the lambda body
	 * <code>y+1</code> it filters <code>fun_t|null</code> down to just
	 * <code>fun_t</code>.
	 * </p>
	 *
	 * @param target
	 *            Target type for this value
	 * @param expr
	 *            Source expression for this value
	 * @author David J. Pearce
	 *
	 */
	public Type.Callable selectLambda(Type target, Expr expr, Environment environment) {
		Type.Callable type = expr.getType().as(Type.Callable.class);
		// Create the filter itself
		List<Type.Callable> callables = target.filter(Type.Callable.class);
		//
		return select(callables, type, environment);
	}

	/**
	 * Given an array of candidate types, select the most precise match for a actual
	 * type. If no such candidate exists, return null (which should be impossible
	 * for type correct code).
	 *
	 * @param candidates
	 * @param actual
	 * @return
	 */
	public <T extends Type> T select(List<T> candidates, T actual, Environment environment) {
		//
		T candidate = null;
		for (int i = 0; i != candidates.size(); ++i) {
			T next = candidates.get(i);
			if (subtypeOperator.isSubtype(next, actual, environment)) {
				if (candidate == null) {
					candidate = next;
				} else {
					candidate = select(candidate, next, actual, environment);
				}
			}
		}
		//
		return candidate;
	}

	/**
	 * Given two candidates, return the more precise one. If no viable candidate,
	 * return null;
	 *
	 * @param candidate
	 *            The current best candidate.
	 * @param next
	 *            The next candidate being considered
	 * @param environment
	 * @return
	 * @throws ResolutionError
	 */
	public <T extends Type> T select(T candidate, T next, T actual, Environment environment) {
		// Found a viable candidate
		boolean left = subtypeOperator.isSubtype(candidate, next, environment);
		boolean right = subtypeOperator.isSubtype(next, candidate, environment);
		if (left && !right) {
			// Yes, is better than current candidate
			return next;
		} else if (right && !left) {
			return candidate;
		}
		// Unable to distinguish options based on subtyping alone
		left = isDerivation(next, actual);
		right = isDerivation(candidate, actual);
		if (left && !right) {
			// Yes, is better than current candidate
			return next;
		} else if (right && !left) {
			return candidate;
		} else {
			return null;
		}

	}

	/**
	 * Check whether one type is a derivation of another. For example, in this
	 * scenario:
	 *
	 * <pre>
	 * type parent is (int p) where ...
	 * type child is (parent c) where ...
	 * </pre>
	 *
	 * @param parent
	 *            The type being derived to
	 * @param child
	 *            The type we are trying to derive
	 * @return
	 */
	public boolean isDerivation(Type parent, Type child) {
		if (child.equals(parent)) {
			return true;
		} else if (child instanceof Type.Nominal) {
			Type.Nominal t = (Type.Nominal) child;
			Decl.Type decl = t.getLink().getTarget();
			return isDerivation(parent, decl.getType());
		} else {
			return false;
		}
	}

	private static final Type.Array TYPE_ARRAY_INT = new Type.Array(Type.Int);

	/**
	 * Provides a very simple environment for tracking the current declared lifetime
	 * relationships.
	 *
	 * @author David J. Pearce
	 *
	 */
	public static class Environment implements LifetimeRelation {
		private final Map<String, String[]> withins;

		public Environment() {
			this.withins = new HashMap<>();
		}

		public Environment(Map<String, String[]> withins) {
			this.withins = new HashMap<>(withins);
		}

		@Override
		public boolean isWithin(String inner, String outer) {
			//
			if (outer.equals("*") || inner.equals(outer)) {
				// Cover easy cases first
				return true;
			} else {
				String[] outers = withins.get(inner);
				return outers != null && (ArrayUtils.firstIndexOf(outers, outer) >= 0);
			}
		}

		public Environment declareWithin(String inner, Tuple<Identifier> outers) {
			String[] outs = new String[outers.size()];
			for (int i = 0; i != outs.length; ++i) {
				outs[i] = outers.get(i).get();
			}
			return declareWithin(inner, outs);
		}
		public Environment declareWithin(String inner, Identifier... outers) {
			String[] outs = new String[outers.length];
			for (int i = 0; i != outs.length; ++i) {
				outs[i] = outers[i].get();
			}
			return declareWithin(inner, outs);
		}

		public Environment declareWithin(String inner, String... outers) {
			Environment nenv = new Environment(withins);
			nenv.withins.put(inner, outers);
			return nenv;
		}
	}

	// ==========================================================================
	// Enclosing Scope
	// ==========================================================================

	/**
	 * An enclosing scope captures the nested of declarations, blocks and other
	 * statements (e.g. loops). It is used to store information associated with
	 * these things such they can be accessed further down the chain. It can also be
	 * used to propagate information up the chain (for example, the environments
	 * arising from a break or continue statement).
	 *
	 * @author David J. Pearce
	 *
	 */
	private abstract static class EnclosingScope {
		protected final EnclosingScope parent;

		public EnclosingScope(EnclosingScope parent) {
			this.parent = parent;
		}

		/**
		 * Get the innermost enclosing block of a given kind. For example, when
		 * processing a return statement we may wish to get the enclosing function or
		 * method declaration such that we can type check the return types.
		 *
		 * @param kind
		 */
		public <T> T getEnclosingScope(Class<T> kind) {
			if (kind.isInstance(this)) {
				return (T) this;
			} else if (parent != null) {
				return parent.getEnclosingScope(kind);
			} else {
				// FIXME: better error propagation?
				return null;
			}
		}
	}

	private interface LifetimeDeclaration {
		/**
		 * Get the list of all environment declared by this or an enclosing scope. That
		 * is the complete set of environment available at this point.
		 *
		 * @return
		 */
		public String[] getDeclaredLifetimes();
	}

	/**
	 * Represents the enclosing scope for a function or method declaration.
	 *
	 * @author David J. Pearce
	 *
	 */
	private static class FunctionOrMethodScope extends EnclosingScope implements LifetimeDeclaration {
		private final Decl.FunctionOrMethod declaration;

		public FunctionOrMethodScope(Decl.FunctionOrMethod declaration) {
			super(null);
			this.declaration = declaration;
		}

		public Decl.FunctionOrMethod getDeclaration() {
			return declaration;
		}

		@Override
		public String[] getDeclaredLifetimes() {
			if (declaration instanceof Decl.Method) {
				Decl.Method meth = (Decl.Method) declaration;
				Identifier[] environment = meth.getLifetimes();
				String[] arr = new String[environment.length + 1];
				for (int i = 0; i != environment.length; ++i) {
					arr[i] = environment[i].get();
				}
				arr[arr.length - 1] = "this";
				return arr;
			} else {
				return new String[] { "this" };
			}
		}
	}

	private static class NamedBlockScope extends EnclosingScope implements LifetimeDeclaration {
		private final Stmt.NamedBlock stmt;

		public NamedBlockScope(EnclosingScope parent, Stmt.NamedBlock stmt) {
			super(parent);
			this.stmt = stmt;
		}

		@Override
		public String[] getDeclaredLifetimes() {
			LifetimeDeclaration enclosing = parent.getEnclosingScope(LifetimeDeclaration.class);
			String[] declared = enclosing.getDeclaredLifetimes();
			declared = Arrays.copyOf(declared, declared.length + 1);
			declared[declared.length - 1] = stmt.getName().get();
			return declared;
		}
	}
}
