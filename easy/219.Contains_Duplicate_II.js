/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * Tag: Array
 *  2024/11/13 第一次看 掌握度60% 學到map基本使用 但邏輯上還需要再理解
 *  2024/12/18 第二次看 掌握度80%
 * new Map()  一個鍵值對的集合，其中的鍵和值都可以是任意值
 *  ex:  const myMap = new Map([
 *    [1, "one"],
 *    [2, "two"],
 *    [3, "three"],
 *  ]);
 * map.set() 設置鍵值對
 * ex: myMap.set(4, "four");
 * map.has() 判斷是否有該鍵值
 * ex: myMap.has(1);  true
 * map.get() 取得鍵值對
 * ex: myMap.get(1);  "one"
 * 先判斷符合條件跳出迴圈 若不符合再set進map
 * 2025/7/02 第三次看 掌握度90% 用object跟用map都是可以解的
 * 運用到key不重複的特性符合去找最近距離這個需求
 */

var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    //判斷是否有在map裡面
    //且以下面條件為例子 i=3  nums[3]=1  map.get(1)=0  3-0=3<= k=3
    // i = 題目上的i map.get(nums[i]) = 題目上的j
    if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
      return true;
    }
    //沒有符合條件的話就set進map
    map.set(nums[i], i);
    console.log(`output->map`, map);
  }

  return false;
};

console.log(`output->`, containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
