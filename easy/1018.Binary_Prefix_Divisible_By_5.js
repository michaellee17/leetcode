/**
 * @param {number[]} nums
 * @return {boolean[]}
 * 2025/7/30 算比較間單的 掌握度80%
 */
var prefixesDivBy5 = function (nums) {
  const res = [];
  let cur = 0;
  for (const bit of nums) {
    console.log(`output->bit`, bit);
    // 相當於 cur ＝ 二進位字串轉十進位後 %5
    cur = (cur * 2 + bit) % 5;
    console.log(`output->cur`, cur);
    res.push(cur === 0);
  }
  return res;
};
console.log(`output->prefixesDivBy5`, prefixesDivBy5([0, 1, 1]));
