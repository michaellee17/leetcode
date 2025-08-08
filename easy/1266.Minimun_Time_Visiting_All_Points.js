/**
 * @param {number[][]} points
 * @return {number}
 * 2025/8/8 第一次看寫得出來 用一個內建函數輔助算步數在回傳即可 解構 Math.abs Math.max 掌握度90%
 */
var minTimeToVisitAllPoints = function (points) {
  let steps = 0;
  const getSteps = (a, b) => {
    let [ax, ay] = a;
    let [bx, by] = b;

    let deltaX = Math.abs(ax - bx);
    let deltaY = Math.abs(ay - by);

    if (ax === bx) {
      return deltaY;
    }
    if (ay === by) {
      return deltaX;
    }

    return Math.max(deltaX, deltaY);
  };
  for (let i = 0; i < points.length - 1; i++) {
    steps += getSteps(points[i], points[i + 1]);
  }
  return steps;
};
console.log(
  `output->minTimeToVisitAllPoints`,
  minTimeToVisitAllPoints([
    [1, 1],
    [3, 4],
    [-1, 0],
  ])
);
