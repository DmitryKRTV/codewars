//Url: https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript
//Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
//Example

//Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] )

var capitals = function (word) {
	return [...word].reduce((acc, curr, index) => {
      return (curr.charCodeAt([0]) >= 65 && curr.charCodeAt([0]) <= 90) ? [...acc, index] : acc 
  }, [])
};
