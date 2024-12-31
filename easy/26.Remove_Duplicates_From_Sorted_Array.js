/**
 * @param {number[]} nums
 * @return {number}
 * Tag: Array
 * 2024/11/13第一次做 掌握度80% 學到雙指針法
 * 2024/12/16第二次做 掌握度90% 雙指針法
 * 2024/12/31第三次做 掌握度100% 雙指針法單是先假設第一個 所以變成單指針
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  //從第二個開始跟第一個開始比較
  for (let j = 1; j < nums.length; j++) {
    //若第j個不等於第i個的話
    if (nums[j] !== nums[i]) {
      //i+1 並將j的值放到i+1的位置
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

console.log(`output->`, removeDuplicates([1, 1, 2]));
