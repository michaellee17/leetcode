/**
 * @param {number[]} arr
 * @return {boolean}
 * 2025/8/12 第一次看掌握度80% 注意0
 */
var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j] * 2 && i != j) {
        return true;
      }
    }
  }
  return false;
};
console.log(`output->checkIfExist([10,2,5,3])`, checkIfExist([10, 2, 5, 3]));
