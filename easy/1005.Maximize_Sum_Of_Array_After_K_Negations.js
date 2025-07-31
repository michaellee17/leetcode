/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 2025/7/30 非常難 掌握度60% 方法二叫好理解
 * 2025/7/31 有比較理解了 掌握度80%
 * 方法1的轉負數迴圈太複雜了 有點難理解了
 * 改成方法2的雖然比較長但是很好理解
 * 這題屬於推理比較多的題目 要多看
 */
// var largestSumAfterKNegations = function (nums, k) {
//   nums.sort((a, b) => a - b);

//   // 盡可能反轉負數
//   for (let i = 0; i < nums.length && k > 0 && nums[i] < 0; i++, k--) {
//     nums[i] = -nums[i];
//   }

//   const sum = nums.reduce((s, x) => s + x, 0);
//   const hasZero = nums.includes(0);
//   if (k === 0 || hasZero || k % 2 === 0) return sum;

//   const minVal = Math.min(...nums);
//   return sum - 2 * minVal;
// };

// function largestSumAfterKNegations(nums, k) {
//   //排序由小到大 sort會改變原陣列所以不用另用變數存
//   nums.sort((a, b) => a - b);

//   //在k還有剩的情況下盡可能把負數轉成正數 因為有排序了 所以-最多的先 效果最大化
//   for (let i = 0; i < nums.length && k > 0; i++) {
//     if (nums[i] < 0) {
//       nums[i] = -nums[i];
//       k--;
//     }
//   }
//   //如果剩2的倍數可以自己翻轉兩次就不影響結果
//   //此是負數已翻轉 所以只能找正數最小的去操作 影響最小
//   if (k % 2 === 1) {
//     const min = Math.min(...nums);

//     const index = nums.indexOf(min);
//     nums[index] = -nums[index];
//   }

//   //反回相加 用reduce最簡潔
//   return nums.reduce((a, b) => a + b, 0);
// }

var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < k.length && k > 0; i++) {
    if (nums[i] < 0) {
      nums[i] = -nums[i];
      k--;
    }
  }

  if (k % 2 === 1) {
    const min = Math.min(...nums);

    const index = nums.indexOf(min);
    nums[index] = -nums[index];
  }

  return nums.reduce((acc, cur) => acc + cur, 0);
};

console.log(
  `output->largestSumAfterKNegations`,
  largestSumAfterKNegations([3, -1, 0, 2], 3)
);
