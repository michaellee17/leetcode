/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 2025/9/30 遞迴掌握度40%
 */
var combinationSum = function (candidates, target) {
  const result = [];

  function backtrack(startIndex, target, path) {
    // 找到答案
    if (target === 0) {
      result.push([...path]); // 複製一份加入結果
      return;
    }

    // 超過目標，這條路不通
    if (target < 0) {
      return;
    }

    // 從 startIndex 開始遍歷（避免重複組合）
    for (let i = startIndex; i < candidates.length; i++) {
      path.push(candidates[i]); // 選擇
      backtrack(i, target - candidates[i], path); // 遞歸（注意是 i 不是 i+1，因為可以重複用）
      path.pop(); // 撤銷選擇
    }
  }

  backtrack(0, target, []);
  return result;
};
console.log(`output->`, combinationSum([2, 3, 6, 7], 7));
