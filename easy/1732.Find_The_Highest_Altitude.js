/**
 * @param {number[]} gain
 * @return {number}
 * 2025/9/4 寫得出來 不難 掌握90%
 */
var largestAltitude = function (gain) {
  let highest = 0;
  let current = 0;
  gain.forEach((item) => {
    current += item;
    if (current > highest) highest = current;
  });
  return highest;
};
console.log(`output->largestAltitude`, largestAltitude([-5, 1, 5, 0, -7]));
