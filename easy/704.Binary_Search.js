/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * 2025/7/14 第一次看 用array.indexOf()可以解 或者是binarySearch 掌握度90%
 * 總結binarySearch的寫法
 * 1. 先定義left和right
 * 2. 計算middle 公式:Math.floor((left + right) / 2)
 * 3. 如果nums[middle]==target 則返回middle
 * 4. 如果nums[middle]>target 則right=middle-1
 * 5. 如果nums[middle]<target 則left=middle+1
 * 6. 如果left>right 則返回-1
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (right >= left) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] == target) {
      return middle;
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
