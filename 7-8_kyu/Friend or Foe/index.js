// Friend or Foe?
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

const friends = ["Ryan", "Kieran", "Mark"]  // 'hello world this is great'

function friend(friends){
    return friends.reduce((acc, curr) => {
        if (curr.split("").length === 4) {
            acc.push(curr)
        }
        return acc
    }, [])
}

console.log(friend(friends))