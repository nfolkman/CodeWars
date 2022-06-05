/* Description: A pangram is a sentence that contains every single letter of the alphabet at least once.
 For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

STRINGS - DATA STRUCTURES - FUNDAMENTALS
*/

function isPangram(string){
    let alpha = new Set("abcdefghijklmnopqrstuvwxyz")  
    for (let c of string.toLowerCase()){
            alpha.delete(c)
            if (alpha.size == 0) return true
        }
        return false
    // if(new Set(string.toLowerCase().replace(/[^a-z]/g, '')).size === 26){
    //     return true
    //     } else {
    // 	return false
    // 	}
}

/* test cases:
isPangram("The quick brown fox jumps over the lazy dog.")
isPangram("This is not a pangram.") */