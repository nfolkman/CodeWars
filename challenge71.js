/* Description: 
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always has even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product , 26*3 + 24*6 + 12*10 = 342 */

function minSum(arr) {
    return arr.sort( (a,b) => a-b )
              .slice(0, arr.length/2)
              .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
  }

  /* Test Case:
  minSum([9,2,8,7,5,4,0,6]) => 74 */


