/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 * 2025/6/24  map方法操作
 * 以這題的情況來說 key值是字串可以用map來寫會比較簡單
 */
// var uncommonFromSentences = function (s1, s2) {
//   const getMap = (string) => {
//     const arr = string.split(" ");
//     const map = new Map();
//     arr.forEach((item) => {
//       map.set(item, (map.get(item) || 0) + 1);
//     });
//     return map;
//   };

//   const s1Map = getMap(s1);
//   const s2Map = getMap(s2);

//   const result = [];

//   // 檢查 s1 中只出現過一次，且 s2 不存在的字
//   for (let [word, count] of s1Map.entries()) {
//     if (count === 1 && !s2Map.has(word)) {
//       result.push(word);
//     }
//   }

//   // 檢查 s2 中只出現過一次，且 s1 不存在的字
//   for (let [word, count] of s2Map.entries()) {
//     if (count === 1 && !s1Map.has(word)) {
//       result.push(word);
//     }
//   }

//   return result;
// };

var uncommonFromSentences = function (s1, s2) {
  const getObj = (string) => {
    const arr = string.split(" ");
    const obj = {};
    arr.forEach((item) => {
      obj[item] = (obj[item] || 0) + 1;
    });
    return obj;
  };
  objs1 = getObj(s1);
  objs2 = getObj(s2);

  const result = [];

  for (let word in objs1) {
    if (objs1[word] === 1 && !(word in objs2)) result.push(word);
  }

  for (let word in objs2) {
    if (objs2[word] === 1 && !(word in objs1)) result.push(word);
  }

  return result;
};

console.log(
  `output->`,
  uncommonFromSentences("this apple is sweet", "this apple is sour")
);
