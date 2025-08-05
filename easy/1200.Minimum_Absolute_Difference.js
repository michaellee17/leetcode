/**
 * @param {number[]} arr
 * @return {number[][]}
 * 2025/8/5 寫得出來 但是要看console慢慢看 需要一點巧思 如果排序之後最小abs就會出現在相鄰的項目 掌握度90%
 */
var minimumAbsDifference = function (arr) {
  let result = [];
  let minAbs = Infinity;
  arr.sort((a, b) => a - b);
  let absArr = arr
    .map((item, index) => {
      let diff = Math.abs(item - arr[index + 1]) || Infinity;
      minAbs = Math.min(minAbs, diff);
      return diff;
    })
    .filter((item) => item !== Infinity);
  for (let i = 0; i < absArr.length; i++) {
    if (absArr[i] === minAbs) {
      result.push([arr[i], arr[i + 1]]);
    }
  }
  return result;
};
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);

  let minimumDiff = Infinity;
  for (i = 0; i < arr.length - 1; i++) {
    minimumDiff = Math.min(arr[i + 1] - arr[i], minimumDiff);
  }

  const result = [];
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] === minimumDiff) result.push([arr[i], arr[i + 1]]);
  }
  return result;
};
console.log(`output->minimumAbsDifference`, minimumAbsDifference([4, 2, 1, 3]));
