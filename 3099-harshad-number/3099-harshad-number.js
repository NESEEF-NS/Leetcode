/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let sum =0
   let X = x.toString()
   for(let i of X){
    sum+=Number(i)
    
    }
    if(x%sum==0){
         return sum 
   }else {
    return -1
   }

};