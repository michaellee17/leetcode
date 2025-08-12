/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 * 2025/8/8 偏難掌握度70% sort函數的進階應用
 * 同時要記index跟 soldiers可以用物件裡面包陣列所以可以使用陣列方法
 * 認知盲點 要記住
 */
var kWeakestRows = function (mat, k) {
  let rows = mat.map((row, index) => {
    let soldiers = row.reduce((sum, val) => sum + val, 0);
    return { index, soldiers };
  });

  rows.sort((a, b) => {
    if (a.soldiers !== b.soldiers) {
      return a.soldiers - b.soldiers;
    }
    return a.index - b.index;
  });
  console.log(`output->rows`, rows);

  return rows.slice(0, k).map((row) => row.index);
};
// var kWeakestRows = function (mat, k) {
//   let rows = mat.length;
//   let cols = mat[0].length;
//   let arr = [];
//   for (let i = 0; i < rows; i++) {
//     let sumcols = 0;
//     for (let j = 0; j < cols; j++) {
//       sumcols += mat[i][j];
//     }
//     arr.push({ id: i, pos: sumcols });
//   }
//   arr.sort((a, b) => a.pos - b.pos);
//   arr.splice(k);
//   const ids = arr.map((item) => item.id);
//   return ids;
// };
console.log(
  `output->kWeakestRows`,
  kWeakestRows(
    [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    3
  )
);
