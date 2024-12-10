/**
 * @param {number} columnNumber
 * @return {string}
 * Tag: Math
 * 2024/11/15 第一次看 掌握度70%
 * String.fromCharCode(65) => A
 * String.fromCharCode(66) => B
 * String.fromCharCode(90) => Z
 * while使用
 */
var convertToTitle = function (columnNumber) {
  let result = "";
  while (columnNumber > 0) {
    columnNumber--; // 調整為 0 索引
    console.log(`output->columnNumber`, columnNumber);
    let remainder = columnNumber % 26;
    //印出A-Z
    result = String.fromCharCode(65 + remainder) + result;
    //當columnNumber小於26時 會中斷迴圈
    columnNumber = Math.floor(columnNumber / 26);
  }
  return result;
};

console.log(convertToTitle(30)); //A
