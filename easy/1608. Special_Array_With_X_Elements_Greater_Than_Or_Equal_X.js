/**
 * @param {number[]} nums
 * @return {number}
 * 2025/8/26 這題考英文吧 掌握度80%
 */
var specialArray = function (nums) {
  for (let x = 0; x <= nums.length; x++) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= x) count++;
    }
    if (count === x) return x;
  }
  return -1;
};
