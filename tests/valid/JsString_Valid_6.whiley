import string from js::core

public function f(string js) -> bool:
    return js == "Hello"

public export method test():
    // Force implict coercion
    assume !f("hello")
    // Force implict coercion    
    assume f("Hello")    
