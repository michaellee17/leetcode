/**
 * @param {number[][]} matrix
 * @return {boolean}
 * 2025/7/15 掌握度70% 條件推導
 */
var isToeplitzMatrix = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] !== matrix[i - 1][j - 1]) {
        return false;
      }
    }
  }

  return true;
};
console.log(
  `output->`,
  isToeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2],
  ])
);
