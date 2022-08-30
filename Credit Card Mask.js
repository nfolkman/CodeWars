/* Description: Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.  */


function maskify(cc) {
    var x = cc.split("")
    var last4 = x.splice(-4)
    x = x.toString().replace(/["0-9A-Za-z"]/g, '#')
return x.split(",").join("")+last4.join("")
}


// favorite solution
function maskify(cc) {
    return cc.replace(/.(?=....)/g, '#');
}


// test cases:
console.log(maskify("4556364607935616"))
console.log(maskify("Skippy"))
console.log(maskify('1'))