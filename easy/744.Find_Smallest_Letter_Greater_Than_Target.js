/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 * 2025/6/19 第一次看 用charCodeAt來比大小 第一次有寫出來 但效能很差
 * JS英文字母可以不用轉換成charCodeAt 就可以比大小了
 * 2025/7/15 用二分搜尋法 掌握度90%
 */
// var nextGreatestLetter = function (letters, target) {
//   let charCode = target.charCodeAt();
//   console.log(`output->taget`, charCode);
//   //效能差就是差在這個map
//   let charCodes = letters.map((item) => item.charCodeAt());
//   console.log(`output->charCodes`, charCodes);
//   for (let i = 0; i < letters.length; i++) {
//     if (charCodes[i] > charCode) {
//       return letters[i];
//     }
//   }
//   return letters[0];
// };

var nextGreatestLetter = function (letters, target) {
  let left = 0;
  let right = letters.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (letters[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  // 如果找不到比 target 大的字母，返回第一個字母（因為是循環的）
  return letters[left % letters.length];
};

console.log(`output->`, nextGreatestLetter(["x", "x", "y", "y"], "z"));
