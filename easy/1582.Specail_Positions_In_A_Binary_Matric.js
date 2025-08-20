/**
 * @param {number[][]} mat
 * @return {number}
 * 2025/8/20 row column運用 掌握度80%
 * key:如果找到1 然後整row或column相加為1 代表這符合條件count++
 */
var numSpecial = function (mat) {
  let count = 0;
  let m = mat.length; //column 長度
  let n = mat[0].length; //row長度
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        let rowSum = mat[i].reduce((acc, cur) => acc + cur, 0);
        let columnSum = 0;
        for (let k = 0; k < m; k++) {
          columnSum += mat[k][j];
        }
        if (rowSum === 1 && columnSum === 1) {
          count++;
        }
      }
    }
  }
  return count;
};
console.log(
  `output->numSpecial`,

  numSpecial([
    [1, 0, 0],
    [0, 0, 1],
    [1, 0, 0],
  ])
);
