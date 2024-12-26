/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 2024/12/26 雙指針法 掌握度90% 用長度來算有沒有全部都找到
 */
var isSubsequence = function (s, t) {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }

  return i === s.length;
};
console.log(isSubsequence("acb", "ahbgdc"));
