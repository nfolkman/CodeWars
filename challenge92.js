/* Description: Your task is to sort a given string. Each word in the string will contain a single number. 
This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
*/

/* Pseudocode: Loop through the given string, check which number each word has from 1-9, 
then assign each word in order into a an object, assign words in order to string, adjust, return */


function order(words){  // P
    let obj = {
        1:'',
        2:'',
        3:'',
        4:'',
        5:'',
        6:'',
        7:'',
        8:'',
        9:'',
    }
    
    words= words.split(' ')
    
     for(let i = 0; i<words.length; i++){
            if(words[i].includes('1')){
    obj[0]=words[i]
            } else if(words[i].includes('2')){
    obj[1]=words[i]
            } else if(words[i].includes(3)){
    obj[3]=words[i]
            } else if(words[i].includes(4)){
    obj[4]=words[i]
            } else if(words[i].includes(5)){
    obj[5]=words[i]
            } else if(words[i].includes(6)){
    obj[6]=words[i]
            } else if(words[i].includes(7)){
    obj[7]=words[i]
            } else if(words[i].includes(8)){
    obj[8]=words[i]
            } else if(words[i].includes(9)){
    obj[9]=words[i]
            }
        }
    let str = `${obj[0]} ${obj[1]} ${obj[2]} ${obj[3]} ${obj[4]} ${obj[5]} ${obj[6]} ${obj[7]} ${obj[8]} ${obj[9]}`.trim()
    if(str=== 'undefined'){
    return ''
    }

    return str.split(' ').filter((el) => el !== '').join(' ')
}


/* test cases:
order("is2 Thi1s T4est 3a")
order("4of Fo1r pe6ople g3ood th5e the2")
order("")  */