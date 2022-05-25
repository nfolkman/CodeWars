/* Description: Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1" */

// if(url.includes('#')){
// return url.slice(0,(url.indexOf('#'))) // I gave various attemps, because the initial code test had a bug that initially kept me from trying to just send the code anyway
// } else {
// return url
// 	}
// }
// function removeUrlAnchor(url) {
//     const index = url.indexOf("#");

//     return index === -1 ? url : url.slice(0, index);
// }
// function removeUrlAnchor(url){
//   return url.split(/#.+/g)[0];
// }

function removeUrlAnchor(url){
    if(url.includes('#')){
    return url.slice(0,(url.indexOf('#')))
    } else {
    return url
        }
    }
    
    // Test Cases
    // removeUrlAnchor("www.codewars.com#about")
    // removeUrlAnchor('www.codewars.com/katas/?page=1#about')
    // removeUrlAnchor('www.codewars.com/katas/')