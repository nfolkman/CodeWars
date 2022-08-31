/* Description: Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.  */



function duplicateCount(text){
    text = text.split('').map(lett => lett.toLowerCase())
    let doubles = []
    for(let i = 0; i<text.length; i++){
      if(text.indexOf(text[i]) !== text.lastIndexOf(text[i])) doubles.push(text[i])
    }
  let doublesSet = new Set(doubles)
  return doublesSet.size
}
  
// test cases:
  console.log(duplicateCount('abcde'))  // 0
  console.log(duplicateCount('aabBcde'))  // 2
  console.log(duplicateCount('aabbcde'))  // 2