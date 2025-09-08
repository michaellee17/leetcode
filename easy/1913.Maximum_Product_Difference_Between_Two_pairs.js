/**
 * @param {number[]} nums
 * @return {number}
 * 2025/9/5 不難 展沃度90%
 */
var maxProductDifference = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  return nums[n - 1] * nums[n - 2] - nums[0] * nums[1];
};
console.log(`output->`, maxProductDifference([5, 6, 2, 7, 4]));
