/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * 2025/9/30 前幾題綜合版(13.16) 偏難 掌握度60%
 */
var fourSum = function (nums, target) {
  let arr = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    // 跳過重複的 i
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length - 2; j++) {
      // 跳過重複的 j
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          arr.push([nums[i], nums[j], nums[left], nums[right]]);

          // 跳過重複的 left 和 right
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;

          left++;
          right--;
        } else if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }
  return arr;
};
console.log(`output->fourSum()`, fourSum([1, 0, -1, 0, -2, 2], 0));
