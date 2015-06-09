method test():
	[int] xs = [1,2,3]
	[int] ys = xs
	ys[0] = 0
	assert xs == [1,2,3]
	assert ys == [0,2,3]