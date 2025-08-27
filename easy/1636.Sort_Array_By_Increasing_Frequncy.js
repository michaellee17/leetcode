/**
 * @param {number[]} nums
 * @return {number[]}
 * 2025/8/27 偏難 掌握度70%
 */
var frequencySort = function (nums) {
  let map = new Map();
  nums.forEach((item) => {
    map.set(item, (map.get(item) || 0) + 1);
  });

  let result = [...map.entries()]
    .sort((a, b) => a[1] - b[1] || b[0] - a[0])
    .flatMap(([num, freq]) => Array(freq).fill(num));

  return result;
};
console.log(
  `output->frequencySort([1,1,2,2,2,3])`,
  frequencySort([1, 1, 2, 2, 2, 3])
);
