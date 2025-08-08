/**
 * @param {number[]} arr
 * @return {number[]}
 * 2025/8/8 要去重組 注意時間複雜度用map來處理比較快 掌握度80%
 */
var arrayRankTransform = function (arr) {
  let sorted = [...new Set(arr)].sort((a, b) => a - b);
  let rankMap = new Map();

  sorted.forEach((val, index) => {
    rankMap.set(val, index + 1);
  });

  console.log(`output->rankMap`, rankMap);

  return arr.map((val) => rankMap.get(val));
};
console.log(
  `output->arrayRankTransform`,
  arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12])
);
