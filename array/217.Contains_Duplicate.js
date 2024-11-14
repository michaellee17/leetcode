/**
 * @param {number[]} nums
 * @return {boolean}
 * 2024/11/14 第一次看 熟練度80%
 * js new Set() 一個值的集合，其中的值是唯一的
 */
var containsDuplicate = function (nums) {
  let s = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (s.has(nums[i])) return true;
    else s.add(nums[i]);
  }
  return false;
};
