/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 * 2025/6/20 這題不難 掌握度100%
 * 2025/7/24 物件陣列操作 掌握度90%
 */
// var numJewelsInStones = function (jewels, stones) {
//   let jewelsArray = [];
//   jewels.split("").forEach((jewel) => {
//     if (!jewelsArray.includes(jewel)) {
//       jewelsArray.push(jewel);
//     }
//   });
//   // let count = 0;
//   // stones.split("").forEach((item) => {
//   //   if (jewelsArray.includes(item)) {
//   //     count += 1;
//   //   }
//   // });
//   //  return count;
//   return stones.split("").reduce((acc, cur) => {
//     if (jewelsArray.includes(cur)) acc += 1;
//     return acc;
//   }, 0);
// };
var numJewelsInStones = function (jewels, stones) {
  let obj = {};
  let arr = stones.split("");
  arr.forEach((item) => {
    obj[item] = (obj[item] || 0) + 1;
  });
  let jArr = jewels.split("");
  let count = 0;
  for (let [key, value] of Object.entries(obj)) {
    if (jArr.includes(key)) {
      count += value;
    }
  }
  return count;
};
console.log(`output->`, numJewelsInStones("aA", "aAAbbbb"));
