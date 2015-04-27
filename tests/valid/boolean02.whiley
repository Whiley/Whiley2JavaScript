method test(real x) -> real x:
	return x

method main() -> void:
	assert(test(1.1123) == 1.1123)
	assert(test(10.5992) == 10.5992)
