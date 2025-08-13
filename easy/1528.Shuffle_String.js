/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 * 2025/8/13 來源跟目標要確認清楚 掌握度80%
 */
var restoreString = function (s, indices) {
  let arr = new Array(s.length);

  for (let i = 0; i < s.length; i++) {
    arr[indices[i]] = s[i]; // 把 s[i] 放到 indices[i] 的位置
  }

  return arr.join("");
};
console.log(
  `output->restoreString`,
  restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])
);
