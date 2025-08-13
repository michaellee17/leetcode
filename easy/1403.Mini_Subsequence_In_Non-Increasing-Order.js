/**
 * @param {number[]} nums
 * @return {number[]}
 * 2025/8/13 還可以理解 掌握度80%
 * tips:
 * 1.先算出總合
 * 2.左邊總和累加
 * 3.右邊總和=左邊總和相加
 *
 */
function minSubsequence(nums) {
  // 1. 將陣列按非遞增順序排序
  nums.sort((a, b) => b - a);

  // 2. 計算總和
  const totalSum = nums.reduce((acc, num) => acc + num, 0);

  let subsequenceSum = 0;
  const subsequence = [];

  // 3. 累加元素直到子序列的總和大於剩餘元素的總和
  for (const num of nums) {
    subsequence.push(num);
    subsequenceSum += num;
    if (subsequenceSum > totalSum - subsequenceSum) {
      break;
    }
  }

  return subsequence;
}
console.log(`output->minSubsequence`, minSubsequence([4, 3, 10, 9, 8]));
