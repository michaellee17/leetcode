/**
 * @param {number} n
 * @return {number}
 * 2024/12/27 第一次看 掌握度70% 雙指針
 * 2025/7/9 第二次看 掌握度90@ 二分搜尋法
 */
var arrangeCoins = function (n) {
  let left = 0;
  let right = n;
  let mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    console.log(`output->mid`, mid);
    let sum = (mid * (mid + 1)) / 2; // 這是前 mid 層所需硬幣總數 (包含前面的層數所需的硬幣)

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
console.log(`output->arrangeCoins(5)`, arrangeCoins(5));
