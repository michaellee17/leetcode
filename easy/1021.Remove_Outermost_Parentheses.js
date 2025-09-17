/**
 * @param {string} s
 * @return {string}
 * 2025/9/9 還可以理解 題意比較難看懂 掌握度70%
 */
var removeOuterParentheses = function (s) {
  let result = "";
  let depth = 0;

  for (let char of s) {
    if (char === "(") {
      if (depth > 0) {
        result += char;
      }
      depth++;
    } else {
      //char === ')'
      depth--;
      if (depth > 0) {
        result += char;
      }
    }
  }

  return result;
};
console.log(
  `output->removeOuterParentheses`,
  removeOuterParentheses("(()())(())")
);
