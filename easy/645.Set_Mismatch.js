/**
 * @param {number[]} nums
 * @return {number[]}
 * 2025/6/5 等差數列和 理想合-(錯誤合-重複的) = 差值 掌握度80%
 * 2025/7/14 第二次看 注意型別轉換  物件取出的key值必為字串
 * 可以用parseInt()轉換
 * 或者Number()轉換
 * 2025/7/28 hash Table 邏輯推理 用obj可以 用set也可以(這邊只是要先找出重複的用set比較快) 掌握度90%
 */
var findErrorNums = function (nums) {
  let n = nums.length;
  let set = new Set();
  let duplicate = -1;
  let sum = 0;

  for (let num of nums) {
    if (set.has(num)) {
      duplicate = num; // 找到重複的數字
    }
    set.add(num);
    sum += num; // 計算陣列的總和
  }

  let expectedSum = (n * (n + 1)) / 2; // 理想集合的總和
  let missing = expectedSum - (sum - duplicate); // 找到遺失的數字 10-(9-2) =

  return [duplicate, missing];
};

console.log(findErrorNums([1, 2, 2, 4])); // 輸出 [2, 3]
