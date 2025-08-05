/**
 * @param {number[]} position
 * @return {number}
 * 2025/8/5 有點抓不到題意 了解後不難 掌握度80%
 * 正確思路：
  - 計算奇數位置的籌碼數量
  - 計算偶數位置的籌碼數量
  - 把所有籌碼移到奇數位置的成本 = 偶數位置籌碼數量
  - 把所有籌碼移到偶數位置的成本 = 奇數位置籌碼數量
  - 取最小值
 */
var minCostToMoveChips = function (position) {
  let evenCount = 0;
  let oddCount = 0;

  position.forEach((pos) => {
    if (pos % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  });

  return Math.min(evenCount, oddCount);
};
console.log(minCostToMoveChips([1, 2, 3]));
