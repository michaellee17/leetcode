/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 2025/6/25 第一次看 掌握度70%
 * 2025/7/17 公式推倒 掌握度80%
 * Math.max(0, max - min - 2 * k)
 */
var smallestRangeI = function (nums, k) {
  const maxNum = Math.max(...nums); // 找出最大值
  const minNum = Math.min(...nums); // 找出最小值

  // 計算最小範圍
  return Math.max(0, maxNum - minNum - 2 * k);
};
