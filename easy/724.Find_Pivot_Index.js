/**
 * @param {number[]} nums
 * @return {number}
 * 2025/6/19 用差值去算 掌握度70%
 * 2025/7/15 右邊和等於總和-左側和- 當前值 掌握度90%
 */
var pivotIndex = function (nums) {
  let totalSum = nums.reduce((acc, cur) => acc + cur, 0); // 總和
  let leftSum = 0; // 左側總和

  for (let i = 0; i < nums.length; i++) {
    // 右側總和 = 總和 - 左側總和 - 當前值
    let rightSum = totalSum - leftSum - nums[i];
    if (leftSum === rightSum) {
      return i; // 找到樞軸索引
    }
    leftSum += nums[i]; // 更新左側總和
  }

  return -1; // 如果沒有符合條件的索引
};

console.log(
  `output->pivotIndex([1,7,3,6,5,6])`,
  pivotIndex([1, 7, 3, 6, 5, 6])
);
