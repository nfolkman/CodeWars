/* Description: Write a function that takes in a string of one or more words, and returns the same string, 
but with all five or more letter words reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
*/


function spinWords(string){
    let result = []
      string = string.split(' ')
    for(let i= 0; i<string.length; i++){
            if(string[i].length>= 5){
        string[i] = string[i].split('').reverse().join('')
    result.push(string[i])
            } else {
    result.push(string[i])
        }
    }
return result.join(' ')
}
    

/* test cases: 
    spinWords("Hey fellow warriors")
    spinWords( "This is a test")
    spinWords("This is another test")  */