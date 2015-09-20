"use strict";

var WyJS = {};

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
  return new WyJS.Real(-this.val);
}


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
  return new WyJS.Integer(-this.val);
}
    
WyJS.Integer.prototype.cast = function() {    
  return new WyJS.Real(this.val);
};

//RECORD CLASS/METHODS
WyJS.Record = function(listNames, listValues, type) {
  this.names = listNames;
  this.values = listValues;
  this.type = type;
};

//Gets the value associated with a given field
WyJS.Record.prototype.fieldLoad = function(name) {
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
  return new WyJS.Record(cnames, cvalues, this.type);
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
WyJS.List = function(list, type) {//need to implement
  this.list = list;
  this.type = type;
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
  if(this.type instanceof WyJS.Type.Void){
    return new WyJS.List(result, other.type);
  }
  return new WyJS.List(result, this.type);
};

//Deep-Clones the list to a certain type
WyJS.List.prototype.clone = function(type) {

  var clist = [];
  var i;
  var elem;
  
  for (i = 0; i < this.list.length; i++) {
    elem = this.list[i];
    if (elem instanceof WyJS.List || elem instanceof WyJS.Record ) {//|| elem instanceof WyJS.Tuple (last memeber)
      elem = elem.clone();
    }
    clist[i] = elem;
  }
  if(this.type.val instanceof WyJS.Type.Void){
    return new WyJS.List(clist, type);
  }
  return new WyJS.List(clist, this.type);
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

WyJS.List.prototype.sublist = function(from, to){
  var data = [];
  var index = 0;
  for(var i = from.val;i < to.val; i++){
    data[index] = this.list[i];
    index++;
  };
  return new WyJS.List(data, this.type);
};

//generates a list of size 'size' with every value 'val'
WyJS.ListGen = function(val, size, type){
  var list = [];
  for (var i = 0; i < size.val; i++) {
    list[i] = val;
  }
  return new WyJS.List(list, type);
};

//TUPLE CLASS/METHODS
WyJS.Tuple = function(values, type) {
  this.values = values;
  this.type = type;
};

WyJS.Tuple.prototype.tupleLoad = function(num){
  var load = num;
  if(load.val !== undefined){
    load = load.val
  }
  return this.values[load];
}

WyJS.Tuple.prototype.equals = function(other) {
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
};

WyJS.Tuple.prototype.clone = function() {
  var newlist = [];
  var i = 0;
  for (i = 0; i < this.values.length; i++) {
    var tmp = this.values[i];
    if (tmp instanceof WyJS.Record || tmp instanceof WyJS.List || tmp instanceof WyJS.Tuple)
      tmp = tmp.clone();
    newlist[i] = tmp;
  }
  return new WyJS.Tuple(newlist, this.type);
};

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
  else if (left instanceof WyJS.List || left instanceof WyJS.Tuple || left instanceof WyJS.Record) {
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
      
  else if (type instanceof WyJS.Type.List) {
      return (obj instanceof WyJS.List && obj.type.subtype(type));
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
  if (obj instanceof WyJS.List) {
    var newList = [];
    var i;
    for (i = 0; i < obj.list.length; i++) {
      newList[i] = WyJS.cast(type.elem, obj.list[i]);
    }
    return new WyJS.List(newList, type);
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

WyJS.Type.Void = function() {};
WyJS.Type.Void.prototype = new WyJS.Type();
WyJS.Type.Void.prototype.subtype = function() {
  //Void is a subtype of all types
  return true;
};

WyJS.Type.Null = function() {};
WyJS.Type.Null.prototype = new WyJS.Type();
WyJS.Type.Null.prototype.subtype = function(superType) {
  if (superType instanceof WyJS.Type.Null) {
    return true;
  }
  return (superType instanceof WyJS.Type.Union && superType.unionSupertype(this));
};

WyJS.Type.Bool = function() {};
WyJS.Type.Bool.prototype = new WyJS.Type();
WyJS.Type.Bool.prototype.subtype = function(superType){
  if (superType instanceof WyJS.Type.Bool) {
  return true;
  }
  return (superType instanceof WyJS.Type.Union && superType.unionSupertype(this));
};

WyJS.Type.Int = function() {};
WyJS.Type.Int.prototype = new WyJS.Type();
WyJS.Type.Int.prototype.subtype = function(superType){
 if (superType instanceof WyJS.Type.Int) {
    return true;
  }
  return (superType instanceof WyJS.Type.Union && superType.unionSupertype(this));
};

WyJS.Type.Real = function() {};
WyJS.Type.Real.prototype = new WyJS.Type();
WyJS.Type.Real.prototype.subtype = function(superType) {
  if (superType instanceof WyJS.Type.Real) {
    return true;
  }
  return (superType instanceof WyJS.Type.Union && superType.unionSupertype(this));
};

WyJS.Type.List = function(val) {this.val = val;};
WyJS.Type.List.prototype = new WyJS.Type();
WyJS.Type.List.prototype.subtype = function(superType) {
  //A list is a subtype of a list if its element type is a subtype of the supertypes element type
  if (superType instanceof WyJS.Type.List && this.val.subtype(superType.val)) {
    return true;
  }
  return (superType instanceof WyJS.Type.Union && superType.unionSupertype(this));
};

WyJS.Type.Record = function(names, types) {
  this.names = names;
  this.types = types;
};
WyJS.Type.Record.prototype = new WyJS.Type();
WyJS.Type.Record.prototype.subtype = function(superType) {
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
};

WyJS.Type.Tuple = function(typeList) {this.typeList = typeList;}
WyJS.Type.Tuple.prototype = new WyJS.Type();
WyJS.Type.Tuple.prototype.subtype = function(superType) {
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
};

WyJS.Type.Union = function(bounds) {this.bounds = bounds};
WyJS.Type.Union.prototype = new WyJS.Type();
WyJS.Type.Union.prototype.subtype = function(superType) {
  //A union is a subtype of any type if all its bounds are subtypes of that type
  var i;
  
  for (i = 0; i < this.bounds.length; i++) {
    if (!(this.bounds[i].subtype(superType))) {
      return false;
    }
  }
  return true;
};

WyJS.Type.Union.prototype.unionSupertype = function(bound) {
  //A union is a supertype of a type if any of its bounds are supertypes of the type
  //Note records containing union types have already been extracted into union types, so this is safe
  var i;
  
  for (i = 0; i < this.bounds.length; i++) {
    if (bound.subtype(this.bounds[i])) {
      return true;
    }
  }
  return false;
};