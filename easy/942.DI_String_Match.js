/**
 * @param {string} s
 * @return {number[]}
 * 2025/6/26 一些邏輯判斷 掌握度80%
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
