/**
 * @param {string[]} operations
 * @return {number}
 * 2025/6/10 第一次做 不難 forEach副作用操作加上reduce加總就很快 注意字串轉數字 parseInt
 * 2025/7/14 第二次看 條件判斷 掌握度90%
 * 如果reduce沒有給初始值的話
 * 若result為空陣列 則會報錯
 * 但如果是[1,2,3] 則不會報錯
 * 由[1]作為初始值
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
  });
};

console.log(`output->calPoints()`, calPoints(["5", "2", "C", "D", "+"]));
