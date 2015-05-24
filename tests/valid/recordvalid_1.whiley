type Record is {int x, int y}

method test():
	Record r1 = {x: 1, y: 2}
	Record r2 = {x: 1, y:2}
	assert r1==r2