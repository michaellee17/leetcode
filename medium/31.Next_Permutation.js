/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 2025/9/30 題目難看懂
 * 完整例子 - 所有 [1,2,3] 的排列按字典序：
    [1,2,3]  ← 最小
    [1,3,2]
    [2,1,3]
    [2,3,1]
    [3,1,2]
    [3,2,1]  ← 最大
    看懂了也不好解
    掌握度30%
 */
var nextPermutation = function (nums) {
  // 步驟1: 從右往左找第一個 nums[i] < nums[i+1]
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  // 如果找到了 i (不是最大排列)
  if (i >= 0) {
    // 步驟2: 從右往左找第一個 nums[j] > nums[i]
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }

    // 步驟3: 交換 nums[i] 和 nums[j]
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // 步驟4: 反轉 i+1 到結尾的部分
  let left = i + 1;
  let right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
};
console.log(`output->`, nextPermutation([1, 2, 3]));
