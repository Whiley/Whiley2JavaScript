import string from js::core

public export method test():
    string s1 = "hello"
    string s2 = s1
    s2[2] = '1'
    assert s1 == "hello"
    assert s1[0] == 'h'
    assert s1[1] == 'e'
    assert s1[2] == 'l'
    assert s1[3] == 'l'
    assert s1[4] == 'o'
    assert |s1| == 5
    assert s2 == "he1lo"
    assert s2[0] == 'h'
    assert s2[1] == 'e'
    assert s2[2] == '1'
    assert s2[3] == 'l'
    assert s2[4] == 'o'
    assert |s2| == 5
