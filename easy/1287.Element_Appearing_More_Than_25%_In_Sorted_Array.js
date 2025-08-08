/**
 * @param {number[]} arr
 * @return {number}
 * 2025/8/8 注意只有一個數字的邊界條件 寫得出來 掌握度90%
 */
var findSpecialInteger = function (arr) {
  if (arr.length === 1) return arr[0];
  let target = arr.length / 4;
  let count = 1;
  let num = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      num = arr[i];
      count++;
    } else {
      count = 1;
    }
    if (count > target) return num;
  }
};
console.log(
  `output->findSpecialInteger`,
  findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10])
);
