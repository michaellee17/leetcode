/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 2025/8/12 偏難 掌握度70%
 *  假設矩陣：
  [3, 7, 8]
  [9, 11, 13]
  [15, 16, 17]

  當處理第一行時：
  - min = 3（第0行最小值）
  - idx = 0（3在第0列）

  現在檢查 matrix.every((arr) => arr[idx] <= min)：
  - arr[idx] 就是第0列的每個元素：[3, 9, 15]
  - 檢查：3 <= 3 ✓，9 <= 3 ✗，15 <= 3 ✗
 */
var luckyNumbers = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let min = Math.min(...matrix[i]), //第i行的最小值
      idx = matrix[i].indexOf(min); //該最小值在第幾列
    console.log(`output->min`, min);
    console.log(`output->idx`, idx);
    if (matrix.every((arr) => arr[idx] <= min)) return [min];
  }

  return [];
};
console.log(
  `output->luckyNumbers()`,
  luckyNumbers([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17],
  ])
);
