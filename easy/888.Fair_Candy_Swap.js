/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 * 2025/6/25 掌握度60%
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
