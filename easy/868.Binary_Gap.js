/**
 * @param {number} n
 * @return {number}
 * 2025/6/24 要記錄上一個的索引 掌握度80%
 */
var binaryGap = function (n) {
  let binary = n.toString(2); // 將數字轉換為二進位字串
  let prevIndex = -1; // 記錄上一個 1 的索引
  let maxGap = 0; // 記錄最大距離

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      if (prevIndex !== -1) {
        maxGap = Math.max(maxGap, i - prevIndex); // 計算兩個 1 之間的距離
      }
      prevIndex = i; // 更新上一個 1 的索引
    }
  }

  return maxGap;
};

console.log(`output->binaryGap`, binaryGap(8));
