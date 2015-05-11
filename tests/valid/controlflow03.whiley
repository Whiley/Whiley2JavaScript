function testbool(int x) -> bool x:
	return x == 1

method test():
	assume testbool(0) == false
	assume testbool(1) == true