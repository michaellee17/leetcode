/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Tag: Array
 * 2024/11/13 第一次看 掌握度70% 交叉比對
 */

var searchInsert = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    //若nums[i]大於等於target的話就回傳i
    if (nums[i] >= target) {
      return i;
    }
  }
  //若nums的最後一個數字小於target的話就回傳nums的長
  if (nums[nums.length - 1] < target) {
    return nums.length;
  }
};
