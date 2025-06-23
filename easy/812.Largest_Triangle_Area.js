/**
 * @param {number[][]} points
 * @return {number}
 * 2025/6/23 第一次看 沒見過這公式 掌握度60%
 */
var largestTriangleArea = function (points) {
  let maxArea = 0;

  // 遍歷所有可能的三角形
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      for (let k = j + 1; k < points.length; k++) {
        const [x1, y1] = points[i];
        const [x2, y2] = points[j];
        const [x3, y3] = points[k];

        // 使用向量法計算三角形面積
        const area =
          Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2;

        // 更新最大面積
        maxArea = Math.max(maxArea, area);
      }
    }
  }

  return maxArea;
};

console.log(
  largestTriangleArea([
    [0, 0],
    [0, 1],
    [1, 0],
    [0, 2],
    [2, 0],
  ])
); // 輸出 2
