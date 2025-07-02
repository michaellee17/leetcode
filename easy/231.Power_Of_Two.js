/**
 * @param {number} n
 * @return {boolean}
 * 2024/12/24 第一次看 掌舵度90%
 * 2025/7/2 第二次看 用遞迴來處理 掌握度90%
 */
var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) === 0;
};

function isPowerOfTwo(n) {
  if (n <= 0) {
    return false;
  }
  while (n % 2 === 0) {
    n /= 2;
  }
  return n === 1;
}

var isPowerOfTwo2 = function (n) {
  console.log(`output->n`, n);
  if (n === 1) {
    return true;
  } else if (n < 1 || n % 2 !== 0) {
    return false;
  }

  return isPowerOfTwo2(n / 2);
};
// 測試用例
console.log(isPowerOfTwo2(18)); // 輸出: false
