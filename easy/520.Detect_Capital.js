/**
 * @param {string} word
 * @return {boolean}
 * 2025/5/21 第一次看 掌握度80% 這題是判斷字母的大小寫 最後一種用到slice()方法 slice(1) 代表從第二個字母開始到最後一個字母 陣列跟字串都有slice方法
 */
function detectCapitalUse(word) {
  console.log(`output->word.slice(1)`, word.slice(1));
  return (
    ///全大寫
    word === word.toUpperCase() ||
    //全小寫
    word === word.toLowerCase() ||
    //首字母大寫 其他小寫
    (word[0] === word[0].toUpperCase() &&
      word.slice(1) === word.slice(1).toLowerCase())
  );
}
console.log(`output->`, detectCapitalUse("USA")); // true
