/* Description: For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. 
If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
In JavaScript: If you use Array.sort in your solution, you might experience issues 
with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue. */


function longestRepetition(s) {
    if(!s.length) return ["",0]
    // loop through string, checking each character. Upon checking first character, l = 1 and c = character. 
    // If a character is the same as its predecessor, l++ once a new character is found, 
  
    let char = s[0],
        count = 0
    for(let i = 0; i<s.length; i++){
      let currCount = 1
      for(let j = i+1; j<s.length; j++){
        if(s[i] != s[j]){
          break
        }
        currCount++
      }
  
      if(currCount > count){
        count = currCount
        char = s[i]
      }
    }
    return [char,count]
  }

console.log(longestRepetition("aaaabb"))  // ["a",4]
console.log(longestRepetition("bbbaaabaaaa"))  // ["a",4]
console.log(longestRepetition("cbdeuuu900"))  // ["u",3]
console.log(longestRepetition(""))  // ["",0]