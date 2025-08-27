/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 * 2025/8/27 字符排序  掌握度80%
 * JavaScript 的 sort() 方法預設會將所有元素轉換為字符串，然後按照字典序（lexicographic
  order）排序。

  // 對於字符串陣列
  ['c', 'b', 'a'].sort() // ['a', 'b', 'c'] - 字典序排序

  // 對於數字陣列也會轉成字符串比較
  [10, 2, 1].sort() // [1, 10, 2] - 因為 '1' < '10' < '2' (字符串比較)

  // 所以數字排序需要自定義比較函數
  [10, 2, 1].sort((a, b) => a - b) // [1, 2, 10] - 數值排序

  字符的字典序比較是基於 Unicode 編碼：
  - 'a' (97) < 'b' (98) < 'c' (99)
  - 'A' (65) < 'a' (97)

  所以 ['c', 'b', 'd'].sort() 自動變成字符串字典序排序，得到 ['b', 'c', 'd']。

  而 (a, b) => b - a 對字符無效，因為字符相減會得到 NaN。
 */
var slowestKey = function (releaseTimes, keysPressed) {
  let map = new Map();
  for (let i = 0; i < releaseTimes.length; i++) {
    let key = keysPressed[i];
    let value;
    if (i == 0) {
      value = releaseTimes[0];
    } else {
      value = releaseTimes[i] - releaseTimes[i - 1];
    }
    if (!map.has(key) || value > map.get(key)) {
      map.set(key, value);
    }
  }
  let max = 0;
  let result = [];
  for (let [key, value] of map) {
    if (value > max) {
      max = value;
    }
  }
  for (let [key, value] of map) {
    if (value === max) {
      result.push(key);
    }
  }
  if (result.length === 1) {
    return result[0];
  } else {
    return result.sort()[result.length - 1];
  }
};
console.log(`output->slowestKey`, slowestKey([9, 29, 49, 50], "cbcd"));
