//Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
//
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {
    return n > 0 ? n.toString(2).split("").reduce((acc, curr) => +curr === 1 ? +acc + +curr : +acc, 0) : 0
};

const countBitsBestSolution = n => n.toString(2).split('0')[0].length;
