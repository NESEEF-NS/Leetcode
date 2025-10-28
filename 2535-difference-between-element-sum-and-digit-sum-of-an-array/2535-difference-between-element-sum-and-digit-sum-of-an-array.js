/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
        const sum = nums.reduce((acc,crr)=>{
        return acc+crr
    }) 
    let x = nums.toString()
let s = x.split("")
let count =0
for (let i of s){
  
    if(Number(i) != NaN && i != ","){
     count += Number(i)
      }
     }
    return sum-count
};