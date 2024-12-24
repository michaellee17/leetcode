/**
 * @param {number} num
 * @return {number}
 * 2024/12/24 第一次看 掌握度90% 遞迴
 * 字串才能跑迴圈 要先數字轉字串 要加總的時候在轉回來
 * 若不是個位數則遞迴
 */
var addDigits = function (num) {
  let string = num.toString();
  let sum = 0;
  for (let item of string) {
    sum += parseInt(item);
  }
  if (sum < 10) {
    return sum;
  } else {
    return addDigits(sum);
  }
};

console.log(`output->addDigits(38)`, addDigits(38));
