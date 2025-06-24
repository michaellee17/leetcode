/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 * 2025/6/24  map方法操作
 */
var uncommonFromSentences = function (s1, s2) {
  const getMap = (string) => {
    const arr = string.split(" ");
    const map = new Map();
    arr.forEach((item) => {
      map.set(item, (map.get(item) || 0) + 1);
    });
    return map;
  };

  const s1Map = getMap(s1);
  const s2Map = getMap(s2);

  const result = [];

  // 檢查 s1 中只出現過一次，且 s2 不存在的字
  for (let [word, count] of s1Map.entries()) {
    if (count === 1 && !s2Map.has(word)) {
      result.push(word);
    }
  }

  // 檢查 s2 中只出現過一次，且 s1 不存在的字
  for (let [word, count] of s2Map.entries()) {
    if (count === 1 && !s1Map.has(word)) {
      result.push(word);
    }
  }

  return result;
};

console.log(
  `output->`,
  uncommonFromSentences("this apple is sweet", "this apple is sour")
);
