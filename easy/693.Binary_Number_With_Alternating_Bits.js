/**
 * @param {number} n
 * @return {boolean}
 * 2025/6/10 第一次做 toString(2) 轉二進制就好 掌握度100%
 */
var hasAlternatingBits = function (n) {
  let binaryString = n.toString(2);
  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === binaryString[i + 1]) return false;
  }
  return true;
};
console.log(`output->`, hasAlternatingBits(7));
