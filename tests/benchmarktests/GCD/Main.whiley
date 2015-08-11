import whiley.lang.System
import whiley.io.File
import wybench.Parser

import string from whiley.lang.ASCII

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