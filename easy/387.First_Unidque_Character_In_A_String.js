/**
 * @param {string} s
 * @return {number}
 * 2024/12/26 第一次看 掌握度90% Map操作
 * 2025/7/7 第二次看 掌握度90% 用obj 來操作也行
 * 2025/7/25 第三次看 用s.indexOf(s[i]) === s.lastIndexOf(s[i] 來判斷蠻快的
 * 或者是先用map紀錄出現次數，再從頭開始遍歷當出現次數是1就直接return 掌握度90%
 */
var firstUniqChar = function (s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) return i;
  }
  return -1;
};

var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};

console.log(`output-firstUniqChar`, firstUniqChar("leetcode")); // 0
