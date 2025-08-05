/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 * 2025/7/31 還可以理解 掌握度90%
 */
var countCharacters = function (words, chars) {
  //先取得chars中字母出現的次數
  let charsCount = {};
  for (let item of chars) {
    charsCount[item] = (charsCount[item] || 0) + 1;
  }
  let length = 0;
  words.forEach((item) => {
    //取得words中item出現的次數
    let wordCount = {};
    for (let word of item) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
    //比較是否可以滿足 設定變數來控制 必要時中斷迴圈(一個不滿足就是不能完成)
    let canComplete = true;
    for (let key in wordCount) {
      if (!charsCount[key] || wordCount[key] > charsCount[key]) {
        canComplete = false;
        break;
      }
    }
    //增加長度
    if (canComplete) {
      length += item.length;
    }
  });
  return length;
};
console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach"));
