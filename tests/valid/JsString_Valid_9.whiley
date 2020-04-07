import string from js::core

public export method test():
    null|string ns = "hello"
    assert !(ns is null)
    assert ns == (string) "hello"
