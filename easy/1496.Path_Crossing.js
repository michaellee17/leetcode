/**
 * @param {string} path
 * @return {boolean}
 * 2025/9/19 要記錄所有經過的點 用set操作 掌握度70%
 */
var isPathCrossing = function (path) {
  let visited = new Set();
  let x = 0,
    y = 0;
  visited.add(`${x},${y}`);

  for (let letter of path) {
    if (letter === "N") {
      y++;
    } else if (letter === "S") {
      y--;
    } else if (letter === "E") {
      x++;
    } else if (letter === "W") {
      x--;
    }

    let pointKey = `${x},${y}`;
    if (visited.has(pointKey)) {
      return true;
    }
    visited.add(pointKey);
  }
  return false;
};
console.log(`output->`, isPathCrossing("NES"));
