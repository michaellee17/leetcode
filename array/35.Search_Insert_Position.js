/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//2024/11/13 第一次看 掌握度70% 交叉比對
var searchInsert = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  if (nums[nums.length - 1] < target) {
    return nums.length;
  }
};
