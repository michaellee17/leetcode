/**
 * @param {string} coordinates
 * @return {boolean}
 * 2025/9/25 條件判斷和 string.charCodeAt(0)判斷字母 掌握度90%
 */
var squareIsWhite = function (coordinates) {
  let x = coordinates.split("")[0];
  let y = coordinates.split("")[1];
  if (x.charCodeAt(0) % 2 === 1) {
    if (y % 2 === 1) {
      return false;
    } else {
      return true;
    }
  } else {
    if (y % 2 === 1) {
      return true;
    } else {
      return false;
    }
  }
};
console.log(`output->`, squareIsWhite("a1"));
