//url: https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript
//Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)
// Description:
// Encrypt this!
// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
//
//     Your message is a string containing space separated words.
//     You need to encrypt each word in the message using the following rules:
//         The first letter must be converted to its ASCII code.
//         The second letter must be switched with the last letter
//     Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function(text) {
    return ''+text.split(" ").reduce((acc, curr) => curr.length > 1
        ? acc + curr[0].charCodeAt(0) + curr[curr.length - 1] + [...curr].slice(2, -1).join('') + (curr.length > 2 ? curr[1] : '') + ' '
        : acc + curr[0].charCodeAt(0) + ' ', '').trim()
}