/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 * 2025/8/14 蠻難理解的掌握度50%
 */
var mostVisited = function (n, rounds) {
  const start = rounds[0];
  const end = rounds[rounds.length - 1];

  const result = [];

  if (start <= end) {
    // 正常情況：直接從 start 到 end
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
  } else {
    // 跨越情況：從 1 到 end，再從 start 到 n
    for (let i = 1; i <= end; i++) {
      result.push(i);
    }
    for (let i = start; i <= n; i++) {
      result.push(i);
    }
  }

  return result;
};
console.log(`output->mostVisited`, mostVisited(4, [1, 3, 1, 2]));
