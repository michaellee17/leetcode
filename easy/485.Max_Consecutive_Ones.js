/**
 * @param {number[]} nums
 * @return {number}
 *
 * Tag: Array
 * 2024/12/11 第一次看掌握度90%
 * 2024/12/19 第二次看掌握度100%
 * 2025/7/9 第三次看掌握度90% 用Math.max或者是直接比較兩個值取代都可
 */
var findMaxConsecutiveOnes = function (nums) {
  let one = 0; // 當前連續 1 的計數
  let maxConsecutive = 0; // 最大連續 1 的計數

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      one++; // 增加當前連續 1 的計數
      maxConsecutive = Math.max(maxConsecutive, one); // 更新最大連續 1 的計數
    } else {
      one = 0; // 當遇到 0 時，重置當前連續 1 的計數
    }
  }

  return maxConsecutive; // 返回最大連續 1 的計數
};

// 測試範例
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 輸出: 3
// console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // 輸出: 2
