/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 * 2025/8/6 題意其實蠻難理解的 要舉例慢慢看 掌握度50% 可攤平成1d來看
 */
var shiftGrid = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const total = m * n;

  // 優化：k可能很大，取模避免不必要的循環
  k = k % total;
  if (k === 0) return grid;

  // 將2D網格轉換為1D陣列
  const flat = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      flat.push(grid[i][j]);
    }
  }

  // 右移k位：將陣列分成兩部分然後重新組合
  const shifted = flat.slice(-k).concat(flat.slice(0, -k));

  // 將1D陣列轉換回2D網格
  const result = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(shifted[i * n + j]);
    }
    result.push(row);
  }

  return result;
};

// 方法2：直接計算新位置（更節省空間）
var shiftGridOptimal = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const total = m * n;

  k = k % total;
  if (k === 0) return grid;

  const result = Array(m)
    .fill()
    .map(() => Array(n));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 計算當前位置在1D陣列中的索引
      const oldPos = i * n + j;
      // 計算移動後的新位置
      const newPos = (oldPos + k) % total;
      // 將新位置轉換為2D座標
      const newRow = Math.floor(newPos / n);
      const newCol = newPos % n;

      result[newRow][newCol] = grid[i][j];
    }
  }

  return result;
};

const grid1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("原始:", grid1);
console.log("k=1:", shiftGrid(grid1, 1));
// 預期: [[9,1,2],[3,4,5],[6,7,8]]clg
const g = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(`output->g[1][2]`, g[1][2]);
