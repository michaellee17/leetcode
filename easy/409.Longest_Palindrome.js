/**
 * @param {string} s
 * @return {number}
 * 2024/12/26 第一次看 掌握度80% map
 * 2025/7/8 第二次看 用object也可以做 基數個只能用-1次 掌握度80
 * 2025/7/22 第三次看 掌握度90% 條件判斷要仔細分析
 */
// var longestPalindrome = function (s) {
//   let map = new Map();
//   for (let i = 0; i < s.length; i++) {
//     if (map.has(s[i])) {
//       map.set(s[i], map.get(s[i]) + 1);
//     } else {
//       map.set(s[i], 1);
//     }
//   }
//   let count = 0;
//   let odd = false;
//   for (let value of map.values()) {
//     if (value % 2 === 0) {
//       count += value;
//     } else {
//       count += value - 1;
//       odd = true;
//     }
//   }
//   return odd ? count + 1 : count;
// };
// var longestPalindrome = function (s) {
//   let freq = {}; // 用 object 儲存字元出現次數

//   // 統計每個字元的次數
//   for (let char of s) {
//     freq[char] = (freq[char] || 0) + 1;
//   }
//   console.log(`output->freq`, freq);
//   let count = 0;
//   let hasOdd = false;

//   for (let key in freq) {
//     if (freq[key] % 2 === 0) {
//       count += freq[key];
//     } else {
//       count += freq[key] - 1;
//       hasOdd = true;
//     }
//   }

//   return hasOdd ? count + 1 : count;
// };

var longestPalindrome = function (s) {
  let obj = {};
  for (let item of s) {
    obj[item] = (obj[item] || 0) + 1;
  }
  console.log(obj);
  let count = 0;
  let hasSingle = false;
  for (let [key, value] of Object.entries(obj)) {
    if (value % 2 === 0) {
      count += value;
    } else if (value >= 3 && value % 2 === 1) {
      count += value - 1;
      hasSingle = true;
    } else if (value === 1) {
      hasSingle = true;
    }
  }
  console.log(hasSingle);
  console.log(count);
  return hasSingle ? count + 1 : count;
};

console.log(`output->longestPalindrome`, longestPalindrome("abccccdd")); // 7
