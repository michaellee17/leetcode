/**
 * @param {number[]} nums
 * @return {boolean}
 * 2025/6/25 條件判斷 掌握度80%
 */
var isMonotonic = function (nums) {
  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      isDecreasing = false; // 如果有遞增，則不是單調遞減
    }
    if (nums[i] < nums[i - 1]) {
      isIncreasing = false; // 如果有遞減，則不是單調遞增
    }
  }

  return isIncreasing || isDecreasing; // 如果是單調遞增或單調遞減，返回 true
};

console.log(`output->`, isMonotonic([1, 2, 2, 3]));
