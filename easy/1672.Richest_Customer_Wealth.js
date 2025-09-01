/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let arr = accounts.map((item) => getSum(item));
  return Math.max(...arr);
};
var getSum = (arr) => {
  return arr.reduce((acc, cur) => acc + cur, 0);
};
console.log(
  `output->`,
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
