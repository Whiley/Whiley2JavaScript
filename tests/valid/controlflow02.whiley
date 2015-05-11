function testbool(int x) -> bool x:
	return x > 10

method test():
	assume testbool(0) == false
	assume testbool(11) == true