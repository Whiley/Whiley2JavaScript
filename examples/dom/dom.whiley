type JsString is (int[] str)

// ==================================================================
// Html Module
// ==================================================================

type Attribute is {
    JsString key,
    JsString value
}

type Node is {
    JsString name,
    //Attribute[] attributes,
    Node[] children
} | JsString

// ==================================================================
// Html Module
// ==================================================================

export function createNode(JsString tag, JsString text) -> Node:
    return {
      name: tag,
      children: [text]      
    }