type List is null|Node
type Node is &{ int data, List next }

method zero(List l)
ensures l is null || l->data == 0:
    //
    while !(l is null)
    // Structure of list unchanged
    where (l is null) || (l->next == old(l->next)):
        l->data = 0
        l = l->next

public export method test():
    List l1 = null
    List l2 = new {data:1,next:l1}
    List l3 = new {data:2,next:l2}
    //
    zero(l3)
    assert l3->data == 0
