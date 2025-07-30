/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 * 2025/6/20 稍微複雜 掌握度70%
 * 2025/7/24 逐漸理解這題 掌握度80%
 * 拆分成四個部分來處理
 * 1.處理字串 轉小寫 只留az 運用filter之中的比較(unicode的比較 a為97 z為122)
 * 2.紀錄licensePlate中英文字出現的數量
 * 3.建立判斷是否可以完成的子function 包含紀錄word中字母數量和比較是否可完成
 * 4.words跑迴圈去判斷能否完成 在比較可完成且長度較短去篩選出最短的可完成單字並回傳
 * 本題在easy之中相對困難 需反覆觀看
 * 2025/7/29 掌握度90%
 * 注意 if (isCompletingWord(item)) {
      if (result === "" || result.length > item.length) {} 有時候會卡住
 */
// var shortestCompletingWord = function (licensePlate, words) {
//   // 過濾 licensePlate 中的字母，並記錄字母的出現次數
//   let organizedString = licensePlate
//     .toLowerCase()
//     .split("")
//     .filter((item) => item >= "a" && item <= "z");
//   console.log(organizedString);
//   //統計每個小寫英文字出現的次數
//   let charCount = {};
//   for (let char of organizedString) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }

//   // 檢查單字是否是完成字
//   const isCompletingWord = (word) => {
//     let wordCount = {};
//     for (let char of word) {
//       wordCount[char] = (wordCount[char] || 0) + 1;
//     }
//     for (let char in charCount) {
//       if (!wordCount[char] || wordCount[char] < charCount[char]) {
//         return false;
//       }
//     }
//     return true;
//   };

//   //遍歷 words，找出最短的完成字
//   let result = null;
//   for (let word of words) {
//     if (isCompletingWord(word)) {
//       if (result === null || word.length < result.length) {
//         result = word;
//       }
//     }
//   }

//   return result;
// };
var shortestCompletingWord = function (licensePlate, words) {
  let filtered = licensePlate
    .toLowerCase()
    .split("")
    .filter((item) => item >= "a" && item <= "z");
  let charCount = {};
  filtered.forEach((item) => {
    charCount[item] = (charCount[item] || 0) + 1;
  });
  const isCompletingWord = (word) => {
    let wordCount = {};
    for (let item of word) {
      wordCount[item] = (wordCount[item] || 0) + 1;
    }
    for (let char in charCount) {
      if (!wordCount[char] || charCount[char] > wordCount[char]) {
        return false;
      }
    }
    return true;
  };
  let result = "";
  words.forEach((item) => {
    if (isCompletingWord(item)) {
      if (result === "" || result.length > item.length) {
        result = item;
      }
    }
  });
  return result;
};

console.log(
  `output->`,
  shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"])
);
