function testcontrol(int x) -> int x:
	if(x>10):
		return 10
	else:
		if(x==0):
			return 0
		else:
			return -1

method test():
	assume testcontrol(0) == 0
	assume testcontrol(11) == 10
	assume testcontrol(1) == -1