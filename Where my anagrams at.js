/* Description: What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. 
For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. 
You should return an array of all the anagrams or an empty array if there are none.  */


function anagrams(word, words) {

    let results = []
    
        word = word.split('').sort()
        let wordies = words.map(word => word.split(''))
    
      for(let i = 0; i<words.length; i++){
                if(wordies[i].sort().join('') === word.join('')) results.push(words[i])
        }
    
    return results
}
    
// test cases:
    console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
    console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
    console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']))