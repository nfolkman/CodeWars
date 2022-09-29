/* Description: Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, 
also often referred to as Pascal case).  */

function toCamelCase(str){
    // edge cases
    if(!str.length) return ''
  
    if(str.includes('-')) str = str.split('-')
    if(str.includes('_')) str = str.split('_')
  
    for(let i = 0; i< str.length; i++){
      if(i > 0){
       str[i] = str[i].replace(str[i][0],str[i][0].toUpperCase())
      }
    }
  
     return str.join('')
  }

  // test cases: 
console.log(toCamelCase("the-stealth-warrior"))  // "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior"))  // "TheStealthWarrior"
console.log(toCamelCase(''))  // ''
console.log(toCamelCase("A-B-C"))  // 'ABC'