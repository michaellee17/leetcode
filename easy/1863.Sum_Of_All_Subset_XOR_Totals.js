/**
 * @param {number[]} nums
 * @return {number}
 * 2025/9/5 特殊運算不太懂 掌握度40%
 */
var subsetXORSum = function (nums) {
  let orSum = 0;
  for (let num of nums) {
    orSum |= num;
  }
  return orSum * Math.pow(2, nums.length - 1);
};
console.log(`output->`, subsetXORSum([5, 1, 6]));
