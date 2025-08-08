/**
 * @param {number[][]} moves
 * @return {string}
 * 2025/8/8 還可以理解 二微陣列有時候還是會卡卡的  掌握度70%
 */
var tictactoe = function (moves) {
  let board = Array(3)
    .fill()
    .map(() => Array(3).fill(""));
  //相當於 let board = [[' ',' ', ' '],[' ',' ', ' '],[' ',' ', ' ']]

  for (let i = 0; i < moves.length; i++) {
    let [row, col] = moves[i];
    board[row][col] = i % 2 === 0 ? "X" : "O";
  }

  function checkWin(player) {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === player &&
        board[i][1] === player &&
        board[i][2] === player
      )
        return true;
      if (
        board[0][i] === player &&
        board[1][i] === player &&
        board[2][i] === player
      )
        return true;
    }
    if (
      board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player
    )
      return true;
    if (
      board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player
    )
      return true;
    return false;
  }

  if (checkWin("X")) return "A";
  if (checkWin("O")) return "B";
  return moves.length === 9 ? "Draw" : "Pending";
};
console.log(
  `output->tictactoe()`,
  tictactoe([
    [0, 0],
    [2, 0],
    [1, 1],
    [2, 1],
    [2, 2],
  ])
);
