/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 * 2025/7/31 還可以理解 掌握度70%
 */
var countCharacters = function (words, chars) {
  // 统计 chars 中每个字符的频率
  let charCount = {};
  for (let char of chars) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let totalLength = 0;

  words.forEach((word) => {
    // 统计当前单词中每个字符的频率
    let wordCount = {};
    for (let char of word) {
      wordCount[char] = (wordCount[char] || 0) + 1;
    }

    // 检查当前单词是否可以由 chars 组成
    let canForm = true;
    for (let char in wordCount) {
      // 如果字符不存在于 chars 中，或者频率不够
      if (!charCount[char] || wordCount[char] > charCount[char]) {
        canForm = false;
        break;
      }
    }

    // 如果可以组成，累加单词长度
    if (canForm) {
      totalLength += word.length;
    }
  });

  return totalLength;
};
