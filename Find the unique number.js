/* Description: There is an array with some numbers. All numbers are equal except for one. Try to find it!

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.  */


function findUniq(arr) {
    for(let num of arr){
          if(arr.indexOf(num) === arr.lastIndexOf(num)) return num
      }
  }
  // test cases:
  console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))  // 2
  console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))  // 0.55