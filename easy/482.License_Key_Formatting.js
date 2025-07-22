/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 * 2024/12/30 第一次看 掌握度70%
 * 2025/7/22 第二次看 掌握度80% 還是蠻複雜的
 * s.replaceAll("-", "") 這個方法可以移除所有破折號得到純數字，然後再轉換成大寫
 */
// var licenseKeyFormatting = function (s, k) {
//   // 移除破折號並轉換為大寫
//   s = s.replace(/-/g, "").toUpperCase();

//   // 計算第一組的長度
//   let firstGroupLength = s.length % k || k;

//   // 初始化結果數組
//   let result = [];

//   // 添加第一組
//   result.push(s.slice(0, firstGroupLength));

//   // 添加後續的每組
//   for (let i = firstGroupLength; i < s.length; i += k) {
//     result.push(s.slice(i, i + k));
//   }

//   // 返回重新格式化的字串
//   return result.join("-");
// };
// var licenseKeyFormatting = (s, k) => {
//   let result = [];
//   let arr = s.toUpperCase().split("-").join("").split("");

//   let firstGroupLength = arr.length % k;
//   if (firstGroupLength === 0 && arr.length !== 0) firstGroupLength = k;

//   let firstGroup = "";
//   for (let i = 0; i < firstGroupLength; i++) {
//     firstGroup += arr[i];
//   }
//   if (firstGroup) result.push(firstGroup);

//   // 從 firstGroupLength 開始，每 k 個分一組
//   for (let i = firstGroupLength; i < arr.length; i += k) {
//     let group = "";
//     for (let j = i; j < i + k && j < arr.length; j++) {
//       group += arr[j];
//     }
//     result.push(group);
//   }

//   return result.join("-");
// };
var licenseKeyFormatting = function (s, k) {
  let clean = s.replaceAll("-", "").toUpperCase();
  let start = clean.length % k;
  let res = "";
  res = clean.slice(0, start);
  console.log(start);
  for (let i = start; i <= clean.length; i = i + k) {
    if (i !== 0 && i !== clean.length) res += "-";
    res = res + clean.slice(i, i + k);
  }
  return res;
};

// 測試用例
console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4)); // 輸出: "5F3Z-2E9W"
// console.log(licenseKeyFormatting("2-5g-3-J", 2)); // 輸出: "2-5G-3J"
