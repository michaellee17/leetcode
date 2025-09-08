/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 * 2025/9/5 不難寫得出來 掌握度90%
 */
var getMinDistance = function (nums, target, start) {
  let min = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      let diff = Math.abs(i - start);
      if (diff < min) min = diff;
    }
  }
  return min;
};
console.log(`output->getMinDistance`, getMinDistance([1, 2, 3, 4, 5], 5, 3));
