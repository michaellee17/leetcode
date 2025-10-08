/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 * 2025/9/25 類似1399 偏難掌握度60%
 */
var countBalls = function (lowLimit, highLimit) {
  const boxes = {};

  for (let i = lowLimit; i <= highLimit; i++) {
    let digitSum = 0;
    let num = i;

    while (num > 0) {
      digitSum += num % 10;
      num = Math.floor(num / 10);
    }

    boxes[digitSum] = (boxes[digitSum] || 0) + 1;
  }

  return Math.max(...Object.values(boxes));
};
console.log(`output->countBalls(1,10)`, countBalls(1, 10));
