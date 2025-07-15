/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 2025/6/4 滑動窗口算法 掌握度70%
 * 2025/7/14 第二次看 複習滑動框口法 或者暴力迴圈解都可以
 * 滑動窗口法:
 * 先算出前k個數的總和
 * 再從第k個數開始，每次移動一個位置，更新總和
 */
var findMaxAverage = function (nums, k) {
  if (nums.length === 1) return nums[0];

  // 初始化滑動窗口的總和
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let maxSum = sum;

  // 滑動窗口：逐步移動，更新總和
  for (let i = 1; i < nums.length - k + 1; i++) {
    sum = sum - nums[i - 1] + nums[i + k - 1];
    maxSum = Math.max(maxSum, sum);
  }

  // 回傳最大平均值
  return maxSum / k;
};

// 用戶的解法（修正版）
var findMaxAverage2 = function (nums, k) {
  let max = -Infinity;
  for (let i = 0; i < nums.length - k + 1; i++) {
    let sum = 0;
    // 修正：j < i + k 而不是 j < j + k
    for (let j = i; j < i + k; j++) {
      sum += nums[j];
    }
    if (sum > max) max = sum;
  }
  return max / k;
};

// 進一步優化的版本
var findMaxAverage3 = function (nums, k) {
  let max = -Infinity;
  for (let i = 0; i < nums.length - k + 1; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += nums[j];
    }
    // 使用 Math.max 更簡潔
    max = Math.max(max, sum);
  }
  return max / k;
};

console.log(
  `output->findMaxAverage()`,
  findMaxAverage([1, 12, -5, -6, 50, 3], 4)
);

// console.log(`用戶解法修正版:`, findMaxAverage2([1, 12, -5, -6, 50, 3], 4));
// console.log(`優化版:`, findMaxAverage3([1, 12, -5, -6, 50, 3], 4));
