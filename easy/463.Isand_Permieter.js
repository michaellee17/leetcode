/**
 * @param {number[][]} grid
 * @return {number}
 * Tag: Array
 * 2024/12/10 第一次看 掌握度50% 題目有點複雜
 * 2024/12/19 第二次看 掌握度80% 這次看比較懂
 */
var islandPerimeter = function (grid) {
  // 周長
  let perimeter = 0;
  // 橫向長度
  let rows = grid.length;
  // 縱向長度
  let cols = grid[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        // 檢查上方，如果是邊界或者上方是水域，周長+1
        if (i === 0 || grid[i - 1][j] === 0) perimeter++;
        // 檢查下方，如果是邊界或者下方是水域，周長+1
        if (i === rows - 1 || grid[i + 1][j] === 0) perimeter++;
        // 檢查左方，如果是邊界或者左方是水域，周長+1
        if (j === 0 || grid[i][j - 1] === 0) perimeter++;
        // 檢查右方，如果是邊界或者右方是水域，周長+1
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
