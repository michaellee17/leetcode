/**
 * @param {number} area
 * @return {number[]}
 * 2024/12/30 第一次看 掌握度70%
 */
var constructRectangle = function (area) {
  let W = Math.floor(Math.sqrt(area));

  while (area % W !== 0) {
    W--;
  }

  let L = area / W;
  return [L, W];
};

// 測試用例
console.log(constructRectangle(4)); // 輸出: [2, 2]
console.log(constructRectangle(37)); // 輸出: [37, 1]
console.log(constructRectangle(122122)); // 輸出: [427, 286]
