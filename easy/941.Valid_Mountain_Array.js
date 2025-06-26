/**
 * @param {number[]} arr
 * @return {boolean}
 * 2025/6/26 利用while符合條件繼續跑的特性 遍歷整個陣列 掌握度70%
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) return false; // 必須至少有 3 個元素

  let i = 0;

  // 遞增部分
  while (i < arr.length - 1 && arr[i] < arr[i + 1]) {
    i++;
  }

  // 如果峰值是第一個或最後一個元素，返回 false
  if (i === 0 || i === arr.length - 1) return false;

  // 遞減部分
  while (i < arr.length - 1 && arr[i] > arr[i + 1]) {
    i++;
  }

  // 如果遍歷完整個陣列，返回 true；否則返回 false
  return i === arr.length - 1;
};

console.log(validMountainArray([2, 1])); // 輸出 false
console.log(validMountainArray([3, 5, 5])); // 輸出 false
console.log(validMountainArray([0, 3, 2, 1])); // 輸出 true
