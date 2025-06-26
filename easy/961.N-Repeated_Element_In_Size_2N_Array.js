/**
 * @param {number[]} nums
 * @return {number}
 * 2025/6/26 寫得出來 掌握度100%
 */
// var repeatedNTimes = function (nums) {
//   n = nums.length / 2;
//   let object = {};
//   nums.forEach((item) => {
//     object[item] = (object[item] || 0) + 1;
//   });
//   let result = Object.entries(object);
//   const target = result.find((item) => item[1] === n); // 修正條件，找出出現 n 次的元素
//   if (target) {
//     return parseInt(target[0]); // 確保 target 不為 undefined
//   }
//   return null; // 如果找不到符合條件的元素，返回 null
// };
var repeatedNTimes = function (nums) {
  // find duplicate
  let seen = new Set();

  return nums.find((n) => {
    if (!seen.has(n)) {
      seen.add(n);
      return false;
    }
    return true;
  });
};
console.log(`output->`, repeatedNTimes([1, 2, 3, 3]));
