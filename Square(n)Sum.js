/* Description: Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.  */

// first try: complete
function squareSum(numbers){
    if(numbers.length === 0) return 0
    else return numbers.map((num)=> num*num).reduce((a,b)=> a+b)
}

// second try: complete
function squareSum(numbers){
if(!numbers.length) return 0
else return numbers.map((num)=> num*num).reduce((a,b)=> a+b)
}

// test cases:
console.log(squareSum([1, 2, 2]))  // 9
console.log(squareSum([0, 3, 4, 5]))  // 50
console.log(squareSum([]))  // 0