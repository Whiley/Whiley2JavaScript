method test()->void:
	real x = 1.6
	real y = 2.4
	assert((x + y) == 4.0)
	assert((y - x) == 0.8)
	assert((y / x) == 1.5)
	assert((y * x) == 3.84)
	assert(y > x)
	assert(x < y)
	assert(y >= x)
	assert(x <= y)