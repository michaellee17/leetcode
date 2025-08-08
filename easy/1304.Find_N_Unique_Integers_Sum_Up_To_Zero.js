/**
 * @param {number} n
 * @return {number[]}
 * 2025/8/8 簡單 條件判斷 掌握度90%
 */
var sumZero = function (n) {
  let result = [];
  for (let i = 1; i <= n / 2; i++) {
    result.push(i, -i);
  }
  if (n % 2 !== 0) {
    result.push(0);
  }
  return result;
};
console.log(`output->sumZero(5)`, sumZero(5));
