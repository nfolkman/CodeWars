/* Description: The Array's reverse() method has gone missing! Re-write it, quick-sharp!

When this method is called, it reverses the order of the items in the original array. 
Then then it returns that same, original array. No new arrays should need to be created to pass this kata.  */


Array.prototype.reverse = function() {

    let arr = this.splice(0)
  
    while(arr.length){
      this.push(arr.pop())
    }
  
    return this
};