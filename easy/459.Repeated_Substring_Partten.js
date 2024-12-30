/**
 * @param {string} s
 * @return {boolean}
 * 2024/12/30 第一次看 掌握度70%
 * string.slice(start, end) 方法可从已有的数组中返回选定的元素。
 * slice(1, -1) 从第一個元素开始，到倒數第二個元素结束
 * ex: '1234'.slice(1, -1) => '23'
 */
var repeatedSubstringPattern = function (s) {
  let t = (s + s).slice(1, -1);
  console.log(`output->t`, t);
  return t.includes(s);
};

console.log(
  `output->repeatedSubstringPattern`,
  repeatedSubstringPattern("abab")
);
