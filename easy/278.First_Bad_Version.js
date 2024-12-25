/**
 * Definition for isBadVersion()
 * 2024/12/25 第一次看 掌握度70% function傳遞
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    console.log(`output->n`, n);
    let left = 1;
    let right = n;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) {
        right = mid; // 縮小搜尋範圍到左半部分
      } else {
        left = mid + 1; // 縮小搜尋範圍到右半部分
      }
    }

    return left; // 當 left 等於 right 時，left 即為第一個壞版本
  };
};

// 測試用例
const isBadVersion = (version) => {
  const bad = 4; // 假設第 4 版是壞版本
  return version >= bad;
};

const findFirstBadVersion = solution(isBadVersion);
console.log(findFirstBadVersion(5)); // 輸出: 4
console.log(findFirstBadVersion(1)); // 輸出: 1
