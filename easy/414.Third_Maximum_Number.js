/**
 * @param {number[]} nums
 * @return {number}
 * Tag: Array set
 * 2024/12/10 第一次看 掌握度100%
 * 2024/1219 第一次看  掌握度100%
 * sort((x, y) => x - y) 由小到大
 * sort((x, y) => y - x) 由大到小
 */
var thirdMax = function (nums) {
  let set = [...new Set(nums)];
  set.sort((a, b) => b - a);
  //會這樣做是因為 set並沒有sort方法 所以我們需要使用set去重複的特性 又要使用sort的方法 那就是利用
  //set可以迭代的特性 把它解構之後放進陣列
  console.log(`output->set`, set);
  //若沒有第三大的數字，則回傳最大的數字
  return set.length < 3 ? set[0] : set[2];
};
console.log(`output->thirdMax([3,2,1])`, thirdMax([3, 2, 1, 4, 5]));
