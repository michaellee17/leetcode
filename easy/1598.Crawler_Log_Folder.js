/**
 * @param {string[]} logs
 * @return {number}
 * 2025/8/26 寫得出來 不難 掌握度90%
 */
var minOperations = function (logs) {
  let depth = 0;
  for (const log of logs) {
    if (log === "../") {
      depth = Math.max(0, depth - 1);
    } else if (log !== "./") {
      depth++;
    }
  }
  return depth;
};
console.log(
  `output->minOperations`,
  minOperations(["d1/", "d2/", "../", "d21/", "./"])
);
