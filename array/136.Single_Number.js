/**
 * @param {number[]} nums
 * @return {number}
 * 2024/11/14 第一次看 掌握度100%
 * ^= 位元運算子
 * a ^ a = 0
 * 所以會去掉重複的數字
 */
var singleNumber = function (nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
};
