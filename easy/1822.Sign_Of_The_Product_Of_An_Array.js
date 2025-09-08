/**
 * @param {number[]} nums
 * @return {number}
 * 2025/9/5 有陷阱 不能把值算出來(js極大值會有問題) 只能計+-號
 */
var arraySign = function (nums) {
  let sign = 1;
  for (let num of nums) {
    if (num === 0) return 0;
    if (num < 0) sign *= -1;
  }
  return sign;
};
console.log(`output->arraySign()`, arraySign([-1, -2, -3, -4, 3, 2, 1]));
