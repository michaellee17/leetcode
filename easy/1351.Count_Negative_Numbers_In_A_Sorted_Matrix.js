/**
 * @param {number[][]} grid
 * @return {number}
 * 2025/8/12 用flat展開 掌握度90%
 */
var countNegatives = function (grid) {
  let arr = grid.flat();
  return arr.reduce((acc, cur) => {
    if (cur < 0) acc++;
    return acc;
  }, 0);
};
var countNegatives = function (grid) {
  return grid.flat().filter((item) => item < 0).length;
};
console.log(
  `output->countNegatives()`,
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);
