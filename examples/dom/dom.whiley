import whiley.lang.ASCII

type tagChar is ASCII.letter | ASCII.digit
type tagName is (tagChar[] str)

// ==================================================================
// Html Module
// ==================================================================

type Attribute is {
    tagName key,
    tagName value
}

type Node is {
    tagName name,
    //Attribute[] attributes,
    Node[] children
} | ASCII.string

// ==================================================================
// Functions
// ==================================================================

export function create() -> Node:
    return div([
        h1("Heading"),
        center(["Hello World"])
    ])

function h1(ASCII.string text) -> Node:
    return {
        name: "h1",
        children: [text]
    }

function center(Node[] children) -> Node:
    return {
        name: "center",
        children: children
    }

function div(Node[] children) -> Node:
    return {
        name: "div",
        children: children
    }
    