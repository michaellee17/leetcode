/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 * 2025/9/25 用輔助函數 注意型別不難 掌握度90%
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
  return getNum(firstWord) + getNum(secondWord) === getNum(targetWord);
};
const getNum = (str) => {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let arr = str.split("");
  let result = "";
  arr.forEach((item) => {
    result += letters.indexOf(item);
  });
  return parseInt(result);
};
console.log(`output->`, isSumEqual("acb", "cba", "cdb"));
