/**
 * @param {string} s
 * @return {number}
 * 2025/9/25 set運用 掌握度80%
 * 1.set沒有sort方法 所以要使用[...set]轉陣列才能排序
 * 2.要early return set.size <=1 的 set
 */
var secondHighest = function (s) {
  let set = new Set();
  for (let item of s) {
    if (item >= 0 || item < 10) {
      set.add(parseInt(item));
    }
  }
  console.log(`output->...set`, ...set);
  if (set.size <= 1) return -1;
  return [...set].sort((a, b) => b - a)[1];
};
console.log(`output->`, secondHighest("dfa12321afd"));
