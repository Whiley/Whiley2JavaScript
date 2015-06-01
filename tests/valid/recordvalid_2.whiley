type Record is {int x}

method test():
	Record r1 = {x: 1}
	Record r2 = {x: 1}
	assert r1==r2