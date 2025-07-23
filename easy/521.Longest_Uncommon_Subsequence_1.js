/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 * 2025/07/23 第一次看 掌握度90%
 * 子序列 為 不連續的 但順序要一樣的 字串
 * aab 跟 aac 的子序列 為 aab 或 aac 所以最長的子序列為 aab 或 aac 所以回傳 3
 * 簡單來說就是 如果兩個字串相同 則回傳 -1 因為沒有最長的子序列
 * 如果兩個字串不同 則回傳兩個字串中較長的那個
 */
var findLUSlength = function (a, b) {
  // 如果兩個字串相同，則返回 -1
  if (a === b) return -1;

  // 返回兩個字串的最大長度
  return Math.max(a.length, b.length);
};

console.log(`output->findLUSlength`, findLUSlength("aac", "aab")); // 3
