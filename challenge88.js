/* Description: Write a function that checks if a given string (case insensitive) is a palindrome.   */



function isPalindrome(x) {
// return x.split('').reverse().join('')
    if(x.toLowerCase().split('').reverse().join('') === x.toLowerCase()){
return true
    } else {
return false
    }
}
    


    /* test cases:
    isPalindrome("hello")
    isPalindrome("a")
    isPalindrome("Abba")
    isPalindrome("AbBa")  */