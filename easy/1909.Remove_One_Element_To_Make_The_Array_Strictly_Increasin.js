/**
 * @param {number[]} nums
 * @return {boolean}
 * 2025/9/5 偏難 一個不符合遞增 掌握度60%
 */
var canBeIncreasing = function (nums) {
  let count = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      count++;
      if (count > 1) return false;

      // 檢查移除哪個元素
      if (i >= 2 && nums[i] <= nums[i - 2]) {
        // 移除 nums[i]，檢查後續
        nums[i] = nums[i - 1];
      }
      // 否則移除 nums[i-1]，nums[i] 保持不變
    }
  }

  return true;
};
console.log(`output->canBeIncreasing()`, canBeIncreasing([1, 2, 10, 5, 7]));
