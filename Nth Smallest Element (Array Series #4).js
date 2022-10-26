/* Description: Introduction and warm-up (highly recommended): Playing With Lists/Arrays Series

Task
Given an array/list of integers, find the Nth smallest element in the array.

Notes
- Array/list size is at least 3.
- Array/list's numbers could be a mixture of positives , negatives and zeros.
- Repetition in array/list's numbers could occur, so don't remove duplications. */


const nthElement = (arr, pos) => {
    return arr.sort((a,b)=> a-b)[pos-1]
  }
  // test cases:
  console.log(nthElement([3,1,2],2))  // 2
  console.log(nthElement([15,20,7,10,4,3],3))  // 7
  console.log(nthElement([177,225,243,-169,-12,-5,2,92] ,5))  // 92