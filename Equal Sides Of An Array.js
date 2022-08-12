/* Description: You are going to be given an array of integers. 
Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. 
If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, 
the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.  */


function findEvenIndex(arr){
    //edge case
  if(!arr.length) return -1
  
              // TAKE #1 : Didn't cover all edge cases
      // use two-pointer method to loop through array incrementing two count variables by the pointers' current values, compare values, and when they are equal, return index between them
  /* let lCount = []
  let rCount = []
  let result = 0
  
    for(let l = 0,r=arr.length-1; l<arr.length,r>l; l++,r--){
      lCount.push(arr[l])
      rCount.push(arr[r])
      if(lCount.reduce((a,b)=> a+b) === rCount.reduce((a,b)=> a+b)){
        result = arr.indexOf(lCount[lCount.length-1]) +1
        }
      }  */
  
  let left= 0
  let right = 0
  
  
  for(let i = 0; i < arr.length; i++){
      if(i == 0){
        right = arr.slice(1).reduce((a,b)=>a+b, 0);
        if(right === i){
          return i;
        }
      }else{
        left = arr.slice(0, i).reduce((a,b)=>a+b, 0);
        right = arr.slice(i+1).reduce((a,b)=>a+b, 0);
        if(left == right){
          return i;
        }
      }
    }
  
  return -1
  
  }

  // test cases:
  console.log(findEvenIndex([1,2,3,4,3,2,1]))  // 3
  console.log(findEvenIndex([1,100,50,-51,1,1]))  // 1
  console.log(findEvenIndex([20,10,-80,10,10,15,35]))  // 0
  console.log(findEvenIndex([1,2,3,4,5,6])) // -1