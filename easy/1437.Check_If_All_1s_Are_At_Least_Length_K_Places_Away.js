/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * 2025/8/13 條件判斷 用可終止的方式操作 掌握度90%
 */
var kLengthApart = function (nums, k) {
  let isOneStart = false;
  let length = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (isOneStart) {
        if (length < k) return false;
        length = 0;
      } else {
        isOneStart = true;
      }
    } else if (nums[i] === 0) {
      if (isOneStart) {
        length++;
      }
    }
  }
  return true;
};
console.log(`output->kLengthApart`, kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2));
