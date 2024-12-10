/**
 * @param {string} s
 * @return {number}
 * Tag: String HashTable
 * 2024/11/14 第一次看 熟練度90%
 * 思路:自製對應表 前後比較大小 從後面開始比
 */
const ROMANTOINTMAP = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let total = 0;
  let prevVal = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const currentVal = ROMANTOINTMAP[s[i]];
    if (currentVal < prevVal) {
      total -= currentVal;
    } else {
      total += currentVal;
    }

    prevVal = currentVal;
  }
  return total;
};

console.log(romanToInt("III")); //3
