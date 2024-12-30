/**
 * @param {number} n
 * @return {number}
 * 2024/12/27 第一次看 掌握度70% 雙指針
 */
var arrangeCoins = function (n) {
  let left = 0;
  let right = n;
  let mid = 0;

  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);
    let sum = (mid * (mid + 1)) / 2;

    if (sum === n) {
      return mid;
    } else if (sum > n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return right;
};
