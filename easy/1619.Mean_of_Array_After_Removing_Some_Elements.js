/**
 * @param {number[]} arr
 * @return {number}
 * 2025/8/26 簡單 掌握度90%
 */
var trimMean = function (arr) {
  arr.sort((a, b) => a - b);
  let length = arr.length;
  let target = length / 20;
  let newArr = arr.slice(target, length - target);
  return newArr.reduce((acc, cur) => acc + cur, 0) / newArr.length;
};
console.log(
  `output->trimMean([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3])`,
  trimMean([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3])
);
