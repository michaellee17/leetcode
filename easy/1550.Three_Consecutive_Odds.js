/**
 * @param {number[]} arr
 * @return {boolean}
 * 2025/8/14 偏簡單 掌握度100%
 */
var threeConsecutiveOdds = function (arr) {
  let cCount = 0;
  for (let item of arr) {
    if (item % 2 === 1) {
      cCount++;
    } else if (item % 2 === 0) {
      cCount = 0;
    }
    if (cCount === 3) return true;
  }
  return false;
};
console.log(`output->threeConsecutiveOdds`, threeConsecutiveOdds([2, 6, 4, 1]));
