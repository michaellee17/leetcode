/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 * 2025/9/1 用輔助函數拆解 不難 掌握度90%
 */
var countConsistentStrings = function (allowed, words) {
  let count = 0;
  words.forEach((item) => {
    if (checkConsistent(allowed, item)) count++;
  });
  return count;
};
const checkConsistent = (allowed, word) => {
  let arr = word.split("");
  for (let item of arr) {
    if (!allowed.includes(item)) {
      return false;
    }
  }
  return true;
};
console.log(
  `output->`,
  countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"])
);
