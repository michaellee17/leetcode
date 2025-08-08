/**
 * @param {number[]} arr
 * @return {number[]}
 * 2025/8/8 從右掃描法 偏難 掌握度60%
 */
// var replaceElements = function (arr) {
//   //Time Limit Exceeded
//   let result = [];
//   for (let i = 1; i < arr.length; i++) {
//     let remain = arr.slice(i);
//     let max = Math.max(...remain);
//     result.push(max);
//   }
//   result.push(-1);
//   return result;
// };
var replaceElements = function (arr) {
  let result = new Array(arr.length);
  result[arr.length - 1] = -1;
  let maxFromRight = arr[arr.length - 1];

  for (let i = arr.length - 2; i >= 0; i--) {
    result[i] = maxFromRight;
    maxFromRight = Math.max(maxFromRight, arr[i]);
  }

  return result;
};
console.log(`output->replaceElements`, replaceElements([17, 18, 5, 4, 6, 1]));
