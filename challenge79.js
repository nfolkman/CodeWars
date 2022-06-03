/* Description: 
Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).
*/


function countBy(x, n) {
    let z = [];
  
  for(let i=x; i<=(x*n);i++){
      if(i % x === 0){
  z.push(i)
      }
  }
    return z;
  }

  /* test cases:
    countBy(1,10)
    countBy(2,5)
  */