/**
 * @param {string} word
 * @return {boolean}
 * 2025/5/21 第一次看 掌握度80% 這題是判斷字母的大小寫 最後一種用到slice()方法 slice(1) 代表從第二個字母開始到最後一個字母 陣列跟字串都有slice方法
 * 2025/07/23 第二次看 用另外的判斷方式 注意 97 <= arr[0] && arr[0] <= 122 才是正確的 不能寫成 97 <= arr[0] <= 122
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

var detectCapitalUse = function (word) {
  if (word.length === 1) return true;
  let arr = [];
  for (let i = 0; i < word.length; i++) {
    let code = word.charCodeAt(i);
    arr.push(code);
  }
  let containLittle = false;
  let containCapital = false;
  //開頭小寫
  if (97 <= arr[0] && arr[0] <= 122) {
    for (let i = 1; i < arr.length; i++) {
      if (65 <= arr[i] && arr[i] <= 90) {
        return false;
      }
    }
    //大寫開頭
  } else {
    for (let i = 1; i < arr.length; i++) {
      if (65 <= arr[i] && arr[i] <= 90) {
        containCapital = true;
      } else if (97 <= arr[i] && arr[i] <= 122) {
        containLittle = true;
      }
    }
  }
  if (containCapital && containLittle) return false; //大寫小寫都有
  return true;
};
console.log(`output->`, detectCapitalUse("USA")); // true
