/* Description: Get the next prime number!

You will get a numbern (>= 0) and your task is to find the next prime number.

Make sure to optimize your code: there will numbers tested up to about 10^12.  */


function nextPrime(n){
    // helper function
    let isPrime = (N) => {
  
      if(N<= 1) return false
      if(N<=3) return true
  
      if(N%2 == 0 || N%3 == 0) return false
  
      for(let i = 5; i*i<=N; i+=6){
  
          if(N%i == 0 || N%(i+2)==0) return false
          
      }
  return true
  }
  // main function
  if(n <=1) return 2
  
  let prime = n
  let found = false
  
  while(!found){
      prime++
          if(isPrime(prime)) found = true
    }
  
  return prime
}

// test cases:
console.log(nextPrime(0))
console.log(nextPrime(1))
console.log(nextPrime(2))
console.log(nextPrime(3))
console.log(nextPrime(5))