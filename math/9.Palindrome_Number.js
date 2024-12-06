/**
 * @param {number} x
 * @return {boolean}
 * 2024/12/04 第一次看 掌握度80% 學到Math.floor()的用法
 */
var isPalindrome = function (x) {
  // 負數和以0結尾的數字（除了0本身）不可能是回文數
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  // 處理 11 的倍數
  if (x % 11 == 0) {
    return true;
  }

  let revertedNumber = 0;
  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  // 當數字長度為奇數時，我們可以通過 revertedNumber/10 去除中間的數字
  return x === revertedNumber || x === Math.floor(revertedNumber / 10);
};
