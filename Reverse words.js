/* Description: Complete the function that accepts a string parameter, and reverses each word in the string. 
All spaces in the string should be retained.  */


function reverseWords(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}
   
// test cases:
console.log(reverseWords("This is an example!"))
console.log(reverseWords("double  spaces"))