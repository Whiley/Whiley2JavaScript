function select<S,T>(bool f, S s, T t) -> (S|T r)
ensures f ==> (r == s)
ensures !f ==> (r == t):
    if f:
        return s
    else:
        return t

public export method test():
    int|bool x = select(true,1,false)
    int|bool y = select(false,1,false)    
    //
    assert x == 1
    assert y == false
    