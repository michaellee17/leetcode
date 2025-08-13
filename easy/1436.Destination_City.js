/**
 * @param {string[][]} paths
 * @return {string}
 * 2025/8/13 偏簡單 掌握度100%
 */
var destCity = function (paths) {
  let startArr = [];
  let endArr = [];
  paths.forEach((item) => {
    startArr.push(item[0]);
    endArr.push(item[1]);
  });
  for (let item of endArr) {
    if (!startArr.includes(item)) return item;
  }
};
console.log(
  `output->destCity`,
  destCity([
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"],
  ])
);
