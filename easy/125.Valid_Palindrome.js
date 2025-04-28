/**
 * @param {string} s
 * @return {boolean}
 * Tag: String
 * 2024/11/15 第一次看 掌握度60%
 * 2024/12/17 第二次看 掌握度90%
 * 2025/1/3 第三次看 掌握度100%
 * 思路整理:
 * 移除非字母數字字符 => 使用正則表達式 => replace(/[^a-z0-9]/g, "")
 * 頭尾依序對比 => 使用迴圈 => for (let i = 0; i < s.length / 2; i++)
 *
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
