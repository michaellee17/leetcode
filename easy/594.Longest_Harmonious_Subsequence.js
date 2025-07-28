/**
 * @param {number[]} nums
 * @return {number}
 * type: array
 * 2024/12/12 第一次看 掌握度70% map.has(num + 1)
 * 2024/12/20 第二次看 掌握度80% 用map紀錄每個數字出現的次數 再用i i+1 算出最大的長度 並月Math.max取最大值取代
 * 2025/7/10 第三次看 掌握度80% 題意比較難理解
 * 2025/7/27 第四次看 掌握度 90% 比較看得懂題意了
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

var findLHS2 = function (nums) {
  let map = new Map();
  let maxLength = 0;

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  console.log(`output->map`, map);
  for (let [num, count] of map) {
    if (map.has(num + 1)) {
      //用兩者取最大值 來取代
      maxLength = Math.max(maxLength, count + map.get(num + 1));
      console.log(`output->maxLength`, maxLength);
    }
  }

  return maxLength;
};

// 測試範例
console.log(findLHS2([1, 3, 2, 2, 5, 2, 3, 7])); // 輸出: 5
