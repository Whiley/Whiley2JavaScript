function test(int x) -> string x:
	if(x >= 1):
		return "ONE"
	else:
		return "ZERO"

method main():
	assume test(1) == "ONE"
	assume test(0) == "ZERO"