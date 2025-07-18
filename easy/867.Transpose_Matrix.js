/**
 * @param {number[][]} matrix
 * @return {number[][]}
 * 2025/7/17 完全忘記怎麼做 掌握度70%
 * 注意:要先設定result[i] = []; 不可以直接設定result[i][j]
 *
 */
var transpose = function (matrix) {
  let result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      result[i][j] = matrix[j][i];
    }
  }
  return result;
};
