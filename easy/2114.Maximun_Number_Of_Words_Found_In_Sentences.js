/**
 * @param {string[]} sentences
 * @return {number}
 * 2025/5/19 面試live coding考題 掌握度90%
 * 2025/6/04 複習 掌握度100%
 * 最優解
 * 1.先個別取得每個句子的長度的陣列 => 用map操作
 * 2.解構之後在用math.max去取得最大值
 */
// var mostWordsFound = function(sentences) {
//     let longestSentence = 0
//     sentences.forEach((item) => {
//         let length = item.split(' ').length
//         if(length > longestSentence){
//             longestSentence = length
//         }
//     })
//     return longestSentence
// };

var mostWordsFound = function (sentences) {
  return Math.max(...sentences.map((sentence) => sentence.split(" ").length));
};
console.log(
  `output->mostWordsFound`,
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
