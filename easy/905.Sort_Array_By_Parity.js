/**
 * @param {number[]} nums
 * @return {number[]}
 * 2025/6/25 掌握度100%
 */
var sortArrayByParity = function (nums) {
  let evens = nums.filter((item) => item % 2 === 0); // 篩選偶數
  let odds = nums.filter((item) => item % 2 !== 0); // 篩選奇數
  return [...evens, ...odds]; // 合併偶數和奇數
};
console.log(`output->`, sortArrayByParity([3, 1, 2, 4]));
