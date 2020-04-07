import string from js::core

type Box<T> is {
    T content
}

public export method test():
    Box<T> box = { content: "hello" }
    assert box.content == (string) "hello"
