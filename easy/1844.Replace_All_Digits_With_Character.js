/**
 * @param {string} s
 * @return {string}
 * 2025/9/25 記得字串+數字會變成字串 所以要先parseInt 掌握度80%
 */
var replaceDigits = function (s) {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      arr.push(s[i]);
    } else {
      let diff = s[i];
      let before = s[i - 1];
      let targetIndex = letters.indexOf(before);
      let result = letters[targetIndex + parseInt(diff)];
      arr.push(result);
    }
  }
  return arr.join("");
};
console.log(`output->`, replaceDigits("a1c1e1"));
