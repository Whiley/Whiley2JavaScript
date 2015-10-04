

function doit(int[] ls) -> int[]:
    int i = 0
    int[] r = [0; |ls|]
    while i < |ls| where i <= |ls| && |r| == |ls|:
        int item = ls[|ls|-i]
        i = i - 1
        if item == 2:
        	r[i] = 3
        else:
        	item = 5
        if item == 5:
        	item = i
    return r

public export method test() -> void:
    int[] rs = doit([1, 2, 3, 4, 5])
    assume rs == [0,3,2,3,4]
