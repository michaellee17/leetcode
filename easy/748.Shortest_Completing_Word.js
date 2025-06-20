/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 * 2025/6/20 稍微複雜 掌握度70%
 */
var shortestCompletingWord = function (licensePlate, words) {
  // 過濾 licensePlate 中的字母，並記錄字母的出現次數
  let organizedString = licensePlate
    .toLowerCase()
    .split("")
    .filter((item) => item >= "a" && item <= "z");

  //統計每個小寫英文字出現的次數
  let charCount = {};
  for (let char of organizedString) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  console.log(`output->`, charCount);

  // 檢查單字是否是完成字
  const isCompletingWord = (word) => {
    let wordCount = {};
    for (let char of word) {
      wordCount[char] = (wordCount[char] || 0) + 1;
    }
    console.log(`output->wordCount`, wordCount);
    for (let char in charCount) {
      if (!wordCount[char] || wordCount[char] < charCount[char]) {
        return false;
      }
    }
    return true;
  };

  // 遍歷 words，找出最短的完成字
  let result = null;
  for (let word of words) {
    if (isCompletingWord(word)) {
      if (result === null || word.length < result.length) {
        result = word;
      }
    }
  }

  return result;
};
console.log(
  `output->`,
  shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"])
);
