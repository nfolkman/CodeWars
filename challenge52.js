/* Description: Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

function getCount(str) {
    var vowelsCount = 0;
    str = str.split('')
   str.forEach((el) => (el === 'a' && vowelsCount++ || el === 'e' && vowelsCount++ || el === 'i' && vowelsCount++ || el === 'o' && vowelsCount++ || el === 'u' && vowelsCount++));
    
    return vowelsCount;
  }