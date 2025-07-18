/**
 * @param {string[]} strs
 * @return {number}
 * 2025/6/26 蠻難的 掌握度50%
 * 2025/7/18 還是蠻男的 掌握度60%
 */
var minDeletionSize = function (strs) {
  let deletionCount = 0; // 記錄需要刪除的列數
  let stringLength = strs[0].length; // 每個字串的長度

  for (let col = 0; col < stringLength; col++) {
    for (let row = 1; row < strs.length; row++) {
      if (strs[row][col] < strs[row - 1][col]) {
        console.log(`output->strs[row][col]`, strs[row][col]);
        console.log(`output->strs[row - 1][col]`, strs[row - 1][col]);
        // 如果某列中的字母不是按字典順序排列，刪除該列
        deletionCount++;
        break;
      }
    }
  }

  return deletionCount;
};

console.log(`output->`, minDeletionSize(["cba", "daf", "ghi"]));
