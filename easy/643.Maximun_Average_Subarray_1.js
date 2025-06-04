/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 2025/6/4 滑動窗口算法 掌握度70%
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
  for (let i = k; i < nums.length; i++) {
    console.log(`output->i`, i);
    sum = sum - nums[i - k] + nums[i];
    console.log(`output->sum`, sum);
    maxSum = Math.max(maxSum, sum);
  }

  // 回傳最大平均值
  return maxSum / k;
};

console.log(
  `output->findMaxAverage()`,
  findMaxAverage([1, 12, -5, -6, 50, 3], 4)
);
