function testcontrol(int x) -> int x:
	if(x>10):
		if(x>11):
			if(x>12):
				if(x>13):
					if(x>14):
						if(x>15):
							return 2000
						else:
							return -2000
	return -1

method test():
	assume testcontrol(0) == -1
	assume testcontrol(11) == -1
	assume testcontrol(16) == 2000
	assume testcontrol(15) == -2000