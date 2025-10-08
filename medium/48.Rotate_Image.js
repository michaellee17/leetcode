/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 2025/10/3 沿著對角線 翻轉 再反轉一次 掌握度60%
 */
var rotate = function (matrix) {
  const n = matrix.length;

  // 1. 轉置矩陣（沿對角線翻轉）
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // 2. 每一行左右翻轉
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
};
console.log(
  `output->rotate()`,
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
