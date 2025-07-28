/**
 * @param {number[]} nums
 * @return {number[]}
 * Tag: Array
 * 2024/12/10 第一次看 掌握度100% set set.has
 * 2024/12/19 第二次看 掌握度90%
 * 2025/7/28  第三次看 掌握度90% 邏輯推理
 * 1.方法1不用set會錯(執行時間過長)
 * 2.方法2比較抽象 為原位標記法 但是要注意虛假想一個[1,2,3.....]的陣列
 */
// var findDisappearedNumbers = function (nums) {
//   let result = [];
//   let set = new Set(nums);
//   console.log(`output->set`, set);
//   for (let i = 1; i <= nums.length; i++) {
//     if (!set.has(i)) {
//       result.push(i);
//     }
//   }
//   return result;
// };

var findDisappearedNumbers = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i]); //取絕對值是因為 會改變原始陣列 會讓值變成負的 不能操作
    let idx = num - 1; //數字範圍是1開始 但是陣列索引0開始
    nums[idx] = Math.abs(nums[idx]) * -1; //標記為負號 代表幾號位出現過 ex:nums[i] === 4 則將三號的數字轉成負數
    // 因為假設做一個1-n的排序 4是出現在三號位
    // 標記三號位為負代表4出現過
    console.log(`output->nums`, nums);
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) res.push(i + 1); //陣列索引轉回實際數字要+1
  }
  return res;
  // Time Complexity: O(N)
  // Space Complexity: O(1)
};

console.log(`output->`, findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
