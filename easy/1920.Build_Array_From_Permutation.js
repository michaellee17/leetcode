/**
 * @param {number[]} nums
 * @return {number[]}
 * 2025/9/5 不難掌握度80%
 */
var buildArray = function (nums) {
  return nums.map((num) => nums[num]);
};
console.log(`output->`, buildArray([0, 2, 1, 5, 3, 4]));
