/**
 * @param {number} n
 * @return {boolean}
 * 2024/12/24 第一次看 掌握度90% while迴圈
 * 2025/7/3 第二次看 注意11行的while才可以持續執行 如果是用if的話就只會執行一次即便條件是符合的 掌握度90%
 */
var isUgly = function (n) {
  if (n <= 0) return false; // 醜數必須是正數
  let factors = [2, 3, 5];
  for (let factor of factors) {
    while (n % factor === 0) {
      n = n / factor;
    }
  }
  return n === 1;
};

console.log(`output->isUgly`, isUgly(10));
