/**
 * @param {number[]} nums
 * Tag: Array
 * 2024/12/10 第一次看 掌握度80%
 */
var NumArray = function (nums) {
  let total = 0;
  this.sumsArr = new Array(nums.length).fill(null);
  for (let i = 0; i < nums.length; i++) {
    total = total + nums[i];
    this.sumsArr[i] = total;
  }
  return this;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  //為了獲取left之前的合
  const minSum = left > 0 ? this.sumsArr[left - 1] : 0;
  const maxSum = this.sumsArr[right];
  //差值
  return maxSum - minSum;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
let numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2));
console.log(numArray.sumRange(1, 2));
console.log(numArray.sumRange(2, 5));
