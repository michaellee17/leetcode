/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 * 2025/6/27 需要想一下 掌握度70%
 */
var findJudge = function (n, trust) {
  if (trust.length === 0 && n === 1) return 1; // 如果只有一個人且沒有信任關係，該人是法官

  let trustCount = new Array(n + 1).fill(0); // 信任了多少人
  let trustedByCount = new Array(n + 1).fill(0); // 被多少人信任

  for (let [a, b] of trust) {
    trustCount[a]++;
    trustedByCount[b]++;
  }

  for (let i = 1; i <= n; i++) {
    if (trustCount[i] === 0 && trustedByCount[i] === n - 1) {
      return i; // 找到城鎮法官
    }
  }

  return -1; // 如果沒有符合條件的法官，返回 -1
};
console.log(`output->findJudge()`, findJudge(2, [[1, 2]]));
