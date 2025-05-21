/**
 * @param {number} num
 * @return {string}
 * 2025/5/21 第一次看 掌握度70% 有點抽象 餘數% 跟/數的運用
 */
var convertToBase7 = function (num) {
  if (num === 0) return "0";
  let isNegative = num < 0;
  num = Math.abs(num);
  let res = "";
  while (num > 0) {
    res = (num % 7) + res;
    console.log(`output->res`, res);
    num = Math.floor(num / 7);
    console.log(`output->num`, num);
  }
  return isNegative ? "-" + res : res;
};
console.log(`output->convertToBase7(14)`, convertToBase7(14));
