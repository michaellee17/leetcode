/**
 * @param {number[]} nums
 * @return {number}
 * 2025/9/5 要記得更新陣列 掌握度80%
 */
var minOperations = function (nums) {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      let operations = nums[i - 1] - nums[i] + 1;
      count += operations;
      nums[i] = nums[i - 1] + 1;
    }
  }
  return count;
};
console.log(`output->minOperations`, minOperations([1, 5, 2, 4, 1]));
