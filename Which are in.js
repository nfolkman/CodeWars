/* Description: Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 
which are substrings of strings of a2.

Notes:
- Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
- In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
- Beware: r must be without duplicates.   */


function inArray(array1,array2){
    let result = []
  
      for(let i = 0; i<array1.length;i++){
          for(let j = 0; j<array2.length;j++){
              if(array2[j].includes(array1[i])) result.push(array1[i])
          }
      }
  return ([...new Set(result.sort())])
}

// test cases:
console.log(inArray(["arp", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"]))  // ["arp", "live", "strong"]
console.log(inArray(["tarp", "mice", "bull"],["lively", "alive", "harp", "sharp", "armstrong"]))  // []