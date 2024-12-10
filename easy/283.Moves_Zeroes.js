/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Tag: Array
 * 2024/12/10 第一次看 掌握度100%
 */

//第一種解法 先推上非0的數字，再推上0
var moveZeroes = function (nums) {
  let newArray = [];
  nums.map((num) => {
    if (num !== 0) {
      newArray.push(num);
    }
  });
  let zeroCount = nums.length - newArray.length;
  newArray.push(...Array(zeroCount).fill(0));
  for (let i = 0; i < nums.length; i++) {
    nums[i] = newArray[i];
  }
};

//第二種解法依序置換
var moveZeroes = function (nums) {
  let n = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[n] = nums[i];
      n++;
    }
  }

  for (let i = n; i < nums.length; i++) {
    nums[i] = 0;
  }
};
