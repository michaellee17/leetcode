/**
 * @param {string[]} words
 * @return {string[]}
 * Tag: Array, String
 * 2024/12/11 第一次看 掌握度90% Set觀念
 */
var findWords = function (words) {
  const row1 = new Set("qwertyuiopQWERTYUIOP");
  const row2 = new Set("asdfghjklASDFGHJKL");
  const row3 = new Set("zxcvbnmZXCVBNM");

  const result = [];

  for (const word of words) {
    if (
      canBeTypedWithOneRow(word, row1) ||
      canBeTypedWithOneRow(word, row2) ||
      canBeTypedWithOneRow(word, row3)
    ) {
      result.push(word);
    }
  }

  return result;
};

function canBeTypedWithOneRow(word, row) {
  for (const char of word) {
    if (!row.has(char)) {
      return false;
    }
  }
  return true;
}
