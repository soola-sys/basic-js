const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number. 
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  let numArray = (`${n}`.split('').map((el) => Number(el)));
  if (numArray[0] < numArray[1]) {
    return parseInt(numArray.slice(1).join(''));
  }
  let min = Math.min(...numArray);
  let index = numArray.indexOf(min);
  numArray.splice(index, 1);
  return parseInt(numArray.join(''))
}


module.exports = {
  deleteDigit
};
