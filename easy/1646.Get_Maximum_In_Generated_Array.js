/**
 * @param {number} n
 * @return {number}
 * 2025/9/1 還可以理解 掌握度80%
 */
var getMaximumGenerated = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let arr = [];
  arr.push(0);
  arr.push(1);
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      arr.push(arr[i / 2]);
    } else {
      arr.push(arr[Math.floor(i / 2)] + arr[Math.floor(i / 2) + 1]);
    }
  }
  return Math.max(...arr);
};
console.log(`output->getMaximumGenerated`, getMaximumGenerated(7));
