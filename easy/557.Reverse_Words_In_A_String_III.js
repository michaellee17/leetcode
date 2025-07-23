/**
 * @param {string} s
 * @return {string}
 * 2025/07/23 第一次看 掌握度90% 複習js array map用法
 */
var reverseWords = function (s) {
  let arr = s.split(" ");
  let newArr = arr.map((item) => item.split("").reverse().join(""));
  return newArr.join(" ");
};
