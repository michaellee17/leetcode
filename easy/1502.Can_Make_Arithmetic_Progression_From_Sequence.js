/**
 * @param {number[]} arr
 * @return {boolean}
 * 2025/8/13 偏簡單掌握度100%
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => b - a);
  let diff = arr[0] - arr[1];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] - arr[i + 1] !== diff) return false;
  }
  return true;
};
console.log(
  `output->canMakeArithmeticProgression`,
  canMakeArithmeticProgression([3, 5, 1])
);
