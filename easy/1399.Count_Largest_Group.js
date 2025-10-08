/**
 * @param {number} n
 * @return {number}
 * 2025/9/26 題目難讀懂 偏南 掌握度60%
 */
var countLargestGroup = function (n) {
  const groups = {};

  for (let i = 1; i <= n; i++) {
    let digitSum = 0;
    let num = i;

    while (num > 0) {
      digitSum += num % 10;
      num = Math.floor(num / 10);
    }

    groups[digitSum] = (groups[digitSum] || 0) + 1;
  }

  const maxSize = Math.max(...Object.values(groups));
  return Object.values(groups).filter((size) => size === maxSize).length;
};
console.log(`output->`, countLargestGroup(13));
