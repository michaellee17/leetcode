/**
 * @param {number[]} nums
 * @return {number}
 * 2025/9/8 掌握度70% 多重回圈
 */
var countQuadruplets = function (nums) {
  let count = 0;
  let n = nums.length;

  for (let a = 0; a < n - 3; a++) {
    for (let b = a + 1; b < n - 2; b++) {
      for (let c = b + 1; c < n - 1; c++) {
        for (let d = c + 1; d < n; d++) {
          if (nums[a] + nums[b] + nums[c] === nums[d]) {
            count++;
          }
        }
      }
    }
  }

  return count;
};
console.log(`output->countQuadruplets`, countQuadruplets([1, 2, 3, 6]));
