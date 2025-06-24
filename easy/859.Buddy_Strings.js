/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 * 2025/6/24 蠻複雜的 掌握度50%
 */
var buddyStrings = function (s, goal) {
  // 如果長度不相等，直接返回 false
  if (s.length !== goal.length) return false;

  // 如果 s 和 goal 完全相等，檢查是否有重複字符
  if (s === goal) {
    let charSet = new Set(s);
    return charSet.size < s.length; // 有重複字符時，Set 的大小會小於字串長度
  }

  // 找出不同的字符位置
  let diff = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diff.push(i);
    }
  }

  // 如果不同字符的數量不是 2，返回 false
  if (diff.length !== 2) return false;

  // 檢查交換後是否相等
  let [i, j] = diff;
  return s[i] === goal[j] && s[j] === goal[i];
};
console.log(`output->buddyStrings('ab','ba')`, buddyStrings("ab", "ba"));
