/**
 * @param {number[]} height
 * @return {number}
 * 2025/9/30 注意時間複雜度不能用雙迴圈 要用單迴圈來操作 掌握度70%
 */
var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    //面積等於高*寬
    let area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);
    // 移動較短的那一邊
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};
console.log(`output->maxArea()`, maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
