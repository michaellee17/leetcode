/**
 * @param {number[][]} points
 * @return {number}
 * 2025/8/28 考英文 掌握度70%
 */
var maxWidthOfVerticalArea = function (points) {
  // 提取所有x座標並排序
  const xCoords = points.map((point) => point[0]).sort((a, b) => a - b);

  let maxWidth = 0;
  // 計算相鄰x座標間的最大距離
  for (let i = 1; i < xCoords.length; i++) {
    maxWidth = Math.max(maxWidth, xCoords[i] - xCoords[i - 1]);
  }

  return maxWidth;
};
