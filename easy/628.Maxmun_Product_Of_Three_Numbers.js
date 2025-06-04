/**
 * @param {number[]} nums
 * @return {number}
 * 2025/6/4 第一次看 條件判斷 array.sort Math.max運用 掌握度80%
 */
var maximumProduct = function (nums) {
  // 將陣列排序
  nums.sort((a, b) => a - b);
  console.log(`output->nums`, nums);
  // 最大的三個數字的乘積
  let max1 =
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];

  // 最小的兩個負數和最大的正數的乘積
  let max2 = nums[0] * nums[1] * nums[nums.length - 1];

  // 回傳兩者的最大值
  return Math.max(max1, max2);
};

console.log(`output-maximunProduct([1,2,3])`, maximumProduct([4, 1, 2, 3]));
