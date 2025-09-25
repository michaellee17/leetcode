/**
 * @param {string} s
 * @return {string}
 * 2025/9/25 條件判斷 掌握度80%
 */
var makeFancyString = function (s) {
  let result = [];

  for (let char of s) {
    let len = result.length;
    if (len >= 2 && result[len - 1] === char && result[len - 2] === char) {
      continue;
    }
    result.push(char);
  }

  return result.join("");
};
console.log(`output->makeFancyString('')`, makeFancyString("leeetcode"));
