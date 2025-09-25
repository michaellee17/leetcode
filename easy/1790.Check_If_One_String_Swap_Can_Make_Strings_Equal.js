/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * 2025/9/23 可以理解掌握度80%
 */
var areAlmostEqual = function (s1, s2) {
  let diff = [];

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      diff.push(i);
    }
  }

  if (diff.length === 0) return true;
  if (diff.length === 2) {
    return s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]];
  }

  return false;
};
console.log(`output->`, areAlmostEqual("bank", "kanb")); // true
console.log(`output->`, areAlmostEqual("attack", "defend")); // false
console.log(`output->`, areAlmostEqual("kelb", "kelb")); // true
