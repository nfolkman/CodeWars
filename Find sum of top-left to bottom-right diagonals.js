/* Description: Given a square matrix (i.e. an array of subarrays), find the sum of values from the first value of the first array, 
the second value of the second array, the third value of the third array, and so on... */

function diagonalSum(matrix){
    let sum = 0
  
      for(let i = 0; i<matrix.length;i++){
          for(let j = i; j<=i; j++){
              sum += matrix[i][j]
              }
          }
  return sum
  }
  
  // test cases:
  console.log(diagonalSum([[5, 9, 1, 0],[8, 7, 2, 3],[1, 4, 1, 9],[2, 3, 8, 2]]))  // 15
  console.log(diagonalSum([[1, 2],[3, 4]]))  // 5