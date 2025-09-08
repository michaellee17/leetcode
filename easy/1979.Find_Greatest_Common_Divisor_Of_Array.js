/**
 * @param {number[]} nums
 * @return {number}
 * 2025/9/8 GCD公式 掌握度80%
 */
var findGCD = function (nums) {
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  return getGCD(max, min);
};
const getGCD = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};
console.log(`output->findGCD([2,5,6,910])`, findGCD([2, 5, 6, 9, 10]));
