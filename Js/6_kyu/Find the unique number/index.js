//There is an array with some numbers. All numbers are equal except for one. Try to find it!
//
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    arr.sort()
    return arr[0] === arr[1] ? arr.pop() : arr[0]
}

console.log(findUniq([0, 0, 1]))
console.log(findUniq([0, 1, 0]))
console.log(findUniq([1, 0, 0]))
console.log(findUniq([1, 1, 1, 2, 1, 1 ]))