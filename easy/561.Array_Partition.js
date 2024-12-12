/**
 * @param {number[]} nums
 * @return {number}
 * Tag: Array
 * 2024/12/11 第一次看 掌握度 80% 邏輯有點複雜 需要推論一下
 */
var arrayPairSum = function (nums) {
  // 將數組進行排序 小到大
  nums.sort((a, b) => a - b);

  let sum = 0;
  // 遍歷排序後的數組，選取每對中的較小值 以四個數字舉例 [1,2,3,4] 如果4跟2或1組合取最小都會變成2和1 所以4跟3組會是最大的
  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }

  return sum;
};
console.log(`output->arrayPairSum([1,4,3,2])`, arrayPairSum([1, 4, 3, 2]));
