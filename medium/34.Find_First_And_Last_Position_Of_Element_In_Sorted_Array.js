/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 2025/9/30 雙指針 比較麻煩 還可以理解掌握度80%
 */
var searchRange = function (nums, target) {
  // 找第一個位置
  function findFirst(nums, target) {
    let left = 0,
      right = nums.length - 1;
    let result = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        result = mid;
        right = mid - 1; // 繼續往左找
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
  }

  // 找最後一個位置
  function findLast(nums, target) {
    let left = 0,
      right = nums.length - 1;
    let result = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        result = mid;
        left = mid + 1; // 繼續往右找
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
  }

  let first = findFirst(nums, target);
  let last = findLast(nums, target);

  return [first, last];
};
console.log(`output->searchRange()`, searchRange([5, 7, 7, 8, 8, 10], 8));
