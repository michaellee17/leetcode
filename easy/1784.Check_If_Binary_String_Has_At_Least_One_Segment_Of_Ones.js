/**
 * @param {string} s
 * @return {boolean}
 * 2025/9/23 想不太道 掌握度70%
 */
var checkOnesSegment = function (s) {
  return !s.includes("01");
};
console.log(`output->`, checkOnesSegment("1001")); // false
console.log(`output->`, checkOnesSegment("110")); // true
console.log(`output->`, checkOnesSegment("1")); // true
