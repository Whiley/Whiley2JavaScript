function matches(int[] items, int item) -> (int r)
ensures r <= |items|:
    int n = 0
    // Determine how many
    for i in 0..|items| where n <= i:
        if items[i] == item:
            n = n + 1
    //
    return n

public export method test():
    int[] xs = [1,2,3,1,2,3,3]
    //
    assume matches(xs,1) == 2
    assume matches(xs,2) == 2
    assume matches(xs,3) == 3
    //
    assert matches(xs,3) <= |xs|