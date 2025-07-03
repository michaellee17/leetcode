/**
 * @param {number} num
 * @return {number}
 * 2024/12/24 第一次看 掌握度90% 遞迴
 * 字串才能跑迴圈 要先數字轉字串 要加總的時候在轉回來
 * 若不是個位數則遞迴
 */
var addDigits = function (num) {
  if (num < 10) return num; // 如果是個位數就回傳

  // 將 num 拆開成每個位數相加
  let sum = num
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);

  return addDigits(sum); // 遞迴處理
};

console.log(`output->addDigits(38)`, addDigits(38));
