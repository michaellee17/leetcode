/**
 * @param {number} rowIndex
 * @return {number[]}
 * Tag: Array
 * 2024/11/14 第一次看 掌握度90% 同118
 * 2024/12/17 第二次看 掌握度100% 同118
 * 2025/1/3 第三次看 掌握度100% 同118 先算出整個陣列再取出指定的row
 *
 */
var getRow = function (rowIndex) {
  var result = [];
  for (var i = 0; i < rowIndex + 1; i++) {
    console.log(`output->i`, i);
    var row = [];
    //頭尾都是1
    row[0] = 1;
    row[i] = 1;
    //處理每個子陣列
    for (var j = 1; j < i; j++) {
      //上層的左右相加
      row[j] = result[i - 1][j - 1] + result[i - 1][j];
    }
    result.push(row);
  }
  return result[rowIndex];
};

console.log(`output->`, getRow(1));
