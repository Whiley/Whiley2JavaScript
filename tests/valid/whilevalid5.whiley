public function f(int x) -> int x:
	while x < 10:
		if x==1:
			break
		x = x + 1
	return x

public export method test() -> void:
    assert f(0 ) == 16
    assert f(5) == 10
