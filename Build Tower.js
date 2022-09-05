/* Description: Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.  */


function towerBuilder(nFloors){
    let space,
        asterisk,
        tower = [];
  
    for(i = 1; i <= nFloors; i++){

      space = " ".repeat(nFloors - i);
      asterisk  = "*".repeat((2*i) - 1);
      
      tower.push(`${space}${asterisk}${space}`);
  
    }
  
    return tower;
  }
  
  console.log(towerBuilder(6))  // ["     *     ", "    ***    ", "   *****   ", "  *******  ", " ********* ", "***********"]
  console.log(towerBuilder(3))  // ["  *  "," *** ","*****"]
  console.log(towerBuilder(1))  // ['*']