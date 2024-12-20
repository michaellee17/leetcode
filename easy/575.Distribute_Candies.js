/**
 * @param {number[]} candyType
 * @return {number}
 * type: array
 * 2024/12/12 第一次看 掌握度100% set.size
 * 2024/12/20 第二次看 掌握度100%
 */
var distributeCandies = function (candyType) {
  const availableCandies = candyType.length / 2;
  const uniqueCandies = new Set(candyType).size;
  return Math.min(availableCandies, uniqueCandies);
};
