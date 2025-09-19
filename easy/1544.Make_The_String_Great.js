/**
 * @param {string} s
 * @return {string}
 * 2025/9/19 題目蠻難看懂的 用stack處理 掌握度70%
 */
var makeGood = function (s) {
  const stack = [];

  for (let char of s) {
    if (
      stack.length > 0 &&
      stack[stack.length - 1].toLowerCase() === char.toLowerCase() &&
      stack[stack.length - 1] !== char
    ) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};
console.log(`output->`, makeGood("leEeetcode"));
