/**
 * @param {number[]} nums
 * @return {number}
 * 2025/8/13 暴力解可以處理 掌握度90%
 * 第二種解法比較聰明 可以理解但目前還比較想不到
 */
// var minStartValue = function (nums) {
//   const checkValid = (value) => {
//     for (let item of nums) {
//       value += item;
//       console.log(`output->value`, value);
//       if (value < 1) return false;
//     }
//     return true;
//   };
//   for (let i = 1; i < 10000; i++) {
//     if (checkValid(i)) {
//       return i;
//     }
//   }
// };
var minStartValue = function (nums) {
  let sum = nums[0]; // 當前累加和
  let minSum = nums[0]; // 記錄最小的累加和

  // 從第二個元素開始遍歷
  for (let i = 1; i < nums.length; i++) {
    sum += nums[i]; // 更新累加和
    if (sum < minSum) minSum = sum; // 更新最小累加和
  }

  // 如果最小累加和 < 0，需要足夠的起始值來抵消
  if (minSum < 0) {
    return Math.abs(minSum) + 1; // 絕對值 + 1
  }

  return 1; // 最小累加和 >= 0，起始值 1 就夠了
};
console.log(
  `output->minStartValue`,
  minStartValue([-22, -29, -21, 0, -4, -26, 10, -11, -14, -11])
);
