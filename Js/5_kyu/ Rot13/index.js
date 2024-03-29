// url: https://www.codewars.com/kata/530e15517bc88ac656000716

// Description:
//    ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
//    Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

const rot13 = message => [...message].reduce((a, c) =>
        (temp = c.toLowerCase().charCodeAt(),
            !(temp >= 97 && temp <= 122)
                ? a + c
                : temp < 110
                    ? a + String.fromCharCode(c.charCodeAt() + 13)
                    : a + String.fromCharCode(c.charCodeAt() - 13))
    , '')
