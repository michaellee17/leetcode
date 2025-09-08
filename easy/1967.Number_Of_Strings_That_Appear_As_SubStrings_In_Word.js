/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 * 2025/9/8 簡單 掌握度100%
 */
var numOfStrings = function (patterns, word) {
  let count = 0;
  patterns.forEach((item) => {
    if (word.indexOf(item) !== -1) count++;
  });
  return count;
};
console.log(
  `output->numOfStrings`,
  numOfStrings(["a", "abc", "bc", "d"], "abc")
);
