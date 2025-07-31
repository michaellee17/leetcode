/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 * 2025/7/31 掌握度90% 拆解後推入 注意因為arr2中的元素都是唯一 所以判斷沒出現時用includes即可
 */
var relativeSortArray = function (arr1, arr2) {
  let obj = {};
  arr1.forEach((item) => {
    obj[item] = (obj[item] || 0) + 1;
  });
  let result = [];
  let exclude = [];
  //找到有出現的 並重複次數推入
  arr2.forEach((item) => {
    if (obj[item]) {
      let count = obj[item];
      while (count > 0) {
        result.push(item);
        count--;
      }
    }
  });
  //找到沒出現的 並重複次數推入
  arr1.forEach((item) => {
    if (!arr2.includes(item)) {
      exclude.push(item);
    }
  });
  return [...result, ...exclude.sort((a, b) => a - b)];
};
console.log(
  `output->`,
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);
