/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 * 2024/12/26 第一次看 掌握度90% Map操作
 */
var findTheDifference = function (s, t) {
  let map = new Map();

  // 計數字串 t 中的每個字元
  for (let item of t) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }

  // 減去字串 s 中的每個字元的計數
  for (let item of s) {
    if (map.has(item)) {
      map.set(item, map.get(item) - 1);
    }
  }
  console.log(`output->map`, map);
  // 找到計數不為 0 的字元
  for (let [key, value] of map) {
    if (value > 0) {
      return key;
    }
  }
};

console.log(`output-findTheDifference`, findTheDifference("abcd", "abcde")); // e
