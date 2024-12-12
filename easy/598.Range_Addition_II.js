/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  // 處理 ops 為空的情況
  if (ops.length === 0) {
    return m * n;
  }

  // 初始化最小行和最小列
  let minRow = m;
  let minCol = n;

  // 遍歷操作數組，找到最小的 ai 和 bi
  for (let [ai, bi] of ops) {
    minRow = Math.min(minRow, ai);
    minCol = Math.min(minCol, bi);
  }

  // 返回重疊區域的大小
  return minRow * minCol;
};
// 測試範例
console.log(
  `output->`,
  maxCount(3, 3, [
    [2, 2],
    [3, 3],
  ])
); // 輸出: 4