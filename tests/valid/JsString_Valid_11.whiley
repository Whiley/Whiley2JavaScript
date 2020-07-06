import string from js::core

type Ref<T> is &{T val}

public export method test():
    Ref<string> p = new {val: "Hello"}
    assert p->val == (string) "Hello"
    p->val = "World"
    assert p->val == (string) "World"