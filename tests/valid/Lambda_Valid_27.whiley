function f<T>(T item, function(T,T)->(T) fn) -> (T r):
    //
    return fn(item,item)

function add(int x, int y) -> (int z):
    return x+y

public export method test():
    assume f(123,&add) == 246
    assume f<int>(246,&add) == 492

