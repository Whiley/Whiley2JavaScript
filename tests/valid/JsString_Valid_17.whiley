import string from js::core

public export method test():
    // generate normal string
    string s = "hello\n\t\"hello\""
    //
    assert s == "hello\n\t\"hello\""
