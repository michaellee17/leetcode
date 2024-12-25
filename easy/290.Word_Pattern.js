/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 * 2024/12/25 第一次看 掌握度90% Map
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

console.log(`output->wordPattern`, wordPattern("abba", "dog cat cat fish"));
