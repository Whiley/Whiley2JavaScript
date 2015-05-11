function testbool(bool x) -> bool x:
	return !x

method test():
	assume testbool(true) == false
	assume testbool(false) == true