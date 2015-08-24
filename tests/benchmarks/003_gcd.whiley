type nat is (int x) where x >= 0

function gcd(nat a, nat b) -> nat:
    if(a == 0):
        return b		   
    while(b != 0) where a >= 0:
        if(a > b):
            a = a - b
        else:
            b = b - a
    return a

method test() -> void:
	assert gcd(2,10) == 2
	assert gcd(879, 234) == 3
	assert gcd(4314, 600) == 6
