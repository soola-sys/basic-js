const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
  }
  calculateDepth(array) {
    let counter = 1;
    for (let item of array) {
      if (Array.isArray(item)) {

        let depth =  this.calculateDepth(item);
        console.log(depth)
        if(depth >= counter){
          counter = depth + 1;
        }
      }
    }
    return counter;
  }

}

module.exports = {
  DepthCalculator
};
