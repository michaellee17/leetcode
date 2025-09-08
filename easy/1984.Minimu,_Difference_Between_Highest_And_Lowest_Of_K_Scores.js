/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 2025/9/8 稍微要思考一下 掌握度70%
 */
var minimumDifference = function (nums, k) {
  if (k === 1) return 0;

  nums.sort((a, b) => a - b);
  let minDiff = Infinity;

  for (let i = 0; i <= nums.length - k; i++) {
    let diff = nums[i + k - 1] - nums[i];
    minDiff = Math.min(minDiff, diff);
  }

  return minDiff;
};
console.log(`output->minimumDifference`, minimumDifference([90], 1));
