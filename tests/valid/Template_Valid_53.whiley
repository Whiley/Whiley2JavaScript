public type Box<T> is { T val }

function box<T>(T x) -> (Box<T> r)
ensures r.val == x:
    return {val:x}

// A curious little thing
function looper<T>(Box<T>|null x) -> (T r)
ensures (x is null) || (x.val == r):
    if x is null:
        return looper(x)
    else:
        return x.val

public export method test():
    int i = looper(box(1))
    //
    assert i == 1