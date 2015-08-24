import whiley.lang.*

type nat is (int x) where x >= 0

function fib(nat x) -> nat:
    if x <= 1:
        return x
    else:
        return fib(x-1) + fib(x-2)

method test():
    assert fib(2) == 1
    assert fib(10) == 55
    assert fib(23) == 28657