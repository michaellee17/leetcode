/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 * 2025/9/1 篇複雜掌握度80%
 * Array(n).fill(0) 代表創建一個長度為n 每個元素都是0的陣列
 * 循環陣列要有用餘數不是用減的
 */
var decrypt = function (code, k) {
  let length = code.length;
  let result = [];
  if (k === 0) {
    return Array(length).fill(0);
  } else if (k > 0) {
    for (let i = 0; i < length; i++) {
      let value = 0;
      for (let j = i + 1; j <= i + k; j++) {
        let index = j % length;
        value += code[index];
      }
      result.push(value);
    }
  } else if (k < 0) {
    for (let i = 0; i < length; i++) {
      let value = 0;
      for (let j = i - 1; j >= i + k; j--) {
        let index = (j + length) % length;
        value += code[index];
      }
      result.push(value);
    }
  }
  return result;
};
console.log(`output->decrypt`, decrypt([5, 7, 1, 4], 3));
