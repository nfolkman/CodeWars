


function upArray(arr){

    const i = n = arr.length
    
    
    let invalid
    // edge cases
     arr = arr.map((num)=> num >=10 ? invalid = true : +num)
    if(invalid === true) return null
    if(!arr.length) return null
    
      // join array, take resulting string and change to number, add 1, change back to String, split into array and return
    
    
      arr = (arr.join(''))
    
      let result = arr.toString().split('').map((num)=> +num)
    
      if(result[result.length-1]<9)result[result.length-1]+=1
      else if(result[result.length-2]<9) {
        result[result.length -1] = 0
        result[result.length-2] +=1
        }
      else{result[result.length -1] = 0
        result[result.length-2] = 0
        result[result.length-3] += 1
        }

      if(result.join('') === '999') return [1,0,0,0]
      
      if(result.includes(NaN)) result = null
    
      return result
    }

    // test cases:
    
    console.log(upArray([2,3,9]))  // [2,4,0]
    console.log(upArray([4,3,2,5]))  // [4,3,2,6]
    console.log(upArray([-1,3,4]))  // null
    console.log(upArray([ 5, 0, 4, 8, 17, 2, 2, 5, 0, 3, 2, 4, 0, 5 ]))  // null
    console.log(upArray([]))  // null
    console.log(upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7]))  // [9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 8]