/**
 * @param {string} s
 * @return {boolean}
 * 2024/12/25 第一次看 掌握度90%
 */
var checkRecord = function (s) {
  // 計算字串中 'A' 的數量
  let aCount = 0;
  // 計算字串中 'L' 的連續出現次數
  let lCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") {
      aCount++;
      // 如果 'A' 的數量超過 1，則返回 false
      if (aCount > 1) return false;
    }
    if (s[i] === "L") {
      lCount++;
      // 如果 'L' 的連續出現次數超過 2，則返回 false
      if (lCount > 2) return false;
    } else {
      // 如果當前字符不是 'L'，則重置連續計數器
      lCount = 0;
    }
  }

  // 如果 'A' 的數量不超過 1 且 'L' 的連續出現次數不超過 2，則返回 true
  return true;
};
