/* Description: Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.

The inputs will always be two positive integers between 2 and 99.   */



function isCoprime(num1,num2) {
    // const smaller = Math.min(num1,num2)
    // for(let i= 2; i<smaller; i++){
    //  const condition1 = num1%i === 0
    //  const condition2 = num2%i === 0
    // if(condition1 && condition2){
    //  return false
    //    }
    //  }
    // return true
    
    let R                       // Euclidean Algorithm
    while((num1%num2)>0) {
        R = num1%num2
        num1=num2
        num2 = R
        }
        if (num2>1){
    return false
        } else {
    return true
    }
}