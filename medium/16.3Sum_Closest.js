/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 2025/9/30 寫得出來 掌握度80%
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let minDiff = Infinity;
  let minValue = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      let diff = Math.abs(target - sum);
      if (diff < minDiff) {
        minDiff = diff;
        minValue = sum;
      }

      if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }
  return minValue;
};
console.log(`output->threeSumClosest()`, threeSumClosest([-1, 2, 1, -4], 1));
