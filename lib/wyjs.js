var wyjs = {
    /**
     *
     */
    array: function(val, len) {
	var arr = [];
	for(var i=0;i<len;i=i+1) {
	    arr[i] = val;
	}
	return arr;
    },
    
    /**
     * Provide a generic mechanism for raising assertions
     */
    assert: function(result) {
	if(!result) {
	    // Assertion failed, now try to raise exception
	    if(typeof console !== "undefined") {
		// Use console assert (if available)
		console.assert(false);
	    } else {
		throw "assertion failure";
	    }
	}
    },

    /**
     * Clone an arbitrary value or object.  This is a shallow clone,
     * meaning that nested references are not themselves cloned.
     */
    copy: function(obj) {
	if (null == obj || "object" != typeof obj) {
	    // Handle primitive types	
	    return obj;
	} else if(obj.constructor === Array) {
	    var r = [];
	    for(var i=0;i!=obj.length;++i) {
		r[i] = wyjs.copy(obj[i]);
	    }
	    return r;
        } else {
	    // Fall back to simplistic clone
	    var r = {};
	    for(p in obj) {
		r[p] = wyjs.copy(obj[p]);
	    }
	    return r;
	}
    },

    /**
     * Provide a generic equality method for objects.
     */
    equals: function(o1, o2) {
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
		    if (!wyjs.equals(o1[field],o2[field])) {
			// Values for this field not equal, hence
			// entire recordnot equal.
			return false;
		    }
		}
	    }
	    // Done
	    return true;
	}
    }
}
