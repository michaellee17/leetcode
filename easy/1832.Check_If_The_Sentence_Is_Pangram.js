/**
 * @param {string} sentence
 * @return {boolean}
 * 2025/9/25 用set比較好 掌握度80%
 */
var checkIfPangram = function (sentence) {
  let letterSet = new Set();
  for (let char of sentence) {
    if (char >= "a" && char <= "z") {
      letterSet.add(char);
      if (letterSet.size === 26) return true;
    }
  }
  return letterSet.size === 26;
};
console.log(`output->`, checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
