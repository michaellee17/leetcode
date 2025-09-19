/**
 * @param {string} s
 * @return {string}
 * 2025/9/18 操作偏複雜 掌握度70%
 */
var reformat = function (s) {
  const letters = [];
  const digits = [];

  for (let char of s) {
    if (char >= "a" && char <= "z") {
      letters.push(char);
    } else {
      digits.push(char);
    }
  }

  if (Math.abs(letters.length - digits.length) > 1) {
    return "";
  }

  const first = letters.length > digits.length ? letters : digits;
  const second = letters.length > digits.length ? digits : letters;

  let result = "";
  for (let i = 0; i < Math.max(first.length, second.length); i++) {
    if (i < first.length) {
      result += first[i];
    }
    if (i < second.length) {
      result += second[i];
    }
  }

  return result;
};
console.log(`output->reformat('a0b1c2')`, reformat("a0b1c2"));
