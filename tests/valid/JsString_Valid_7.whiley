import string from js::core

public export method test():
    string[] items = ["hello","world"]
    assert items[0] == (string) "hello"
    assert items[1] == (string) "world"