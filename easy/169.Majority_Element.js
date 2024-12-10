/**
 * @param {number[]} nums
 * @return {number}
 * Tag: Array
 * 2024/11/14 第一次看 熟練度70%
 * 思路:majority element是指在一個數組中出現次數超過一半的元素 所以假設長度是n 那麼majority element的次數一定大於n/2
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
let res = majorityElement([3, 2, 3]);
let res2 = majorityElement([2, 2, 1, 1, 1, 2, 2]);

console.log(res);
console.log(res2);
