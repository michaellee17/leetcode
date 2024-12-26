/**
 * @param {string} s
 * @return {number}
 * 2024/12/26 第一次看 掌握度90% Map操作
 */
var firstUniqChar = function (s) {
  let array = s.split("");
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    // if (array.filter((item) => item === array[i]).length === 1) return i;
    if (map.has(array[i])) {
      map.set(array[i], map.get(array[i]) + 1);
    } else {
      map.set(array[i], 1);
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (map.get(array[i]) === 1) return i;
  }
  return -1;
};

console.log(`output-firstUniqChar`, firstUniqChar("leetcode")); // 0
