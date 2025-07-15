/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 * 2025/6/4 一開始看沒頭緒 主要是條件判斷，跟方法比較無關 掌握度70%
 * 2025/7/11 還是蠻難的 掌握度70%
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    // 檢查當前位置是否可以種花
    if (
      //當前位置是否為空
      flowerbed[i] === 0 &&
      //左邊界 或者前一位為空
      (i === 0 || flowerbed[i - 1] === 0) &&
      //右邊間 或者後一位為空
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      // 種花並更新花壇
      flowerbed[i] = 1;
      n--;
      // 如果已種夠 n 朵花，提前結束
      if (n === 0) return true;
    }
  }
  // 如果遍歷完後仍無法種夠 n 朵花
  return n <= 0;
};

console.log(`output->`, canPlaceFlowers([1, 0, 0, 0, 1], 1));
