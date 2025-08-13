/**
 * @param {number[]} nums
 * @return {number[]}
 * 2025/8/13 偏簡單 掌握度100%
 */
var runningSum = function (nums) {
  let sum = 0;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result.push(sum);
  }
  return result;
};
console.log(`output->runningSum`, runningSum([1, 2, 3, 4]));
