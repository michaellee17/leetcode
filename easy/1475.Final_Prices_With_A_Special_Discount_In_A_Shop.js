/**
 * @param {number[]} prices
 * @return {number[]}
 * 2025/8/13 要使用break來中斷迴圈 都比完沒比到再推入 掌握度90%
 *
 */
var finalPrices = function (prices) {
  let result = [];
  prices.forEach((item, index) => {
    let hasDiscount = false;
    for (let i = index + 1; i < prices.length; i++) {
      if (item >= prices[i]) {
        let diff = item - prices[i];
        result.push(diff);
        hasDiscount = true;
        break;
      }
    }
    if (!hasDiscount) result.push(item);
  });
  return result;
};
console.log(`output->finalPrices`, finalPrices([8, 4, 6, 2, 3]));
