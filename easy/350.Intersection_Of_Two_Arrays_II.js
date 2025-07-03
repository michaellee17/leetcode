/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Tag: Array
 * 2024/12/10 第一次看 掌握度100% Map.set Map.get Map.has 用||簡化
 * 2024/12/19 第二次看 掌握度100%
 * 2025/7/3 第三次看 掌握度100% map操作
 */
var intersect = function (nums1, nums2) {
  let result = [];
  let map = new Map();

  // 記錄 nums1 中每個數字的出現次數
  for (const num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (const num of nums2) {
    if (map.has(num) && map.get(num) > 0) {
      res.push(num);
      map.set(num, map.get(num) - 1);
    }
  }

  return result;
};

// console.log(`output->`, intersect([1, 2, 2, 1], [2, 2]));

// console.log(`output->`, intersect([4, 9, 5], [9, 4, 9, 8, 4]));

console.log(`output->`, intersect([2, 1], [1, 2]));
