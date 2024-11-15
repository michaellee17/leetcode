/**
 * @param {string} s
 * @return {boolean}
 * 2024/11/15 第一次看 掌握度60%
 */
var isPalindrome = function (s) {
  s = s
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, ""); // 移除非字母數字字符
  if (s.length === 0) return true;
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }
  return true;
};
