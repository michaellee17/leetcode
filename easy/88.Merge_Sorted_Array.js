/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * Tag: Array
 * 2024/11/14 第一次看 掌握度70%
 * 語法splice()
 * 第一個參數是移除或加入的起始位置
 * 第二個參數是移除的長度
 * 第三個參數是加入的元素
 */

var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2);
  return nums1.sort((a, b) => a - b);
};

console.log(
  `output->merge([1,2,3,0,0,0],3,[2,5,6],3)`,
  merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
);
