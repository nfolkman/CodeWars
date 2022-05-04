// Description: Return the sum of the positive integers


function positiveSum(arr) {
    return arr.filter((el)=> el > 0).reduce((a,b)=> a+b,0);
    }