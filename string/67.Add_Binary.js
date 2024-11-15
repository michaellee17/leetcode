/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * 2024/11/15 第一次看 掌握度60%
 */
var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = [];

  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry;
    if (i >= 0) {
      sum += parseInt(a[i], 10);
      i--;
    }
    if (j >= 0) {
      sum += parseInt(b[j], 10);
      j--;
    }
    carry = Math.floor(sum / 2);
    result.push(sum % 2);
  }

  return result.reverse().join("");
};
