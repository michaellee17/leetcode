/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 2025/10/2 這題類似39 加上去重複的問題 掌握度70%
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
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
      if (i > startIndex && candidates[i] === candidates[i - 1]) continue;

      if (candidates[i] > target) break;
      path.push(candidates[i]); // 選擇
      backtrack(i + 1, target - candidates[i], path);
      path.pop(); // 撤銷選擇
    }
  }

  backtrack(0, target, []);
  return result;
};
console.log(`output->`, combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
