import whiley.lang.*

// Author: David J. Pearce

// ========================================================
// Description
// ========================================================

// This is a very naive implementation of matrix multiplication.  It does
// not perform any optimisations, and does not represent matrices in any
// special manner (e.g. sparse representations, etc).
//
// In the future, it would be interesting to consider chain
// multiplication problem:
//
// http://en.wikipedia.org/wiki/Matrix_chain_multiplication
//

// ========================================================
// Benchmark Code
// ========================================================

type nat is (int x) where x >= 0

type Matrix is {
    int width,
    int height,
    int[][] data
} where |data| == height && no { i in 0..|data| | |data[i]| != width }

function Matrix(nat width, nat height, int[][] data) -> (Matrix r)
// Input array must match matrix height
requires |data| == height
// Elements of input array must match matrix width
requires no { i in 0..|data| | |data[i]| != width }
// 
ensures r.width == width && r.height == height && r.data == data:
    //
    return {
        width: width,
        height: height,
        data: data
    }

function multiply(Matrix A, Matrix B) -> (Matrix C) 
// Must be possible to multiply matrices
requires A.width == B.height
// Specify dimensions of result
ensures C.width == B.width && C.height == A.height:
    //
    int[][] C_data = [[0;B.width];A.height]
    nat i = 0
    //
    // NOTE: the following loops can be more elegantly written using
    // "for" statements.  However, for the moment I use "while"
    // statements as these work better with verification.
    //
    while i < A.height where i >= 0:
        nat j = 0
        while j < B.width where j >= 0:
            int r = 0
            nat k = 0
            while k < A.width where k >= 0:
                r = r + (A.data[i][k] * B.data[k][j])
                k = k + 1
            C_data[i][j] = r
            j = j + 1
        i = i + 1
    //
    return Matrix(B.width,A.height,C_data)

function buildMatrix(nat width, nat height, int[] data, int pos) -> Matrix
requires |data| > pos + (width * height):
    //
    int[][] rows = [[0; width]; height]
    //
    int i = 0
    while i < height:
        int j = 0
        while j < width:
            rows[i][j] = data[pos+j]
            j = j + 1   
        i = i + 1
        pos = pos + width
    //
    return Matrix(width,height,rows)
