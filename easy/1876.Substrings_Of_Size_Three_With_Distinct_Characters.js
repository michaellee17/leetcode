/**
 * @param {string} s
 * @return {number}
 * 2025/9/25 用set處理 在利用長度來比較 掌握度80%
 */
var countGoodSubstrings = function (s) {
  if (s.length < 3) return 0;
  let arr = [];
  for (let i = 0; i < s.length - 2; i++) {
    if (
      new Set([s[i], s[i + 1], s[i + 2]]).size ===
      [s[i], s[i + 1], s[i + 2]].length
    ) {
      let target = s[i] + s[i + 1] + s[i + 2];
      arr.push(target);
    }
  }
  return arr.length;
};
console.log(`output->`, countGoodSubstrings("aababcabc"));
