/*Description: 
Now that the competition gets tough it will Sort out the men from the boys. Men are the Even numbers and Boys are the odd. |
Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys!alt!alt
Notes
- Return an array/list where Even numbers come first then odds

- Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

- Array/list size is at least 4 .

- Array/list numbers could be a mixture of positives , negatives .

Have no fear , It is guaranteed that no Zeroes will exist.
Repetition of numbers in the array/list could occur , So (duplications are not included when separating).
*/

function menFromBoys(arr){
    let men = arr.filter((el)=> el%2===0).sort((a,z)=>a-z);
      let boys = arr.filter((el)=> el%2!==0).sort((a,z)=>z-a);
  return([...new Set(men.concat(boys))])
  }