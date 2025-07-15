/**
 * @param {number[]} bits
 * @return {boolean}
 * 2025/06/19 第一次看 掌握度 80% 用while迴圈
 * 2025/7/14 第二次 條件判斷 一次跳兩位 或者一位 掌握度90%
 */
var isOneBitCharacter = function (bits) {
  let i = 0;
  while (i < bits.length - 1) {
    if (bits[i] === 1) {
      // 如果是兩位字符，跳過兩位
      i += 2;
    } else {
      // 如果是一位字符，跳過一位
      i += 1;
    }
  }
  console.log(`output->i`, i);
  // 如果指針停在最後一位，則是「一位字符」
  return i === bits.length - 1;
};

// console.log(isOneBitCharacter([1, 0, 0])); // 輸出 true
console.log(isOneBitCharacter([1, 1, 1, 0])); // 輸出 false
