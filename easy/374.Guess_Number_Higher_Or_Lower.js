/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 * 2024/12/26 第一次看 掌握度70% 二分搜尋法
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let res = guess(mid);
    if (res === 0) {
      return mid; // 找到目標數字
    } else if (res === -1) {
      right = mid - 1; // 縮小搜尋範圍到左半部分
    } else {
      left = mid + 1; // 縮小搜尋範圍到右半部分
    }
  }

  return -1; // 如果沒有找到目標數字，返回 -1
};
var guess = function (num) {
  let pick = 6;
  if (num === pick) return 0;
  if (num > pick) return -1;
  if (num < pick) return 1;
};

console.log(`output-guessNumber`, guessNumber(10)); // 6
