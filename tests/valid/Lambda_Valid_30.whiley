method m<T>(T item, method(T,T)->(T) mn) -> (T r):
    //
    mn(item,item)
    //
    return item

method add(int x, int y) -> (int z):
    return x+y

public export method test():
    int x = m(123,&add)
    int y = m<int>(246,&add)
    assume x == 123
    assume y == 246

