//2024/11/13第一次做 掌握度80% 學到雙指針法
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  //從第二個開始跟第一個開始比較
  for (let j = 1; j < nums.length; j++) {
    //若地j個不等於i個的話 i+1 並將j的值放到i+1的位置
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

console.log(`output->`, removeDuplicates([1, 1, 2]));
