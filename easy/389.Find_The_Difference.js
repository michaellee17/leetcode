/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 * 2024/12/26 第一次看 掌握度90% Map操作
 * 2025/7/25 第二次看  用object可以解 掌握度90%
 */
// var findTheDifference = function (s, t) {
//   let map = new Map();

//   // 計數字串 t 中的每個字元
//   for (let item of t) {
//     if (map.has(item)) {
//       map.set(item, map.get(item) + 1);
//     } else {
//       map.set(item, 1);
//     }
//   }

//   // 減去字串 s 中的每個字元的計數
//   for (let item of s) {
//     if (map.has(item)) {
//       map.set(item, map.get(item) - 1);
//     }
//   }
//   console.log(`output->map`, map);
//   // 找到計數不為 0 的字元
//   for (let [key, value] of map) {
//     if (value > 0) {
//       return key;
//     }
//   }
// };

//string.charCodeAt()方法返回一個整數，表示給定索引處的UTF-16馬元，介於0-65535
//大寫A是65 大寫Z是90 小寫a是97 小寫z是122
//String.fromCharCode 靜態方法返回由指定UTF-16馬元所創驗的字符串
//Stirng.fromCharCode(65) = A
var findTheDifference = function (s, t) {
  let sum = 0;
  let tsum = 0;
  for (let i = 0; i < s.length; i++) {
    sum += s.charCodeAt(i);
    tsum += t.charCodeAt(i);
  }
  console.log(`output->sum`, sum);
  tsum += t.charCodeAt(t.length - 1);
  console.log(`output->tsum`, tsum);
  return String.fromCharCode(tsum - sum);
};

var findTheDifference = function (s, t) {
  let obj = {};
  for (let item of t) {
    obj[item] = (obj[item] || 0) + 1;
  }
  for (let item of s) {
    if (obj[item]) {
      obj[item]--;
    }
  }
  for (let key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
};

console.log(`output-findTheDifference`, findTheDifference("abcd", "abcde")); // e
