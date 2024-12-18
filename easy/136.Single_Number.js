/**
 * @param {number[]} nums
 * @return {number}
 * Tag: Array
 * 2024/11/14 第一次看 掌握度100%
 * 2024/12/17 第二次看 掌握度100%
 * 解法1:
 * ^= 位元運算子
 * a ^ a = 0
 * 所以會去掉重複的數字
 * 解法2:
 * 使用map來記錄數字出現的次數
 * 若map裡面有則刪除，沒有則新增
 * 最後回傳map裡面的第一個元素
 */
var singleNumber = function (nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
};

var singleNumber2 = function (nums) {
  let map = new Map();
  if (nums.length === 1) return nums[0];
  for (let num of nums) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.delete(num);
    }
  }

  return [...map.keys()][0];
};

var singleNumber3 = function (nums) {
  let array = [];
  if (nums.length === 1) return nums[0];
  for (let num of nums) {
    if (array.includes(num)) {
      array.splice(array.indexOf(num), 1);
    } else {
      array.push(num);
    }
  }
  return array[0];
};

var singleNumber4 = function (nums) {
  nums.sort((a, b) => a - b);

  let i = 0;
  let count = 0;

  while (i < nums.length) {
    //若nums[i]等於nums[i+1] count+1 代表兩數相同
    if (nums[i] == nums[i + 1]) {
      count++;
    }
    //若nums[i]不等於nums[i+1] count小於1
    if (nums[i] !== nums[i + 1] && count < 1) {
      return nums[i];
      //若nums[i]不等於nums[i+1] count大於1
    } else {
      //跳過重複的數字 並且重置count
      i++;
      count = 0;
    }
    //下一圈
    i++;
  }
};

console.log(`output->singleNumber([2,2,1])`, singleNumber4([2, 2, 1]));
