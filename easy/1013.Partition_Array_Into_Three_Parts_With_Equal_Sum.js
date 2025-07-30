/**
 * @param {number[]} arr
 * @return {boolean}
 * 2025/7/30 還算可以理解絲路分析 掌握度70%
 * 1.三段相等 所以每一段等於total/3 若%3的餘數不是0 直接返回false
 * 2.逐段比較
 * 3.邊界條件 因為[0,0,0,0] 也是可以分成三段 [0],[0],[0,0]
 */
var canThreePartsEqualSum = function (arr) {
  const total = arr.reduce((s, x) => s + x, 0);
  if (total % 3 !== 0) return false;

  const target = total / 3;
  let count = 0,
    partSum = 0;

  for (const x of arr) {
    partSum += x;
    if (partSum === target) {
      count++;
      partSum = 0;
    }
  }

  return count >= 3;
};
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]));
