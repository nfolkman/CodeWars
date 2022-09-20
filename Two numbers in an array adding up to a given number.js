/* Description: Given a sorted array of integer numbers A and another integer number sum, 
write a function that returns true if there are two (distinct) numbers in A that add up to sum. Return false otherwise.

Input:
- A: The array is guaranteed to be sorted and has at least two elements. All elements are integers.
- sum: An integer.   */


function hasPair(A, sum){
    let complement,
        numObj = {}
    
      for(let i = 0; i<A.length; i++){
    
      complement = sum - A[i]
    
        if(numObj[complement] !== undefined) return true
    
        numObj[A[i]] = i
    }
    
    return false
}

// test cases:
console.log(hasPair([1,2,3,4],7))  // true
console.log(hasPair([-1,2,7,15],12))  // true
console.log(hasPair([1,3,3],2))  // false