/**
 * @param {number[]} nums
 * @return {number}
 * 2025/9/5 寫得出來 掌握度90%
 */
var maxAscendingSum = function (nums) {
  let max = 0;
  let currentSum = 0;
  nums.forEach((item, index) => {
    if (item > nums[index - 1] || index === 0) {
      currentSum += item;
      if (currentSum > max) max = currentSum;
    } else {
      currentSum = item;
    }
  });
  return max;
};
console.log(
  `output->maxAscendingSum`,
  maxAscendingSum([10, 20, 30, 5, 10, 50])
);
