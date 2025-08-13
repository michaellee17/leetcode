/**
 * @param {string[]} words
 * @return {string[]}
 * 2025/8/13 用雙迴圈可以解 注意不要推重複的(1) 或要去重複(2) 掌握度90%
 */
var stringMatching = function (words) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (
        i !== j &&
        words[j].indexOf(words[i]) !== -1 &&
        !result.includes(words[i])
      ) {
        result.push(words[i]);
      }
    }
  }
  return result;
};
var stringMatching = function (words) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && words[j].indexOf(words[i]) !== -1) {
        result.push(words[i]);
      }
    }
  }
  return [...new Set(result)];
};
console.log(
  `output->stringMatching`,
  stringMatching(["mass", "as", "hero", "superhero"])
);
