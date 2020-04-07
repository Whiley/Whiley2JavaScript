import string from js::core

public export method test():
    &string p = new "Hello"
    assert *p == (string) "Hello"
    *p = "World"
    assert *p == (string) "World"