/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 * 2024/12/25 第一次看 掌握度90% Map
 * 2025/7/2 第二次看 掌握度90%
 * 2025/7/21 第三次看 掌握度90% 要雙向映射
 * 2025/7/25 第四次看 掌握度90 先比較長度 雙向映射 所以需要兩個obj 發現陷阱
 * 因為s裡面有測試是constructor 他是obj.prototype上面的屬性所以一定會回傳true
 * 這邊要用obj1.hasOwnProperty(p) 來操作 不然就是要用map來處理才能避開這個問題
 */
var wordPattern = function (pattern, s) {
  let words = s.split(" ");
  let map = new Map();

  if (pattern.length !== words.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i])) {
      if (map.get(pattern[i]) !== words[i]) return false;
    } else {
      console.log(`output->Array.from(map.values())`, Array.from(map.values()));
      console.log(`output->words[i]`, words[i]);
      if (Array.from(map.values()).includes(words[i])) return false;
      map.set(pattern[i], words[i]);
    }
  }
  return true;
};
var wordPattern = function (pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < pattern.length; i++) {
    let p = pattern[i];
    let w = words[i];

    if (
      (obj1.hasOwnProperty(p) && obj1[p] !== w) ||
      (obj2.hasOwnProperty(w) && obj2[w] !== p)
    ) {
      return false;
    }

    obj1[p] = w;
    obj2[w] = p;
  }

  return true;
};

console.log(
  `output->wordPattern`,
  wordPattern("abba", "dog constructor constructor dog")
);
