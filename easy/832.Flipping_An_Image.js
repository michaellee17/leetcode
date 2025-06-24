/**
 * @param {number[][]} image
 * @return {number[][]}
 * 2025/6/24 完全忘記陣列方法reverse 跟補1 0切換 掌握度80%
 */
var flipAndInvertImage = function (image) {
  return image.map((row) => row.reverse().map((num) => num ^ 1));
};
console.log(
  `output->filpAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])`,
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);
