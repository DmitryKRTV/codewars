//Given a list of integers, determine whether the sum of its elements is odd or even.
//
// Give your answer as a string matching "odd" or "even".
//
// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
    return (array.length && array.reduce((a,c) => a += c) % 2 !== 0) ? "odd" : "even"
}


console.log(oddOrEven([]))
console.log(oddOrEven([0, 1, 5]))
console.log(oddOrEven([1]))
console.log(oddOrEven([0]))
