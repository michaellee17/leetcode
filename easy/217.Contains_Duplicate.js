/**
 * @param {number[]} nums
 * @return {boolean}
 * Tag: Array
 * 2024/11/14 第一次看 熟練度80%
 * 2024/12/18 第二次看 熟練度100%
 * js new Set() 一個值的集合，其中的值是唯一的
 * set的長度和array的長度不同 set長度是size array長度是length
 * 2025/7/2 第三看 解得出來但是比較效能的話
 * 1比2快得多 因為她不用遍勵完整個nums 可以再比到相通元素時即時return
 * 2025/7/25 第四次看 用1快速簡單
 */
var containsDuplicate = function (nums) {
  let s = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (s.has(nums[i])) return true;
    s.add(nums[i]);
  }
  return false;
};

var containsDuplicate2 = function (nums) {
  return new Set(nums).size !== nums.length;
};

console.log(
  `output->containsDuplicate([1,2,3,1])`,
  containsDuplicate2([1, 2, 3, 1])
);
