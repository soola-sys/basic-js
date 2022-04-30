const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disks , turnsSpeed) {
  let d = 2**disks - 1;
  let t = 3600 / turnsSpeed * d;
  let obj = {
  turns :0 ,
  seconds : 0,
}
obj.turns = d;
obj.seconds = Math.floor(t)
  return obj
}

module.exports = {
  calculateHanoi
};
