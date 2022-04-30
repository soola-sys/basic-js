const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform() {
  throw new NotImplementedError('Not implemented');
  // if(!Array.isArray(arr)){
  //   throw new Error("'arr' parameter must be an instance of the Array!") 
  // }
  // else{
  //  let transformedArray = []
  //  for(let i = 0 ; i < arr.length ; i++){
  //    if(arr[i] !== undefined || arr[i] !== 1337 ){
  //    switch(arr[i]){
  //      case '--double-next':
  //       transformedArray.push(arr[arr.indexOf('--double-next') + 1])
  //       break;
  //      case '--double-prev':
  //        transformedArray.push(arr[arr.indexOf('--double-prev') - 1])
  //        break;
  //      case '--discard-prev':
  //         // console.log(arr.indexOf('--discard-prev') - 1)
  //           transformedArray.pop(arr[arr.indexOf('--discard-prev')] - 1)
  //        break;
  //      case '--discard-next':
  //         i++
  //        break;
  //      default:
  //        transformedArray.push(arr[i])
  //      break;
  //    }
  //    }
  //  }
  //  return transformedArray
  // }
}

module.exports = {
  transform
};
