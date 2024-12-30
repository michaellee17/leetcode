/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 * 2024/12/30 第一次看 掌握度70%
 */
var licenseKeyFormatting = function (s, k) {
  // 移除破折號並轉換為大寫
  s = s.replace(/-/g, "").toUpperCase();

  // 計算第一組的長度
  let firstGroupLength = s.length % k || k;

  // 初始化結果數組
  let result = [];

  // 添加第一組
  result.push(s.slice(0, firstGroupLength));

  // 添加後續的每組
  for (let i = firstGroupLength; i < s.length; i += k) {
    result.push(s.slice(i, i + k));
  }

  // 返回重新格式化的字串
  return result.join("-");
};

// 測試用例
console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4)); // 輸出: "5F3Z-2E9W"
console.log(licenseKeyFormatting("2-5g-3-J", 2)); // 輸出: "2-5G-3J"
