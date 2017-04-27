var wyjs = {
    /**
     * Clone an arbitrary value or object.  This is a shallow clone,
     * meaning that nested references are not themselves cloned.
     */
    copy: function(obj) {
	if (null == obj || "object" != typeof obj) {
	    // Handle primitive types	
	    return obj;
	} else {
	    // Objects and Arrays
	    return Object.assign({},obj);
	}
    }
}
