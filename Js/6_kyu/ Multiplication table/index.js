// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

// our task, is to create N×N multiplication table, of size provided in parameter.
// For example, when given size is 3:
// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:
// [[1,2,3],[2,4,6],[3,6,9]]

const multiplicationTable = function(size) {
    return Array(size).fill(1).map((_, idx1) =>
        Array(size).fill(1).map((_, idx2) => (idx2 + 1) * (idx1 + 1))
    )
}
