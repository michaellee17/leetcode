/**
 * @param {number[]} heights
 * @return {number}
 * 2025/7/30 陣列要解構重處才不會改變原陣列 掌握度100%
 */
var heightChecker = function (heights) {
  let expected = [...heights].sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    if (expected[i] !== heights[i]) {
      count++;
    }
  }
  return count;
};
console.log(`output->heightChecker`, heightChecker([1, 1, 4, 2, 1, 3]));
