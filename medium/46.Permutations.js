/**
 * @param {number[]} nums
 * @return {number[][]}
 * 2025/10/2 遞迴蠻難理解的掌握度40%
 */
var permute = function (nums) {
  const result = [];
  const used = new Array(nums.length).fill(false);

  function backtrack(path) {
    // 找到一個完整排列
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    // 嘗試每個數字
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue; // 跳過已使用的

      // 選擇
      path.push(nums[i]);
      used[i] = true;

      // 遞迴
      backtrack(path);

      // 撤銷選擇
      path.pop();
      used[i] = false;
    }
  }

  backtrack([]);
  return result;
};
console.log(`output->`, permute([1, 2, 3]));
