/**
 * @param {number[]} nums
 * @return {number}
 * 2025/6/9 次大數的設置 掌握度70%
 * 2025/7/15 掌握度90%
 */
var dominantIndex = function (nums) {
  if (nums.length === 1) return 0; // 如果只有一個數，直接返回索引 0

  let max = -Infinity; // 最大數
  let secondMax = -Infinity; // 次大數
  let targetIndex = -1; // 最大數的索引

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      // 更新最大數和次大數
      secondMax = max;
      max = nums[i];
      targetIndex = i;
    } else if (nums[i] > secondMax) {
      // 更新次大數
      secondMax = nums[i];
    }
  }

  // 檢查最大數是否至少是次大數的兩倍
  return max >= secondMax * 2 ? targetIndex : -1;
};
var dominantIndex = function (nums) {
  let sorted = [...nums].sort((a, b) => b - a);
  let max = sorted[0];
  let secondMax = sorted[1];
  if (secondMax * 2 <= max) {
    return nums.indexOf(max);
  } else {
    return -1;
  }
};
console.log(`output->dominantIndex()`, dominantIndex([3, 6, 1, 0]));
