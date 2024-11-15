/**
 * @param {string} columnTitle
 * @return {number}
 * 2024/11/15 第一次看 掌握度90%
 * 同168 但是是反過來的
 */
var titleToNumber = function (columnTitle) {
  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    result = result * 26 + columnTitle.charCodeAt(i) - 64;
  }
  return result;
};
