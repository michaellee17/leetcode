/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * 2024/12/27 第一次看 掌握度70%
 * 數字加字串 = 字串
 */
var addStrings = function (num1, num2) {
  //進位
  let carry = 0;
  let result = "";
  let i = num1.length - 1;
  let j = num2.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    let digit1 = i >= 0 ? parseInt(num1[i]) : 0;
    let digit2 = j >= 0 ? parseInt(num2[j]) : 0;
    let sum = digit1 + digit2 + carry;
    console.log(`output->sum`, sum);
    //除以10取整數 代表sum大於10 carray才會有值
    carry = Math.floor(sum / 10);
    //取餘數 代表sum小於10
    result = (sum % 10) + result;
    //往前一個數字
    i--;
    j--;
  }

  return result;
};

// 測試用例
console.log(addStrings("123", "456")); // 輸出: "579"
