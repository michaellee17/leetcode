/**
 * @param {number[]} nums
 * @return {number[]}
 * 2025/9/8 簡單 餘數使用 掌握度90%
 */
var getConcatenation = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length * 2; i++) {
    result.push(nums[i % nums.length]);
  }
  return result;
};
console.log(`output->getConcatenation`, getConcatenation([1, 2, 1]));
