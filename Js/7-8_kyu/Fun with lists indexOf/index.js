//Implement the method indexOf (index_of in PHP), which accepts a linked list (head) and a value, and returns the index (zero based) of the first occurrence of that value if exists, or -1 otherwise.
//
// For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, indexOf / index_of should return 2.


function indexOf(head, value) {
    const arrayN = []
    function eachNode(head) {
        if (head.next === null) return
        arrayN.push(head.data)
        eachNode(head.next)
    }
    if (head === null) return -1

    eachNode(head)

    return head.indexOf(value)
}





console.log(indexOf(null, 17))
console.log(indexOf([1, 2, 3, 3], 3))
