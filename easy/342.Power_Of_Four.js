/**
 * @param {number} n
 * @return {boolean}
 * 2024/12/25 第一次看 掌握度90% 同 326.Power_Of_Three.js
 */
var isPowerOfFour = function (n) {
  if (n <= 0) return false;
  let power = 0;
  let result = 0;
  while (result < n) {
    result = Math.pow(4, power);
    power++;
  }
  return result === n;
};
