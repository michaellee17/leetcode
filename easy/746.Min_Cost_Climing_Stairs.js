/**
 * @param {number[]} cost
 * @return {number}
 * 2025/6/19 有點複雜 掌握度50%
 * 2025/7/15 有點複雜 掌握度70% 最後一個元素不是結束 還要再往上一層
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  let dp = new Array(n + 1).fill(0);

  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  console.log(`output->dp`, dp);
  return dp[n];
};

//2 2 2 2 2 2 1
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 輸出 15
