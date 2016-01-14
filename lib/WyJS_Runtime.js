"use strict";

var WyJS = {};

Function.prototype.method = function (name, func) {
	if(!this.prototype[name]) {
		this.prototype[name] = func;
		return this;
	}
};

//Any CLASS/METHODS
WyJS.Any = function (i, type){
  if ( i.val !== undefined) {
    this.val = i.val;
  }
  else {
    this.val = i;
  }
  this.type = type;
}

// Byte CLASS/METHODS
WyJS.Byte = function (i) {
  if (i.val !== undefined) {
    this.val = i.val;
  }
  else {
    this.val = i;
  }

  this.type = new WyJS.Type.Byte();
}

WyJS.Byte.method('and', function(value){
	var result = this.val & value.val;
	return new WyJS.Byte(result);
});

WyJS.Byte.method('or', function(value){
	var result = this.val | value.val;
	return new WyJS.Byte(result);
});

WyJS.Byte.method('xor', function(value){
	var result = this.val ^ value.val;
	return new WyJS.Byte(result);
});

WyJS.Byte.method('sll', function(value){
	var result = this.val << value.val;
	return new WyJS.Byte(result);
});

WyJS.Byte.method('srl', function(value){
	var result = this.val >>> value.val;
	return new WyJS.Byte(result);
});

WyJS.Byte.method('not', function(){
	var result = ~this.val;
	return new WyJS.Byte(result);
});

//expects "8-bits string" without the b - the pure thing
//returns a native JS integer parsed
WyJS.Byte.method('parseToInt', function(n) {
	var result = 0;
	var nArray = [];

	nArray = n.split("");
	nArray = nArray.reverse();

	for(var i = 0; i < 8; i++) {
		var temp = parseInt(nArray[i]);
		result += (((Math.pow(2, i)) * temp));
	}

	return result;
});

//expects a native JS integer
//returns "8-bits string" without the b - the pure thing
WyJS.Byte.method('parseToByte', function (n) {
	return n.toString(2);
});

//Real CLASS/METHODS
WyJS.Real = function (i) {
  if ( i.val !== undefined) {
    this.val = i.val;
  }
  else {
    this.val = i;
  }
  this.type = new WyJS.Type.Real();
};

WyJS.Real.method('add', function (other) {
  return new WyJS.Real(this.val + other.val);
});

WyJS.Real.method('sub', function(other) {
  return new WyJS.Real(this.val - other.val);
});

WyJS.Real.method('mul', function(other) {
  return new WyJS.Real(this.val * other.val);
});

WyJS.Real.method('div', function(other) {
  return new WyJS.Real(this.val / other.val);
});

WyJS.Real.method('rem', function(other) {
  return new WyJS.Real(this.val % other.val);
});

//negates a real
WyJS.Real.method('neg', function(){
  return new WyJS.Real(-this.val);
});

//INTEGER CLASS/METHODS
WyJS.Integer = function(i) {
  if (i.val !== undefined) {
    this.val = ~~(i.val);
  }
  else {
    this.val = ~~i;
  }
  this.type = new WyJS.Type.Int();
};

WyJS.Integer.method('add', function(other) {
  if (other instanceof WyJS.Integer) {
    return new WyJS.Integer(this.val + other.val);
  }

  return new WyJS.Real(this.val + other.val);
});

WyJS.Integer.method('sub', function(other) {
  if (other instanceof WyJS.Integer) {
    return new WyJS.Integer(this.val - other.val);
  }

  return new WyJS.Real(this.val - other.val);
});

WyJS.Integer.method('mul', function(other) {
  if (other instanceof WyJS.Integer) {
    return new WyJS.Integer(this.val * other.val);
  }

  return new WyJS.Real(this.val * other.val);
});

WyJS.Integer.method('div', function(other) {
  var tmp = this.val / other.val;
  if (other instanceof WyJS.Integer) {
    return new WyJS.Integer(~~tmp);
  }

  return new WyJS.Real(this.val / other.val);
});

WyJS.Integer.method('rem', function(other) {
  if (other instanceof WyJS.Integer) {
    return new WyJS.Integer(this.val % other.val);
  }

  return new WyJS.Real(this.val % other.val);
});

//negates a number
WyJS.Integer.method('neg', function(){
  return new WyJS.Integer(-this.val);
});

WyJS.Integer.method('cast', function() {
  return new WyJS.Real(this.val);
});

//RECORD CLASS/METHODS
WyJS.Record = function(listNames, listValues, type) {
  this.names = listNames;
  this.values = listValues;
  this.type = type;
};

//Gets the value associated with a given field
WyJS.Record.method('fieldLoad', function(name) {
  var index = (name.text !== undefined) ? this.names.indexOf(name.text) : this.names.indexOf(name);
  if (index === -1 || index >= this.values.length) {
    return null;
 }
  var elem = this.values[index];
  return elem;
});

//Checks if a given field exists
WyJS.Record.method('hasKey', function(name) {
  return (name.text !== undefined) ? (this.names.indexOf(name.text) !== -1) : (this.names.indexOf(name) !== -1);
});

//Puts the given key into the field associated with the given name, overwriting any existing value
WyJS.Record.method('setValue', function(name, key) {
  var index = (name.text !== undefined) ?this.names.indexOf(name.text) : this.names.indexOf(name);
  if (index === -1 || index >= this.values.length) {
      return;
   }
  this.values[index] = key;
});

//Deep-Clones the record to ensure pass-by-value holds
WyJS.Record.method('clone', function() {
  var i;
  var cnames = [];
  var cvalues = [];
  var elem;
  for (i = 0; i < this.names.length; i++) {
    cnames[i] = this.names[i];
    elem = this.values[i];
    if (elem instanceof WyJS.Array || elem instanceof WyJS.Record || elem instanceof WyJS.Tuple) {
      elem = elem.clone();
   }
    cvalues[i] = elem;
  }
  return new WyJS.Record(cnames, cvalues, this.type);
});

WyJS.Record.method('equals', function(other) {
  if (!(other instanceof WyJS.Record))
    return false;

  if (other.names.length != this.names.length)
    return false;

  var tmpNames = [];
  var otherNames = [];

  var i;
  for (i = 0; i < this.names.length; i++) {
    tmpNames[i] = this.names[i];
    otherNames[i] = other.names[i];
  }
  tmpNames.sort();
  otherNames.sort();

  for (i = 0; i < tmpNames.length; i++) {
    if (!WyJS.equals(this.values[this.names.indexOf(tmpNames[i])], other.values[other.names.indexOf(otherNames[i])], true))
      return false;
  }
  return true;
});

//LIST CLASS/METHODS
WyJS.Array = function(list, type) {//need to implement
  this.list = list;
  this.type = type;
};

//Gets the value at a given index
WyJS.Array.method('getValue', function(index) {
  var idx = index;
  if (index.val !== undefined) {
      idx = index.val;
    }
  return this.list[idx];
});

//Sets the value at the given index to the given value
WyJS.Array.method('setValue', function(index, value) {
  var idx = index;
  if (index.val !== undefined) {
      idx = index.val;
    }
  this.list[idx] = value;
});

WyJS.Array.method('length', function() {
  return new WyJS.Integer(this.list.length);
});

//Appends another list to this list (must be of same type)
WyJS.Array.method('append', function(other) {

  var result = [];
  var count = 0;
  var i;
  for (i = 0; i < this.list.length; i++) {
    result[count++] = this.list[i];
  }
  for (i = 0; i < other.list.length; i++) {
    result[count++] = other.list[i];
  }
  if(this.type instanceof WyJS.Type.Void){
    return new WyJS.Array(result, other.type);
  }
  return new WyJS.Array(result, this.type);
});

//Deep-Clones the list to a certain type
WyJS.Array.method('clone', function(type) {

  var clist = [];
  var i;
  var elem;

  for (i = 0; i < this.list.length; i++) {
    elem = this.list[i];
    if (elem instanceof WyJS.Array || elem instanceof WyJS.Record ) {//|| elem instanceof WyJS.Tuple (last memeber)
      elem = elem.clone();
    }
    clist[i] = elem;
  }
  if(this.type.val instanceof WyJS.Type.Void){
    return new WyJS.Array(clist, type);
  }
  return new WyJS.Array(clist, this.type);
});

WyJS.Array.method('equals', function(other) {

  var i;

  if (!(other instanceof WyJS.Array) || other === undefined) {
    return false;
 }
  if (this.length().val !== other.length().val) {
    return false;
  }
  for (i = 0; i < this.list.length; i++) {
    if (!(WyJS.equals(this.list[i], other.list[i], true))) {
      return false;
    }
  }
  return true;
});

WyJS.Array.method('sublist', function(from, to){
  var data = [];
  var index = 0;
  for(var i = from.val;i < to.val; i++){
    data[index] = this.list[i];
    index++;
  };
  return new WyJS.Array(data, this.type);
});

//generates a list of size 'size' with every value 'val'
WyJS.ArrayGen = function(val, size, type){
  var list = [];
  for (var i = 0; i < size; i++) {
    list[i] = val;
  }
  return new WyJS.Array(list, type);
};

//TUPLE CLASS/METHODS
WyJS.Tuple = function(values, type) {
  this.values = values;
  this.type = type;
};

WyJS.Tuple.method('tupleLoad', function(num){
  var load = num;
  if(load.val !== undefined){
    load = load.val
  }
  return this.values[load];
});

WyJS.Tuple.method('equals', function(other) {
  if (!(other instanceof WyJS.Tuple))
    return false;

  if (other.values.length != this.values.length)
    return false;

  var i;
  for (i = 0; i < this.values.length; i++) {
    if (!WyJS.equals(this.values[i], other.values[i], true))
      return false;
  }
  return true;
});

WyJS.Tuple.method('clone', function() {
  var newlist = [];
  var i = 0;
  for (i = 0; i < this.values.length; i++) {
    var tmp = this.values[i];
    if (tmp instanceof WyJS.Record || tmp instanceof WyJS.Array || tmp instanceof WyJS.Tuple)
      tmp = tmp.clone();
    newlist[i] = tmp;
  }
  return new WyJS.Tuple(newlist, this.type);
});

//Checks if two objects are equal (or not equal, based on the isEqual parameter)
WyJS.equals = function(lhs, rhs, isEqual) {
  var left = lhs;
  if (left.type !== undefined) {
      if (!WyJS.is(rhs, left.type))
        return false;
  }

  if (rhs.type !== undefined) {
      if (!WyJS.is(left, rhs.type))
        return false;
  }
  if (left.val !== undefined) {
      left = left.val;
  }
  else if (left instanceof WyJS.Array || left instanceof WyJS.Tuple || left instanceof WyJS.Record) {
      if (isEqual) {
        return left.equals(rhs);
      }
      return !(left.equals(rhs));
  }

  var right = rhs;
  if (right.val !== undefined) {
      right = right.val;
    }

  if (isEqual) {
      return left === right;
    }
  return left !== right;
};

// Debug function that prints the message to console
WyJS.debug = function (register) {
	var register = register || "";

	register = WyJS.decodeByteArrayToString(register.list);

	if(typeof console === "undefined") {
		// If we get here, then we are not running in the web-browser. For now,
		// we assume to be running in Rhino, which provides the following
		// function as a built-in.
		print(register);

	} else {
		console.debug(register);
	}
};

// Returns a decoded integer array of UTF-8 characters into a string.
WyJS.decodeByteArrayToString = function (intArray) {
	var i, str = '';
	var currentValue;

	for (i = 0; i < intArray.length; i++) {
		currentValue = intArray[i].val;
	    str += '%' + ('0' + currentValue.toString(16)).slice(-2);
	}

	str = decodeURIComponent(str);

	return str;
};

// Returns an encoded UTF-16 string into an array of UTF-8 integer bytes.
WyJS.encodeStringToByteArray = function(str) {
	var intArray = [];
    var charcode = "";
    var i = 0;

    for(i = 0, len = str.length; i < len; i++) {
        charcode = str.charCodeAt(i);
    	intArray.push(new WyJS.Integer(charcode));
    }

    var finalByteArray = new WyJS.Array(intArray, new WyJS.Type.Array(new WyJS.Type.Int()));
    return intArray;
};

//Checks for less than and less than or equal to
WyJS.lt = function(lhs, rhs, isEqual) {
  var left = lhs;
  if (left.val !== undefined) {
      left = left.val;
    }
  var right = rhs;
  if (right.val !== undefined) {
      right = right.val;
    }
  if (isEqual) {
      return (left <= right);
    }
  return (left < right);
};

//Checks for greater than and greater than or equal to
WyJS.gt = function(lhs, rhs, isEqual) {
  var left = lhs;
  if (left.val !== undefined) {
      left = left.val;
    }
  var right = rhs;
  if (right.val !== undefined) {
      right = right.val;
    }
  if (isEqual) {
      return (left >= right);
    }
  return (left > right);
};

//negates a number
WyJS.neg = function(val){
  if(val.val !== undefined){
    return val.neg();
  }
  return -val;
};

WyJS.in = function(thing, list){
 for (var i = 0; i > list.length; i++) {
    if(WyJS.equals(thing, list.getValue(i))){
      return true;
    }
  }
  return false;
}

//used to find if a object is a subtype of type
WyJS.is = function(obj, type) {
  //Check primitive/simple types first
  if (type instanceof WyJS.Type.Null) {
      if (obj === null) {
        return true;
      }
      return false;
  }

  if (type instanceof WyJS.Type.Bool) {
      if (obj instanceof Boolean || typeof obj === 'boolean') {
        return true;
      }
      return false;
  }

  else if (type instanceof WyJS.Type.Real) {
      if (obj instanceof WyJS.Real) {
        return true;
      }
      return false;
  }

  else if (type instanceof WyJS.Type.Int) {
      if (obj instanceof WyJS.Integer) {
        return true;
      }
      return false;
  }

  else if (type instanceof WyJS.Type.Array) {
      return (obj instanceof WyJS.Array && obj.type.subtype(type));
  }

  else if (type instanceof WyJS.Type.Record) {
      return (obj instanceof WyJS.Record && obj.type.subtype(type));
  }

  else if (type instanceof WyJS.Type.Union) {
      return WyJS.getType(obj).subtype(type);
  }

  // else if (type instanceof WyJS.Type.Reference) {
  //    return (obj instanceof WyJS.Ref && obj.type.subtype(type));
  // }
  else if (type instanceof WyJS.Type.Tuple) {
      return (obj instanceof WyJS.Tuple && obj.type.subtype(type));
  }
  return false; //obj is not a subtype of type/type unknown
};

//Casts an object to the given type
WyJS.cast = function(type, obj) {
  //Handle the null case
  if (obj === null)
      return null;

  //Handle the boolean case (only case where obj.type is undefined)
  if (obj.type === undefined)
      return obj;

  //Check for type equality (don't cast in that case)
  if (WyJS.is(obj, type)) {
    if (obj.clone === undefined)
        return obj;
    return obj.clone();
  }

  //Handle the case where casting an int
  if (obj instanceof WyJS.Integer)
      return obj.cast();

  //Handle the case where casting a list
  if (obj instanceof WyJS.Array) {
    var newList = [];
    var i;
    for (i = 0; i < obj.list.length; i++) {
      newList[i] = WyJS.cast(type.elem, obj.list[i]);
    }
    return new WyJS.Array(newList, type);
  }

  //Handle the case where casting a record
  if (obj instanceof WyJS.Record) {
    var newNames = [];
    var newVals = [];
    var j;
    for (j = 0; j < obj.names.length; j++) {
      newNames[j] = obj.names[j];
      newVals[j] = WyJS.cast(type.types[j], obj.values[j]);
    }
    return new WyJS.Record(newNames, newVals, type);
  }

  //Handle the case where casting a tuple
  if (obj instanceof WyJS.Tuple) {
    var newValList = [];
    var k;
    for (k = 0; k < obj.values.length; k++) {
      newValList[k] = WyJS.cast(type.typeList[k], obj.values[k]);
    }
    return new WyJS.Tuple(newValList, type);
  }

  //Otherwise, just return the object
  return obj;

};

//Gets the type of the given object
WyJS.getType = function(obj) {
  if (obj === null) {
    return new WyJS.Type.Null();
  }
  if (obj instanceof Boolean || typeof obj === 'boolean') {
    return new WyJS.Type.Bool();
  }
  return obj.type;
};

WyJS.Type = function() {};

WyJS.Type.Bool = function() {};
WyJS.Type.Bool.prototype = new WyJS.Type();
WyJS.Type.Bool.method('subtype', function(superType){
  if (superType instanceof WyJS.Type.Bool) {
  return true;
  }
  return (superType instanceof WyJS.Type.Union && superType.unionSupertype(this));
});

WyJS.Type.Byte = function() {};
WyJS.Type.Byte.prototype = new WyJS.Type();
WyJS.Type.Byte.method('subtype', function(superType) {
  if (superType instanceof WyJS.Type.Byte) {
    return true;
  }
  return (superType instanceof WyJS.Type.Union && superType.unionSupertype(this));
});

WyJS.Type.Int = function() {};
WyJS.Type.Int.prototype = new WyJS.Type();
WyJS.Type.Int.method('subtype', function(superType){
 if (superType instanceof WyJS.Type.Int) {
    return true;
  }
  return (superType instanceof WyJS.Type.Union && superType.unionSupertype(this));
});

WyJS.Type.Null = function() {};
WyJS.Type.Null.prototype = new WyJS.Type();
WyJS.Type.Null.method('subtype', function(superType) {
  if (superType instanceof WyJS.Type.Null) {
    return true;
  }
  return (superType instanceof WyJS.Type.Union && superType.unionSupertype(this));
});

WyJS.Type.Array = function(val) {this.val = val;};
WyJS.Type.Array.prototype = new WyJS.Type();
WyJS.Type.Array.method('subtype', function(superType) {
  //A list is a subtype of a list if its element type is a subtype of the supertypes element type
  if (superType instanceof WyJS.Type.Array && this.val.subtype(superType.val)) {
    return true;
  }
  return (superType instanceof WyJS.Type.Union && superType.unionSupertype(this));
});

WyJS.Type.Real = function() {};
WyJS.Type.Real.prototype = new WyJS.Type();
WyJS.Type.Real.method('subtype', function(superType) {
  if (superType instanceof WyJS.Type.Real) {
    return true;
  }
  return (superType instanceof WyJS.Type.Union && superType.unionSupertype(this));
});

WyJS.Type.Record = function(names, types) {
  this.names = names;
  this.types = types;
};
WyJS.Type.Record.prototype = new WyJS.Type();
WyJS.Type.Record.method('subtype', function(superType) {
  //Uses depth subtyping, but not width subtyping (field names and numbers must match, must be subtypes)
  var i;
  var valid;

  if (superType instanceof WyJS.Type.Record) {
    if (this.types.length === superType.types.length) {
      valid = true;
      for (i = 0; i < this.types.length; i++) {
       if (!(this.names[i] === superType.names[i] && this.types[i].subtype(superType.types[i]))) {
         valid = false;
         break;
       }
      }
      return valid;
    }
    return false;
  }
  return (superType instanceof WyJS.Type.Union && superType.unionSupertype(this));
});

WyJS.Type.Tuple = function(typeList) {this.typeList = typeList;}
WyJS.Type.Tuple.prototype = new WyJS.Type();
WyJS.Type.Tuple.method('subtype', function(superType) {
  if (superType instanceof WyJS.Type.Tuple) {
    if (superType.typeList.length != this.typeList.length)
      return false;

      var i = 0;
      for (i = 0; i < this.typeList.length; i++) {
        if (!(this.typeList[i].subtype(superType.typeList[i])))
          return false;
      }
      return true;
  }
  return (superType instanceof WyJS.Type.Union && superType.unionSupertype(this));
});

WyJS.Type.Union = function(bounds) {this.bounds = bounds};
WyJS.Type.Union.prototype = new WyJS.Type();
WyJS.Type.Union.method('subtype', function(superType) {
  //A union is a subtype of any type if all its bounds are subtypes of that type
  var i;

  for (i = 0; i < this.bounds.length; i++) {
    if (!(this.bounds[i].subtype(superType))) {
      return false;
    }
  }
  return true;
});

WyJS.Type.Union.method('unionSupertype', function(bound) {
  //A union is a supertype of a type if any of its bounds are supertypes of the type
  //Note records containing union types have already been extracted into union types, so this is safe
  var i;

  for (i = 0; i < this.bounds.length; i++) {
    if (bound.subtype(this.bounds[i])) {
      return true;
    }
  }
  return false;
});

WyJS.Type.Void = function() {};
WyJS.Type.Void.prototype = new WyJS.Type();
WyJS.Type.Void.method('subtype', function() {
  //Void is a subtype of all types
  return true;
});
