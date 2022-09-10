/* Description: Write a function called findUnique which returns the only unique number from an array.

All numbers in the unsorted array are present twice, except the one you have to find. The numbers are always valid integer values between 1 and 2147483647, so no need for type and error checking. 
The array contains at least one number and may contain millions of numbers. So make sure your solution is optimized for speed.  */

function findUnique(numbers) {


        // TOO SLOW ON MILLIONS EDGE CASE
    /*   let map = new Map()
        for(let i = 0; i<numbers.length;++i){
      
            if(map.has(numbers[i])) {
              console.log(...map.set(numbers[i], map.get(numbers[i])+ 1))
            }
      
            else{
              console.log(...map.set(numbers[i],1))
            }
      }
      
        for(let i = 0; i<numbers.length; ++i){
          if(map.get(numbers[i]) == 1) return numbers[i]
        }
        
        return -1 */
    
    let result = numbers[0]
    
        for(let i = 1; i<numbers.length; i++){
            result = result ^ numbers[i]
        }
    
    return result
    
}

// test cases:
console.log(findUnique([ 2, 2, 5, 5, 4, 3, 3, 1, 1 ]))  // 4