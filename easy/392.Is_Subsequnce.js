/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 2024/12/26 雙指針法 掌握度90% 用長度來算有沒有全部都找到
 * 2025/0722 第二次看 兩種解法都偏難，需要多看幾次 第一種解法是雙指針法，第二種解法要注意用到indexOf的第二個參數
 */
// var isSubsequence = function (s, t) {
//   let i = 0;
//   let j = 0;

//   while (i < s.length && j < t.length) {
//     if (s[i] === t[j]) {
//       i++;
//     }
//     j++;
//   }
//   return i === s.length;
// };

var isSubsequence = function (s, t) {
  let prev = -1;
  for (let item of s) {
    console.log("prev", prev);
    let index = t.indexOf(item, prev + 1);
    console.log("index", index);
    if (index === -1) return false;
    prev = index;
  }
  return true;
};
console.log(isSubsequence("abc", "ahbgdc"));
