/**
 * @param {number[]} nums
 * @return {number}
 * 2025/8/8 Math.pow(底數,次方) 算是極少用的api容易忘記
 * 掌握度80% 不難
 */
var findNumbers = function (nums) {
  const checkDigits = (num) => {
    for (let i = 1; i <= 6; i++) {
      if (num / Math.pow(10, i) < 1) {
        return i % 2 !== 1;
      }
    }
  };
  let count = 0;
  nums.forEach((item) => {
    if (checkDigits(item)) count++;
  });
  return count;
};
console.log(`output->findNumbers`, findNumbers([100000]));
