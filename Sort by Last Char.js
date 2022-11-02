/* Description: Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.   */

function sortByLast(str){
    str = str.split(' ').sort((a,b)=> a.charCodeAt(a.length-1) - b.charCodeAt(b.length-1))
    return str
  }
  // test cases:
  console.log(sortByLast('man i need a taxi up to ubud'))  //['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
  console.log(sortByLast('what time are we climbing up the volcano'))  //['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']