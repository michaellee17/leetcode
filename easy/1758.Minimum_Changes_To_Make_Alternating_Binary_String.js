/**
 * @param {string} s
 * @return {number}
 * 2025/9/23 偏難想不太到只有兩種排列而已 掌握度70%
 */
var minOperations = function (s) {
  let count1 = 0; // 模式: 010101...
  let count2 = 0; // 模式: 101010...

  for (let i = 0; i < s.length; i++) {
    // 模式1: 偶數位置應該是'0', 奇數位置應該是'1'
    if (i % 2 === 0 && s[i] !== "0") count1++;
    if (i % 2 === 1 && s[i] !== "1") count1++;

    // 模式2: 偶數位置應該是'1', 奇數位置應該是'0'
    if (i % 2 === 0 && s[i] !== "1") count2++;
    if (i % 2 === 1 && s[i] !== "0") count2++;
  }

  return Math.min(count1, count2);
};
console.log(`output->`, minOperations("0100"));
