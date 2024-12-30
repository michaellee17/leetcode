/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 * 2024/12/30 第一次看 掌握度60% 位運算
 * x ^ y 會得到不同的位元
 * ex: x = 1, y = 4 => x = 0001, y = 0100 => x ^ y = 0101
 * 0101 & 0001 = 0001 => count++
 * 0101 >> 1 = 0010
 */
var hammingDistance = function (x, y) {
  let xor = x ^ y;
  let count = 0;
  while (xor) {
    count += xor & 1;
    xor >>= 1;
  }
  return count;
};
console.log(`output->hammingDistance(1,4)`, hammingDistance(1, 4));
