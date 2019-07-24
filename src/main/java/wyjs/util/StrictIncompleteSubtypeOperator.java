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

import static wyil.lang.WyilFile.TYPE_array;
import static wyil.lang.WyilFile.TYPE_bool;
import static wyil.lang.WyilFile.TYPE_byte;
import static wyil.lang.WyilFile.TYPE_function;
import static wyil.lang.WyilFile.TYPE_int;
import static wyil.lang.WyilFile.TYPE_method;
import static wyil.lang.WyilFile.TYPE_nominal;
import static wyil.lang.WyilFile.TYPE_null;
import static wyil.lang.WyilFile.TYPE_property;
import static wyil.lang.WyilFile.TYPE_record;
import static wyil.lang.WyilFile.TYPE_reference;
import static wyil.lang.WyilFile.TYPE_staticreference;
import static wyil.lang.WyilFile.TYPE_union;

import wybs.util.AbstractCompilationUnit.Identifier;
import wybs.util.AbstractCompilationUnit.Tuple;
import wyil.lang.WyilFile.Decl;
import wyil.lang.WyilFile.Expr;
import wyil.lang.WyilFile.Type;
import wyil.type.subtyping.EmptinessTest.LifetimeRelation;
import wyil.type.util.BinaryRelation;
import wyil.type.util.HashSetBinaryRelation;

/**
 * A subtype operator aimed at checking whether one type is a <i>strict
 * subtype</i> of another. Unlike other subtype operators, this takes into
 * account the invariants on types. Consider these two types:
 *
 * <pre>
 * type nat is (int x) where x >= 0
 * type pos is (nat x) where x > 0
 * type tan is (int x) where x >= 0
 * </pre>
 *
 * In this case, we have <code>nat <: int</code> since <code>int</code> is
 * explicitly included in the definition of <code>nat</code>. Observe that this
 * applies transitively and, hence, <code>pos <: nat</code>. But, it does not
 * follow that <code>nat <: int</code> and, likewise, that
 * <code>pos <: nat</code>. Likewise, <code>nat <: tan</code> does not follow
 * (despite this being actually true) since we cannot reason about invariants.
 *
 * @author David J. Pearce
 *
 */
public class StrictIncompleteSubtypeOperator {
	public boolean isSubtype(Type t1, Type t2, LifetimeRelation lifetimes) {
		return isSubtype(t1,t2,lifetimes,null);
	}

	public boolean isSubtype(Type t1, Type t2, LifetimeRelation lifetimes, BinaryRelation<Type> cache) {
		int t1_opcode = normalise(t1.getOpcode());
		int t2_opcode = normalise(t2.getOpcode());
		//
		if (t1_opcode == t2_opcode) {
			switch (t1_opcode) {
			case TYPE_null:
			case TYPE_bool:
			case TYPE_byte:
			case TYPE_int:
				return true;
			case TYPE_array:
				return isSubtype((Type.Array) t1, (Type.Array) t2, lifetimes, cache);
			case TYPE_record:
				return isSubtype((Type.Record) t1, (Type.Record)t2, lifetimes, cache);
			case TYPE_nominal:
				return isSubtype((Type.Nominal) t1, (Type.Nominal)t2, lifetimes, cache);
			case TYPE_union:
				return isSubtype(t1, (Type.Union) t2, lifetimes, cache);
			case TYPE_staticreference:
			case TYPE_reference:
				return isSubtype((Type.Reference) t1, (Type.Reference) t2, lifetimes, cache);
			case TYPE_method:
			case TYPE_function:
			case TYPE_property:
				return isSubtype((Type.Callable) t1, (Type.Callable) t2, lifetimes, cache);

			default:
				throw new IllegalArgumentException("unexpected type encountered: " + t1);
			}
		} else if (t2_opcode == TYPE_union) {
			return isSubtype(t1, (Type.Union) t2, lifetimes, cache);
		} else if (t1_opcode == TYPE_union) {
			return isSubtype((Type.Union) t1, t2, lifetimes, cache);
		} else if (t2_opcode == TYPE_nominal) {
			return isSubtype((Type.Atom) t1, (Type.Nominal) t2, lifetimes, cache);
		} else if (t1_opcode == TYPE_nominal) {
			return isSubtype((Type.Nominal) t1, (Type.Atom) t2, lifetimes, cache);
		} else {
			// Nothing else works
			return false;
		}
	}

	private boolean isSubtype(Type.Array t1, Type.Array t2, LifetimeRelation lifetimes, BinaryRelation<Type> cache) {
		return isSubtype(t1.getElement(), t2.getElement(), lifetimes, cache);
	}

	private boolean isSubtype(Type.Record t1, Type.Record t2, LifetimeRelation lifetimes, BinaryRelation<Type> cache) {
		if(t2.isOpen() && !t1.isOpen()) {
			return false;
		}
		Tuple<Type.Field> t1_fields = t1.getFields();
		Tuple<Type.Field> t2_fields = t2.getFields();
		// Sanity check number of fields are reasonable.
		if(!t1.isOpen() && t1_fields.size() != t2_fields.size()) {
			return false;
		} else if(t1_fields.size() > t2_fields.size()) {
			return false;
		}
		// NOTE: the following is O(n^2) but, in reality, will be faster than the
		// alternative (sorting fields into an array). That's because we expect a very
		// small number of fields in practice.
		for (int i = 0; i != t1_fields.size(); ++i) {
			Type.Field f1 = t1_fields.get(i);
			boolean matched = false;
			for (int j = 0; j != t2_fields.size(); ++j) {
				Type.Field f2 = t2_fields.get(i);
				if (f1.getName().equals(f2.getName())) {
					// Matched field
					if (!isSubtype(f1.getType(), f2.getType(), lifetimes, cache)) {
						return false;
					} else {
						matched = true;
					}
				}
			}
			// Check we actually matched the field!
			if (!matched) {
				return false;
			}
		}
		// Done
		return true;
	}

	private boolean isSubtype(Type.Reference t1, Type.Reference t2, LifetimeRelation lifetimes,
			BinaryRelation<Type> cache) {
		String l1 = extractLifetime(t1);
		String l2 = extractLifetime(t2);
		//
		return lifetimes.isWithin(l2, l1) && areEquivalent(t1.getElement(), t2.getElement(), lifetimes);
	}

	private boolean isSubtype(Type.Callable t1, Type.Callable t2, LifetimeRelation lifetimes,
			BinaryRelation<Type> cache) {
		Tuple<Type> t1_params = t1.getParameters();
		Tuple<Type> t2_params = t2.getParameters();
		Tuple<Type> t1_returns = t1.getReturns();
		Tuple<Type> t2_returns = t2.getReturns();
		// Eliminate easy cases first
		if (t1.getOpcode() != t2.getOpcode() || t1_params.size() != t2_params.size()
				|| t1_returns.size() != t2_returns.size()) {
			return false;
		}
		// Check parameters
		for(int i=0;i!=t1_params.size();++i) {
			if(!areEquivalent(t1_params.get(i),t2_params.get(i),lifetimes)) {
				return false;
			}
		}
		// Check returns
		for(int i=0;i!=t1_returns.size();++i) {
			if(!areEquivalent(t1_returns.get(i),t2_returns.get(i),lifetimes)) {
				return false;
			}
		}
		// Check lifetimes
		if(t1 instanceof Type.Method) {
			Type.Method m1 = (Type.Method) t1;
			Type.Method m2 = (Type.Method) t2;
			Tuple<Identifier> m1_lifetimes = m1.getLifetimeParameters();
			Tuple<Identifier> m2_lifetimes = m2.getLifetimeParameters();
			Tuple<Identifier> m1_captured = m1.getCapturedLifetimes();
			Tuple<Identifier> m2_captured = m2.getCapturedLifetimes();
			// FIXME: it's not clear to me what we need to do here. I think one problem is
			// that we must normalise lifetimes somehow.
			if (m1_lifetimes.size() > 0 || m2_lifetimes.size() > 0) {
				throw new RuntimeException("must implement this!");
			} else if (m1_captured.size() > 0 || m2_captured.size() > 0) {
				throw new RuntimeException("must implement this!");
			}
		}
		// Done
		return true;
	}

	private boolean isSubtype(Type t1, Type.Union t2, LifetimeRelation lifetimes, BinaryRelation<Type> cache) {
		for(int i=0;i!=t2.size();++i) {
			if (!isSubtype(t1, t2.get(i), lifetimes, cache)) {
				return false;
			}
		}
		return true;
	}

	private boolean isSubtype(Type.Union t1, Type t2, LifetimeRelation lifetimes, BinaryRelation<Type> cache) {
		for (int i = 0; i != t1.size(); ++i) {
			if (isSubtype(t1.get(i), t2, lifetimes, cache)) {
				return true;
			}
		}
		return false;
	}

	private boolean isSubtype(Type.Nominal t1, Type.Nominal t2, LifetimeRelation lifetimes, BinaryRelation<Type> cache) {
		Decl.Type d1 = t1.getLink().getTarget();
		Decl.Type d2 = t2.getLink().getTarget();
		// Handle coinductive case, as necessary for recursive types.
		if(d1.isRecursive() && d2.isRecursive()) {
			// NOTE: only need to check for coinductive case when both types are recursive.
			// If either is not recursive, then are guaranteed to eventually terminate.
			if (cache != null && cache.get(t1, t2)) {
				return true;
			} else if (cache == null) {
				// Lazily construct cache.
				cache = new HashSetBinaryRelation<Type>();
			}
			cache.set(t1, t2, true);
		}
		//
		Tuple<Expr> t1_invariant = d1.getInvariant();
		Tuple<Expr> t2_invariant = d2.getInvariant();
		// Dispatch easy cases
		if(d1 == d2) {
			Tuple<Type> t1s = t1.getParameters();
			Tuple<Type> t2s = t2.getParameters();
			for (int i = 0; i != t1s.size(); ++i) {
				if (!isSubtype(t1s.get(i), t2s.get(i), lifetimes, cache)) {
					return false;
				}
			}
			return true;
		} else if(t1_invariant.size() == 0 || t2_invariant.size() == 0) {
			return isSubtype(t1.getConcreteType(),t2.getConcreteType(),lifetimes,cache);
		} else if(t1_invariant.size() == 0) {
			return isSubtype(t1.getConcreteType(),t2,lifetimes,cache);
		} else if(t2_invariant.size() == 0) {
			return isSubtype(t1,t2.getConcreteType(),lifetimes,cache);
		}
		// NOTE: we actually can do better here with simplistic reasoning about
		// invariants. For example, we could check whether clauses were identical. If
		// every clause in t2 is in t1, then we're good.
		return isSubtype(t1,t2.getConcreteType(),lifetimes,cache);
	}

	/**
	 * Check whether a nominal type is a subtype of an atom (i.e. not a nominal or
	 * union). For example, <code>int :> nat</code> or <code>{nat f} :> rec</code>.
	 * This is actually easy as an invariants on the nominal type can be ignored
	 * (since they already imply it is a subtype).
	 *
	 * @param t1
	 * @param t2
	 * @param lifetimes
	 * @return
	 */
	private boolean isSubtype(Type.Atom t1, Type.Nominal t2, LifetimeRelation lifetimes, BinaryRelation<Type> cache) {
		return isSubtype(t1, t2.getConcreteType(), lifetimes, cache);
	}

	/**
	 * Check whether a nominal type is a supertype of an atom (i.e. not a nominal or
	 * union). For example, <code>int <: nat</code> or <code>{nat f} <: rec</code>.
	 * This is harder because the invariant cannot be reasoned about. In fact, the
	 * only case where this can hold true is when there is no invariant.
	 *
	 * @param t1
	 * @param t2
	 * @param lifetimes
	 * @return
	 */
	private boolean isSubtype(Type.Nominal t1, Type.Atom t2, LifetimeRelation lifetimes, BinaryRelation<Type> cache) {
		Decl.Type d1 = t1.getLink().getTarget();
		Tuple<Expr> t1_invariant = d1.getInvariant();
		// Dispatch easy cases
		if(t1_invariant.size() == 0) {
			return isSubtype(t1.getConcreteType(),t2,lifetimes, cache);
		} else {
			return false;
		}
	}

	/**
	 * Determine whether two types are "equivalent" or not.
	 *
	 * @param t1
	 * @param t2
	 * @param lifetimes
	 * @return
	 */
	private boolean areEquivalent(Type t1, Type t2, LifetimeRelation lifetimes) {
		// NOTE: this is a temporary solution.
		return isSubtype(t1, t2, lifetimes, null) && isSubtype(t2, t1, lifetimes, null);
	}

	// ===============================================================================
	// Helpers
	// ===============================================================================

	/**
	 * Extract the lifetime from a given reference type.
	 *
	 * @param ref
	 * @return
	 */
	private String extractLifetime(Type.Reference ref) {
		if (ref.hasLifetime()) {
			return ref.getLifetime().get();
		} else {
			return "*";
		}
	}

	/**
	 * Normalise opcode for sake of simplicity. This allows us to compare the types
	 * of two operands more accurately using a switch.
	 *
	 * @param opcode
	 * @return
	 */
	private static int normalise(int opcode) {
		switch(opcode) {
		case TYPE_reference:
		case TYPE_staticreference:
			return TYPE_reference;
		case TYPE_method:
		case TYPE_property:
		case TYPE_function:
			return TYPE_function;
		}
		//
		return opcode;
	}
}
