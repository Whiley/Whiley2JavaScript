/**
 * The module Wy contains various runtime support functions necessary
 * for implementing the Whiley language in JavaScript.
 */
var Wy = {};

/**
 *
 */
Wy.array = function(val, len) {
    var arr = [];
    for(var i=0;i<len;i=i+1) {
	arr[i] = val;
    }
    return arr;
};

/**
 * Provide a generic mechanism for raising assertions
 */
Wy.assert = function(result) {
    if(!result) {
	// Assertion failed, now try to raise exception
	if(typeof console !== "undefined") {
	    // Use console assert (if available)
	    console.assert(false);
	} else {
	    throw "assertion failure";
	}
    }
};

/**
 * Clone an arbitrary value or object.  This is a deep clone,
 * meaning that nested references are also cloned.
 */
Wy.copy = function(obj) {
    if (null == obj || "object" != typeof obj) {
	// Handle primitive types
	return obj;
    } else if(obj.constructor === Array) {
	// Clone whiley arrays by recursively (i.e. deep) cloning
	// all elements.
	var r = [];
	for(var i=0;i!=obj.length;++i) {
	    r[i] = Wy.copy(obj[i]);
	}
	return r;
    } else if(obj.constructor == Wy.Record) {
	// Clone whiley records by recursively (i.e. deep) cloning
	// all fields.
	var r = {};
	for(p in obj) {
	    r[p] = Wy.copy(obj[p]);
	}
	return r;
    } else {
	// This represents everything else, including Whiley
	// references and external JS references.
	return obj;
    }
};

/**
 * Provide a generic equality method for objects.
 */
Wy.equals = function(o1, o2) {
    if(o1 == o2) {
	return true;
    } else if(o1 == null || "object" != typeof o1) {
	// o1 is null or primitive.  In this case, we don't need
	// to recursively look at members to determine equality.
	return false;
    } else if(o2 == null || "object" != typeof o2) {
	// o2 is null or primitive.  In this case, we don't need
	// to recursively look at members to determine equality.
	return false;
    } else if(typeof o1 != typeof o2) {
	// perhaps comparing an array with a record or similar
	return false;
    } else {
	var o1Fields = Object.getOwnPropertyNames(o1);
	var o2Fields = Object.getOwnPropertyNames(o2);
	// Check whether same number of fields
	if (o1Fields.length != o2Fields.length) {
	    // No, different numbers of fields
	    return false;
	} else {
	    // Now, compare fields
	    for (var i = 0; i < o1Fields.length; i++) {
		var field = o1Fields[i];
		//
		if (!Wy.equals(o1[field],o2[field])) {
		    // Values for this field not equal, hence
		    // entire recordnot equal.
		    return false;
		}
	    }
	}
	// Done
	return true;
    }
};

/**
 * Dereference a Whiley reference appropriately.
 */
Wy.deref = function(x) {
    return x.$ref;
};

/**
 * Create a Whiley record which ensures the constructor is set
 * appropriately.
 */
Wy.record = function(x) {
    // Use Record constructor here to ensure that instanceof works
    // correctly for Whiley records.
    return new Wy.Record(x);
};

/**
 * Whiley record constructor.
 */
Wy.Record = function(x) {
    for(var prop in x) {
	this[prop] = x[prop];
    }
};

/**
 * Whiley reference constuctor.
 */
Wy.Ref = function(x) {
    this.$ref = x;
};
