/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 2025/9/30 題意很難看懂 掌握度60%
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // 找到目標
    if (nums[mid] === target) {
      return mid;
    }

    // 判斷哪一半是有序的
    if (nums[left] <= nums[mid]) {
      // 左半部有序
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1; // target 在左半部
      } else {
        left = mid + 1; // target 在右半部
      }
    } else {
      // 右半部有序
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1; // target 在右半部
      } else {
        right = mid - 1; // target 在左半部
      }
    }
  }

  return -1; // 找不到
};
console.log(`output->`, search([4, 5, 6, 7, 0, 1, 2], 0));
