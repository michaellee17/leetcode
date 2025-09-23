/**
 * @param {string} s
 * @return {number}
 * 2025/9/23 雙迴全 Math運用 不難 掌握度80%
 */
var maxLengthBetweenEqualCharacters = function (s) {
  let maxDistance = -1;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        let distance = Math.abs(i - j) - 1;
        maxDistance = Math.max(maxDistance, distance);
      }
    }
  }
  return maxDistance > -1 ? maxDistance : -1;
};
console.log(`output->`, maxLengthBetweenEqualCharacters("aa"));
