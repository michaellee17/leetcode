/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 * 2025/7/30 第一次看 蠻複雜的掌握度40%
 */
// var duplicateZeros = function (arr) {
//   const n = arr.length;
//   let zeros = 0;
//   for (let x of arr) {
//     if (x === 0) zeros++;
//   }
//   let i = n - 1; //指向原陣列的最後一個索引
//   let j = n - 1 + zeros; //指向新陣列的最後一個索引
//   while (i < j) {
//     if (j < n) arr[j] = arr[i];
//     console.log(`output->arr`, arr);
//     if (arr[i] === 0) {
//       j--;
//       if (j < n) arr[j] = 0;
//     }
//     i--;
//     j--;
//   }
// };
var duplicateZeros = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      for (let j = arr.length - 1; j > i; j--) {
        console.log(`output->j`, j);
        arr[j] = arr[j - 1];
      }
    }
  }
};
console.log(`output->`, duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
