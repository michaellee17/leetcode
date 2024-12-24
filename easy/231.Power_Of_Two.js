/**
 * @param {number} n
 * @return {boolean}
 * 2024/12/24 第一次看 掌舵度90%
 */
var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) === 0;
};

function isPowerOfTwo2(n) {
  if (n <= 0) {
    return false;
  }
  while (n % 2 === 0) {
    n /= 2;
  }
  return n === 1;
}
// 測試用例
console.log(isPowerOfTwo2(18)); // 輸出: false
