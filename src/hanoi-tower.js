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
  let obj = {
    turns :0 ,
    seconds : 0,
  }
    let t = 2**disks -1;
    let s = (3600 / turnsSpeed) * t;
    obj.turns = t;
    obj.seconds = Math.floor(s);
    return obj;
}

module.exports = {
  calculateHanoi
};
