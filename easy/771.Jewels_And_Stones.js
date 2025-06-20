/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 * 2025/6/20 這題不難 掌握度100%
 */
var numJewelsInStones = function (jewels, stones) {
  let jewelsArray = [];
  jewels.split("").forEach((jewel) => {
    if (!jewelsArray.includes(jewel)) {
      jewelsArray.push(jewel);
    }
  });
  // let count = 0;
  // stones.split("").forEach((item) => {
  //   if (jewelsArray.includes(item)) {
  //     count += 1;
  //   }
  // });
  //  return count;
  return stones.split("").reduce((acc, cur) => {
    if (jewelsArray.includes(cur)) acc += 1;
    return acc;
  }, 0);
};

console.log(`output->`, numJewelsInStones("aA", "aAAbbbb"));
