/**
 * @param {string} s
 * @return {string}
 * 2025/9/25 map 操作展開後排序 掌握度80%
 */
var sortSentence = function (s) {
  let map = new Map();
  let arr = s.split(" ");
  arr.forEach((item) => {
    let word = item;
    let number = item.slice(-1);
    map.set(word, number);
  });
  let sortMap = [...map].sort((a, b) => a[1] - b[1]);
  let result = [];
  sortMap.forEach((item) => {
    let target = item[0];
    result.push(target.slice(0, target.length - 1));
  });
  return result.join(" ");
};
console.log(`output->`, sortSentence("is2 sentence4 This1 a3"));
