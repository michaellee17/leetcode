/**
 * @param {number} n
 * @return {number[]}
 * 2024/12/25 第一次看 掌握度70% 位元運算
 * 右移運算符 >> 將數字的所有位向右移動指定的位數
 * console.log(4 >> 1);  輸出: 2
 * console.log(5 >> 1);  輸出: 2
 * console.log(6 >> 1); 輸出: 3
 * console.log(7 >> 1);  輸出: 3
 * console.log(8 >> 1);  輸出: 4
 * i & 1 是一個位運算操作，表示將整數 i 和 1 進行按位與運算。這個操作的效果是檢查 i 的最低位（最右邊的一位）是否為 1。
 * console.log(4 & 1); 輸出: 0 (因為 4 的二進位表示是 100)
 * console.log(5 & 1); 輸出: 1 (因為 5 的二進位表示是 101)
 */

var countBits = function (n) {
  let ans = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    ans[i] = ans[i >> 1] + (i & 1);
  }
  return ans;
};

console.log(`output-countBits`, countBits(5)); // [0,1,1,2,1,2]
