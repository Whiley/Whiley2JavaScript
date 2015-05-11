method testbool(bool x) -> bool x:
	return x

method test() -> void:
	assert(testbool(true) == true)
	assert(testbool(false) == false)
