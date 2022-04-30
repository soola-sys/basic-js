const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(typeof members !== 'object'  || members === null  || !Array.isArray(members)){
    return false
  }
else{
     let newArr = []
  let newnewArr = []
  let str = ''
 members.forEach((el) => {
   if(typeof el == 'string'){
     newArr.push(el.trim())
   }
 })
 newArr.forEach((item) => {
   newnewArr.push(item.slice(0,1).toUpperCase())
 })
return newnewArr.sort().join('')
}
  }

module.exports = {
  createDreamTeam
};
