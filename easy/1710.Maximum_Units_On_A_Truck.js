/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 * 2025/9/1 注意不消耗卡車空間 掌握度80%
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let result = 0;
  let j = 0;

  for (let i = 0; i < truckSize && j < boxTypes.length; i++) {
    if (boxTypes[j][0] > 0) {
      result += boxTypes[j][1];
      boxTypes[j][0]--;
    } else {
      j++;
      i--; // 不消耗卡車空間，重新執行這一輪
    }
  }
  return result;
};
console.log(
  `output->`,
  maximumUnits(
    [
      [1, 3],
      [2, 2],
      [3, 1],
    ],
    4
  )
);
