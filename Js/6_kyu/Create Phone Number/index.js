// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//
// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
//
// Don't forget the space after the closing parentheses!

// 6 kyu

function createPhoneNumber(numbers){
    return numbers.reduce((acc,curr,index)=>{
        if(index === 0) return `(${curr}`
        if(index === 2) return acc + `${curr}) `
        if(index === 5) return acc + `${curr}-`
        return acc + curr
    }, '')
}

function bestSolution(numbers){
    var format = "(xxx) xxx-xxxx";

    for(var i = 0; i < numbers.length; i++)
    {
        format = format.replace('x', numbers[i]);
    }

    return format;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
