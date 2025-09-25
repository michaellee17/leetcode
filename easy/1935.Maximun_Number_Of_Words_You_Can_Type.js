/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 * 2025/9/25 變量設置 不難 掌握度90%
 */
var canBeTypedWords = function (text, brokenLetters) {
  let count = 0;
  let arr = text.split(" ");
  arr.forEach((item) => {
    let isAvalibale = true;
    for (let letter of item) {
      if (brokenLetters.includes(letter)) {
        isAvalibale = false;
      }
    }
    if (isAvalibale === true) count++;
  });
  return count;
};
console.log(`output->canBeTypedWords`, canBeTypedWords("hello world", "ad"));
