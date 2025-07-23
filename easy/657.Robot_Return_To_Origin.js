/**
 * @param {string} moves
 * @return {boolean}
 * 2025/6/5 第一次看 switch case 掌握度100%
 * 2025/7/23 第二次看 掌握度100%
 */
var judgeCircle = function (moves) {
  let obj = { x: 0, y: 0 };
  let steps = moves.split("");
  steps.forEach((item) => {
    switch (item) {
      case "U":
        obj.y += 1;
        break;
      case "D":
        obj.y -= 1;
        break;
      case "L":
        obj.x -= 1;
        break;
      case "R":
        obj.x += 1;
        break;
    }
  });

  return obj.x === 0 && obj.y === 0;
};
console.log(judgeCircle("UD"));
