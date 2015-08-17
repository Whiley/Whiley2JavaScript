type boolnull is bool|null

public method f(boolnull x) -> bool:
	if x is bool:
		return x
	return true

public export method test() -> void:
	boolnull x = false

	assume (!x)
