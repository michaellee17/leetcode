/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 * 2025/6/25 掌握度60%
 * 2025/7/17 完全忘記怎麼做 這邊用set可以去重複且降低時間複雜度 因為我們只需要知道差值(意即Alice比Bob多幾個糖果) 掌握度60%
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
  const sumAlice = aliceSizes.reduce((a, b) => a + b, 0);
  const sumBob = bobSizes.reduce((a, b) => a + b, 0);
  const delta = (sumAlice - sumBob) / 2;

  const bobSet = new Set(bobSizes);

  for (let candy of aliceSizes) {
    const target = candy - delta;
    if (bobSet.has(target)) {
      return [candy, target];
    }
  }
};
