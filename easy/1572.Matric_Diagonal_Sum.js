/**
 * @param {number[][]} mat
 * @return {number}
 * 2025/8/14 偏難掌握度70%
 */
var diagonalSum = function (mat) {
  let sum = 0;
  let n = mat.length;

  for (let i = 0; i < n; i++) {
    sum += mat[i][i];
    sum += mat[i][n - 1 - i];
  }

  if (n % 2 !== 0) {
    sum -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
  }

  return sum;
};
console.log(
  `output->diagonalSum`,
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
