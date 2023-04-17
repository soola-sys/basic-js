const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;
  let secondSum = 0;
  let numArray = (`${n}`.split('').map((el) => Number(el)));
  numArray.forEach((el) => sum += el);
  let newArr = `${sum}`.split('').map((el) => Number(el));
  newArr.forEach((el) => secondSum += el);
  return secondSum;

}

module.exports = {
  getSumOfDigits
};
