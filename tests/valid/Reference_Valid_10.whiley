public export method test():
    &int p = new 1
    &int q = new 1
    //
    assert *p == *q
    assert p != q
    //
    *p = 2
    //
    assert *p != *q
