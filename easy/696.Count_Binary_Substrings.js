/**
 * @param {string} s
 * @return {number}
 * 2025/6/10 第一次看 偏複雜 掌握度50%
 * 2025/7/23 第二次看 還是偏難 第二個解法算是看得懂 掌握度80%
 */
// var countBinarySubstrings = function (s) {
//   let prev = 0; // 前一段的長度
//   let curr = 1; // 當前段的長度
//   let count = 0; // 結果計數

//   for (let i = 1; i < s.length; i++) {
//     if (s[i] === s[i - 1]) {
//       // 如果當前字符與前一個字符相同，增加當前段的長度
//       curr++;
//     } else {
//       // 如果不同，更新結果並重置段長
//       count += Math.min(prev, curr); // 計算有效子字串數量
//       prev = curr; // 更新前一段的長度
//       curr = 1; // 重置當前段的長度
//     }
//   }

//   // 最後一次計算
//   count += Math.min(prev, curr);

//   return count;
// };
var countBinarySubstrings = function (s) {
  const groups = [];
  let count = 1;
  for (let i = 1; i < s.length; i++) {
    //取得相同的字元 000 11 這樣
    if (s[i] === s[i - 1]) count++;
    else {
      groups.push(count);
      count = 1;
    }
  }
  //因為最後一個不會發現不同所以這邊補推
  groups.push(count);
  console.log(groups);

  let result = 0;
  for (let i = 1; i < groups.length; i++) {
    //從第二個開始比 假設4個group 就比 21 32 43 三組
    result += Math.min(groups[i - 1], groups[i]); //兩組的個數要相同 所以要用Math.min
  }
  return result;
};
console.log(`output->`, countBinarySubstrings("00110011"));
