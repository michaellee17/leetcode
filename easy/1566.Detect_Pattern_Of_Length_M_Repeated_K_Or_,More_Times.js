/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 * 2025/8/14 偏難 掌握度60%
 */
var containsPattern = function (arr, m, k) {
  // 需要至少 m * k 個元素
  if (arr.length < m * k) return false;

  // 遍歷每個可能的起始位置
  for (let i = 0; i <= arr.length - m * k; i++) {
    let isValid = true;

    // 檢查從 i 開始的模式是否重複 k 次
    for (let j = 0; j < m * k; j++) {
      if (arr[i + j] !== arr[i + (j % m)]) {
        isValid = false;
        break;
      }
    }

    if (isValid) return true;
  }

  return false;
};
console.log(
  `output->containsPattern`,
  containsPattern([1, 2, 4, 4, 4, 4], 1, 3)
);
