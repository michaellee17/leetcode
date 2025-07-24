/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 * 2025/6/23 掌握度70% 使用map去處理 map也有entries但跟Object的用法不同
 * 2025/7/24 replace搭配正則來處理標點符號 掌握度70%
 * map:for (let [word, count] of wordCount.entries()) {
    if (count > maxCount) {
      maxWord = word;
      maxCount = count;
    }
  }
    object: Object.entries(obj)
 */
var mostCommonWord = function (paragraph, banned) {
  // 將段落轉為小寫並去掉標點符號
  let words = paragraph
    .toLowerCase()
    .replace(/[^a-z]/g, " ") // 將非字母字符替換為空格
    .split(/\s+/); // 分割成單字陣列

  // 建立禁用單字集合
  let bannedSet = new Set(banned);

  // 統計單字出現次數
  let wordCount = new Map();
  for (let word of words) {
    if (!bannedSet.has(word) && word !== "") {
      wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }
  }

  // 找出出現次數最多的單字
  let maxWord = "";
  let maxCount = 0;
  for (let [word, count] of wordCount.entries()) {
    if (count > maxCount) {
      maxWord = word;
      maxCount = count;
    }
  }

  return maxWord;
};

console.log(
  `output->`,
  mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
    "hit",
  ])
);
