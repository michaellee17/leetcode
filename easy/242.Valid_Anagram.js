/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 2024/12/24 第一次看 掌握度 80% 用map
 * 2025/7/2 第二次看 掌握度90%
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let map = new Map();
  for (let item of s) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }
  for (let item of t) {
    if (map.has(item) && map.get(item) >= 1) {
      map.set(item, map.get(item) - 1);
    } else {
      return false;
    }
  }
  return true;
};

console.log(`output->`, isAnagram("rat", "car"));
