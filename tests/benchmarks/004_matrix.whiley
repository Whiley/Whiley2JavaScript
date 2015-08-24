type nat is (int x) where x >= 0

type Matrix is {
    int width,
    int height,
    [[int]] data
} where |data| == height && no { i in data | |i| != width }

function buildMatrix(nat width, nat height, [int] data, int pos) -> Matrix
requires |data| > pos + (width * height):
    //
    [[int]] rows = []
    //
    int i = 0
    while i < height:
        rows = rows ++ [data[pos .. (pos+width)]] 
        i = i + 1
        pos = pos + width
    //
    return Matrix(width,height,rows)

function Matrix(nat width, nat height, [[int]] data) -> (Matrix r)
// Input array must match matrix height
requires |data| == height
// Elements of input array must match matrix width
requires no { i in data | |i| != width }
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
    [[int]] C_data = []
    nat i = 0
    //
    // NOTE: the following loops can be more elegantly written using
    // "for" statements.  However, for the moment I use "while"
    // statements as these work better with verification.
    //
    while i < A.height where i >= 0:
        [int] row = []
        nat j = 0
        while j < B.width where j >= 0:
            int r = 0
            nat k = 0
            while k < A.width where k >= 0:
                r = r + (A.data[i][k] * B.data[k][j])
                k = k + 1
            row = row ++ [r]
            j = j + 1
        C_data = C_data ++ [row]
        i = i + 1
    //
    return Matrix(B.width,A.height,C_data)


function test():
    Matrix C = multiply(buildMatrix(10,10,[99, 33, 22, 87, 51, 34, 71, 71, 73, 28,78, 52, 43, 45, 90, 69, 52, 8, 3, 66,78, 0, 89, 51, 10, 0, 82, 41, 72, 33,39, 15, 87, 76, 68, 0, 58, 17, 72, 44,28, 41, 97, 78, 84, 49, 38, 17, 74, 82,50, 54, 31, 38, 86, 38, 42, 98, 16, 20,61, 94, 2, 53, 33, 68, 38, 21, 85, 26,45, 51, 52, 45, 58, 28, 10, 97, 56, 88,44, 72, 84, 39, 18, 15, 26, 60, 70, 53,45, 4, 74, 22, 52, 17, 67, 33, 13, 24] ,2), buildMatrix(10,10,[72, 37, 33, 15, 90, 73, 1, 80, 55, 61, 51, 13, 15, 17, 70, 75, 91, 39, 72, 92, 41, 86, 8, 5, 69, 50, 45, 39, 48, 51, 56, 97, 53, 59, 79, 23, 73, 67, 94, 70, 15, 62, 53, 64, 24, 78, 19, 3, 26, 0, 51, 62, 38, 9, 75, 37, 84, 28, 55, 42, 60, 19, 20, 24, 98, 60, 34, 33, 97, 72, 25, 8, 69, 34, 96, 91, 59, 62, 60, 2, 28, 60, 14, 15, 22, 84, 6, 94, 25, 47, 27, 41, 43, 45, 85, 96, 78, 27, 72, 1] ,(2+(10*10))))