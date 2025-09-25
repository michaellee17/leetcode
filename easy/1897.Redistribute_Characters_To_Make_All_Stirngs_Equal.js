/**
 * @param {string[]} words
 * @return {boolean}
 * 2025
 */
var makeEqual = function (words) {
  let charCount = {};

  // 統計所有字符出現次數
  for (let word of words) {
    for (let char of word) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }

  // 檢查每個字符是否能平均分配
  let n = words.length;
  for (let count of Object.values(charCount)) {
    if (count % n !== 0) return false;
  }

  return true;
};
console.log(`output->makeEqual()`, makeEqual(["abc", "aabc", "bc"]));
