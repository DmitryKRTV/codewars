//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
// Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    return !str.toLowerCase().split("").reduce((acc, curr) => {
        if (curr === "o") return acc + 1
        if (curr === "x") return acc - 1
        return acc
    }, 0)
}

console.log(XO("ooom"))
console.log(XO("xxxm"))
