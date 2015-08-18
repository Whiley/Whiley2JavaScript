method f()->int:
	int x = 0
	while(x < 10):
		if(x == 5):
			x = 7
		if(x == 8):
			x = 10
		x = x + 1
	return x

method test()->void:
	assert f() == 10