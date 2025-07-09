/**
 * @param {number[]} nums
 * @return {number[]}
 * Tag: Array
 * 2024/12/10 第一次看 掌握度100% set set.has
 * 2024/12/19 第二次看 掌握度100%
 */
// var findDisappearedNumbers = function (nums) {
//   let result = [];
//   let set = new Set(nums);
//   console.log(`output->set`, set);
//   for (let i = 1; i <= nums.length; i++) {
//     if (!set.has(i)) {
//       result.push(i);
//     }
//   }
//   return result;
// };

var findDisappearedNumbers = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i]);
    let idx = num - 1;
    nums[idx] = Math.abs(nums[idx]) * -1;
  }
  console.log(`output->nums`, nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) res.push(i + 1);
  }
  return res;
  // Time Complexity: O(N)
  // Space Complexity: O(1)
};

console.log(`output->`, findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
