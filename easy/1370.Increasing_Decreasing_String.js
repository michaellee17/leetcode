/**
 * @param {string} s
 * @return {string}
 * 2025/9/17 題意都看不太懂 蠻難的 掌握度50%
 */
var sortString = function (s) {
  // 統計每個字符的頻率
  let count = new Array(26).fill(0);
  for (let char of s) {
    count[char.charCodeAt(0) - 97]++;
  }

  let result = "";

  while (result.length < s.length) {
    // 遞增：a → z
    for (let i = 0; i < 26; i++) {
      if (count[i] > 0) {
        result += String.fromCharCode(i + 97);
        count[i]--;
      }
    }

    // 遞減：z → a
    for (let i = 25; i >= 0; i--) {
      if (count[i] > 0) {
        result += String.fromCharCode(i + 97);
        count[i]--;
      }
    }
  }

  return result;
};
