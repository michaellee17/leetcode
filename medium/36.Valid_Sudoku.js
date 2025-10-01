/**
 * @param {character[][]} board
 * @return {boolean}
 * 2025/9/30 還是偏難陣列追蹤 掌握度50%
 */
var isValidSudoku = function (board) {
  // 使用三個 Set 陣列分別追蹤每行、每列、每個 3x3 方格
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const num = board[row][col];

      // 跳過空格
      if (num === ".") continue;

      // 計算屬於哪個 3x3 方格
      const blockIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      // 檢查是否重複
      if (
        rows[row].has(num) ||
        cols[col].has(num) ||
        boxes[blockIndex].has(num)
      ) {
        return false;
      }

      // 加入 Set
      rows[row].add(num);
      cols[col].add(num);
      boxes[blockIndex].add(num);
    }
  }

  return true;
};
console.log(
  `output->isValidSudoku()`,
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
