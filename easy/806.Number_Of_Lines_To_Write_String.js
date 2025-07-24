/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 * 2025/6/23 a.chartCodeAt(0) = 97 b..chartCodeAt(0) = 98 可以取的 widths陣列的index
 * 掌握度80%
 * 2025/7/24 
 *  for (let char of s) {
    let charWidth = widths[char.charCodeAt(0) - 97];
    for (let i = 0; i < s.length; i++) {
    let charWidth = widths[s.charCodeAt(i) - 97];
    這兩種寫法都可以 
    先設立行數為1寬度為0 再進行相應操作 還是charCodeAt的應用加上一點邏輯判斷 掌握度90%
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

  for (let i = 0; i < s.length; i++) {
    let charWidth = widths[s.charCodeAt(i) - 97];
    if (currentWidth + charWidth > 100) {
      totalLines++;
      currentWidth = charWidth;
    } else {
      currentWidth += charWidth;
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
