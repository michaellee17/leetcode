/**
 * @param {number[][]} rectangles
 * @return {number}
 * 2025/9/4 不難解的出來 掌握度90%
 */
// var countGoodRectangles = function (rectangles) {
//   let arr = rectangles.map((item) => Math.min(item[0], item[1]));
//   let max = Math.max(...arr);
//   let count = 0;
//   for (let value of arr) {
//     if (value === max) count++;
//   }
//   return count;
// };

var countGoodRectangles = function (rectangles) {
  let maxSide = 0;
  let count = 0;

  for (let rect of rectangles) {
    let side = Math.min(rect[0], rect[1]);
    if (side > maxSide) {
      maxSide = side;
      count = 1;
    } else if (side === maxSide) {
      count++;
    }
  }

  return count;
};
console.log(
  `output->countGoodRectangles`,
  countGoodRectangles([
    [5, 8],
    [3, 9],
    [5, 12],
    [16, 5],
  ])
);
