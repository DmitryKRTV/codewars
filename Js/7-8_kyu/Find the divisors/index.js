//Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

function divisors(integer) {
    let a = []
    for (let i = 2; i < integer + 1; i++) {
        if (integer % i === 0) a.push(i)
    }
    return a.length === 1 ? `${a[0]} is prime` : a.slice(0, -1)
};



console.log(divisors(15))