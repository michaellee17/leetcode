/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * 2025/9/25 注意定數位置及覆蓋 掌握度80%
 */
var getLucky = function (s, k) {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let res = "";
  for (let item of s) {
    let index = letters.indexOf(item) + 1;
    res += index;
  }
  for (let i = 0; i < k; i++) {
    let result = 0;
    for (let digit of res) {
      result += parseInt(digit);
    }
    res = result.toString();
  }
  return parseInt(res);
};
console.log(`output->`, getLucky("iiii"));
