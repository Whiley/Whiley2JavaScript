method test()->void:
	bool x = true
	bool y = false
	//assert x == true
	//assert y == false
	assert (x && y) == false
	assert (x && x) == true
	assert (y && y) == false
	assert !y
	assert !!x