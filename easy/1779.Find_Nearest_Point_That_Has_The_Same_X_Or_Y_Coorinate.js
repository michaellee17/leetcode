/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 * 2025/9/5 還可以理解 掌握度70%
 */
var nearestValidPoint = function (x, y, points) {
  let minDist = Infinity;
  let result = -1;

  for (let i = 0; i < points.length; i++) {
    if (points[i][0] === x || points[i][1] === y) {
      let dist = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
      if (dist < minDist) {
        minDist = dist;
        result = i;
      }
    }
  }

  return result;
};
console.log(
  `output->nearestValidPoint`,
  nearestValidPoint(3, 4, [
    [1, 2],
    [3, 1],
    [2, 4],
    [2, 3],
    [4, 4],
  ])
);
