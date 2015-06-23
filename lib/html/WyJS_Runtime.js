"use strict";

var WyJS = {};

//Real CLASS/METHODS
WyJS.Real = function (i) {
	if ( i.val !== undefined) {
		this.val = i.val;
	}
	else {
		this.val = i;
	}
	//this.type = new WyJS.Type.Real();
};

WyJS.Real.prototype.add = function (other) {
	return new WyJS.Real(this.val + other.val);
};

WyJS.Real.prototype.sub = function(other) {
	return new WyJS.Real(this.val - other.val);
};

WyJS.Real.prototype.mul = function(other) {
	return new WyJS.Real(this.val * other.val);
};

WyJS.Real.prototype.div = function(other) {
	return new WyJS.Real(this.val / other.val);
};

WyJS.Real.prototype.rem = function(other) {
	return new WyJS.Real(this.val % other.val);
};

//negates a real
WyJS.Real.prototype.neg = function(){
	var neg = this;
	if(neg.val !== undefined){
		neg = neg.val;
	}
	return new WyJS.Real(-neg);
}

WyJS.Real.prototype.toString = function() {
    var tmp = this.val.toString();
    var abs = Math.abs(this.val);
    if (abs != 0 && (abs < 0.001 || abs >= 10000000)) {
		tmp = this.val.toExponential().replace('e', 'E');
	}
	if (tmp.indexOf('.') === -1) {
		if (tmp.indexOf('E') !== -1) {
		    tmp = tmp.replace('E', '.0E');
		 }
		else {
			tmp += '.0';
		}
	}
	return new WyJS.String(tmp);
};

//INTEGER CLASS/METHODS
WyJS.Integer = function(i) {
	if (i.val !== undefined) {
		this.val = ~~(i.val);
	}
	else {
		this.val = ~~i;
	}
	//this.type = new WyJS.Type.Int();
};

WyJS.Integer.prototype.add = function(other) {
	if (other instanceof WyJS.Integer) {
		return new WyJS.Integer(this.val + other.val);
	}
	
	return new WyJS.Real(this.val + other.val);
};

WyJS.Integer.prototype.sub = function(other) {
	if (other instanceof WyJS.Integer) {
		return new WyJS.Integer(this.val - other.val);
	}
		
	return new WyJS.Real(this.val - other.val);
};

WyJS.Integer.prototype.mul = function(other) {
	if (other instanceof WyJS.Integer) {
		return new WyJS.Integer(this.val * other.val);
	}
		
	return new WyJS.Real(this.val * other.val);
};

WyJS.Integer.prototype.div = function(other) {
	var tmp = this.val / other.val;
	if (other instanceof WyJS.Integer) {
		return new WyJS.Integer(~~tmp);
	}
	
	return new WyJS.Real(this.val / other.val);
};

WyJS.Integer.prototype.rem = function(other) {	
	if (other instanceof WyJS.Integer) {
		return new WyJS.Integer(this.val % other.val);
	}
		
	return new WyJS.Real(this.val % other.val);
};

//negates a number
WyJS.Integer.prototype.neg = function(){
	var neg = this;
	if(neg.val !== undefined){
		neg = neg.val;
	}
	return new WyJS.Integer(-neg);
}
		
// WyJS.Integer.prototype.cast = function() {	  
// 	return new WyJS.Real(this.val);
// };

WyJS.Integer.prototype.toString = function() {
	//return new WyJS.String(this.val.toFixed());
};

//Checks if two objects are equal (or not equal, based on the isEqual parameter)
WyJS.equals = function(lhs, rhs, isEqual) {
  var left = lhs;
  // if (left.type !== undefined) {
  // 		if (!WyJS.is(rhs, left.type))
  // 			return false;
  // }
  
  // if (rhs.type !== undefined) {
  // 		if (!WyJS.is(left, rhs.type))
  // 			return false;
  // }
  if (left.val !== undefined) {
  		left = left.val;
  }
  // else if (left instanceof WyJS.String) {
  // 		left = left.text;
  // }
  // else if (left instanceof WyJS.Char) {
  // 		left = left.char;
  // }
  else if (left instanceof WyJS.List  || left instanceof WyJS.Record) {//|| left instanceof WyJS.Tuple (MIDDLE PARAMETER)
    	if (isEqual) {
    		return left.equals(rhs);
    	}
    	return !(left.equals(rhs));
  }
  
  var right = rhs;
  if (right.val !== undefined) {
  		right = right.val;
  	}
  // else if (right instanceof WyJS.String) {
  // 		right = right.text;
  // 	}
  // else if (right instanceof WyJS.Char) {
  // 		right = right.char;
  // 	}
  
  if (isEqual) {
  		return left === right;
  	}
	return left !== right;
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

//RECORD CLASS/METHODS
WyJS.Record = function(listNames, listValues) {//,type (last paremeter)
  this.names = listNames;
  this.values = listValues;
  //this.type = type;
};

//Gets the value associated with a given field
WyJS.Record.prototype.getValue = function(name) {
  var index = (name.text !== undefined) ? this.names.indexOf(name.text) : this.names.indexOf(name);
  if (index === -1 || index >= this.values.length) {
    return null;
 }
  var elem = this.values[index];
  return elem;
};

//Checks if a given field exists
WyJS.Record.prototype.hasKey = function(name) {
  return (name.text !== undefined) ? (this.names.indexOf(name.text) !== -1) : (this.names.indexOf(name) !== -1);
};

//Puts the given key into the field associated with the given name, overwriting any existing value
WyJS.Record.prototype.setValue = function(name, key) {
  var index = (name.text !== undefined) ?this.names.indexOf(name.text) : this.names.indexOf(name);
  if (index === -1 || index >= this.values.length) {
    	return;
   }
  this.values[index] = key;
};

//Deep-Clones the record to ensure pass-by-value holds
WyJS.Record.prototype.clone = function() {
  var i;
  var cnames = [];
  var cvalues = [];
  var elem;
  for (i = 0; i < this.names.length; i++) {
    cnames[i] = this.names[i];
    elem = this.values[i];
    if (elem instanceof WyJS.List || elem instanceof WyJS.Record || elem instanceof WyJS.Tuple) {
      elem = elem.clone();
   }
    cvalues[i] = elem;
  }
  return new WyJS.Record(cnames, cvalues);//this.type (last paremeter)
};

WyJS.Record.prototype.toString = function() {
  var i;
  var str = '{';
  var tmpNames = [];
  var tmp;
  for (i = 0; i < this.names.length; i++) {
    tmpNames[i] = this.names[i];
    tmpNames.sort();
  }
  var first = true;
  for (i = 0; i < this.names.length; i++) {
    if (!first) {
      str += ',';
   }
    first = false;
    str += tmpNames[i];
    str += ':';
    tmp = this.values[this.names.indexOf(tmpNames[i])];
    str += (tmp === null) ? 'null' : tmp.toString().toString();
  }
  str += '}';
  return new WyJS.String(str);
};

WyJS.Record.prototype.equals = function(other) {
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
};

//LIST CLASS/METHODS
WyJS.List = function(list) {//,type (second parameter)
  this.list = list;
  //this.type = type;
};

//Gets the value at a given index
WyJS.List.prototype.getValue = function(index) {
  var idx = index;
  if (index.val !== undefined) {
  		idx = index.val;
  	}
  return this.list[idx];
};

//Sets the value at the given index to the given value
WyJS.List.prototype.setValue = function(index, value) {
  var idx = index;
  if (index.val !== undefined) {
  		idx = index.val;
  	}
  this.list[idx] = value;
};

WyJS.List.prototype.length = function() {
  return new WyJS.Integer(this.list.length);
};

//Appends another list to this list (must be of same type)
WyJS.List.prototype.append = function(other) {
  var result = [];
  var count = 0;
  var i;
  for (i = 0; i < this.list.length; i++) {
    result[count++] = this.list[i];
  }
  for (i = 0; i < other.list.length; i++) {
    result[count++] = other.list[i];
  }
  return new WyJS.List(result, this.type);
};

//Deep-Clones the list to ensure pass-by-value
WyJS.List.prototype.clone = function() {
  var clist = [];
  var i;
  var elem;
  
  for (i = 0; i < this.list.length; i++) {
    elem = this.list[i];
    if (elem instanceof WyJS.List || elem instanceof WyJS.Record || elem instanceof WyJS.Tuple) {
      elem = elem.clone();
    }
    clist[i] = elem;
  }
  return new WyJS.List(clist);//, this.type (last parameter)
};

WyJS.List.prototype.toString = function() {
  var str = '[';
  var first = true;
  var i;
  
  for (i = 0; i < this.list.length; i++) {
    if (!first) {
      str += ', ';
    }
    
    first = false;
    str += (this.list[i] === null) ? 'null' : (this.list[i].toString().toString());
  }
  str += ']';
  return new str;
};

WyJS.List.prototype.equals = function(other) {
	
	var i;
	
  if (!(other instanceof WyJS.List) || other === undefined) {
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
};
