/* Description: Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output= [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]   

Pseudocode - Without mutating the original array, I need to loop through the array and find the smallest value, and return the array without that smallest value.
 I also need to make a conditional to check whether there is more than 1 of the smallest value in order to make sure I remove the one with the lower index.

 */


function removeSmallest(numbers) {
    const min = Math.min(...numbers);
     return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
   }