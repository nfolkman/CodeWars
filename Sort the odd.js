/* Description: You will be given an array of numbers. 
You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions. */


function sortArray(array) {
	
// edge case //
    if(!array.length) return []

// main block //

		// filter and sort odds in new array
    const odds = array
        .filter(x => x%2)
        .sort((a, b) => a - b)
        
		// if number is odd, replace with first value from odds array
   return array.map(x => x%2 ? odds.shift() : x)

}

// test cases:
console.log(sortArray([5, 3, 2, 8, 1, 4]))  // [1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0]))  // [1, 3, 5, 8, 0]
console.log(sortArray([]))