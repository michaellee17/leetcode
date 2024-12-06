/**
 * @param {number[]} digits
 * @return {number[]}
 * 2024/12/06 第一次做 由後往前比 如果是9就變0 如果不是9就+1 early return
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    //從最後一位數字開始比較 如果是9就變0 如果不是9就+1
    if (digits[i] < 9) {
      console.log(`output->digits[i]`, digits[i]);
      digits[i]++;
      return digits;
    }
    //如果是9就變0
    digits[i] = 0;
  }
  //如果是999這種情況  會在開頭塞入1
  digits.unshift(1);
  return digits;
};
console.log(plusOne([1, 2, 3])); // [1,2,4]
