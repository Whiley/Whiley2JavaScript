function testcontrol(int x) -> bool x:
	if(x>10):
		return true
	else:
		return false

method test():
	assume testcontrol(0) == false
	assume testcontrol(11) == true