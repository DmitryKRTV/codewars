// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
//
// Mind the input validation.

//{ 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
function sumArray(array) {
    if (!array || array.length < 2) return 0
    array.splice(array.indexOf(Math.min(...array)), 1)
    array.splice(array.indexOf(Math.max(...array)), 1)
    return array.reduce((a,c) => a + c, 0)
}

sumArrayBestSolution = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

