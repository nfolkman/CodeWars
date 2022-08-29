/* Description: Finish the solution so that it sorts the passed in array of numbers. 
If the function passes in an empty array or null/nil value then it should return an empty array. */


function solution(nums){
    // edge case
    if(!nums) return []
  
    return nums.sort((a,b)=> a-b)
}

// test cases:
solution([1, 2, 10, 50, 5])
solution(null)