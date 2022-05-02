const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = []
  let counter = 1
 let newArr = str.split("")
 for(let i = 0 ; i < newArr.length ; i++){
   if(newArr[i] == newArr[i + 1]){
       counter++
   }
   else{
     arr.push(counter , newArr[i])
     counter = 1
   
   }
 
 }
 return arr.filter((el) => el !== 1).join("")
}

module.exports = {
  encodeLine
};
