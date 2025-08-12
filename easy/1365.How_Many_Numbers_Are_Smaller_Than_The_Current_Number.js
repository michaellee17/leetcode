/**
 * @param {number[]} nums
 * @return {number[]}
 * 2025/8/12 用輔助函數寫得出來 但是效能超差 掌握度60%
 * 計數排序法 O(n + k)：大致上理解 但也不簡單
 *
 */
// var smallerNumbersThanCurrent = function (nums) {
//   let getSmaller = (i) => {
//     let count = 0;
//     let remains = nums.filter((item, index) => index !== i);
//     let target = nums[i];
//     remains.forEach((item) => {
//       if (target > item) count++;
//     });
//     return count;
//   };
//   return nums.map((item, index) => getSmaller(index));
// };
var smallerNumbersThanCurrent = function (nums) {
  const count = new Array(101).fill(0);
  nums.forEach((num) => count[num]++);

  for (let i = 1; i < 101; i++) {
    count[i] += count[i - 1];
  }
  console.log(`output->count`, count);
  return nums.map((num) => (num === 0 ? 0 : count[num - 1]));
};
console.log(
  `output->smallerNumbersThanCurrent`,
  smallerNumbersThanCurrent([8, 1, 2, 2, 3])
);
