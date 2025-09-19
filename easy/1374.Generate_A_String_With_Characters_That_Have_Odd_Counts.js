/**
 * @param {number} n
 * @return {string}
 * 2025/9/17 很少用到的string.repeat 掌握度80%
 */
var generateTheString = function (n) {
  if (n % 2 === 1) {
    // n是奇數：用'a'重複n次
    return "a".repeat(n);
  } else {
    // n是偶數：用'a'重複n-1次，加一個'b'
    return "a".repeat(n - 1) + "b";
  }
};
console.log(`output->`, generateTheString(4));
