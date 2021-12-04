property sum(int n, int[] xs, int i) -> (bool r):
    (i >= |xs| && n == 0) ||
    (i < |xs| && sum(n-xs[i],xs,i+1))

function fsum(int[] xs, int s, int[] ys) -> (int r)
requires sum(s,xs,0) && sum(s,ys,0)
ensures r == 0:
    //
    return 0

function f() -> (int r):
    return 123678

public export method test():
    int x = f()
    //
    assert fsum([1],1,[1]) == 0
    assert fsum([1],1,[1,0]) == 0
    assert fsum([1,0],1,[1]) == 0
    assert fsum([1,2],3,[1,2]) == 0
    assert fsum([2,1],3,[1,2]) == 0
    assert fsum([1,2],3,[2,1]) == 0
    assert fsum([1,2],3,[1,1,1]) == 0
    assert fsum([1,1,1],3,[1,2]) == 0
    assert fsum([1,1,1],3,[1,1,1]) == 0
    assert fsum([x,x],2*x,[x,x]) == 0