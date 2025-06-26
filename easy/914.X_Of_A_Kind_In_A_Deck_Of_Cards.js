/**
 * @param {number[]} deck
 * @return {boolean}
 * 2025/6/26 最大公因數公式 需要理解一下 掌握度70%
 */
var hasGroupsSizeX = function (deck) {
  if (deck.length < 2) return false;
  let obj = {};
  deck.forEach((item) => {
    obj[item] = (obj[item] || 0) + 1;
  });

  let values = Object.values(obj);
  // 計算所有出現次數的最大公因數
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  console.log(`output->gcd`, gcd(1, 2));
  let resultGCD = values[0];
  for (let i = 1; i < values.length; i++) {
    resultGCD = gcd(resultGCD, values[i]);
  }

  // 如果最大公因數大於 1，則可以分組
  return resultGCD > 1;
};
console.log(`output->`, hasGroupsSizeX([1, 1, 2, 2, 2, 2]));
