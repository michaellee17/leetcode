/**
 * @param {string} s
 * @return {number}
 * 2025/9/23 簡單的條件判斷 掌握度90%
 */
var maxDepth = function (s) {
  let maxDepth = 0;
  let currentDepth = 0;
  for (let item of s) {
    if (item === "(") {
      currentDepth++;
      maxDepth = Math.max(maxDepth, currentDepth);
    } else if (item === ")") {
      currentDepth--;
    }
  }
  return maxDepth;
};
console.log(`output->maxDepth`, maxDepth("(1+(2*3)+((8)/4))+1"));
