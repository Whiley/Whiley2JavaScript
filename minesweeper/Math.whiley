/**
 * Return absolute value of integer variable.
 */
public function abs(int x) -> (int r)
// if input positive, then result equals input
ensures x >= 0 ==> r == x
// if input negative, then result equals negated input
ensures x < 0 ==> r == -x:
    //
    if x < 0:
        return -x
    else:
        return x

/**
 * Return absolute value of real variable.
 */
public function abs(real x) -> (real r)
// if input positive, then result equals input
ensures x >= 0.0 ==> r == x
// if input negative, then result equals negated input
ensures x < 0.0 ==> r == -x:
    //
    if x < 0.0:
        return -x
    else:
        return x

/**
 * Return maximum of two integer variables
 */
public function max(int a, int b) -> (int r)
// Return cannot be smaller than either parameter
ensures r >= a && r >= b
// Return value must equal one parameter
ensures r == a || r == b:
    //
    if a < b:
        return b
    else:
        return a

/**
 * Return maximum of two real variables
 */
public function max(real a, real b) -> (real r)
// Return cannot be smaller than either parameter
ensures r >= a && r >= b
// Return value must equal one parameter
ensures r == a || r == b:
    //
    if a < b:
        return b
    else:
        return a

/**
 * Return minimum of two integer variables
 */
public function min(int a, int b) -> (int r)
// Return cannot be greater than either parameter
ensures r <= a && r <= b
// Return value must equal one parameter
ensures r == a || r == b:
    //
    if a > b:
        return b
    else:
        return a

/**
 * Return minimum of two real variables
 */
public function min(real a, real b) -> (real r)
// Return cannot be greater than either parameter
ensures r <= a && r <= b
// Return value must equal one parameter
ensures r == a || r == b:
    //
    if a > b:
        return b
    else:
        return a

/**
 * Return integer value raised to a given power.
 */
public function pow(int base, int exponent) -> int
// Exponent cannot be negative
requires exponent > 0:
    //
    int r = 1
    int i = 0
    while i < exponent:
        r = r * base
        i = i + 1
    return r