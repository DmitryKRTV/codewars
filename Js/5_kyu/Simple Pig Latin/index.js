//url: https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
//
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    return str.split(' ').map((item) => {
        return item.match(/\w/g) ? item.slice(1) + item[0] + 'ay' : item
    }, '').join(' ')
}
