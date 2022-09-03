/* Description: In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Notes
- All numbers are valid Int32, no need to validate them.
- There will always be at least one number in the input string.
- Output string must be two numbers separated by a single space, and highest number is first.  */

function highAndLow(numbers) {
	numbers = numbers.split(' ').map(num=> +num).sort((a,b)=>a-b)
  let lowest 
  let highest
  for(let i = 0; i<numbers.length; i++){
    lowest = numbers[0]
    highest = numbers[numbers.length-1]

    if(+numbers[i]<lowest) lowest = numbers[i]
    if(+numbers[i]>highest) highest = numbers[i]
  }

  return `${highest} ${lowest}`
}

// test cases:
console.log(highAndLow("1 2 -3 4 5"))  // '5 -3'