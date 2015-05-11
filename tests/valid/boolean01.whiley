method test() -> void:
    bool x = true
    assume x == true
    x = false
    assert x == false