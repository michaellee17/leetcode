/**
 * @param {number} n
 * @return {boolean}
 * 2024/12/25 第一次看 掌握度90%
 * 2025/7/3 第二次看掌握度 90% 類似263.Ugly number的觀念
 */
var isPowerOfThree = function (n) {
  if (n <= 0) return false;

  while (n % 3 === 0) {
    n = n / 3;
  }
  return 1 === n;
};
