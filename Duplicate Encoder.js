/* Description: 
The goal of this exercise is to convert a string to a new string where each character in the 
new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.  */


function duplicateEncode(word){
    // take #1 - edge cases incomplete
    /* word = word.toLowerCase()
       for(let i = 0; i<word.length; i++){
           if(word.indexOf(word[i]) === word.lastIndexOf(word[i])){
             word = word.replaceAll(word[i],'(')
           } else {
             word = word.replace(word[i],')')
           }
         }
       return word */
    
        word = word.toLowerCase()
        .split('')
        .map( function (a, i, w) {
          return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
        })
        .join('');
       
    return word
}

    // test cases:
    console.log(duplicateEncode("din"))
    console.log(duplicateEncode("recede"))
    console.log(duplicateEncode("Success"))