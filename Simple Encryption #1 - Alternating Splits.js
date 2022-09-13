/* Description: Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S 
with all the even-indexed characters of S, this process should be repeated N times.

Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.  */


function encrypt(text, n) {

    // edge cases
    if(n<=0) return text
    if(!text) return null
    
        // concatenate all ODD indexed chars of S with all EVEN indexed chars of S
    let encryption
        let textNew = text.split('')
    
        for(let i = 0; i<n; i++){
            let odds = [],
                    evens = []
    
            for(let j = 0; j<textNew.length; j++){
                
                    if(j%2 == 0) evens.push(textNew[j])
                    if(j%2!== 0) odds.push(textNew[j])
        }
    
            textNew = odds.join('')+evens.join('')
        }
    encryption = textNew
    
    return encryption
}
    // test cases:
    console.log(encrypt("012345", 1))  // "135024"
    console.log(encrypt("012345", 2))  // "304152"
    console.log(encrypt("012345", 3))  // "012345"
    
    
    
    function decrypt(encryptedText, n) {
    // edge cases
        if(!encryptedText || n <= 0) return encryptedText
        if(!encryptedText.length) return ''
    
        // helper func.
    const helper = function(str){
            let odds = str.slice(0,(str.length/2)),
                    evens = str.slice((str.length/2)),
                    output = ''
    
            for(let i = 0; i<str.length; i++){
                if(i%2){
                    output += odds[0]
                    odds = odds.slice(1)
                }else{
                    output += evens[0]
                    evens = evens.slice(1)
                }
            }
            
            return output
        }
        
        for(let i = 0; i<n; i++){
            encryptedText = helper(encryptedText)
        }
    
        return encryptedText
    }

    // test cases:
    console.log(decrypt("135024",1))  // '012345'
    console.log(decrypt(" Tah itse sits!", 3)) // 'This is a test!'