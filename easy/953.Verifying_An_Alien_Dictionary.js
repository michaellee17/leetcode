/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 * 2025/7/24 多層邏輯思考
 */
var isAlienSorted = function (words, order) {
  // 1. 建立字母順序對照表
  let orderMap = {};
  for (let i = 0; i < order.length; i++) {
    orderMap[order[i]] = i;
  }
  console.log(orderMap);

  // 2. 比較相鄰單字
  for (let i = 0; i < words.length - 1; i++) {
    let w1 = words[i];
    let w2 = words[i + 1];
    let foundDiff = false;
    for (let j = 0; j < Math.min(w1.length, w2.length); j++) {
      if (w1[j] !== w2[j]) {
        if (orderMap[w1[j]] > orderMap[w2[j]]) {
          return false;
        }
        foundDiff = true;
        break;
      }
    }
    // 3. 如果前面都一樣，但 w1 比 w2 長，則不合法
    if (!foundDiff && w1.length > w2.length) {
      return false;
    }
  }
  return true;
};
console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
