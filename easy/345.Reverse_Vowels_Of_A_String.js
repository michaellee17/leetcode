/**
 * @param {string} s
 * @return {string}
 * 2024/12/25 第一次看 掌握度80% map結合 344.Reverse_String.js的交換位置
 */
var reverseVowels = function (s) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let map = new Map();
  let sArr = s.split("");
  sArr.forEach((item, index) => {
    if (vowels.includes(item)) {
      map.set(index, item);
    }
  });
  let left = 0;
  let right = sArr.length - 1;
  while (left < right) {
    if (map.has(left) && map.has(right)) {
      [sArr[left], sArr[right]] = [sArr[right], sArr[left]];
      left++;
      right--;
    } else if (map.has(left)) {
      right--;
    } else {
      left++;
    }
  }
  return sArr.join("");
};
console.log(`output-`, reverseVowels("hello")); // "holle"
