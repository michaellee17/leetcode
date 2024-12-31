/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * Tag: Array
 * 2024/11/13 第一次看 掌握度90% 學到雙指針法
 * 2024/12/16 第二次看 掌握度100% 雙指針法 分段假設再驗證
 * 2024/12/31 第三次看 掌握度100%
 */

var removeElement = function (nums, val) {
  //先假定i為0
  let i = 0;
  //從第一個開始比較
  for (let j = 0; j < nums.length; j++) {
    //若第j個不等於val的話
    if (nums[j] !== val) {
      //把nums[j]放到nums[i]的位置(因為i是從0開始的所以就是往最前面移 移動完再i++ 就是下一個位子)
      nums[i] = nums[j];
      //i+1
      i++;
    }
  }
  console.log(`output->nums`, nums);
  //回傳換了幾次
  return i;
};

console.log(
  `output->removeElemet([3,2,2,3],3)`,
  removeElement([3, 2, 2, 3], 3)
);
