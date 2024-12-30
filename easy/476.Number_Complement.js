/**
 * @param {number} num
 * @return {number}
 * 2024/12/30 第一次看 掌握度60% 位運算
 * Math.log2(num) 可以得到數字的二進位表示的位數
 * ex: Math.log2(5) => 2.321928094887362 => Math.floor(2.321928094887362) => 2
 * ex: Math.log2(10) => 3.321928094887362 => Math.floor(3.321928094887362) => 3
 * 1 << bits 會得到 2^bits
 * ex: 1 << 2 => 100 => 4
 * ex: 1 << 3 => 1000 => 8
 * ^ 位元運算 XOR
 * ex: 5 ^ 3 => 101 ^ 011 => 110 => 6
 */
var findComplement = function (num) {
  // 計算數字的二進位表示的位數
  let bits = Math.floor(Math.log2(num)) + 1;
  // 生成與數字位數相同的全 1 的掩碼
  let mask = (1 << bits) - 1;
  // 計算補數
  return num ^ mask;
};

// 測試用例
console.log(findComplement(5)); // 輸出: 2
console.log(findComplement(1)); // 輸出: 0
console.log(findComplement(7)); // 輸出: 0
console.log(findComplement(10)); // 輸出: 5
