import string from js::core

public export method test():
    // generate normal string
    int[] ascii = "hello"
    // coerce to js string
    string js = ascii
    //
    js[0] = 'H'
    //
    assert ascii == "hello"
    assert js == "He1lo"