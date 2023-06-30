//Link: https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

//A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(string){
    const letters = {}
    const start = `a`.charCodeAt(0)
    const end = `z`.charCodeAt(0)

    string.toLocaleLowerCase().split('').forEach((letter) => {
        const code = letter.charCodeAt(0)
        if (code >= start && code <= end) {
            letters[`${code}`] = ++letters[`${code}`] || 1
        }
    })

    for (let i = start; i <= end; i++) {
        if (!letters[i]) return false
    }
    return true
}
