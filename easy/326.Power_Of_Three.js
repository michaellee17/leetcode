/**
 * @param {number} n
 * @return {boolean}
 * 2024/12/25 第一次看 掌握度90%
 * Math.pow(3, power) 3的power次方
 */
var isPowerOfThree = function (n) {
  if (n <= 0) return false;
  let power = 0;
  let result = 0;
  while (result < n) {
    result = Math.pow(3, power);
    power++;
  }
  return result === n;
};
