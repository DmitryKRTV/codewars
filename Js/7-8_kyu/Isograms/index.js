// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)
//
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
//
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str){
    let arr = str.toLowerCase().split("")
    return !arr.reduce((acc, curr) => arr.filter(i => i === curr).length > 1 ? acc + curr : acc, "")
}

function isIsogramsstr (str){
    return !/(\w).*\1/i.test(str)
}

console.log(isIsogram("aba"))

