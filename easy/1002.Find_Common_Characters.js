/**
 * @param {string[]} words
 * @return {string[]}
 * 2025/7/30 第一次看 掌握度70% 稍微複雜
 * 1.首次使用object的刪除方法 delete commonCounts[ch];
 * 2.雙迴圈用object的value值推入答案陣列
 * 3.高階函數array.every((word) => includes(char))
 */
// function commonChars(words) {
//   // 初始化 commonCounts 為第一個單字的頻率物件
//   const commonCounts = {};
//   for (const ch of words[0]) {
//     commonCounts[ch] = (commonCounts[ch] || 0) + 1;
//   }

//   // 對後續每一個字串更新 commonCounts（取最小次數）
//   for (let i = 1; i < words.length; i++) {
//     const w = words[i];
//     const cnt = {};
//     for (const ch of w) {
//       cnt[ch] = (cnt[ch] || 0) + 1;
//     }
//     // 只保留在 commonCounts 中出現的 key，並取 min 值
//     for (const ch in commonCounts) {
//       if (cnt[ch]) {
//         commonCounts[ch] = Math.min(commonCounts[ch], cnt[ch]);
//       } else {
//         delete commonCounts[ch];
//       }
//     }
//   }
//   console.log(`output->communCounts`, commonCounts);
//   // 根據最終 commonCounts 組建 answer
//   const res = [];
//   for (const ch in commonCounts) {
//     for (let k = 0; k < commonCounts[ch]; k++) {
//       res.push(ch);
//     }
//   }
//   return res;
// }
var commonChars = function (words) {
  let res = [];
  for (let char of words[0]) {
    if (words.every((word) => word.includes(char))) {
      res.push(char);
      words = words.map((word) => word.replace(char, ""));
    }
  }
  return res;
};
console.log(`output->commonChars`, commonChars(["bella", "label", "roller"]));
