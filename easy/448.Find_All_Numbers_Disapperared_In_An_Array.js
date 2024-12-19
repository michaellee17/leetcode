/**
 * @param {number[]} nums
 * @return {number[]}
 * Tag: Array
 * 2024/12/10 第一次看 掌握度100% set set.has
 * 2024/12/19 第二次看 掌握度100%
 */
var findDisappearedNumbers = function (nums) {
  let result = [];
  let set = new Set(nums);
  console.log(`output->set`, set);
  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      result.push(i);
    }
  }
  return result;
};

var findDisappearedNumbers2 = function (nums) {
  let n = nums.length;
  let result = [];

  // 將數組中的每個數字標記為負數，表示該數字已出現
  for (let i = 0; i < n; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }
  // 找出未標記為負數的位置，這些位置的索引 + 1 就是缺失的數字
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      console.log(`output->i`, i);
      result.push(i + 1);
    }
  }

  return result;
};

console.log(`output->`, findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
