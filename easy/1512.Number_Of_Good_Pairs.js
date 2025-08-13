/**
 * @param {number[]} nums
 * @return {number}
 * 2025/8/13 雙迴圈可以解 用map處理效能更好 掌握度80%
 */
// var numIdenticalPairs = function (nums) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (i < j && nums[i] === nums[j]) {
//         count++;
//       }
//     }
//   }
//   return count;
// };
var numIdenticalPairs = function (nums) {
  let map = new Map();
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i])) {
      count = count + map.get(nums[i]);
    }
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  return count;
};
console.log(`output->numIdenticalPairs`, numIdenticalPairs([1, 2, 3, 1, 1, 3]));
