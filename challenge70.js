/* Description: Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd). */


function findOdd(A) {
    for(let i= 0; i < A.length; i++){
      let count = 0;
      for(let j = 0; j < A.length; j++){
          if(A[i] == A[j])
                  count++;
          }
              if(count % 2 != 0)
                      return A[i]
      }
  return 0
  }

  //  test cases
  // findOdd([1,1,1,1,1,1,10,1,1,1,1])
// findOdd([5,4,3,2,1,5,4,3,2,10,10])