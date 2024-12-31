/**
 * @param {string} s
 * @return {number}
 * Tag: String
 * 2024/11/15 第一次看 掌握度100%
 * 2024/12/16 第二次看 掌握度100% trim split操作
 * 2024/12/31 第三次看 掌握度100%
 */
var lengthOfLastWord = function (s) {
  //trim()會把字串前後的空白去掉
  //split()藉由空白切割字串
  let array = s.trim().split(" ");
  //指向最後一個字串
  let lastWorld = array[array.length - 1];
  return lastWorld.length;
};
