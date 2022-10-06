/* Description: The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.  */

// version 1 - passes all BUT 1 edge case
function count (string) {  
    // The function code should be here
  
    string = string.split('')
  
    let resultObj = {}
  
    for(let i = 0; i<string.length; i++){
      let count = 0
      if(resultObj[string[i]]) resultObj[string[i]] = count++
  
      resultObj[string[i]] = count += 1
    }
  
  
     return resultObj;
  }

  
  // version 2 - PASSES ALL CASES
  function count (string) {  
    // The function code should be here
  
    string = string.split('')
  
    let resultObj = {}
  
    for(let i = 0; i<string.length; i++){
   
      if(resultObj[string[i]]) resultObj[string[i]]++
  
      else resultObj[string[i]] = 1
    }
  
  
     return resultObj;
  }

  // test cases:
  console.log(count('aba'))  // {'a': 2, 'b': 1}
  console.log(count(""))  // {}
  console.log(count('acdofggia'))  // 