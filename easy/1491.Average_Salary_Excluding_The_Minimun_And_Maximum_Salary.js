/**
 * @param {number[]} salary
 * @return {number}
 * 2025/8/13 偏簡單 掌握度100%
 */
var average = function (salary) {
  let max = Math.max(...salary);
  let min = Math.min(...salary);
  let filter = salary.filter((item) => item !== max && item !== min);
  let sum = filter.reduce((acc, cur) => acc + cur, 0);
  return sum / filter.length;
};
console.log(`output->average()`, average([4000, 3000, 1000, 2000]));
