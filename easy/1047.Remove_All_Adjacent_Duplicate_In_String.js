/**
 * @param {string} s
 * @return {string}
 * 2025/9/9 可以理解但自己想不出來 掌握度70%
 */
var removeDuplicates = function (s) {
  let stack = [];

  for (let char of s) {
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};
console.log(`output->removeDuplicates('abbaca')`, removeDuplicates("abbaca"));
