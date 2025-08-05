/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 * 2025/7/31 循環矩陣 第一次看寫得出來大概 但細節需要熟悉一下 掌握度70%
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  let length = distance.length;
  let clockwise = 0;
  let counterClockwise = 0;

  // 順時針：從 start 到 destination
  for (let i = start; i != destination; i = (i + 1) % length) {
    console.log(`output->i`, i);
    clockwise += distance[i];
  }

  // 逆時針：從 destination 到 start
  for (let i = destination; i != start; i = (i + 1) % length) {
    console.log(`output->i`, i);
    counterClockwise += distance[i];
  }

  return Math.min(counterClockwise, clockwise);
};
console.log(
  `output->distanceBetweenBusStops`,
  distanceBetweenBusStops([1, 2, 3, 4], 0, 1)
);
