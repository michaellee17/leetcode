/**
 * @param {number[]} nums
 * @return {number}
 * 2025/6/4 Math.max比較 掌握度80%
 * 2025/7/14 第二次看 Math.max 條件判斷 注意邊界情況 掌握度90%
 */
var findLengthOfLCIS = function (nums) {
  if (nums.length === 0) return 0;

  let maxLength = 1; // 最長遞增子序列的長度
  let currentLength = 1; // 當前遞增子序列的長度

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      // 如果當前元素比前一個元素大，遞增子序列長度加 1
      currentLength++;
      maxLength = Math.max(maxLength, currentLength);
    } else {
      // 否則，重置當前子序列長度
      currentLength = 1;
    }
  }

  return maxLength;
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7])); // 輸出 3
