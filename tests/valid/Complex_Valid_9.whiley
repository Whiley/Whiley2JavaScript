function min(int x, int y) -> (int m)
ensures m <= x && m <= y && (m == x || m == y):
    if x <= y:
        return x
    else:
        return y

function max(int x, int y) -> (int m)
ensures m >= x && m >= y && (m == x || m == y):
    if x >= y:
        return x
    else:
        return y

function sort2(int x, int y) -> (int u, int v)
ensures u <= v && ((u == x && v == y) || (u == y && v == x)):
    u = min(x, y)
    v = max(x, y)
    return u, v

public export method test():
    int a = 1
    int b = 2
    //
    (a,b) = sort2(a,b)
    assert (a == 1) && (b == 2)
    //
    (a,b) = sort2(b,a)
    assert (a == 1) && (b == 2)
    
