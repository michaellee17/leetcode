/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 * 2025/6/19 使用輔助函數判斷 掌握度70%
 */
var selfDividingNumbers = function (left, right) {
  let result = [];

  for (let i = left; i <= right; i++) {
    if (isSelfDividing(i)) {
      result.push(i);
    }
  }

  return result;
};

// 輔助函式：檢查是否為自除數
function isSelfDividing(num) {
  let temp = num;

  while (temp > 0) {
    let digit = temp % 10; // 取得最後一位數字
    console.log(`output->digit`, digit);
    if (digit === 0 || num % digit !== 0) {
      return false; // 包含 0 或不能整除
    }
    temp = Math.floor(temp / 10); // 去掉最後一位數字
  }

  return true; // 所有位數都能整除
}
console.log(`output->`, selfDividingNumbers(1, 22));
