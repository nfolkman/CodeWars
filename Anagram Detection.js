/* Description: An anagram is the result of rearranging the letters of a word to produce a new word.

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; 
return false otherwise.  */


// write the function isAnagram
var isAnagram = function(test, original) {
    test = test.split('').map((lett) => lett.toLowerCase())
    original = original.split('').map((lett) => lett.toLowerCase())
  
  
    if(test.sort().join('') === original.sort().join('')) return true
    else return false
};
  
//test cases:
  console.log(isAnagram("foefet","toffee"))  // true
  console.log(isAnagram("Buckethead","DeathCubeK"))  // true
  console.log(isAnagram('apple', 'pale'))  // false