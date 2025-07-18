/**
 * @param {number[]} bills
 * @return {boolean}
 * 2025/6/24 原本用stack做 但發現不用紀錄順序 所以想太複雜了 掌握度80%
 * 2025/7/17 因為不用紀錄順序 只要記錄數量 用變數存就可以 注意20的情況比較複雜 掌握度80%
 * tip:不紀錄順序的話不需要用陣列
 *
 */
var lemonadeChange = function (bills) {
  let five = 0; // 記錄 5 元的數量
  let ten = 0; // 記錄 10 元的數量

  for (let bill of bills) {
    if (bill === 5) {
      five++; // 收到 5 元，直接增加
    } else if (bill === 10) {
      if (five === 0) {
        return false; // 沒有 5 元找零，返回 false
      }
      five--; // 找零 5 元
      ten++; // 收到 10 元，增加
    } else if (bill === 20) {
      if (ten > 0 && five > 0) {
        ten--; // 優先使用 10 元找零
        five--; // 再使用 5 元找零
      } else if (five >= 3) {
        five -= 3; // 如果沒有 10 元，使用三張 5 元找零
      } else {
        return false; // 無法找零，返回 false
      }
    }
  }

  return true; // 所有交易成功
};

console.log(lemonadeChange([5, 5, 5, 10, 20])); // 輸出 true
console.log(lemonadeChange([5, 5, 10, 10, 20])); // 輸出 false
console.log(
  `output->lemonadeChange([5,5,5,10,20])`,
  lemonadeChange([5, 5, 10, 10, 20])
);
