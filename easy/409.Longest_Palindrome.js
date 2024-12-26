/**
 * @param {string} s
 * @return {number}
 * 2024/12/26 第一次看 掌握度80% map
 */
var longestPalindrome = function (s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  let count = 0;
  let odd = false;
  for (let value of map.values()) {
    if (value % 2 === 0) {
      count += value;
    } else {
      count += value - 1;
      odd = true;
    }
  }
  return odd ? count + 1 : count;
};

console.log(`output->longestPalindrome`, longestPalindrome("abccccdd")); // 7
