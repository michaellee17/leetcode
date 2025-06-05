/**
 * @param {number[][]} img
 * @return {number[][]}
 * 2025/6/5 第一次看 超難 掌握度30% 難度過高之後在看 現在無法理解
 */
var imageSmoother = function (img) {
  const m = img.length; // 矩陣的行數
  const n = img[0].length; // 矩陣的列數
  const result = Array.from({ length: m }, () => Array(n).fill(0)); // 初始化結果矩陣
  console.log(`output->result`, result);
  // 定義方向陣列，用於遍歷周圍的像素
  const directions = [
    [0, 0],
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sum = 0;
      let count = 0;

      // 遍歷周圍的像素
      for (let [dx, dy] of directions) {
        const x = i + dx;
        const y = j + dy;

        // 檢查是否在矩陣範圍內
        if (x >= 0 && x < m && y >= 0 && y < n) {
          sum += img[x][y];
          count++;
        }
      }

      // 計算平均值並向下取整
      result[i][j] = Math.floor(sum / count);
    }
  }

  return result;
};

console.log(
  imageSmoother([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
