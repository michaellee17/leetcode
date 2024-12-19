/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Tag: Array
 * 2024/12/10 第一次看 掌握度100% set filter set.has
 * 2024/12/18 第二次看 掌握度100%
 */
var intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  return [...set1].filter((num) => set2.has(num));
};

console.log(
  `output->intersection([1,2,2,1],[2,2])`,
  intersection([1, 2, 2, 1], [2, 2])
);
