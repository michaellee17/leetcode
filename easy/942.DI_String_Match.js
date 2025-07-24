/**
 * @param {string} s
 * @return {number[]}
 * 2025/6/26 一些邏輯判斷 掌握度80%
 * 2025/7/4 tips:I開頭先推最小 D開頭先推最 推完++ 然後 字串跟陣列還差一 最後還要補推 掌握度90%
 *
 */
var diStringMatch = function (s) {
  let low = 0;
  let high = s.length;
  let result = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      result.push(low);
      low++;
    } else {
      result.push(high);
      high--;
    }
  }

  // 最後剩下的唯一數字
  result.push(low); // 或 result.push(high)，此時 low === high

  return result;
};

console.log(`output->`, diStringMatch("IDID"));
