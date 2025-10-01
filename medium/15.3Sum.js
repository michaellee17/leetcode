/**
 * @param {number[]} nums
 * @return {number[][]}
 * 2025/9/30 三迴圈會有O(n3)的問題 要排序後操作 掌握度60%
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b); // 先排序
  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // 跳過重複的 i (第一個沒有前一個的問題)
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // 跳過重複的 left 和 right
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};
console.log(`output->threeSum()`, threeSum([-1, 0, 1, 2, -1, -4]));
