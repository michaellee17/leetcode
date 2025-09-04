/**
 * @param {number[]} nums
 * @return {number}
 * 2025/9/4 寫得出來 不難 掌握90%
 */
var sumOfUnique = function (nums) {
  let map = new Map();
  nums.forEach((item) => {
    map.set(item, (map.get(item) || 0) + 1);
  });
  let sum = 0;
  for (let [key, value] of map) {
    if (value === 1) sum += key;
  }
  return sum;
};
console.log(`output->sumOfUnique`, sumOfUnique([1, 2, 3, 2]));
