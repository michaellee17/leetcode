/**
 * @param {number} n
 * @return {boolean}
 * 2024/12/25 第一次看 掌握度90% 同 326.Power_Of_Three.js
 * 2025/7/3 第二次看 掌握度90%
 */
var isPowerOfFour = function (n) {
  if (n <= 0) return false;
  while (n % 4 === 0) {
    n = n / 4;
  }
  return n === 1;
};
