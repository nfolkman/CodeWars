/* Description: Write a function named sumDigits which takes a number as input and returns 
the sum of the absolute value of each of the number's decimal digits.   */

function sumDigits(number) {
    return Math.abs(number).toString().split('').map(val => Number(val)).reduce((a,b)=> a + b)
}
// test cases
console.log(sumDigits(10))  // 1
console.log(sumDigits(99))  // 18
console.log(sumDigits(-32))  // 5