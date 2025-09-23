/**
 * @param {number} n
 * @return {string}
 * 2025/9/23 從右邊算過來才對 注意條件 掌握度80%
 */
var thousandSeparator = function (n) {
  if (n.toString().length <= 3) {
    return n.toString();
  }
  let arr = n.toString().split("");
  let length = arr.length;
  let result = [];
  for (let i = length - 1; i >= 0; i--) {
    if ((length - 1 - i) % 3 === 0 && i !== length - 1) {
      result.unshift(".");
    }
    result.unshift(arr[i]);
  }
  return result.join("");
};
console.log(`output->`, thousandSeparator(1234567));
