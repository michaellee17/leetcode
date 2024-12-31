/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Tag: Array
 * 2024//11/13 第一次看 掌握度 80% 學到雙重迴圈 差值陣列比較 掌握度70&
 * 2024/12/12 第二次看 掌握度 100% 暴力解就是雙迴圈 單迴圈就是講差值存入map或object 進行比較 若都沒有則回傳空陣列
 * 2024/12/31 第三次看 掌握度 100% 1.暴力解2.陣列3.map4.indexOf
 */
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
// var twoSum = function (nums, target) {
//   let seen = {};
//   for (let i = 0; i < nums.length; i++) {
//     //取得差值
//     let diff = target - nums[i];
//     if (seen[diff]) {
//       return [seen[diff] - 1, i];
//     } else {
//       seen[nums[i]] = i + 1;
//     }
//   }
//   return [];
// };
//解法3
// var twoSum = function (nums, target) {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     let complement = target - nums[i];
//     if (map.has(complement)) {
//       console.log(`output->map`, map);
//       return [map.get(complement), i];
//     }
//     map.set(nums[i], i);
//   }
//   return [];
// };

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    let diffIndex = nums.indexOf(diff);
    //找到非自己的值
    if (diffIndex !== -1 && diffIndex !== i) {
      return [i, diffIndex];
    }
  }
  return []; // 如果沒有找到，返回空數組
};

console.log(`output->twoSum()`, twoSum([3, 3], 6));
