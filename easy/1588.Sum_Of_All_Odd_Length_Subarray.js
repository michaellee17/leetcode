/**
 * @param {number[]} arr
 * @return {number}
 * 2025/8/20 暴力解 掌握度70%
 */
var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let len = 1; len <= arr.length; len += 2) {
      // 奇數長度：1,3,5...
      if (i + len <= arr.length) {
        for (let j = i; j < i + len; j++) {
          sum += arr[j];
        }
      }
    }
  }
  return sum;
};
