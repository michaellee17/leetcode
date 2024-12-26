/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * 2024/12/26 第一次看 掌握度90% Map操作
 */
var canConstruct = function (ransomNote, magazine) {
  let map = new Map();
  for (let item of magazine) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }
  for (let item of ransomNote) {
    if (map.has(item) && map.get(item) > 0) {
      map.set(item, map.get(item) - 1);
    } else {
      return false;
    }
  }
  return true;
};
