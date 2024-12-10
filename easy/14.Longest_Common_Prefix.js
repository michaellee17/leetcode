/**
 * @param {string[]} strs
 * @return {string}
 * Tag: String
 * 2024/11/14 第一次做 掌握度70% 多次刪除
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  //假設第一個字串為prefix
  let prefix = strs[0];
  //從第二個字串開始比較
  for (let i = 1; i < strs.length; i++) {
    //如果不是從頭開始的話就把prefix的最後一個字元拿掉
    while (strs[i].indexOf(prefix) !== 0) {
      //砍掉最後一個字元
      prefix = prefix.substring(0, prefix.length - 1);
      //若砍到長度變0就代表沒有共同字首 回傳空字串
      if (prefix.length === 0) return "";
    }
  }

  return prefix;
};
console.log(
  `output->longestCommonPrefix(["flower", "flow", "flight"])`,
  longestCommonPrefix(["flower", "flow", "flight"])
);
console.log(
  `output->longestCommonPrefix(["dog","racecar","car"])`,
  longestCommonPrefix(["dog", "racecardo", "cardo"])
);
