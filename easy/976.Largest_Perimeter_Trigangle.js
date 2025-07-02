/**
 * @param {number[]} nums
 * @return {number}
 * 2025/6/27 需要知道三角形成立要素 B+C > A (兩小邊之和大於第三大邊) 掌握度70%
 */
var largestPerimeter = function (nums) {
  nums.sort((a, b) => b - a); // 降序排列
  console.log(`output->nums`, nums);
  for (let i = 0; i < nums.length - 2; i++) {
    const [a, b, c] = [nums[i], nums[i + 1], nums[i + 2]];
    if (b + c > a) {
      return a + b + c; // 成立的最大周長
    }
  }

  return 0; // 都無法構成三角形
};
console.log(`output->`, largestPerimeter([1, 2, 1, 10]));
