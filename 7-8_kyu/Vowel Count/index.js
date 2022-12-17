// Vowel Count
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    return str.split("").reduce((acc, curr) => {
        return (curr === "a" || curr === "e" || curr === "i" || curr === "o" || curr === "u") ? acc + 1 : acc
    }, 0);
}

console.log(getCount("sdasdau"))

function bestSolution(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}