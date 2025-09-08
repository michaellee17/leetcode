/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 * 2025/9/8 不難 注意順序 掌握度90%
 */
var isPrefixString = function (s, words) {
  let str = "";
  for (let item of words) {
    str += item;
    if (str === s) return true;
  }
  return false;
};
console.log(
  `output->`,
  isPrefixString("iloveleetcode", ["i", "love", "leetcode", "apples"])
);
