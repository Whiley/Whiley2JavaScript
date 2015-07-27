

type unionrecord is {int|real x, int|null y} 

public method test() -> void:
    unionrecord x = {x: 1, y: null}
    unionrecord y = {x: 1.5, y: 1}
    unionrecord z = {x: 1.7, y: null}
