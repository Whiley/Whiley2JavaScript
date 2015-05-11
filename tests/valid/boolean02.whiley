method testreal(real x) -> real x:
	return x

method test() -> void:
	assert(testreal(1.1123) == 1.1123)
	assert(testreal(10.5992) == 10.5992)
