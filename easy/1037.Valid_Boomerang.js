/**
 * @param {number[][]} points
 * @return {boolean}
 * 2025/7/30 (y2−y1)⋅(x3−x2)=(y3−y2)⋅(x2−x1) 需要被公式 掌握度70%
 * 1.利用解構把三點解構出來
 * 2.比較三點是否不同
 * 3.套三點一線公式
 */
var isBoomerang = function (points) {
  const [[x1, y1], [x2, y2], [x3, y3]] = points;
  // 確保三點不相同
  if (
    (x1 === x2 && y1 === y2) ||
    (x2 === x3 && y2 === y3) ||
    (x3 === x1 && y3 === y1)
  ) {
    return false;
  }
  // 使用交叉乘檢查是否共線
  return (x2 - x1) * (y3 - y2) !== (y2 - y1) * (x3 - x2);
};
var isBoomerang = function (points) {
  return (
    (points[0][0] - points[1][0]) * (points[0][1] - points[2][1]) !==
    (points[0][0] - points[2][0]) * (points[0][1] - points[1][1])
  );
};
console.log(
  `output->isBoomerang([[1,1],[2,3],[3,2]])`,
  isBoomerang([
    [1, 1],
    [2, 3],
    [3, 2],
  ])
);
