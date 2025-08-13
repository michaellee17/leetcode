/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 * 2025/8/13 只要比對陣列中所有值是否相等
 * 用排序後every可以 用obj map也可
 */
// function canBeEqual(target, arr) {
//   // sort 會直接修改原陣列
//   target.sort((a, b) => a - b);
//   arr.sort((a, b) => a - b);
//   return target.every((num, i) => num === arr[i]);
// }
function canBeEqual(target, arr) {
  let map = new Map();
  target.forEach((item) => {
    map.set(item, (map.get(item) || 0) + 1);
  });

  for (let item of arr) {
    if (map.get(item) >= 1) {
      map.set(item, map.get(item) - 1);
    } else if (!map.get(item) || map.get(item) <= 0) {
      return false;
    }
  }

  return true;
}
console.log(`output->canBeEqual`, canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]));
