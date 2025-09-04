/**
 * @param {number[]} nums
 * @return {boolean}
 * 2025/9/4 概念稍微為抽象 還可以理解 掌握度80%
 */
var check = function (nums) {
  let count = 0;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] > nums[(i + 1) % n]) {
      count++;
    }
  }
  console.log(`output->count`, count);
  return count <= 1;
};
console.log(`output->check()`, check([2, 1, 3, 4]));
