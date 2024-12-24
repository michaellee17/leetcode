/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 2024/12/24 第一次看 掌握度 90% map應用 若不符合條件就返回false 符合就繼續迴圈 最後返回true
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  let mapS = new Map();
  let mapT = new Map();

  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    if (mapS.has(charS) && mapS.get(charS) !== charT) {
      return false;
    }
    if (mapT.has(charT) && mapT.get(charT) !== charS) {
      return false;
    }

    mapS.set(charS, charT);
    mapT.set(charT, charS);
  }

  console.log(`output->mapS`, mapS);

  return true;
};

// 測試用例
console.log(isIsomorphic("egg", "ad")); // 輸出: true
console.log(isIsomorphic("foo", "bar")); // 輸出: false
console.log(isIsomorphic("paper", "title")); // 輸出: true
console.log(isIsomorphic("ab", "aa")); // 輸出: false
