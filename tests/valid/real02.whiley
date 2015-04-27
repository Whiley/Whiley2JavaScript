method test(bool x) -> bool x:
	return x

method main() -> void:
	assert(test(true) == true)
	assert(test(false) == false)
