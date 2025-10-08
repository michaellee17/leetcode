/**
 * @param {number[]} nums
 * @return {number[][]}
 * 2025/10/3 遞迴類似上題 加上排序跟 跳過重複的 掌握度60%
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);
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
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
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
console.log(`output->permuteUnique`, permuteUnique);
