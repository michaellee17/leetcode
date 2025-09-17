/**
 * @param {string} address
 * @return {string}
 * 2025/9/17 字串分割組裝 掌握度90%
 */
var defangIPaddr = function(address) {
  let arr = address.split('.')
  return arr.join('[.]')  
};
console.log(`output->defangIPaddr`,defangIPaddr("1.1.1.1"))