method m(&(&(&int)) p)
ensures *p == old(*p)
ensures **p == old(**p)
ensures ***p > old(***p):
    ***p = ***p + 1

public export method test():
    &int p = new 1
    &(&int) q = new p
    &(&(&int)) u = new q
    m(u)
    assert *p > 1
    assert *q == p
    