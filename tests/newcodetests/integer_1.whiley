method test()->void:
	int x = 1
	int y = 2
	assert((x + y) == 3)
	assert((y - x) == 1)
	assert((y / x) == 2)
	assert((y * x) == 2)
	assert((1 % 2) == 1)
	assert(y > x)
	assert(x < y)
	assert(y >= x)
	assert(x <= y)