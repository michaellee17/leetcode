/**
 * @param {number[]} digits
 * @return {number[]}
 * Tag: Array
 * 2024/11/14 第一看 掌握度90趴
 * 2024/12/16 第二次看 掌握度100%
 * unshift 會在陣列的最前面加入一個元素
 * ex unshift(1) => [1,2,3] => [1,1,2,3]
 * ex unshift(1,2) => [1,2,3] => [1,2,1,2,3]
 * 注意return
 * 由後往前檢查 因為+1 若是9的話就變成0 但若非9的話就+1直接return結束
 * 2024/12/31 第三次 看掌握度100%
 *
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    //若非9的話就+1 直接返回
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    //若是9的話就變成0
    digits[i] = 0;
  }

  //如果一路都沒return(都是9的情況 例如[9,9,9])的話就在最前面加入1
  digits.unshift(1);
  return digits;
};
console.log(`output->plusOne([1,0,9])`, plusOne([2, 1, 0, 9]));
