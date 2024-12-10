/**
 * @param {number[]} nums
 * @return {number}
 * Tag: Array set
 * 2024/12/10 第一次看 掌握度100%
 */
var thirdMax = function (nums) {
  let set = [...new Set(nums)];
  set.sort((a, b) => b - a);
  console.log(`output->set`, set);
  //若沒有第三大的數字，則回傳最大的數字
  return set.length < 3 ? set[0] : set[2];
};
console.log(`output->thirdMax([3,2,1])`, thirdMax([3, 2, 1, 4]));
