/**
 * @param {number[]} stones
 * @return {number}
 * 2025/7/30 掌握度80% const x = array.shift() 在比大小
 */
var lastStoneWeight = function (stones) {
  if (stones.length === 0) return 0;
  while (stones.length > 1) {
    stones.sort((a, b) => b - a); // 從大到小排序
    const y = stones.shift(); // 最大
    const x = stones.shift(); // 次大
    if (y > x) {
      stones.push(y - x);
    }
  }
  return stones.length === 1 ? stones[0] : 0;
};

console.log(`output->lastStoneWeight()`, lastStoneWeight([2, 7, 4, 1, 8, 1]));
