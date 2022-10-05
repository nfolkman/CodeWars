/* Description: Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns 
the same string with all even indexed characters in each word upper cased, 
and all odd indexed characters in each word lower cased. The indexing just explained is zero based, 
so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). 
Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').  */

function toWeirdCase(string){
    
    //  not fully workable
  //   let result = []
  //   // edge case
  //   if(!string.length) return ''
  //   // if index even ? uppercase , if index odd ? lowercase
    
  //   for(let i in string){
  //       if( i % 2 == 0) result.push(string[i].toUpperCase())
  //       else {result.push(string[i].toLowerCase())}
  //   }
  
  //   return result.join('')
  
    // fully workable
    return string.split(' ').map((v,i)=> v.split('').map((v,i) => i%2 === 0 ? v.toUpperCase() : v.toLowerCase()).join('')).join(' ')
  
  }
  
  // test cases:
  console.log(toWeirdCase("String"))  // "StRiNg"
  console.log(toWeirdCase("Weird string case"))  // "WeIrD StRiNg CaSe"
  console.log(toWeirdCase("this is a test"))