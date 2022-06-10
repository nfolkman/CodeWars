/* Description: Complete the solution so that the function will break up camel casing, using a space between words.  */


function solution(string) {
    return string.replace(/([A-Z])/g, ' $1').trim() 
    }

    /*   test cases:
    solution('camelCasing')
    solution('camelCasingTest')
    solution('identifier')
    solution('')    */