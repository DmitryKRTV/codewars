//Url: https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

//The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
//
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
//
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
//
// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function(arr){
    let sum = 0
    return arr.reduce((acc, curr) => {
        sum = Math.max(sum + curr, 0)
        return Math.max(acc, sum)
    }, 0)
}

var maxSequence2 = function(arr){
    let tempSum = 0
    let sum = 0
    arr.forEach(i => {
        tempSum = Math.max(i + tempSum, 0)
        sum = Math.max(sum, tempSum)
    })
    return sum
}
