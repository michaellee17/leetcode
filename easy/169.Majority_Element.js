/**
 * @param {number[]} nums
 * @return {number}
 * Tag: Array
 * 2024/11/14 第一次看 熟練度70%
 * 2024/12/18 第二次看 熟練度90%
 * 思路:majority element是指在一個數組中出現次數超過一半的元素 所以假設長度是n 那麼majority element的次數一定大於n/2
 * 可以用抵銷的方式來解決這個問題
 * 假設1跟2都出現一次那等於沒出現因為他們互相抵銷
 * 或者更簡單用map紀錄每個數字出現的次數
 *
 */
var majorityElement = function (nums) {
  //先假定第一個數字是majority
  let candidate = nums[0];
  //次數為1
  let count = 1;
  //從第二個數字開始遍歷
  for (let i = 1; i < nums.length; i++) {
    //如果遇到相同的candidate 就count++
    if (nums[i] === candidate) {
      count++;
    } else {
      count--;
      //換新的majority 只要跑完迴圈++--還是majority那代表他的count >=1 所以 出現次數超過一半
      if (count === 0) {
        candidate = nums[i];
        count = 1;
      }
    }
  }
  return candidate;
};
var majorityElement2 = function (nums) {
  let map = new Map();
  for (let item of nums) {
    // if (map.has(item)) {
    //   map.set(item, map.get(item) + 1);
    // } else {
    //   map.set(item, 1);
    // }
    map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1);
  }
  let max = 0;
  let res;
  for (let [key, value] of map) {
    if (value > max) {
      max = value;
      res = key;
    }
  }
  return res;
};
var majorityElement3 = function (nums) {
  let currentHighest = 0;
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (counter == 0) {
      currentHighest = nums[i];
    }
    if (currentHighest == nums[i]) {
      counter++;
    } else {
      counter--;
    }
  }

  return currentHighest;
};
let res = majorityElement2([3, 2, 3]);
let res2 = majorityElement([2, 2, 1, 1, 1, 2, 2]);

console.log(res);
// console.log(res2);
