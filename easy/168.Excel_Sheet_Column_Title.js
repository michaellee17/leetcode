/**
 * @param {number} columnNumber
 * @return {string}
 * Tag: Math
 * 2024/11/15 第一次看 掌握度70%
 * 2024/12/16 第二次看 掌握度90%
 * String.fromCharCode(65) => A
 * String.fromCharCode(66) => B
 * String.fromCharCode(90) => Z
 * while使用
 * 2025/7/1 第三次看熟練度90%
 */
var convertToTitle = function (columnNumber) {
  let result = "";
  while (columnNumber > 0) {
    columnNumber--; // 調整為 0 索引
    console.log(`output->columnNumber`, columnNumber);
    let remainder = columnNumber % 26;
    console.log(`output->remainder`, remainder);
    //印出A-Z
    result = String.fromCharCode(65 + remainder) + result;
    console.log(`output->result`, result);
    //當columnNumber小於26時 會中斷迴圈
    columnNumber = Math.floor(columnNumber / 26);
  }
  return result;
};

var convertToTitle2 = function (columnNumber) {
  let result = "";
  if (columnNumber <= 26) {
    return String.fromCharCode(64 + columnNumber);
  } else {
    while (columnNumber > 0) {
      columnNumber--;
      let remainder = columnNumber % 26;
      result = String.fromCharCode(65 + remainder) + result;
      columnNumber = Math.floor(columnNumber / 26);
    }
    return result;
  }
};

var convertToTitle3 = function (columnNumber) {
  let result = "";

  for (; columnNumber > 0; columnNumber = Math.floor(columnNumber / 26)) {
    columnNumber--;
    let remainder = columnNumber % 26;
    result = String.fromCharCode(65 + remainder) + result;
  }

  return result;
};

console.log(convertToTitle(28));
