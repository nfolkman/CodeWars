/* Description: In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.  */


function alphabetPosition(text) {
    return text.replace(/[^a-z]/gi, '').split('').map(lett => lett.toLowerCase().charCodeAt(lett)-96).join(' ')
}

// test cases:
console.log(alphabetPosition("The sunset sets at twelve o' clock."))
console.log(alphabetPosition("pu{(|p6,"))