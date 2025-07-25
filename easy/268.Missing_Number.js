/**
 * @param {number[]} nums
 * @return {number}
 * Tag: Array
 * 2024/12/10 第一次看 掌握度100%
 * 2025/7/3 第二次看 掌握度100% 主要方法有兩種1.indexOf 找出沒出現的數字 2.和的差值
 * 2025/7/25 第三看 掌握度100% 注意假設的陣列會比較長1
 */

// 這個方法是用indexOf()去找出缺少的數字
var missingNumber = function (nums) {
  for (let i = 0; i < nums.length + 1; i++) {
    if (nums.indexOf(i) < 0) return i;
  }
};
// 利用總和差去求出缺少的數字
var missingNumber2 = function (nums) {
  let sum1 = 0;
  for (let i = 0; i <= nums.length; i++) {
    sum1 += i;
  }

  let sum2 = 0;
  for (let i = 0; i < nums.length; i++) {
    sum2 += nums[i];
  }

  return sum1 - sum2;
};

console.log(`output->missingNumber([0,1])`, missingNumber2([3, 0, 1]));
