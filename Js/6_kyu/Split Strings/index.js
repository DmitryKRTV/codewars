//url: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
//Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    return (str.match(/.{1,2}/g) || []).map((i,x) => i.length < 2 ? i + "_" : i)
}

function solutionBetter(str){
    return (str+'_').match(/.{2}/g) || []
}
