function testbool(int x) -> string x:
	if(x >= 1):
		return "ONE"
	else:
		return "ZERO"

method test():
	assume testbool(1) == "ONE"
	assume testbool(0) == "ZERO"