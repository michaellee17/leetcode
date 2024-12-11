/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 *
 * Tag: Array
 * 2024/12/11 第一次看 掌握度100%
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let total = 0;
  if (timeSeries.length === 0) return total;
  if (timeSeries.length === 1) return duration;
  for (let i = 0; i < timeSeries.length - 1; i++) {
    if (timeSeries[i + 1] - timeSeries[i] >= duration) {
      total += duration;
    } else {
      total += timeSeries[i + 1] - timeSeries[i];
    }
  }

  return total + duration;
};

console.log(`output->`, findPoisonedDuration([1, 4], 2));
