/**
 * @param {number[]} arr
 * @return {number}
 * 2025/8/13 掌握度90% 
 * 時間複雜度
 *  從快到慢：
      1. O(1) - 常數時間 陣列取值 arr[0]
      2. O(log n) - 對數時間  二分搜尋(binarySearch)    
      3. O(n) - 線性時間 遍歷陣列
      4. O(n log n) - 線性對數時間 歸併排序
      5. O(n²) - 平方時間 雙層迴圈
 */
var findLucky = function (arr) {
  let map = new Map();
  arr.forEach((item) => {
    map.set(item, (map.get(item) || 0) + 1);
  });
  let result = [];
  for (let [key, value] of map) {
    if (key === value) {
      result.push(value);
    }
  }
  if (result.length === 0) return -1;
  if (result.length === 1) return result[0];
  result.sort((a, b) => b - a);
  return result[0];
};
console.log(`output->findLucky`, findLucky([2, 2, 3, 4]));
