/**
 * @param {string[]} operations
 * @return {number}
 * 2025/6/10 第一次做 不難 forEach副作用操作加上reduce加總就很快 注意字串轉數字 parseInt
 */
var calPoints = function (operations) {
  let result = [];
  operations.forEach((item) => {
    if (item === "+") {
      result.push(result[result.length - 1] + result[result.length - 2]);
    } else if (item === "D") {
      result.push(result[result.length - 1] * 2);
    } else if (item === "C") {
      result.pop();
    } else {
      result.push(parseInt(item));
    }
  });

  return result.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
};

console.log(`output->calPoints()`, calPoints(["5", "2", "C", "D", "+"]));
