/**
 * @param {number[][]} dominoes
 * @return {number}
 * 2025/7/31 自己寫邏輯大致上正確 但是雙迴圈會導致運行時間過長 掌握度70%
 * 
 * 如果有 n 個相同的骨牌，能組成的配對數 = C(n,2) = n×(n-1)/2
    例如：[[1,2], [2,1], [1,2]]
    標準化後都是 "1,2"，頻率為 3
    配對數 = 3×2/2 = 3
    C(n,2) 組合數
 */
// var numEquivDominoPairs = function (dominoes) { //Time Limit Exceed
//   let count = 0;
//   const checkDoinoes = ([x1, y1], [x2, y2]) => {
//     if ((x1 === x2 && y1 === y2) || (x1 === y2 && y1 === x2)) {
//       return true;
//     }
//     return false;
//   };
//   for (let i = 0; i < dominoes.length; i++) {
//     for (let j = i + 1; j < dominoes.length; j++) {
//       if (checkDoinoes(dominoes[i], dominoes[j])) {
//         count++;
//       }
//     }
//   }
//   return count;
// };
var numEquivDominoPairs = function (dominoes) {
  const map = new Map();

  // 標準化並統計頻率
  for (const domino of dominoes) {
    // 標準化：較小數字在前
    const key =
      domino[0] <= domino[1]
        ? `${domino[0]},${domino[1]}`
        : `${domino[1]},${domino[0]}`;

    map.set(key, (map.get(key) || 0) + 1);
  }
  console.log(`output->map`, map);

  let count = 0;
  // 計算組合數：C(n,2) = n*(n-1)/2
  for (const freq of map.values()) {
    if (freq > 1) {
      count += (freq * (freq - 1)) / 2;
    }
  }

  return count;
};
console.log(
  `output->dominoes()`,
  numEquivDominoPairs([
    [1, 2],
    [2, 1],
    [3, 4],
    [5, 6],
  ])
);
