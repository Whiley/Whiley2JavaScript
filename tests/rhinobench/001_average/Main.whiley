// ========================================================
// Benchmark
// ========================================================

function average(real[] data) -> real
// Input list cannot be empty
requires |data| > 0:
    //
    real sum = 0.0
    int i = 0
    while i < |data|:
        sum = sum + data[i]
        i = i + 1
    return sum / (real) |data|
