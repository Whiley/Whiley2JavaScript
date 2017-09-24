import std.ascii

type tagChar is ascii.letter | ascii.digit
type tagName is (tagChar[] str)

// ==================================================================
// Html Module
// ==================================================================

// ==================================================================
// Textual Attributes
// ==================================================================

type TextAttribute is {
    tagName key,
    ascii.string value
}

function id(ascii.string text) -> Attribute:
    return {
        key: "id",
        value: text
    }

function style(ascii.string text) -> Attribute:
    return {
        key: "style",
        value: text
    }

// ==================================================================
// Event Attributes
// ==================================================================

type eventHandler is function()->(ascii.string)

type EventAttribute is {
    tagName event,
    eventHandler handler
}

function onClick(eventHandler handler) -> Attribute:
    return {
        event: "click",
        handler: handler
    }

// ==================================================================
// Attributes
// ==================================================================

type Attribute is TextAttribute | EventAttribute

// ==================================================================
// Nodes
// ==================================================================

type Node is {
    tagName name,
    Attribute[] attributes,
    Node[] children
} | ascii.string

function h1(ascii.string text) -> Node:
    return {
        name: "h1",
        attributes: [id("");0],
        children: [text]
    }

function h2(ascii.string text) -> Node:
    return {
        name: "h2",
        attributes: [id("");0],
        children: [text]
    }

function h3(ascii.string text) -> Node:
    return {
        name: "h2",
        attributes: [id("");0],
        children: [text]
    }

function center(Node[] children) -> Node:
    return {
        name: "center",
        attributes: [id("");0],
        children: children
    }

function div(Node[] children) -> Node:
    return {
        name: "div",
        attributes: [id("");0],
        children: children
    }

function div(Attribute[] attributes, Node[] children) -> Node:
    return {
        name: "div",
        attributes: attributes,
        children: children
    }

function button(Attribute[] attributes, Node[] children) -> Node:
    return {
        name: "button",
        attributes: attributes,
        children: children
    }

// ==================================================================
// Functions
// ==================================================================

function f() -> ascii.string:
    return "HELLO"

export function create() -> Node:
    return div([
        h1("Heading"),
        button([onClick(&f)],["Hello World"])
    ])
