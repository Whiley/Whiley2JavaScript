// This benchmark was created specifically to test recursive
// properties.
type Node is {int data, List next}
type List is null|Node

// A recursive property capturing the concept of
// the sum of a List
property sum(List l, int s)
where (l is null) ==> (s == 0)
where (l is Node) ==> sum(l.next, s - l.data)

// Another recursive property capturing the different in length
// between the head of a list and a given position within that
// list.
property diff(List head, List pos, int d)
where (head == pos) ==> (d == 0)
where (head is Node) ==> diff(head.next, pos, d - head.data)

function sum(List l) -> (int r)
// Ensure we capture the real length
ensures sum(l,r):
    //
    int x = 0
    List ol = l // ghost
    // iterate until 
    while l is Node
    where diff(ol,l,x):
        x = x + l.data
        l = l.next
    //
    return x

public export method test():
    // List of length 1
    List l1 = {data: 0, next: null}
    // List of length 2
    List l2 = {data: 1, next: l1}
    // List of length 3
    List l3 = {data: 2, next: l2}
    //
    assert sum(null) == 0
    //
    assert sum(l1) == 0
    //
    assert sum(l2) == 1
    //
    assert sum(l3) == 3    