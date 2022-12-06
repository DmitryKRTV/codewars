// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers){
    const tempArr = numbers.split(" ")
    return tempArr.reduce((acc, curr) => {
        if (+curr >= acc[0]) {
            acc[0] = +curr
        }
        if (+curr <= acc[1]) {
            acc[1] = +curr
        }
        return acc
    }, [+tempArr[0], +tempArr[0]]).join(" ")
}

console.log(highAndLow("7165 5445 5205 6441 6625 6750 5200 4292 7294 5143 6537 5125 4993 5036 7179 5210 6805 4693 5910 6705 4507"))