/**
 * @param {number} n
 * @return {number}
 * tag: Dynamic Programming
 * 2024/12/04 第一次看 掌握度90% 學到new Array同Array 的用法 少用但是要知道 正常都是直接給值
 * 2024/12/16 第二次看 掌握度100% 用一個陣列來存放前面的值 後面才方便調用
 * 2025/1/2 第三次看 掌握度100% 用dp來存放前面的值
 * 2025/7/1 第四次看 掌握度100% 邏輯推算
 */
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let dp = new Array(n);

  //等於 [undefined, undefined, undefined]
  dp[0] = 1;
  dp[1] = 2;

  for (let i = 2; i < n; i++) {
    //dp[3] = dp[2] + dp[1] 前兩階相加為當前階的值
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  console.log(`output->dp`, dp);
  return dp[n];
};

console.log(climbStairs(5));
