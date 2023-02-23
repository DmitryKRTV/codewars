// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// 5 kyu

function moveZeros(arr) {
    return (filtered = arr.filter(i => i !== 0)).concat((`0`.repeat(arr.length - filtered.length)).split("").map(i => +i))
}

var best = function (arr) {
    return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0));
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))
