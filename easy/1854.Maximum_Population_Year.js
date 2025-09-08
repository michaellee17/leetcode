/**
 * @param {number[][]} logs
 * @return {number}
 * 2025/9/5 偏難 掌握度70%
 */
var maximumPopulation = function (logs) {
  let maxPop = 0;
  let maxYear = 1950;

  for (let year = 1950; year <= 2050; year++) {
    let currentPop = 0;
    for (let [birth, death] of logs) {
      if (birth <= year && year < death) {
        currentPop++;
      }
    }
    if (currentPop > maxPop) {
      maxPop = currentPop;
      maxYear = year;
    }
  }

  return maxYear;
};
console.log(
  `output->maximumPopulation`,
  maximumPopulation([
    [1993, 1999],
    [2000, 2010],
  ])
);
