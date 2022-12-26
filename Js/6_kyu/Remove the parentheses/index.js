//Remove the parentheses
// In this kata you are given a string for example:
//
// "example(unwanted thing)example"
// Your task is to remove everything inside the parentheses as well as the parentheses themselves.
//
// The example above would return:
//
// "exampleexample"
// Notes
// Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
// There can be multiple parentheses.
// The parentheses can be nested.

function removeParentheses(s){
    while (s.match(/\([\w ]+\)/g)) {
        s = s.replace(/\([\w ]+\)/g ,'');
    }

    return s;
}

// console.log(removeParentheses("example (unwanted thing) example (unwanted thing)"))

function getMiddle(s)
{
    return s.length % 2 === 0 ? `${s[(s.length/2) - 1]}${s[s.length/2]}` : `${s[Math.ceil(s.length/2) - 1]}`
}

console.log(getMiddle("testing"))