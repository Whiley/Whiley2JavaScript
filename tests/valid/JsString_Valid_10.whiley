import string from js::core

function isJsString(null|string ns) -> bool:
    return ns is string

public export method test():
    assume !isJsString(null)
    assume isJsString("hello world")
