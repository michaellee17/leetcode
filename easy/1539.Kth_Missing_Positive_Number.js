/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 * 2025/8/14 要考慮到超過一千找不到的情況 掌握度70%
 */
var findKthPositive = function (arr, k) {
  for (let i = 1; i < 1001; i++) {
    if (arr.indexOf(i) === -1) {
      k--;
      if (k === 0) return i;
    }
  }
  // 如果1000內找不到，繼續往後找
  return 1000 + k;
};
console.log(`output->findKthPositive`, findKthPositive([2, 3, 4, 7, 11], 5));
