/* Description: Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.  */


function stringTransformer(str) {
    str = str.split(' ').reverse().join(' ').split('')
      for(let i = 0; i<str.length; i++){
        if(str[i] == str[i].toLowerCase()) str[i] = str[i].toUpperCase()
        else if(str[i] == str[i].toUpperCase()) str[i] = str[i].toLowerCase()
      }
    return str.join('')
}
// test cases:
console.log(stringTransformer("Example Input"))
console.log(stringTransformer(' g F e D c B a '))