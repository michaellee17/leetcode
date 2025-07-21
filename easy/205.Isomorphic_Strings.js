/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 2024/12/24 第一次看 掌握度 90% map應用 若不符合條件就返回false 符合就繼續迴圈 最後返回true
 * 2025/7/2 第二次看 掌握度90% 用Object也可以
 * 2025/7/21 第三次看 掌握度90% 用Object也可以
 * 注意條件判斷 有遇到key值不相同就返回false 沒有遇到就寫入
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  let mapS = new Map();
  let mapT = new Map();
  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];
    console.log(`output->charS`, charS);
    console.log(`output->charT`, charT);
    console.log(`output->mapS`, mapS);
    console.log(`output->mapT`, mapT);

    if (mapS.has(charS) && mapS.get(charS) !== charT) {
      return false;
    }
    if (mapT.has(charT) && mapT.get(charT) !== charS) {
      return false;
    }

    mapS.set(charS, charT);
    mapT.set(charT, charS);
  }

  return true;
};
var isIsomorphic2 = function (s, t) {
  let obj = {};
  let length = s.length;
  for (let i = 0; i < length; i++) {
    obj[s[i]] = t[i];
  }
  console.log(`output->obj`, obj);
  let str = "";
  for (let i = 0; i < length; i++) {
    str += obj[s[i]];
  }
  console.log(`output->str`, str);
  return str === t;
};

// 測試用例
console.log(isIsomorphic2("badc", "baba")); // 輸出: true
// console.log(isIsomorphic("foo", "bar")); // 輸出: false
// console.log(isIsomorphic("paper", "title")); // 輸出: true
// console.log(isIsomorphic("ab", "aa")); // 輸出: false
