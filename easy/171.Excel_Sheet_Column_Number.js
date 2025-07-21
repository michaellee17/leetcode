/**
 * @param {string} columnTitle
 * @return {number}
 * Tag: Math
 * 2024/11/15 第一次看 掌握度90%
 * 2024/12/18 第二次看 掌握度90%
 * 同168 但是是反過來的
 * String 的 charCodeAt() 方法返回一个整数，表示给定索引处的 UTF-16 码元，其值介于 0 和 65535 之间。
 * "A".charCodeAt(0) => 65
 * "B".charCodeAt(0) => 66
 * "Z".charCodeAt(0) => 90
 */
var titleToNumber = function (columnTitle) {
  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    result = result * 26 + columnTitle.charCodeAt(i) - 64;
    console.log(`result`, result);
  }
  return result;
};

console.log(`output->titleToNumber`, titleToNumber("ZY"));
