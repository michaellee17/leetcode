/**
 * @param {number} turnedOn
 * @return {string[]}
 * 2024/12/26 第一次看 掌握度50% 位運算
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
var readBinaryWatch = function (turnedOn) {
  let result = [];

  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      if (countBits(h) + countBits(m) === turnedOn) {
        result.push(`${h}:${m < 10 ? "0" : ""}${m}`);
      }
    }
  }

  return result;
};

/**
 * 計算數字的二進位表示中 `1` 的數量
 * @param {number} num
 * @return {number}
 */
function countBits(num) {
  let count = 0;
  while (num > 0) {
    count += num & 1;
    num >>= 1;
  }
  return count;
}

// 測試用例
console.log(readBinaryWatch(1)); // 輸出: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
console.log(readBinaryWatch(2)); // 輸出: ["0:03","0:05","0:06","0:09","0:10","0:12","0:17","0:18","0:20","0:24","0:33","0:34","0:36","0:40","0:48","1:01","1:02","1:04","1:08","1:16","1:32","2:01","2:02","2:04","2:08","2:16","2:32","3:00","4:01","4:02","4:04","4:08","4:16","4:32","5:00","6:00","8:01","8:02","8:04","8:08","8:16","8:32","9:00","10:00"]
