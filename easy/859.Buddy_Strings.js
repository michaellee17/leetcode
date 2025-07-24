/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 * 2025/6/24 蠻複雜的 掌握度50%
 * 2025/7/24 還是很難 不過我們可以一步一步猜解 掌握度70%
 * 首先雖然題目沒說但是通過例子我們可以知道 只能換一次 且不能不換 就是一次
 *  1.如果長度不一致直接回傳 false 代表怎麼換也不可能等於goal
 *  2.在s === goal 時利用set的去重複特性比較長度 可以檢查出去有沒有重複字串 如果有代表換一次可以符合
 *  如果沒有則不符合
 *  3.找出不同字符的位子，若不同字符的位子不是2 就返回false因為換一次也不會滿足
 *  4.比較交換結果並回傳
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
  console.log(diff);

  // 如果不同字符的數量不是 2，返回 false
  if (diff.length !== 2) return false;

  // 檢查交換後是否相等
  let [i, j] = diff;
  return s[i] === goal[j] && s[j] === goal[i];
};
console.log(`output->buddyStrings('ab','ba')`, buddyStrings("ab", "ba"));
