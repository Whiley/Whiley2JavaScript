import string from js::core

type Point is {int x, int y}

function get(bool f) -> (null|Point|string r)
ensures f ==> (r is string)
ensures !f ==> (r is Point):
    if f:
        return "Hello"
    else:
        return {x:0,y:0}

public export method test():
    null|Point|string xs = get(true)
    // Must be true
    assert xs is null|string
    // Must also be true
    assert xs is string    
    // Let's try again
    null|Point|string ys = get(false)
    // Must be true
    assert ys is null|Point
    // Must also be true
    assert ys is Point    
