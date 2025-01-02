/**
 * @param {number} numRows
 * @return {number[][]}
 * Tag: Array
 * 2024/11/14 第一次看 掌握度90% 學到二維陣列的使用 雙回圈的使用
 * 2024/12/17 第二次看 掌握度100%
 * 2025/1/2 第三次看 掌握度100% 設定i為0方便計算
 */
var generate = function (numRows) {
  var result = [];
  //直向columns跑回圈
  for (var i = 0; i < numRows; i++) {
    //橫向定為空陣列
    var row = [];
    //第一個元素為1
    row[0] = 1;
    //最後一個元素為1
    row[i] = 1;
    //第二個元素到倒數第二個元素為上一列的前一個元素加上上一列的
    for (var j = 1; j < i; j++) {
      row[j] = result[i - 1][j - 1] + result[i - 1][j];
    }
    result.push(row);
  }
  return result;
};

console.log(`output->generate`, generate(1));
