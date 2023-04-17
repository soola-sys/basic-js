const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

  if(arr.includes(-1)){
      let tempArrValues = [];
  let tempArrIndex = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      tempArrIndex.push(i);
      tempArrValues.push(arr[i]);
    }
  }
  let valuesSorted = tempArrValues.sort((a , b) => a - b);
  let sorted = arr.filter((el) => el === -1);
  tempArrIndex.forEach((el , index) => {
     sorted.splice(el , 0 , valuesSorted[index]);
  })
  return sorted
  }
  else {
    return arr.sort((a , b) => a - b);
  }
}

module.exports = {
  sortByHeight
};
