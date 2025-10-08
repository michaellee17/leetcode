/**
 * @param {number[]} nums
 * @return {number}
 * 2025/10/2 條件判斷 掌握度70%
 */
var jump = function (nums) {
  let jumps = 0;
  let currentEnd = 0; // 當前跳躍的邊界
  let maxReach = 0; // 目前能到達的最遠位置

  for (let i = 0; i < nums.length - 1; i++) {
    maxReach = Math.max(maxReach, i + nums[i]);
    console.log(`output->nums[i]`, nums[i]);
    console.log(`output->maxReach`, maxReach);
    if (i === currentEnd) {
      // 到達當前跳躍邊界
      jumps++;
      currentEnd = maxReach; // 更新下一跳的邊界
    }
  }

  return jumps;
};
console.log(`output->jump([2,3,1,1,4])`, jump([2, 3, 1, 1, 4]));
