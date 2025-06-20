/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 * 2025/6/9 暫存 陣列轉字串 字串在轉回陣列
 */
var rotateString = function (s, goal) {
  let temp = s;
  for (let i = 0; i < s.length; i++) {
    let array = temp.split("");
    let shifted = array.shift();
    array.push(shifted);
    temp = array.join("");
    if (goal === temp) {
      return true;
    }
  }
  return false;
};
console.log(
  `output->rotateString('abcde','cdeab')`,
  rotateString("abcde", "cdeab")
);
