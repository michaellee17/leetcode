/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 * 2025/08/13 題目比較難看懂 看懂後不難解 運用輔助函數 Math.abs即可
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  const checkValid = (item) => {
    for (let value of arr2) {
      diff = Math.abs(item - value);
      if (diff <= d) return false;
    }
    return true;
  };
  let count = 0;
  arr1.forEach((item) => {
    if (checkValid(item)) count++;
  });
  return count;
};
console.log(
  `output->findTheDistanceValue`,
  findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2)
);
