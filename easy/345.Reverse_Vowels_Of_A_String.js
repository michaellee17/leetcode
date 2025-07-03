/**
 * @param {string} s
 * @return {string}
 * 2024/12/25 第一次看 掌握度80% map結合 344.Reverse_String.js的交換位置
 * 2025/7/3 第二次看 掌握度90% PUSH POP運用
 * 注意字串不能s[i] = xxx 來改變字元
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

var reverseVowels = function (s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const chars = s.split("");
  const temp = [];

  for (let ch of chars) {
    if (vowels.includes(ch)) temp.push(ch);
  }

  for (let i = 0; i < chars.length; i++) {
    if (vowels.includes(chars[i])) {
      chars[i] = temp.pop();
    }
  }

  return chars.join("");
};
console.log(`output-`, reverseVowels("hello")); // "holle"
