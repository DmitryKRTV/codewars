//For example if you get "22" return "b", if you get "222" you will return "c". If you get "2222" return "ca".
//
// Further details:
//
// 0 is a space in the string.
// 1 is used to separate letters with the same number.
// always transform the number to the letter with the maximum value, as long as it does not have a 1 in the middle. So, "777777" -->  "sq" and "7717777" --> "qs".
// you cannot return digits.
// Given a empty string, return empty string.
// Return a lowercase string.

function phoneWords(stringOfNums) {
    if (stringOfNums.toString() === "") return ""
    const scheme = {
        "1": "",
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
        "0": " ",
    }
    const loweredString = stringOfNums.toLowerCase()
    let splittedString = loweredString[0]

    for (let i = 1; i < loweredString.length; i++) {
        if (loweredString[i] === loweredString[i-1] && +loweredString[i] !== 0) {
            splittedString += loweredString[i]
        } else
            splittedString = splittedString + " " + loweredString[i]
    }

    return splittedString.split(" ").map((item,index) => {
        let position = ""
        let times = 1
        let result = ""

        if (item.length <= scheme[item[0]].length && item.length !== 0) {
            position = item.length
            times = 1
        }

        if (item.length > scheme[item[0]].length && item.length !== 0 && +item[0] !== 1) {
            let position2 = scheme[item[0]].length

            position = item.length - scheme[item[0]].length * (Math.floor((item.length) / scheme[item[0]].length))
            times = Math.floor((item.length) / scheme[item[0]].length)

            for (let i = 0; i < times; i++) {
                result += scheme[item[0]][position2 - 1] || ""
            }
        }

        return result += scheme[item[0]][position - 1] || ""
    }).join("")
}

function bestSolution(stringOfNums) {
    const keys = [' ', ,'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const regexp = /2{1,3}|3{1,3}|4{1,3}|5{1,3}|6{1,3}|7{1,4}|8{1,3}|9{1,4}|0{1}/g;
    let result = '';

    stringOfNums.match(regexp)?.map(nums => {
        console.log(nums)
        const key = keys[nums[0]];
        const letter = nums.length-1;
        result += key[letter];
    });

    return result;
}

console.log(phoneWords("443355555566604466690277733099966688"))
console.log(bestSolution("111144"))