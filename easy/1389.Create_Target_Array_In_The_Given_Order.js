/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 * 2025/8/13 使用陣列方法splice 掌握度90%
 * splice(起始位置,刪除數項,加入的元素)
 */
// var createTargetArray = function (nums, index) {
//   let result = [];
//   for (let i = 0; i < index.length; i++) {
//     if (index[i] === 0) {
//       result.unshift(nums[i]);
//     } else if (index[i] === result.length) {
//       result.push(nums[i]);
//     } else if (index[i] < result.length) {
//       result.splice(index[i], 0, nums[i]);
//     }
//   }
//   return result;
// };
var createTargetArray = function (nums, index) {
  let targetArray = [];
  for (let i = 0; i < index.length; i++) {
    targetArray.splice(index[i], 0, nums[i]);
  }
  return targetArray;
};
console.log(
  `output->createTargetArray`,
  createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])
);
