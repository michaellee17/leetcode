/**
 * @param {string} num
 * @return {string}
 * 2025/9/25 由右往左掃描 需要想一下 掌握度70%
 */
var largestOddNumber = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (parseInt(num[i]) % 2 === 1) {
      return num.substring(0, i + 1);
    }
  }
  return "";
};
console.log(`output->`, largestOddNumber());
