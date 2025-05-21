/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
  // 如果兩個字串相同，則返回 -1
  if (a === b) return -1;

  // 返回兩個字串的最大長度
  return Math.max(a.length, b.length);
};

console.log(`output->findLUSlength`, findLUSlength("cdca", "cdc")); // 3
