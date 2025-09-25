/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 * 2025/9/25 slice revervse運動 掌握度90%
 */
var reversePrefix = function (word, ch) {
  let index = word.indexOf(ch);
  let reverse = word
    .slice(0, index + 1)
    .split("")
    .reverse()
    .join("");
  let remain = word.slice(index + 1);
  console.log(`output->remain`, remain);
  return reverse + remain;
};
console.log(`output->`, reversePrefix("abcdefd", "d"));
