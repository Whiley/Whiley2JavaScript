// ========================================================
// Benchmark
// ========================================================

function average([real] data) -> real
// Input list cannot be empty
requires |data| > 0:
    //
    real sum = 0.0
    int i = 0
    while i < |data|:
        sum = sum + data[i]
        i = i + 1
    return sum / (real) |data|
// ========================================================
// Test
// ========================================================
method test() -> void:
    assert average([1.0,2.0,3.0,4.0,5.0]) == 3.0
    assert average([0.0,0.0,0.0,0.0]) == 0.0
    assert average([11002003.0,302901883.0,8280912.0,91398.0,7892379.0]) == 66033715.0
