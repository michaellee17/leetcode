/**
 * @param {number[]} nums
 * @return {number[]}
 * 2025/6/25 掌握度80%
 * 2025/7/17  換位法 掌握度80%
 */
// var sortArrayByParity = function (nums) {
//   let evens = nums.filter((item) => item % 2 === 0); // 篩選偶數
//   let odds = nums.filter((item) => item % 2 !== 0); // 篩選奇數
//   return [...evens, ...odds]; // 合併偶數和奇數
// };

var sortArrayByParity = function (nums) {
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      [nums[left], nums[i]] = [nums[i], nums[left]];
      left++;
    }
  }
  return nums;
};
console.log(`output->`, sortArrayByParity([3, 1, 2, 4]));
