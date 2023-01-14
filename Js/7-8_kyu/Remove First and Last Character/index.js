//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
   return str.split("").reduce((acc, curr, index, array) => index === 0 || index === array.length - 1 ? acc : acc + curr, "")
};

function removeCharV1(str) {
    return str.slice(1, -1);
}

function removeCharv2(str){
    return str.substring(1, str.length-1);
};


console.log(removeChar("fdsfds"))