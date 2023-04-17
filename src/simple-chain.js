const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.result.push(`( )`);
    }
    this.result.push(`( ${(value)} )`);
    return this;
  },
  removeLink(position) {
    if (
      position <= 0 ||
      position > this.result.length ||
      typeof position !== "number"
    ) {
      this.result = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.result.splice(position - 1, 1);
    return this;
  },

  // if (!this.result.includes((this.result.indexOf(position)) - 1 )){
  //   throw new Error(`You can't remove incorrect link!`);
  // }

  reverseChain() {
    this.result.reverse();
    return this
  },
  finishChain() {
    let result = this.result.join('~~');
    this.result = [];
    return result
  },
};
module.exports = {
  chainMaker
};
