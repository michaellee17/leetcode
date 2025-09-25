/**
 * @param {string} s
 * @return {boolean}
 * 2025/9/25 不難但是記得結尾若沒有改變的話要再補比較一次 掌握度80%
 */
var checkZeroOnes = function (s) {
  let maxZero = 0;
  let zeroCountinue = 0;
  let maxOne = 0;
  let oneCountinue = 0;
  for (let item of s) {
    if (item === "0") {
      maxOne = Math.max(maxOne, oneCountinue);
      oneCountinue = 0;
      zeroCountinue++;
    } else {
      maxZero = Math.max(maxZero, zeroCountinue);
      zeroCountinue = 0;
      oneCountinue++;
    }
  }
  maxOne = Math.max(maxOne, oneCountinue);
  maxZero = Math.max(maxZero, zeroCountinue);
  return maxOne > maxZero ? true : false;
};
console.log(`output->`, checkZeroOnes("111000"));
