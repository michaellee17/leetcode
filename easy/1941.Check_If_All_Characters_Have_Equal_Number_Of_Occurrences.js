/**
 * @param {string} s
 * @return {boolean}
 * 2025/9/25 不難 obj set 特性應用 掌握度90%
 */
var areOccurrencesEqual = function (s) {
  let arr = s.split("");
  let obj = {};
  arr.forEach((item) => {
    obj[item] = (obj[item] || 0) + 1;
  });
  let set = new Set();
  for (let [key, value] of Object.entries(obj)) {
    set.add(value);
  }
  return set.size === 1;
};
console.log(`output->`, areOccurrencesEqual("abacbc"));
