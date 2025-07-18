/**
 * @param {string[]} strs
 * @return {string}
 * Tag: String
 * 2024/11/14 第一次做 掌握度70% 多次刪除
 * 2024/12/16 第二次做 掌握度90 % 兩種解法 一是假設第一個字串整個字串為prefix用刪去的 二是一個一個字元比較用推的
 * 2024/12/31 第三次做 掌握度100% while substring indexOf
 * 2025/6/30 第四次做 掌握度100% 注意 strs[i].indexOf(prefix) !== 0 這邊是判斷前綴 當前綴時strs[i].indexOf(prefix)該等於0 反之則!==0
 * 2025/7/18 第五次做 掌握度100% 熟練度100%
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  //假設第一個字串為prefix
  let prefix = strs[0];
  //從第二個字串開始比較
  for (let i = 1; i < strs.length; i++) {
    //如果沒比到就砍掉最後一個字元
    while (strs[i].indexOf(prefix) !== 0) {
      //砍掉最後一個字元
      prefix = prefix.substring(0, prefix.length - 1);
      //若砍到長度變0就代表沒有共同字首 回傳空字串
      if (prefix.length === 0) return "";
    }
  }

  return prefix;
};

// var longestCommonPrefix2 = function (strs) {
//   if (strs.length === 0) return "";
//   if (strs.length === 1) return strs[0];

//   let commonPrefix = "";
//   for (let i = 0; i < strs[0].length; i++) {
//     //設定char為第一個字串的第i個
//     const char = strs[0][i];
//     console.log(`output->`, char);
//     for (let j = 1; j < strs.length; j++) {
//       //長度超過或是不等於char就回傳
//       if (i >= strs[j].length || strs[j][i] !== char) {
//         return commonPrefix;
//       }
//     }
//     commonPrefix += char;
//   }
//   return commonPrefix;
// };

console.log(
  `output->longestCommonPrefix(["flower", "flow", "flight"])`,
  longestCommonPrefix(["flower", "flow", "flight"])
);
