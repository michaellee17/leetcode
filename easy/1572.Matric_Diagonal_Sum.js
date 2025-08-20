/**
 * @param {number[][]} mat
 * @return {number}
 * 2025/8/14 偏難掌握度70%
 * 2025/8/20 第二次看 比較理解了掌握度80%
 */
var diagonalSum = function (mat) {
  let sum = 0;
  let n = mat.length; //column長度

  for (let i = 0; i < n; i++) {
    sum += mat[i][i]; //從左上角到右下角，位置為 [i][i]
    sum += mat[i][n - 1 - i]; //從右上角到左下角，位置為 [i][n-1-i]
  }

  if (n % 2 !== 0) {
    //奇數
    sum -= mat[Math.floor(n / 2)][Math.floor(n / 2)]; //如果矩陣大小是奇數，中心元素 mat[n/2][n/2] 會被加兩次，需要減掉一次
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
