/**
 * @param {number[][]} coordinates
 * @return {boolean}
 * 2025/8/6 掌握度70% 只比較相鄰的點會通不過某些測試
 * 是否都在同一條線上須滿足
 * 是否在初始點上延伸的斜率上
 * 已公式來說為
 * 斜率相等：(y₁-y₀)/(x₁-x₀) = (y-y₀)/(x-x₀)
 * 交叉相乘：(y₁-y₀) × (x-x₀) = (y-y₀) × (x₁-x₀)
 */
var checkStraightLine = function (coordinates) {
  if (coordinates.length <= 2) return true;

  const [x0, y0] = coordinates[0];
  const [x1, y1] = coordinates[1];

  for (let i = 2; i < coordinates.length; i++) {
    const [x, y] = coordinates[i];
    if ((y1 - y0) * (x - x0) !== (y - y0) * (x1 - x0)) {
      return false;
    }
  }
  return true;
};
console.log(
  `output->checkStraightLine`,
  checkStraightLine([
    [0, 0],
    [0, 5],
    [5, 5],
    [5, 0],
  ])
);
