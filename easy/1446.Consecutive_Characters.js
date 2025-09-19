/**
 * @param {string} s
 * @return {number}
 * 2025/9/18 不難注意更新max時機 掌握度90%
 */
var maxPower = function (s) {
  let maxConsecutive = 1;
  let currentConsecutive = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      currentConsecutive++;
      maxConsecutive = Math.max(maxConsecutive, currentConsecutive);
    } else {
      currentConsecutive = 1;
    }
  }

  return maxConsecutive;
};
console.log(`output->maxPower('leetcode')`, maxPower("leetcode"));
