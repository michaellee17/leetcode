/**
 * @param {string} s
 * @return {boolean}
 * 2024/12/25 第一次看 掌握度90%
 * 2025/07/23 第二次看 掌握度100%
 */
var checkRecord = function (s) {
  // 計算字串中 'A' 的數量
  let aCount = 0;
  // 計算字串中 'L' 的連續出現次數
  let lCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") {
      aCount++;
      // 如果 'A' 的數量超過 1，則返回 false
      if (aCount > 1) return false;
    }
    if (s[i] === "L") {
      lCount++;
      // 如果 'L' 的連續出現次數超過 2，則返回 false
      if (lCount > 2) return false;
    } else {
      // 如果當前字符不是 'L'，則重置連續計數器
      lCount = 0;
    }
  }

  // 如果 'A' 的數量不超過 1 且 'L' 的連續出現次數不超過 2，則返回 true
  return true;
};

function checkRecord(s) {
  // 缺席次數
  if (s.split("A").length - 1 >= 2) return false;
  // 是否有連續三天遲到
  if (s.includes("LLL")) return false;
  return true;
}

var checkRecord = function (s) {
  let consecutiveLateCount = 0;
  let absentCount = 0;
  for (let item of s) {
    if (item === "A") {
      absentCount++;
      consecutiveLateCount = 0;
    }
    if (item === "L") {
      consecutiveLateCount++;
    }
    if (item === "P") {
      consecutiveLateCount = 0;
    }
    if (absentCount > 1 || consecutiveLateCount > 2) return false;
  }
  return true;
};
