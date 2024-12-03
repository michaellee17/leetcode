/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 2024/11/15 第一次 掌握度100%
 * string.indexOf() 會回傳第一個找到的字串位置
 * indexOf(searchString)
 * indexOf(searchString, position)
 * array.indexOf() 會回傳第一個找到的元素位置
 */
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

console.log(`output->strStr(sadbutsad,sad)`, strStr("sadbutsad", "sad"));
console.log(`output->strStr(leetcode,leeto)`, strStr("leetcode", "leeto"));