type uint is (int n) where n >= 0

// LIFO
type Channel<T> is {
    T[] slots,
    uint size
} where size <= |slots|

method put<T>(&Channel<T> self, T val, uint n):
    // Pseudo concurrency
    while n > 0 && self->size == |self->slots|:
        n = n - 1
    // Check what happened
    if n > 0:
        self->slots[self->size] = val
        self->size = self->size + 1

method get<T>(&Channel<T> self, T def, uint n) -> (T r):
    // Pseudo concurrency
    while n > 0 && self->size == 0:
        n = n - 1
    // Check what happened
    if n <= 0:
        // timeout
        return def
    else:
        self->size = self->size - 1    
        return self->slots[self->size]

final uint TIMEOUT = 100

public export method test():
    // Construct empty channel
    &Channel<int> ch = new { slots: [0,0,0], size: 0 }
    // Put some items in
    put(ch,1,TIMEOUT)
    put(ch,2,TIMEOUT)
    put(ch,3,TIMEOUT)
    // Get items out
    int u = get(ch,0,TIMEOUT)
    int v = get(ch,0,TIMEOUT)    
    // Check
    assume u == 3
    assume v == 2
    // Put more int
    put(ch,4,TIMEOUT)
    // Get more out
    int w = get(ch,0,TIMEOUT)
    int x = get(ch,0,TIMEOUT)    
    // Check
    assume w == 4
    assume x == 1
    
    