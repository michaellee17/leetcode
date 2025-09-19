/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 * 2025/9/19 簡單條件判斷 注意要+1索引非0開始 掌握度100%
 */
var isPrefixOfWord = function (sentence, searchWord) {
  let arr = sentence.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(searchWord) === 0) {
      return i + 1;
    }
  }
  return -1;
};
console.log(
  `output-isPrefixOfWord()`,
  isPrefixOfWord("i love eating burger", "burg")
);
