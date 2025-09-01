/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 * 2025/9/1 簡單易懂
 */
var arrayStringsAreEqual = function (word1, word2) {
  let string1 = "";
  let string2 = "";
  for (let item of word1) {
    string1 += item;
  }
  for (let item of word2) {
    string2 += item;
  }
  return string1 === string2;
};
console.log(`output->`, arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
