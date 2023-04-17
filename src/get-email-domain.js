const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(str) {
  let newArr = str.split('');
   let index = newArr.lastIndexOf('@');
  let result = newArr.slice(index + 1).join('');
   return result;
 }

module.exports = {
  getEmailDomain
};
