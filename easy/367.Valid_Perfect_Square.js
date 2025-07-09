/**
 * @param {number} num
 * @return {boolean}
 * 2024/12/25 第一次看 掌握度100% Math.sqrt(num) 可以取得平方根
 * 2025/7/3 第二次看 第二種解髮
 */
var isPerfectSquare = function (num) {
  let sqrt = Math.sqrt(num);
  return sqrt === Math.floor(sqrt);
};
var isPerfectSquare = function (num) {
  for (let i = 1; i <= num; i++) {
    if (i * i === num) {
      return true;
    }
    if (i * i > num) {
      return false;
    }
  }
};
// 測試用例
console.log(isPerfectSquare(16)); // 輸出: true
console.log(isPerfectSquare(14)); // 輸出: false
