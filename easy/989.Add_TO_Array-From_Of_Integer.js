/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 * 2025/6/27 不能用次方的方法去算 因為js長度超過15會精度損失 掌握度60%
 */
var addToArrayForm = function (num, k) {
  let res = [];
  let i = num.length - 1;

  while (i >= 0 || k > 0) {
    if (i >= 0) {
      k += num[i]; // 從後面加上 num 的每位
      i--;
    }
    res.push(k % 10); // 取個位數放進結果
    k = Math.floor(k / 10); // 進位
  }

  res.reverse();
  return res;
};
console.log(
  `output->`,
  addToArrayForm(
    [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
    516
  )
);
