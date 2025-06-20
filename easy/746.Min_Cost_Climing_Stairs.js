/**
 * @param {number[]} cost
 * @return {number}
 * 2025/6/19 有點複雜 掌握度50%
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  let dp = new Array(n + 1).fill(0);

  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    console.log(`output->dp[i]`, dp[i]);
  }
  console.log(`output->dp`, dp);
  return dp[n];
};

console.log(minCostClimbingStairs([10, 15, 20])); // 輸出 15
