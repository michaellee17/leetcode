/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 2024/11/13 第一次看 掌握度90% 學到雙指針法
 */

var removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

console.log(
  `output->removeElemet([3,2,2,3],3)`,
  removeElement([3, 2, 2, 3], 3)
);
