/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 * 2025/6/23 a.chartCodeAt(0) = 97 b..chartCodeAt(0) = 98 可以取的 widths陣列的index
 * 掌握度80%
 */
var numberOfLines = function (widths, s) {
  let totalLines = 1; // 初始行數
  let currentWidth = 0; // 當前行的寬度

  for (let char of s) {
    let charWidth = widths[char.charCodeAt(0) - 97]; // 獲取字母寬度
    if (currentWidth + charWidth > 100) {
      // 如果超過 100 像素，換行
      totalLines++;
      currentWidth = charWidth; // 新行的第一個字母寬度
    } else {
      currentWidth += charWidth; // 累加寬度
    }
  }

  return [totalLines, currentWidth]; // 返回總行數和最後一行寬度
};
console.log(
  numberOfLines(
    [
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10, 10,
    ],
    "abcdefghijklmnopqrstuvwxyz"
  )
);
