/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 * 2025/9/23 不難 先取共有長度 在除離剩下的 掌握度90%
 */
var mergeAlternately = function (word1, word2) {
  let commonLength = Math.min(word1.length, word2.length);
  let result = "";
  for (let i = 0; i < commonLength; i++) {
    result += word1[i] + word2[i];
  }
  if (word1.length > word2.length) {
    for (let i = commonLength; i < word1.length; i++) {
      result += word1[i];
    }
  }
  if (word1.length < word2.length) {
    for (let i = commonLength; i < word2.length; i++) {
      result += word2[i];
    }
  }
  return result;
};
console.log(`output->`, mergeAlternately("abc", "pqr"));
