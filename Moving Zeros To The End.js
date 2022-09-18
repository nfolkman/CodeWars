/* Description: Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.  */


function moveZeros(arr) {
    let initialLength = arr.length,  // 9
        filteredArr = arr.filter((el)=> el !== 0),
        filteredLength = filteredArr.length  //7
  
   for(let i = 0; i<initialLength-filteredLength; i++){
      filteredArr.push(0)
    }
  return filteredArr
}
  
// test cases:
  console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))  // [false,1,1,2,1,3,"a",0,0]