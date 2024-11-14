/**
 * @param {number[]} prices
 * @return {number}
 * 2024/11/14 第一次看 掌握度80%  單迴圈比較
 * /math.max 用法 => 取最大值
 * 思路整理:
 * 因為要先買入後賣出，所以小的價格在前面，故發生最大利益時，符合條件當前價格大於最小價格
 */

var maxProfit = function (prices) {
  let maxProfit = 0;
  //先假設最小價格為第一個元素
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      //若最小價格大於當前價格則更新最小價格
      minPrice = prices[i];
    } else {
      //若最小價格小於當前價格則比較最大利潤
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
  }
  return maxProfit;
};

console.log(`output->maxProfit([7,1,5,3,6,4])`, maxProfit([7, 1, 5, 3, 6, 4]));
