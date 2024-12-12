/**
 * @param {number[]} nums
 * @return {number}
 * type: array
 * 2024/12/12 第一次看 掌握度70% map.has(num + 1)
 */
var findLHS = function (nums) {
  let map = new Map();
  let maxLength = 0;

  // 記錄每個數字出現的次數
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  console.log(`output->map`, map);
  // 遍歷哈希表，計算和諧子序列的長度
  for (let [num, count] of map) {
    console.log(`output->map.has(num + 1)`, map.has(num + 1));
    if (map.has(num + 1)) {
      // 如果存在 num + 1，則計算和諧子序列的長度
      maxLength = Math.max(maxLength, count + map.get(num + 1));
      console.log(`output->maxLength`, maxLength);
    }
  }

  return maxLength;
};

// 測試範例
console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7])); // 輸出: 5
