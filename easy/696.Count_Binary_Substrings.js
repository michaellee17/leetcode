/**
 * @param {string} s
 * @return {number}
 * 2025/6/10 第一次看 偏複雜 掌握度50%
 */
var countBinarySubstrings = function (s) {
  let prev = 0; // 前一段的長度
  let curr = 1; // 當前段的長度
  let count = 0; // 結果計數

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      // 如果當前字符與前一個字符相同，增加當前段的長度
      curr++;
    } else {
      // 如果不同，更新結果並重置段長
      count += Math.min(prev, curr); // 計算有效子字串數量
      prev = curr; // 更新前一段的長度
      curr = 1; // 重置當前段的長度
    }
  }

  // 最後一次計算
  count += Math.min(prev, curr);

  return count;
};
console.log(`output->`, countBinarySubstrings("00110011"));
