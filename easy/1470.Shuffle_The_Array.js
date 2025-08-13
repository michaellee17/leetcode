/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 * 2025/8/13 偏簡單 掌握度100%
 */
var shuffle = function (nums, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[i + n]);
  }
  return result;
};
console.log(`output->shuffle()`, shuffle([2, 5, 1, 3, 4, 7], 3));
