function testcontrol(int x) -> bool x:
	if(x>10):
		return true
	else if(x==0):
		return false
	else:
		return true

method test():
	assume testcontrol(0) == false
	assume testcontrol(11) == true
	assume testcontrol(9) == true