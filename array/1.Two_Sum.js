/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//2024//11/13 第一次看 掌握度80% 學到雙重迴圈 差值陣列比較 掌握度70&
//解法1 雙迴圈暴力解 運行時間49ms
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };
//解法2 單迴圈 運行時間0ms
var twoSum = function (nums, target) {
  let seen = {};
  for (let i = 0; i < nums.length; i++) {
    //取得差值
    let diff = target - nums[i];
    if (seen[diff]) {
      return [seen[diff] - 1, i];
    } else {
      seen[nums[i]] = i + 1;
    }
    console.log(`output->seen`, seen);
  }
  return [];
};
console.log(`output->twoSum([2,7,11,15],9)`, twoSum([2, 7, 11, 15], 9));
// console.log(`output-twoSum([3,2,4], 6)`, twoSum([3, 2, 4], 6));
// console.log(`output-twoSum([3,3], 6)`, twoSum([3, 3], 6));
