/**
 * @param {number[]} nums
 * @return {number}
 * 2025/8/13 考排序而已 偏簡單 掌握度100%
 */
var maxProduct = function (nums) {
  nums.sort((a, b) => b - a);
  return (nums[0] - 1) * (nums[1] - 1);
};
console.log(`output->maxProduct`, maxProduct([3, 4, 5, 2]));
