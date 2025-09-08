/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 * 2025/9/5 可以理解掌握度90%
 */
var isCovered = function (ranges, left, right) {
  for (let i = left; i <= right; i++) {
    let covered = false;
    for (let [start, end] of ranges) {
      if (start <= i && i <= end) {
        covered = true;
        break;
      }
    }
    if (!covered) return false;
  }
  return true;
};
console.log(
  `output->`,
  isCovered([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
