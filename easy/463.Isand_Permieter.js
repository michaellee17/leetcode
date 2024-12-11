/**
 * @param {number[][]} grid
 * @return {number}
 * Tag: Array
 * 2024/12/10 第一次看 掌握度50% 題目有點複雜
 */
var islandPerimeter = function (grid) {
  let perimeter = 0;
  let rows = grid.length;
  let cols = grid[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        // 檢查上方
        if (i === 0 || grid[i - 1][j] === 0) perimeter++;
        // 檢查下方
        if (i === rows - 1 || grid[i + 1][j] === 0) perimeter++;
        // 檢查左方
        if (j === 0 || grid[i][j - 1] === 0) perimeter++;
        // 檢查右方
        if (j === cols - 1 || grid[i][j + 1] === 0) perimeter++;
      }
    }
  }

  return perimeter;
};

// 測試範例
console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);
console.log(`output->islandPerimeter([[1]])`, islandPerimeter([[1, 0]]));
