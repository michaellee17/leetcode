/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 * 2025/9/5 基本陣列字串語法 掌握度100%
 */
var truncateSentence = function (s, k) {
  let arr = s.split(" ");
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(arr[i]);
  }
  return result.join(" ");
};
console.log(
  `output->truncateSentence()`,
  truncateSentence("Hello how are you Contestant", 4)
);
