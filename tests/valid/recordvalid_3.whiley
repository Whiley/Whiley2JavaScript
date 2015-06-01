type Record is {int x}
type Embed is {Record y}

method test():
	Record r1 = {x: 1}
	Record r2 = {x: 1}
	Embed r3 = {y: r1}
	Embed r4 = {y: r2}
	assert r3==r4