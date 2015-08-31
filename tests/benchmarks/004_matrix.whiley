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

function setUp1() -> Matrix:
	Matrix A = buildMatrix(3,3,[1,1,1,0,0,0,1,1,1],0)
	Matrix B = buildMatrix(3,3,[2,1,2,1,0,1,2,1,2],0)
	return multiply(A,B)

function setUp2() -> Matrix:
	Matrix A = buildMatrix(3,3,[3,6,4,2,2,2,1,2,3],0)
	Matrix B = buildMatrix(3,3,[4,2,4,5,1,1,1,2,9],0)
	return multiply(A,B)

public export method test() -> void:
    assert setUp1() == buildMatrix(3,3,[5,2,5,0,0,0,5,2,5],0)
    assert setUp2() == buildMatrix(3,3,[46,20,54,20,10,28,17,10,33],0)