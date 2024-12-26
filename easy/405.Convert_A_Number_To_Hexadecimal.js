/**
 * @param {number} num
 * @return {string}
 * 2024/12/26 第一次看 掌握度60% 位運算
 */
var toHex = function (num) {
  if (num === 0) return "0";
  let hex = "0123456789abcdef";
  let res = "";
  while (num && res.length < 8) {
    res = hex[num & 15] + res;
    num >>= 4;
  }
  return res;
};

console.log(`output->toHex(26)`, toHex(26));
