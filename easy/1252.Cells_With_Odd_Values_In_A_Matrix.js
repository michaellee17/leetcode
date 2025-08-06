/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 * 2025/8/6 掌握度70%
 * 行跟列長搞混怎麼辦?
 * 直接計英文 row 水平 column 垂直的 就比較好理解
 * 這題 假設第一個increment就[0,1]
 * 就是row[0]都+1 column[1]都加1
 * 兩個分開處理
 * 再跑雙迴圈相加取餘數即可
 */
function oddCells(m, n, indices) {
  const rowCount = new Array(m).fill(0);
  const colCount = new Array(n).fill(0);

  for (const [r, c] of indices) {
    console.log(`output->r`, r);
    console.log(`output->c`, c);
    rowCount[r]++;
    colCount[c]++;
  }

  let oddCount = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((rowCount[i] + colCount[j]) % 2 === 1) {
        oddCount++;
      }
    }
  }

  return oddCount;
}

console.log(
  oddCells(2, 3, [
    [0, 1],
    [1, 1],
  ])
); // Expected: 6
// console.log(
//   oddCells(2, 2, [
//     [1, 1],
//     [0, 0],
//   ])
// ); // Expected: 0
