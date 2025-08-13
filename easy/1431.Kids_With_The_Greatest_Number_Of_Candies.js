/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 * 2025/8/13 偏簡單 掌握度100%
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  return candies.map((item) => item + extraCandies >= max);
};
console.log(`output->kidsWithCandies`, kidsWithCandies([2, 3, 5, 1, 3], 3));
