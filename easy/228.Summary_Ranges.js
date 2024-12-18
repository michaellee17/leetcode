/**
 * @param {number[]} nums
 * @return {string[]}
 * tag: Array
 * 2024/12/10 第一次看 掌握度70%
 * 2024/12/18 第二次看 掌握度90%
 * //不連續的時候才推進result
 */
var summaryRanges = function (nums) {
  let result = [];
  let start = 0;
  let end = 0;
  for (let i = 0; i < nums.length; i++) {
    // 如果下一個數字不等於當前數字+1，代表不連續
    if (nums[i] + 1 !== nums[i + 1]) {
      end = i;
      //一個數字
      if (start === end) {
        result.push(`${nums[start]}`);
      }
      //多個數字
      else {
        result.push(`${nums[start]}->${nums[end]}`);
      }
      //處理下一個數字時改變start的位置
      start = i + 1;
    }
  }
  return result;
};

console.log(
  `output-summaryRanges([0,1,2,4,5,7])`,
  summaryRanges2([0, 1, 2, 4, 5, 7])
);
