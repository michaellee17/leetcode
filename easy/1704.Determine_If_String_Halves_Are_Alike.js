/**
 * @param {string} s
 * @return {boolean}
 * 2025/9/23 不難 array.includes 掌握度90%
 */
var halvesAreAlike = function (s) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let v1 = 0;
  let v2 = 0;
  for (let i = 0; i < s.length / 2; i++) {
    if (vowels.includes(s[i])) v1++;
    if (vowels.includes(s[i + s.length / 2])) v2++;
  }
  return v1 === v2;
};
console.log(`output->`, halvesAreAlike("book"));
