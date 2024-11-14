//2024/11/14 第一看 掌握度90趴
//unshift 會在陣列的最前面加入一個元素
//ex unshift(1) => [1,2,3] => [1,1,2,3]
//ex unshift(1,2) => [1,2,3] => [1,2,1,2,3]
//注意return
//由後往前檢查 因為+1 若是9的話就變成0 但若非9的話就+1直接return結束
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    //若digits[i]不等於9的話就+1
    if (digits[i] !== 9) {
      digits[i]++;
      return digits;
    } else {
      //若digits[i]等於9的話就變成0
      digits[i] = 0;
    }
  }
  //處理[0,9]的情況
  digits.unshift(1);
  return digits;
};
console.log(`output->plusOne([1,0,9])`, plusOne([1, 0, 9]));
