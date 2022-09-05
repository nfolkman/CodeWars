/* Description: Write a function to convert a name into initials. 
This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.  */


function abbrevName(name){

    name = name.split(' ')
    
    return `${name[0][0].toUpperCase()}.${name[1][0].toUpperCase()}`
    
}

// test cases:
console.log(abbrevName('Sam Harris'))