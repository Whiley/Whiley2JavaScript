function test(int x) -> bool x:
	return x > 10

method main():
	assume test(0) == false
	assume test(11) == true