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
 * 2025/7/21 第四次看熟練度90%
 * columnNumber--;
 * 由於 ASCII 編碼是從 0 開始，而 Excel 的欄位是從 1 開始，這裡將 columnNumber 減 1，以便正確對應到 ASCII 編碼。
 * 雙向用法:
 * 從ASCII編碼轉成數字:String.fromCharCode(65) => A (靜態方法)
 * 從數字轉成ASCII編碼:string.charCodeAt(0) => 65 (在0號位置為A的情況) (實例方法)
 * 要記一下大寫A的ASCII編碼是65 小寫a的ASCII編碼是97
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

console.log(convertToTitle(701));
