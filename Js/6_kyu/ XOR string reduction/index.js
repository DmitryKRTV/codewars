// https://www.codewars.com/kata/5ad6e5bdb0e8d46b4500201a/train/javascript

//Description :
// Given a string consisting entirely of binary digits (0 , 1) seperated using spaces. Find the XOR of all digits and return the answer.
// Examples :
// Given
// "1 0 0 1 0" --> 0
// "1 0 1 1 1 0 0 1 0 0 0 0" --> 1
// How :
// 1 0 0 1 0
// Solving :
// (1 XOR 0) (0 XOR 1) 0
// 1 1 0
// (1 XOR 1) 0
// 0 0
// 0 XOR 0
// 0 ---> Answer
// This is code-golf so shortest code is winner. The limit of solution is set to 40 chars (exclusive).
// !!Your code length should be less than 40!!

// const X=s=>{while(s.length>1){s=s.replace(/.{3}/,t=>t[0]!==t[2]?'1':'0')}return +s}
X=s=>[...s].reduce((a,c)=>+a+ +c)%2
