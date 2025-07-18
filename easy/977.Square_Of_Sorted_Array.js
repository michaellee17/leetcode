/**
 * @param {number[]} nums
 * @return {number[]}
 * 6/25 寫得出來 掌握度100%
 * 7/18 掌握度100%
 */
var sortedSquares = function (nums) {
  let squares = nums.map((item) => item * item);
  return squares.sort((a, b) => a - b);
};
