// The goal of this exercise is to convert a string to a new string where each
// character in the new string is "(" if that character appears only once in the
// original string, or ")" if that character appears more than once in the original
// string. Ignore capitalization when determining if a character is a duplicate.

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

//Notes
// Assertion messages may be unclear about what they display in some languages.
// If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
    return word.toLowerCase().split("").reduce((acc, curr, index, array) => {
        const temp = [...array]
        temp[index] = null
        return temp.includes(curr) ? acc + ")" : acc + "("
    }, "")
}

console.log(duplicateEncode("Successfsdfsdfsdfsdfarqwgcxvwehwfwqfwf"))

function bestSolution(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => {
        return word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')'
    })
}

// .lastIndexOf return last value of the array